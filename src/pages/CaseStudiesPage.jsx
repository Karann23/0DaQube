import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  FlaskConical,
  Filter,
  Sparkles,
  Search,
  Clock3,
  Layers,
  Camera
} from "lucide-react";
import { caseStudies } from "../lib/content";
import { ThreeDTiltCard } from "../components/ThreeDVisualizers";

const filterCategories = [
  "All Case Studies",
  "Autonomous Vehicles & ADAS",
  "Computer Vision & Annotation",
  "Multimodal AI & Foundation Models",
  "Healthcare & Medical AI",
  "Video & Motion AI",
  "NLP & Language Models",
  "End-to-End AI Data Solutions"
];

export function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState("All Case Studies");
  const [searchQuery, setSearchQuery] = useState("");
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const filteredStudies = caseStudies.filter((item) => {
    const matchesCategory =
      activeFilter === "All Case Studies" ||
      item.industry === activeFilter ||
      item.industry.toLowerCase().includes(activeFilter.split(" ")[0].toLowerCase());

    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      item.title.toLowerCase().includes(q) ||
      item.summary.toLowerCase().includes(q) ||
      item.industry.toLowerCase().includes(q);

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero Section with Cinematic Background Video */}
      <section className="relative overflow-hidden page-hero page-hero-dark min-h-[480px] md:min-h-[520px] flex items-center">
        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none opacity-100 z-0"
        >
          <source src="/videos/case-study.mp4" type="video/mp4" />
        </video>

        {/* Light Contrast Gradient Overlay keeping the 3D background vivid while preserving text legibility */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background:
              "linear-gradient(95deg, rgba(253, 253, 241, 0.68) 0%, rgba(253, 253, 241, 0.42) 36%, rgba(253, 253, 241, 0.12) 66%, rgba(253, 253, 241, 0.0) 100%)",
          }}
        />

        {/* Subtle bottom fade into content */}
        <div
          className="absolute bottom-0 left-0 right-0 h-14 pointer-events-none z-[1]"
          style={{
            background: "linear-gradient(to bottom, transparent, rgba(253, 253, 241, 0.7) 75%, #FFFFFF 100%)",
          }}
        />

        <div className="container relative z-10 w-full">
          <span className="eyebrow eyebrow-light">
            ENTERPRISE AI DATA CASE STUDIES & TECHNICAL GUIDES
          </span>
          <h1 style={{ textShadow: "0 2px 16px rgba(253, 253, 241, 0.9)" }}>
            From High-Dimensional Chaos<br />
            <span>to Calibrated Ground Truth.</span>
          </h1>
          <p
            className="max-w-2xl text-base md:text-lg text-[#3D424B] font-medium leading-relaxed mt-4 mb-8"
            style={{ textShadow: "0 1px 10px rgba(253, 253, 241, 0.95)" }}
          >
            Explore interactive case studies and technical blueprints covering ADAS sensor collection, multimodal AI datasets, human vs. automated annotation, medical imaging, human activity video, and NLP training pipelines.
          </p>

          <div className="hero-actions">
            <Link className="button button-crimson shadow-lg" to="/contact">
              Scope Custom Dataset <ArrowUpRight size={17} />
            </Link>
            <a className="text-link text-link-light" href="#case-grid">
              Browse All Case Studies <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Main Content & Grid */}
      <section id="case-grid" className="section section-white">
        <div className="container">
          {/* Note / Disclaimer Banner */}
          <div className="case-note">
            <FlaskConical size={20} className="shrink-0 text-[#EC5E27]" />
            <div>
              <strong className="block text-sm text-[#12151A] mb-0.5">
                Unified Interactive Case Study Architecture:
              </strong>
              <p className="text-xs text-[#5F646D] leading-relaxed">
                Every case study features an interactive 3D perception or modality visualizer, structured comparison matrix, 5-stage pipeline workflow, recommended photo blueprint, and technical FAQs in a consistent DaQube design system.
              </p>
            </div>
          </div>

          {/* Search & Filter Controls */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#8E939D]">
              <Filter size={14} className="text-[#EC5E27]" /> FILTER BY DOMAIN ({filteredStudies.length} OF {caseStudies.length}):
            </div>
            <div className="relative w-full md:w-80">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8E939D]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search ADAS, medical, multimodal, NLP..."
                className="w-full pl-9 pr-4 py-2 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#12151A] focus:outline-none focus:border-[#EC5E27]"
              />
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#F1F3F5]">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeFilter === cat
                    ? "bg-[#12151A] text-white shadow-sm"
                    : "bg-[#F1F3F5] text-[#5F646D] hover:text-[#12151A] hover:bg-[#E9ECEF]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Responsive 3D Tilt Case Study Grid */}
          <div className="case-grid">
            {filteredStudies.map((item) => (
              <ThreeDTiltCard key={item.slug} className="h-full" maxTilt={8}>
                <Link className="case-card" to={`/case-studies/${item.slug}`}>
                  <div className="case-image">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      loading="eager"
                      decoding="async"
                      onError={(e) => {
                        const current = e.currentTarget.getAttribute("src");
                        if (current && current.startsWith("/images/case-studies/")) {
                          e.currentTarget.src = current.replace("/images/case-studies/", "/case-studies/");
                        } else if (current && current.startsWith("/case-studies/")) {
                          e.currentTarget.src = current.replace("/case-studies/", "/images/case-studies/");
                        } else {
                          e.currentTarget.style.display = "none";
                        }
                      }}
                    />
                    <span>{item.type}</span>
                  </div>
                  <div className="case-copy">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="eyebrow !mb-0">{item.industry}</span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#8E939D]">
                        <Clock3 size={12} /> {item.readTime}
                      </span>
                    </div>
                    <h2>{item.title}</h2>
                    <p>{item.summary}</p>
                    <div className="flex items-center justify-between pt-3 border-t border-[#F1F3F5] mt-auto">
                      <span className="text-link !mt-0">
                        Explore Interactive Case Study <ArrowRight size={16} />
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#8E939D]">
                        <Layers size={12} className="text-[#EC5E27]" /> 5 Phases
                      </span>
                    </div>
                  </div>
                </Link>
              </ThreeDTiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-white">
        <div className="container cta-panel">
          <div className="cta-symbol"><Sparkles size={26} /></div>
          <div className="cta-copy">
            <span className="eyebrow">CUSTOM DATASET & ANNOTATION SCOPING</span>
            <h2>Need a tailored data workflow for your AI project?</h2>
            <p>Share your modality, target use case, annotation requirements, and timeline with DaQube.ai to scope a custom dataset pilot.</p>
          </div>
          <Link to="/contact" className="button button-crimson">
            Request Custom Quotation <ArrowRight size={17} />
          </Link>
          <span className="cta-watermark">DQ</span>
        </div>
      </section>
    </>
  );
}

export default CaseStudiesPage;
