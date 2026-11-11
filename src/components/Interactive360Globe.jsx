import React, { useRef, useState, useEffect, useCallback } from "react";
import { RotateCw, Compass, Play, Pause, MoveHorizontal } from "lucide-react";

export function Interactive360Globe({
  videoSrc = "/videos/global-network.mp4",
  className = "",
  size = 420
}) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const reqAnimRef = useRef(null);
  const lastRoundedAngleRef = useRef(0);

  const [isReady, setIsReady] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [rotationAngle, setRotationAngle] = useState(0); // 0 to 360 degrees
  const [hasInteracted, setHasInteracted] = useState(false);

  // Drag tracking refs
  const dragRef = useRef({
    isDown: false,
    startX: 0,
    lastX: 0,
    targetAngle: 0,
    currentAngle: 0,
    velocity: 0,
    lastTime: 0,
    idleTimeout: null,
  });

  // Ensure video metadata is loaded
  const handleLoadedMetadata = () => {
    setIsReady(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  // Sync video currentTime to rotation angle (0 - 360 deg -> 0 - video.duration)
  const syncAngleToVideo = useCallback((angle) => {
    const video = videoRef.current;
    if (!video || !video.duration) return;

    // Normalize angle to [0, 360)
    let normalized = angle % 360;
    if (normalized < 0) normalized += 360;

    const progress = normalized / 360;
    const targetTime = progress * video.duration;

    // Fast seek video to target time
    if (Math.abs(video.currentTime - targetTime) > 0.02) {
      video.currentTime = targetTime;
    }
    const rounded = Math.round(normalized);
    if (rounded !== lastRoundedAngleRef.current) {
      lastRoundedAngleRef.current = rounded;
      setRotationAngle(rounded);
    }
  }, []);

  // Main animation / inertia loop
  useEffect(() => {
    let prevTime = performance.now();

    const loop = (now) => {
      const dt = Math.min((now - prevTime) / 1000, 0.1);
      prevTime = now;

      const state = dragRef.current;

      if (state.isDown) {
        // While dragging: smoothly interpolate currentAngle towards targetAngle
        state.currentAngle += (state.targetAngle - state.currentAngle) * 0.45;
        syncAngleToVideo(state.currentAngle);
      } else if (Math.abs(state.velocity) > 0.1) {
        // Inertia glide when released
        state.currentAngle += state.velocity;
        state.velocity *= 0.92; // Friction damping
        syncAngleToVideo(state.currentAngle);
      } else if (autoRotate) {
        // Gentle auto rotation (approx 20 deg / sec -> 18 sec per full 360)
        state.currentAngle = (state.currentAngle + dt * 24) % 360;
        state.targetAngle = state.currentAngle;
        syncAngleToVideo(state.currentAngle);
      }

      reqAnimRef.current = requestAnimationFrame(loop);
    };

    reqAnimRef.current = requestAnimationFrame(loop);

    return () => {
      if (reqAnimRef.current) cancelAnimationFrame(reqAnimRef.current);
    };
  }, [autoRotate, syncAngleToVideo]);

  // Pointer Down (Mouse or Touch)
  const handlePointerDown = (e) => {
    const state = dragRef.current;
    state.isDown = true;
    state.startX = e.clientX;
    state.lastX = e.clientX;
    state.velocity = 0;
    state.lastTime = performance.now();

    setIsDragging(true);
    setAutoRotate(false);
    setHasInteracted(true);

    if (state.idleTimeout) clearTimeout(state.idleTimeout);

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (_) {
      // Fallback for browsers that don't support pointer capture
    }
  };

  // Pointer Move (Drag or Hover Cursor Following)
  const handlePointerMove = (e) => {
    const state = dragRef.current;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    if (state.isDown) {
      // ACTIVE DRAGGING: Rotate based on horizontal drag distance
      const deltaX = e.clientX - state.lastX;
      state.lastX = e.clientX;

      // Sensitivity: 1px = ~0.65 degrees rotation
      const sensitivity = 0.65;
      state.targetAngle -= deltaX * sensitivity;

      const now = performance.now();
      const dt = (now - state.lastTime) || 16;
      state.velocity = (-deltaX * sensitivity * 16) / dt;
      state.lastTime = now;
    } else {
      // HOVER CURSOR TRACKING: When cursor moves over container without clicking,
      // the globe gently responds to the cursor position (moves with cursor)
      const normalizedX = (e.clientX - rect.left) / rect.width; // 0 to 1
      const cursorAngle = normalizedX * 360;

      // Soft nudging towards cursor angle while hovering
      if (!autoRotate) {
        state.targetAngle = cursorAngle;
        state.currentAngle += (cursorAngle - state.currentAngle) * 0.1;
        syncAngleToVideo(state.currentAngle);
      }
    }
  };

  // Pointer Up / Cancel
  const handlePointerUp = (e) => {
    const state = dragRef.current;
    state.isDown = false;
    setIsDragging(false);

    try {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch (_) {}

    // Resume gentle auto-rotate after 3.5 seconds of inactivity
    if (state.idleTimeout) clearTimeout(state.idleTimeout);
    state.idleTimeout = setTimeout(() => {
      setAutoRotate(true);
    }, 3500);
  };

  // Container hover enter: pause auto-rotate slightly so cursor tracking can engage
  const handleMouseEnter = () => {
    // When hovering, user can also scrub by cursor position
    setAutoRotate(false);
  };

  const handleMouseLeave = () => {
    const state = dragRef.current;
    if (!state.isDown) {
      if (state.idleTimeout) clearTimeout(state.idleTimeout);
      state.idleTimeout = setTimeout(() => {
        setAutoRotate(true);
      }, 1500);
    }
  };

  const toggleAutoRotate = (e) => {
    e.stopPropagation();
    setAutoRotate((prev) => !prev);
  };

  const resetAngle = (e) => {
    e.stopPropagation();
    const state = dragRef.current;
    state.targetAngle = 0;
    state.currentAngle = 0;
    state.velocity = 0;
    syncAngleToVideo(0);
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative select-none touch-none group flex flex-col items-center justify-center ${className}`}
      style={{
        width: "100%",
        maxWidth: `${size}px`,
        cursor: isDragging ? "grabbing" : "grab",
      }}
    >
      {/* Outer Glow Halo & Glassmorphism Backdrop */}
      <div className="relative w-full aspect-square rounded-full p-2.5 bg-gradient-to-b from-[#12151A]/90 to-[#1E232B]/95 shadow-[0_20px_50px_rgba(18,21,26,0.22)] border border-[rgba(255,255,255,0.12)] hover:border-[#EC5E27]/50 transition-all duration-300">
        
        {/* Ambient Radial Accent Glows */}
        <div
          className="absolute -inset-1 rounded-full opacity-30 blur-xl pointer-events-none transition-opacity duration-500 group-hover:opacity-60"
          style={{
            background: "radial-gradient(circle, rgba(236, 94, 39, 0.45) 0%, rgba(56, 189, 248, 0.25) 50%, transparent 75%)",
          }}
        />

        {/* Circular Viewport for 360 Video Globe */}
        <div className="relative w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center shadow-inner">
          <video
            ref={videoRef}
            src={videoSrc}
            playsInline
            muted
            preload="auto"
            onLoadedMetadata={handleLoadedMetadata}
            className="w-full h-full object-cover pointer-events-none transform scale-[1.03]"
          />

          {/* Spherical Shadow / Atmospheric Vignette */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 35% 35%, transparent 60%, rgba(0, 0, 0, 0.4) 85%, rgba(0, 0, 0, 0.85) 100%)",
              boxShadow: "inset 0 0 25px rgba(236, 94, 39, 0.2)",
            }}
          />

          {/* Floating Top Badge: 360° Tag */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 pointer-events-none">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono font-semibold text-white tracking-wider uppercase shadow-md">
              <Compass size={12} className="text-[#EC5E27] animate-spin" style={{ animationDuration: "12s" }} />
              <span>360° Globe</span>
            </span>
          </div>

          {/* Bottom Interactive HUD: Degree & Drag Hint */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none flex flex-col items-center gap-1">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[11px] font-mono text-white/90 shadow-lg">
              <MoveHorizontal size={13} className="text-[#EC5E27] animate-pulse" />
              <span className="font-semibold tracking-wider text-[10px]">
                {isDragging ? "ROTATING" : "DRAG 360°"}
              </span>
              <span className="text-white/40">|</span>
              <span className="text-[#EC5E27] font-bold">{rotationAngle}°</span>
            </div>
          </div>
        </div>

        {/* Corner Quick Controls: Auto-Rotate Toggle & Reset */}
        <div className="absolute -bottom-2 right-4 flex items-center gap-1.5 z-20">
          <button
            type="button"
            onClick={toggleAutoRotate}
            title={autoRotate ? "Pause Auto-Rotate" : "Start Auto-Rotate"}
            className="w-8 h-8 rounded-full bg-[#12151A] hover:bg-[#EC5E27] text-white flex items-center justify-center border border-white/20 shadow-md transition-colors cursor-pointer"
          >
            {autoRotate ? <Pause size={12} /> : <Play size={12} />}
          </button>
          <button
            type="button"
            onClick={resetAngle}
            title="Reset Position (0°)"
            className="w-8 h-8 rounded-full bg-[#12151A] hover:bg-[#EC5E27] text-white flex items-center justify-center border border-white/20 shadow-md transition-colors cursor-pointer"
          >
            <RotateCw size={12} />
          </button>
        </div>
      </div>

      {/* Subtle Caption Under Globe */}
      <div className="mt-3 text-center">
        <p className="text-xs font-medium text-[#5F646D] flex items-center justify-center gap-1.5">
          <span className="inline-block w-2 h-2 rounded-full bg-[#EC5E27] animate-ping" />
          <span>Interactive Global Presence • Drag to spin in 360°</span>
        </p>
      </div>
    </div>
  );
}
