import { useEffect, useRef } from "react";

/**
 * SynapticParticleCanvas
 * Lightweight, hardware-accelerated HTML5 2D canvas particle constellation.
 * Generates floating electric cyan-blue (#0EA5E9) and crimson-orange (#EC5E27) nodes,
 * pulsing axons, and active mouse gravity lines in the page background.
 */
export function SynapticParticleCanvas({
  className = "",
  particleCount,
  connectionDistance = 145,
  global = false,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Keep global background constellation light and uncluttered
    const count = particleCount ?? (global ? 24 : 55);
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = global ? window.innerWidth : canvas.offsetWidth;
    let height = global ? window.innerHeight : canvas.offsetHeight;

    const resizeCanvas = () => {
      if (!canvas) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = global ? window.innerWidth : canvas.offsetWidth;
      height = global ? window.innerHeight : canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle nodes: electric cyan-blue (#0EA5E9) and crimson-orange (#EC5E27)
    const particles = [];
    for (let i = 0; i < count; i++) {
      const isBlue = i % 2 === 0;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: global ? Math.random() * 1.4 + 1.0 : Math.random() * 2.0 + 1.35,
        isBlue,
        color: isBlue ? "#0EA5E9" : "#EC5E27",
        pulse: Math.random() * Math.PI * 2,
      });
    }

    const mouse = { x: -1000, y: -1000, active: false };
    const handleMouseMove = (e) => {
      if (global) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      } else {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      }
      mouse.active = true;
    };
    const handleMouseLeave = () => {
      mouse.active = false;
    };

    if (global) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      document.addEventListener("mouseleave", handleMouseLeave);
    } else {
      canvas.parentElement?.addEventListener("mousemove", handleMouseMove);
      canvas.parentElement?.addEventListener("mouseleave", handleMouseLeave);
    }

    let animationFrameId;
    const mouseGravityRadius = 175;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.028;

        // Bounce softly off viewport / container edges
        if (p.x < 0) {
          p.x = 0;
          p.vx *= -1;
        } else if (p.x > width) {
          p.x = width;
          p.vx *= -1;
        }
        if (p.y < 0) {
          p.y = 0;
          p.vy *= -1;
        } else if (p.y > height) {
          p.y = height;
          p.vy *= -1;
        }

        // Mouse gravity pull & active mouse gravity lines
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseGravityRadius && dist > 1) {
            p.x += dx * 0.01;
            p.y += dy * 0.01;

            const tetherAlpha = (1 - dist / mouseGravityRadius) * (global ? 0.28 : 0.42);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = p.isBlue
              ? `rgba(14, 165, 233, ${tetherAlpha.toFixed(3)})`
              : `rgba(236, 94, 39, ${tetherAlpha.toFixed(3)})`;
            ctx.lineWidth = 0.9;
            ctx.shadowBlur = 0;
            ctx.stroke();
          }
        }

        // Pulsing node circle
        const pulseWave = Math.sin(p.pulse);
        const dynamicRadius = p.radius + pulseWave * 0.4;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.7, dynamicRadius), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = global ? 0.48 + pulseWave * 0.1 : 0.92;
        ctx.shadowBlur = global ? 6 : 10;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.globalAlpha = 1;

        // Pulsing axons connecting nearby nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const axonPulse = 0.72 + 0.28 * Math.sin((p.pulse + p2.pulse) * 0.5);
            const alpha = (1 - dist / connectionDistance) * (global ? 0.16 : 0.36) * axonPulse;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p.isBlue
              ? `rgba(14, 165, 233, ${alpha.toFixed(3)})`
              : `rgba(236, 94, 39, ${alpha.toFixed(3)})`;
            ctx.lineWidth = 0.85;
            ctx.shadowBlur = 0;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (global) {
        window.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseleave", handleMouseLeave);
      } else {
        canvas.parentElement?.removeEventListener("mousemove", handleMouseMove);
        canvas.parentElement?.removeEventListener("mouseleave", handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [particleCount, connectionDistance, global]);

  const baseClass = global
    ? "pointer-events-none fixed inset-0 z-[2] w-screen h-screen"
    : "pointer-events-none absolute inset-0 z-[6] w-full h-full";

  return (
    <canvas
      ref={canvasRef}
      className={`${baseClass} ${className}`.trim()}
      aria-hidden="true"
    />
  );
}

export default SynapticParticleCanvas;
