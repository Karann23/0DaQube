import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { SynapticParticleCanvas } from "./SynapticParticleCanvas";

/**
 * SynapticHero with Centered Mainframe.co Style Neck & Head Kinematics
 * - EXACTLY ONE ROBOT positioned dead-center in the background extending from the top edge
 * - Responsive Mainframe.co style kinematics:
 *     Moving cursor right -> head & neck moves and leans right, looks right in 3D
 *     Moving cursor left  -> head & neck moves and leans left, looks left in 3D
 *     Moving cursor up    -> neck extends and chin lifts up
 *     Moving cursor down  -> neck compresses and head dips down
 * - Smooth 60/120fps spring lerp interpolation with natural inertia
 * - Full cross-browser & mobile support (iOS Safari, Android touch & device orientation)
 */
export function SynapticHero() {
  const containerRef = useRef(null);
  const robotRef = useRef(null);
  const bgRef = useRef(null);

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

      // Natural idle breathing & micro-glance cycle when user stops moving cursor
      const idleTime = time - k.lastInteractionTime;
      let idleX = 0;
      let idleY = 0;

      if (!k.isInteracting || idleTime > 1200) {
        idleX = Math.sin(time * 0.0013) * 0.18 + Math.sin(time * 0.0026) * 0.06;
        idleY = Math.cos(time * 0.0016) * 0.12;
      }

      const targetX = k.isInteracting ? k.targetX : idleX;
      const targetY = k.isInteracting ? k.targetY : idleY;

      // Responsive spring damping factor (0.09 for fluid lifelike momentum)
      k.currentX += (targetX - k.currentX) * 0.09;
      k.currentY += (targetY - k.currentY) * 0.09;

      const x = k.currentX; // normalized -1 (far left) to +1 (far right)
      const y = k.currentY; // normalized -1 (top) to +1 (bottom)

      // Mainframe.co Style Neck & Head Kinematics:
      // When cursor moves right (x > 0) -> head & neck leans right, moves right, turns right
      // When cursor moves left  (x < 0) -> head & neck leans left, moves left, turns left
      const neckShiftX = x * 38;       // Horizontal neck travel (px)
      const neckShiftY = y * 16;       // Vertical neck travel (px)
      const neckTiltAngle = x * 9.5;   // Lateral neck bend (degrees)
      const faceTurnY = x * 16;        // 3D face turn around Y-axis (degrees)
      const faceNodX = -y * 11;        // 3D chin lift/nod around X-axis (degrees)
      const neckFlexSkew = x * 2.2;    // Organic cervical flex skew

      if (robotRef.current) {
        const robotTransform = `perspective(1100px) translate3d(${neckShiftX}px, ${neckShiftY}px, 0) rotate(${neckTiltAngle}deg) rotateY(${faceTurnY}deg) rotateX(${faceNodX}deg) skewX(${neckFlexSkew}deg)`;
        robotRef.current.style.transform = robotTransform;
        robotRef.current.style.webkitTransform = robotTransform;
      }

      // Subtle background depth parallax
      if (bgRef.current) {
        const bgShiftX = x * -8;
        const bgShiftY = y * -5;
        const bgTransform = `translate3d(${bgShiftX}px, ${bgShiftY}px, 0) scale(1.02)`;
        bgRef.current.style.transform = bgTransform;
        bgRef.current.style.webkitTransform = bgTransform;
      }

      animationFrameId = requestAnimationFrame(updateKinematics);
    };

    animationFrameId = requestAnimationFrame(updateKinematics);

    // Mouse Tracking across entire window
    const handleMouseMove = (e) => {
      const k = kinematics.current;
      k.isInteracting = true;
      k.lastInteractionTime = performance.now();

      // Normalize coordinates -1 (far left / top) to +1 (far right / bottom)
      const normX = (e.clientX / window.innerWidth - 0.5) * 2;
      const normY = (e.clientY / window.innerHeight - 0.5) * 2;

      k.targetX = Math.max(-1.3, Math.min(1.3, normX));
      k.targetY = Math.max(-1.3, Math.min(1.3, normY));
    };

    const handleMouseLeave = () => {
      kinematics.current.isInteracting = false;
      kinematics.current.targetX = 0;
      kinematics.current.targetY = 0;
    };

    // Mobile Touch Tracking (iOS Safari, Android Chrome)
    const handleTouchMove = (e) => {
      if (!e.touches || e.touches.length === 0) return;
      const touch = e.touches[0];
      const k = kinematics.current;
      k.isInteracting = true;
      k.lastInteractionTime = performance.now();

      const normX = (touch.clientX / window.innerWidth - 0.5) * 2;
      const normY = (touch.clientY / window.innerHeight - 0.5) * 2;

      k.targetX = Math.max(-1.3, Math.min(1.3, normX));
      k.targetY = Math.max(-1.3, Math.min(1.3, normY));
    };

    const handleTouchEnd = () => {
      kinematics.current.isInteracting = false;
      kinematics.current.targetX = 0;
      kinematics.current.targetY = 0;
    };

    // Mobile Gyroscope / DeviceOrientation tilt
    const handleOrientation = (e) => {
      if (e.gamma === null || e.beta === null) return;
      const k = kinematics.current;
      const tiltX = Math.max(-1.1, Math.min(1.1, e.gamma / 28));
      const tiltY = Math.max(-1.1, Math.min(1.1, (e.beta - 35) / 28));

      k.targetX = tiltX;
      k.targetY = tiltY;
      k.isInteracting = true;
      k.lastInteractionTime = performance.now();
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", handleOrientation, {
        passive: true,
      });
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
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
      {/* Layer 1: Ambient Clean Tech Background with Orange Graphic Curves from photo */}
      <div className="hero-top-full-bleed-bg" aria-hidden="true">
        <div ref={bgRef} className="hero-clean-scene-bg" />
        <div className="hero-grid" />
        <div className="hero-ambient-glow" />
        <SynapticParticleCanvas />
      </div>

      {/* Layer 2: The SINGLE Dead-Centered Cursor-Tracking Robot from the top */}
      <div className="hero-single-robot-backdrop-layer" aria-hidden="true">
        <div className="hero-single-robot-stage">
          <div className="hero-robot-positioner">
            <div
              ref={robotRef}
              className={`hero-robot-rig ${hasLoaded ? "hero-robot-ready" : ""}`}
            >
              <img
                src="/images/robot-centered.png"
                alt="Autonomous Intelligent Perception Robot"
                className="hero-single-robot-image"
                loading="eager"
                decoding="async"
              />
              {/* Glowing cervical neck servos */}
              <div className="hero-robot-neck-glow" />
            </div>
          </div>

          {/* Floating Capsule Caption */}
          <div className="hero-floating-caption">
            <span className="caption-dot" />
            <span>AUTONOMOUS PERCEPTION</span>
            <span className="caption-sep">→</span>
            <span>MODEL INTELLIGENCE</span>
          </div>
        </div>
      </div>

      {/* Layer 3: Central Text Content Layer (Overlaid clearly in front of the robot) */}
      <div className="container hero-content-layer">
        <div className="hero-text-box">
          {/* Kicker */}
          <div className="hero-pill-badge">
            <span className="hero-pill-pulse" />
            <span>HUMAN-CENTERED AI DATA</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-headline">
            The data behind
            <span className="gradient-text hero-glow-text"> intelligence.</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-lead">
            High-quality human-generated data and expert workflows for teams
            building, training and evaluating AI.
          </p>

          {/* CTAs */}
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary hero-cta-btn">
              <span>Discuss your project</span>
              <ArrowUpRight className="cta-arrow-icon" size={17} />
            </Link>
            <Link to="/solutions" className="btn btn-secondary hero-secondary-btn">
              <span>Explore our services</span>
              <ArrowRight className="cta-arrow-icon" size={17} />
            </Link>
          </div>

          {/* Trust badges */}
          <div className="hero-proof">
            <div className="proof-item">
              <Check className="proof-icon" size={15} />
              <span>Project-specific workflows</span>
            </div>
            <div className="proof-item">
              <Check className="proof-icon" size={15} />
              <span>Human-led quality review</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Bar */}
      <div className="hero-bottom-bar">
        <div className="container bottom-bar-inner">
          <div className="bottom-bar-left">
            <span>BUILT AROUND YOUR MODEL'S NEEDS</span>
          </div>
          <div className="bottom-bar-right">
            <span>SCOPED. REVIEWED. READY.</span>
            <ArrowDownRight size={15} />
          </div>
        </div>
      </div>
    </section>
  );
}
