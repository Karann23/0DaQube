import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { SynapticParticleCanvas } from "./SynapticParticleCanvas";

/**
 * SynapticHero with Single 3D Cursor-Tracking Robot
 * - EXACTLY ONE ROBOT positioned in the background coming from the top of the website
 * - Mainframe.co style neck & head kinematics: pivots at the neck base, bending,
 *   stretching and turning in 3D perspective to track the cursor wherever it moves
 * - Cross-browser & mobile: iOS, Safari, Chrome, Firefox, Edge, Android touch & orientation
 */
export function SynapticHero() {
  const containerRef = useRef(null);
  const robotRef = useRef(null);

  // Physics state for smooth 60/120fps interpolated neck motion
  const kinematics = useRef({
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

    const updateKinematics = (time) => {
      const k = kinematics.current;

      // When idle, inject a subtle, organic breathing & micro-glance cycle
      const idleTime = time - k.lastInteractionTime;
      let idleX = 0;
      let idleY = 0;

      if (!k.isInteracting || idleTime > 1200) {
        // Natural human/robot resting glance and breathing rhythm
        idleX = Math.sin(time * 0.0011) * 0.16 + Math.sin(time * 0.0022) * 0.06;
        idleY = Math.cos(time * 0.0014) * 0.1;
      }

      const targetX = k.isInteracting ? k.targetX : idleX;
      const targetY = k.isInteracting ? k.targetY : idleY;

      // Spring-like lerp easing (0.08 produces lifelike neck flexibility without lag)
      k.currentX += (targetX - k.currentX) * 0.08;
      k.currentY += (targetY - k.currentY) * 0.08;

      const x = k.currentX; // normalized -1 to +1
      const y = k.currentY;

      // Mainframe.co style neck & head kinematics calculations:
      // 1. Neck Tilt & Bend: The neck leans sideways toward cursor
      const neckTiltAngle = x * 15;        // up to 15 deg lateral neck bend
      // 2. 3D Face Turn: The head turns around vertical Y-axis to look at cursor
      const faceTurnY = x * 22;            // up to 22 deg 3D face turn
      // 3. 3D Nod / Lift: Chin lifts when cursor is up, drops when cursor is down
      const nodX = -y * 14;                // up to 14 deg looking up/down
      // 4. Subtle Neck Stretch / Compression:
      const stretchY = -y * 10;            // stretches up when looking high
      const shiftX = x * 18;               // natural neck lateral shift
      // 5. Organic Neck Skew: Mimics muscle/cervical flex
      const neckSkew = x * 3;

      if (robotRef.current) {
        const transform = `perspective(1100px) translate3d(${shiftX}px, ${stretchY}px, 0) rotate(${neckTiltAngle}deg) rotateY(${faceTurnY}deg) rotateX(${nodX}deg) skewX(${neckSkew}deg)`;
        robotRef.current.style.transform = transform;
        robotRef.current.style.webkitTransform = transform;
      }

      animationFrameId = requestAnimationFrame(updateKinematics);
    };

    animationFrameId = requestAnimationFrame(updateKinematics);

    // Mouse Tracking: Calculate angle & distance from the robot's neck base to cursor
    const handleMouseMove = (e) => {
      const k = kinematics.current;
      k.isInteracting = true;
      k.lastInteractionTime = performance.now();

      // Find the screen position of the robot's neck center
      let neckScreenX = window.innerWidth * 0.5;
      let neckScreenY = window.innerHeight * 0.38;

      if (robotRef.current) {
        const rect = robotRef.current.getBoundingClientRect();
        neckScreenX = rect.left + rect.width * 0.51;
        neckScreenY = rect.top + rect.height * 0.58;
      }

      const dx = (e.clientX - neckScreenX) / (window.innerWidth * 0.5);
      const dy = (e.clientY - neckScreenY) / (window.innerHeight * 0.5);

      k.targetX = Math.max(-1.25, Math.min(1.25, dx));
      k.targetY = Math.max(-1.25, Math.min(1.25, dy));
    };

    const handleMouseLeave = () => {
      kinematics.current.isInteracting = false;
      kinematics.current.targetX = 0;
      kinematics.current.targetY = 0;
    };

    // Mobile Touch Tracking (iOS, Safari, Android)
    const handleTouchMove = (e) => {
      if (!e.touches || e.touches.length === 0) return;
      const touch = e.touches[0];
      const k = kinematics.current;
      k.isInteracting = true;
      k.lastInteractionTime = performance.now();

      let neckScreenX = window.innerWidth * 0.5;
      let neckScreenY = window.innerHeight * 0.38;

      if (robotRef.current) {
        const rect = robotRef.current.getBoundingClientRect();
        neckScreenX = rect.left + rect.width * 0.51;
        neckScreenY = rect.top + rect.height * 0.58;
      }

      const dx = (touch.clientX - neckScreenX) / (window.innerWidth * 0.5);
      const dy = (touch.clientY - neckScreenY) / (window.innerHeight * 0.5);

      k.targetX = Math.max(-1.25, Math.min(1.25, dx));
      k.targetY = Math.max(-1.25, Math.min(1.25, dy));
    };

    const handleTouchEnd = () => {
      kinematics.current.isInteracting = false;
      kinematics.current.targetX = 0;
      kinematics.current.targetY = 0;
    };

    // Gyroscope / DeviceOrientation tilt support for mobile
    const handleOrientation = (e) => {
      if (e.gamma === null || e.beta === null) return;
      const k = kinematics.current;
      const tiltX = Math.max(-1.1, Math.min(1.1, e.gamma / 32));
      const tiltY = Math.max(-1.1, Math.min(1.1, (e.beta - 35) / 32));

      k.targetX = tiltX;
      k.targetY = tiltY;
      k.isInteracting = true;
      k.lastInteractionTime = performance.now();
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
      {/* Layer 1: Ambient Clean Tech Background (Grid + Glow + Particles, NO duplicate robot!) */}
      <div className="hero-top-full-bleed-bg" aria-hidden="true">
        <div className="hero-ambient-curves" />
        <div className="hero-grid" />
        <div className="hero-ambient-glow" />
        <SynapticParticleCanvas />
      </div>

      {/* Layer 2: The ONLY Robot in the background coming from the top of the website */}
      <div className="hero-single-robot-backdrop-layer" aria-hidden="true">
        <div className="hero-single-robot-stage">
          <div
            ref={robotRef}
            className={`hero-robot-neck-rig ${hasLoaded ? "hero-robot-ready" : ""}`}
          >
            {/* The single authentic robot avatar */}
            <img
              src="/images/robot-hero-cutout.png"
              alt="Autonomous Intelligent Perception Robot"
              className="hero-single-robot-image"
              loading="eager"
              decoding="async"
            />
            {/* Glowing cervical neck servos */}
            <div className="hero-robot-neck-glow" />
          </div>

          {/* Floating Capsule Caption */}
          <div className="hero-floating-caption">
            AUTONOMOUS PERCEPTION <span>&rarr;</span> MODEL INTELLIGENCE
          </div>
        </div>
      </div>

      {/* Layer 3: Central Text Content Layer (Overlaid clearly in front of the background robot) */}
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
