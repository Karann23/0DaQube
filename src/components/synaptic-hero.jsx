import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { SynapticParticleCanvas } from "./SynapticParticleCanvas";

/**
 * SynapticHero with Interactive 3D Cursor-Tracking Robot
 * - Extends to the very top edge of the website behind the frosted glass navigation bar
 * - 3D head/body tracking follows cursor movements across all browsers
 * - Full cross-browser support: Chrome, Firefox, Edge, Safari (macOS & iOS), Mobile Android
 * - Touch & gyroscope (device orientation) tilt tracking for mobile devices
 * - Ambient lifelike idle breathing cycle when mouse/touch is idle
 */
export function SynapticHero() {
  const containerRef = useRef(null);
  const robotRef = useRef(null);
  const bgRef = useRef(null);

  // Targets and current interpolated physics values
  const coords = useRef({
    targetX: 0,
    targetY: 0,
    currentX: 0,
    currentY: 0,
    isInteracting: false,
    lastInteractionTime: 0,
  });

  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setHasLoaded(true);
    let animationFrameId;

    // Smooth physics loop (lerp damping for 60/120fps fluid motion)
    const updatePhysics = (time) => {
      const c = coords.current;

      // If idle for more than 1.5s, add a gentle ambient breathing & glancing motion
      const idleTime = time - c.lastInteractionTime;
      let idleOffsetX = 0;
      let idleOffsetY = 0;

      if (!c.isInteracting || idleTime > 1500) {
        // Natural lifelike sinusoidal breathing and micro glances
        idleOffsetX = Math.sin(time * 0.0012) * 0.18 + Math.sin(time * 0.0023) * 0.08;
        idleOffsetY = Math.cos(time * 0.0016) * 0.12;
      }

      // Smooth interpolation toward target
      const effectiveTargetX = c.isInteracting ? c.targetX : idleOffsetX;
      const effectiveTargetY = c.isInteracting ? c.targetY : idleOffsetY;

      // Smooth lerp easing factor (0.075 provides buttery-smooth weight without lag)
      c.currentX += (effectiveTargetX - c.currentX) * 0.075;
      c.currentY += (effectiveTargetY - c.currentY) * 0.075;

      const x = c.currentX; // range approx -1 to 1
      const y = c.currentY;

      // 3D rotations for the robot (looking right when cursor is right, left when cursor is left)
      const rotateY = x * 18;          // degrees around vertical axis
      const rotateX = -y * 12;         // degrees around horizontal axis
      const rotateZ = x * 2.5;         // subtle organic head roll
      const translateX = x * 22;       // px horizontal parallax
      const translateY = y * 14;       // px vertical parallax

      if (robotRef.current) {
        const transformString = `perspective(1000px) translate3d(${translateX}px, ${translateY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
        robotRef.current.style.transform = transformString;
        robotRef.current.style.webkitTransform = transformString;
      }

      // Ambient background subtle inverse parallax
      if (bgRef.current) {
        const bgTransform = `translate3d(${x * -12}px, ${y * -8}px, 0) scale(1.04)`;
        bgRef.current.style.transform = bgTransform;
        bgRef.current.style.webkitTransform = bgTransform;
      }

      animationFrameId = requestAnimationFrame(updatePhysics);
    };

    animationFrameId = requestAnimationFrame(updatePhysics);

    // Mouse Tracking across entire window
    const handleMouseMove = (e) => {
      const c = coords.current;
      c.isInteracting = true;
      c.lastInteractionTime = performance.now();

      // Normalize coordinates -1 (far left / top) to +1 (far right / bottom)
      const normX = (e.clientX / window.innerWidth - 0.5) * 2;
      const normY = (e.clientY / window.innerHeight - 0.5) * 2;

      c.targetX = Math.max(-1.2, Math.min(1.2, normX));
      c.targetY = Math.max(-1.2, Math.min(1.2, normY));
    };

    const handleMouseLeave = () => {
      coords.current.isInteracting = false;
      coords.current.targetX = 0;
      coords.current.targetY = 0;
    };

    // Touch Tracking for iOS / Safari / Mobile
    const handleTouchMove = (e) => {
      if (!e.touches || e.touches.length === 0) return;
      const touch = e.touches[0];
      const c = coords.current;
      c.isInteracting = true;
      c.lastInteractionTime = performance.now();

      const normX = (touch.clientX / window.innerWidth - 0.5) * 2;
      const normY = (touch.clientY / window.innerHeight - 0.5) * 2;
      c.targetX = Math.max(-1.2, Math.min(1.2, normX));
      c.targetY = Math.max(-1.2, Math.min(1.2, normY));
    };

    const handleTouchEnd = () => {
      coords.current.isInteracting = false;
      coords.current.targetX = 0;
      coords.current.targetY = 0;
    };

    // Gyroscope / Device Orientation for Mobile tilt
    const handleOrientation = (e) => {
      if (e.gamma === null || e.beta === null) return;
      const c = coords.current;
      // Gamma: left to right (-45 to 45 deg)
      // Beta: front to back tilt (-30 to 60 deg)
      const tiltX = Math.max(-1, Math.min(1, e.gamma / 35));
      const tiltY = Math.max(-1, Math.min(1, (e.beta - 35) / 35));

      c.targetX = tiltX;
      c.targetY = tiltY;
      c.isInteracting = true;
      c.lastInteractionTime = performance.now();
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", handleOrientation, { passive: true });
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      if (window.DeviceOrientationEvent) {
        window.removeEventListener("deviceorientation", handleOrientation);
      }
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="hero synaptic-dark-hero synaptic-robot-hero"
      aria-label="DaQube Human-Centered AI Data Hero"
    >
      {/* Background Layer extending behind the top navigation bar */}
      <div className="hero-top-full-bleed-bg" aria-hidden="true">
        {/* Soft Ambient Scene Graphic & Grid */}
        <div ref={bgRef} className="hero-robot-scene-bg" />
        <div className="hero-grid" />
        <div className="hero-ambient-glow" />
        <SynapticParticleCanvas />
      </div>

      {/* Layer 2: Interactive 3D Cursor-Tracking Robot (Extends from top of the website) */}
      <div className="hero-robot-overlap-layer" aria-hidden="true">
        <div className="hero-robot-3d-stage">
          <div
            ref={robotRef}
            className={`hero-robot-avatar-wrapper ${hasLoaded ? "hero-robot-loaded" : ""}`}
          >
            {/* The transparent cutout robot image */}
            <img
              src="/images/robot-hero-cutout.png"
              alt="Autonomous Intelligent Perception Robot"
              className="hero-robot-image"
              loading="eager"
              decoding="async"
            />
            {/* Ambient Eye and Core Glow Highlight */}
            <div className="hero-robot-core-glow" />
          </div>

          {/* Floating Capsule Caption */}
          <div className="hero-floating-caption">
            AUTONOMOUS PERCEPTION <span>&rarr;</span> MODEL INTELLIGENCE
          </div>
        </div>
      </div>

      {/* Layer 1: Central Text Content Layer */}
      <div className="container hero-content-layer">
        <div className="hero-text-box">
          {/* Kicker */}
          <div className="hero-kicker">
            HUMAN-CENTERED AI DATA
          </div>

          {/* Headline */}
          <h1 className="hero-headline">
            The data behind <span className="text-crimson">intelligence.</span>
          </h1>

          {/* Lead Copy */}
          <p className="hero-lead">
            High-quality human-generated data and expert workflows for teams building, training and evaluating AI.
          </p>

          {/* CTAs */}
          <div className="hero-actions">
            <Link className="button button-crimson" to="/contact">
              Discuss your project <ArrowUpRight size={17} />
            </Link>
            <a className="text-link text-link-silver" href="#services-section">
              Explore our services <ArrowRight size={17} />
            </a>
          </div>

          {/* Proof Points */}
          <div className="hero-proof">
            <span>
              <Check size={15} /> Project-specific workflows
            </span>
            <span>
              <Check size={15} /> Human-led quality review
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Status Banner */}
      <div className="container hero-bottom-bar">
        <span>BUILT AROUND YOUR MODEL'S NEEDS</span>
        <div className="hero-bottom-line" />
        <span>SCOPED. REVIEWED. READY.</span>
        <ArrowDownRight size={18} />
      </div>
    </section>
  );
}

export default SynapticHero;
