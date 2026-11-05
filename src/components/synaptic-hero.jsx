import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { SynapticParticleCanvas } from "./SynapticParticleCanvas";

export function SynapticHero() {
    const [parallax, setParallax] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);
    const videoRef = useRef(null);

    // Guarantee cross-browser video autoplay (Safari iOS, Chrome Android, Edge, desktop)
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(() => {
                // Autoplay may be restricted in low-power battery saving modes; fallback poster handles visual
            });
        }
    }, []);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        // Don't apply mouse parallax on touch/mobile devices
        if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        setParallax({ x, y });
    };

    const handleMouseLeave = () => {
        setParallax({ x: 0, y: 0 });
    };

    return (<section ref={containerRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="hero synaptic-dark-hero" aria-label="DaQube Human-Centered AI Data Hero">
      {/* Background High-Tech Grid & Ambient Accent Glow */}
      <div className="hero-grid" aria-hidden="true"/>
      <div className="hero-ambient-glow" aria-hidden="true"/>
      <SynapticParticleCanvas />

      {/* Layer 1: Central Content Layer (Z-Index: 10) */}
      <div className="container hero-content-layer">
        <div className="hero-text-box" style={{
            transform: `translate(${parallax.x * -6}px, ${parallax.y * -4}px)`
        }}>
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
              Discuss your project <ArrowUpRight size={17}/>
            </Link>
            <a className="text-link text-link-silver" href="#services-section">
              Explore our services <ArrowRight size={17}/>
            </a>
          </div>

          {/* Proof Points */}
          <div className="hero-proof">
            <span>
              <Check size={15}/> Project-specific workflows
            </span>
            <span>
              <Check size={15}/> Human-led quality review
            </span>
          </div>
        </div>
      </div>

      {/* Layer 2: 3D Hands Motion Layer (Z-Index: 20) — High Performance Transparent Alpha */}
      <div className="hero-hands-overlap-layer" style={{
            transform: `perspective(1200px) rotateX(${parallax.y * -2.5}deg) rotateY(${parallax.x * 3.5}deg) translateZ(0)`,
            WebkitPerspective: "1200px"
        }} aria-hidden="true">
        <video 
          ref={videoRef} 
          className="hero-hands-video" 
          autoPlay 
          loop 
          muted 
          playsInline 
          webkit-playsinline="true"
          preload="auto" 
          poster="/images/synaptic-hands-alpha-poster.png"
        >
          {/* Universal ivory-blended MP4 for Safari, iOS, and seamless light theme blending */}
          <source src="/videos/synaptic-hands.mp4" type="video/mp4"/>
          {/* WebM with VP9 Alpha fallback */}
          <source src="/videos/synaptic-hands-alpha.webm" type="video/webm"/>
        </video>

        {/* Floating Capsule Caption */}
        <div className="hero-floating-caption">
          HUMAN INPUT <span>&rarr;</span> MODEL INTELLIGENCE
        </div>
      </div>

      {/* Bottom Status Banner */}
      <div className="container hero-bottom-bar">
        <span>BUILT AROUND YOUR MODEL'S NEEDS</span>
        <div className="hero-bottom-line"/>
        <span>SCOPED. REVIEWED. READY.</span>
        <ArrowDownRight size={18}/>
      </div>
    </section>);
}
