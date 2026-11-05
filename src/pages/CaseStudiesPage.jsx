import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, FlaskConical, CheckCircle2, Filter, Layers, ShieldCheck, Sparkles } from "lucide-react";
import { caseStudies } from "../lib/content";
import { ThreeDTiltCard } from "../components/ThreeDVisualizers";

const filterCategories = [
  "All Workflows",
  "Autonomous Vehicles & Robotics",
  "Generative AI & Foundation Models",
  "Healthcare & Biomedical NLP",
  "Speech & Acoustic Intelligence",
  "AI Safety & Offensive Security"
];

export function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState("All Workflows");

  const filteredStudies = activeFilter === "All Workflows"
    ? caseStudies
    : caseStudies.filter((item) => item.industry === activeFilter || item.industry.includes(activeFilter.split(" ")[0]));

  return (
    <>
      {/* Hero Section */}
      <section className="page-hero page-hero-dark">
        <div className="container">
          <span className="eyebrow eyebrow-light">
             ENTERPRISE ENGINEERING BENCHMARKS
          </span>
          <h1>
            From High-Dimensional Chaos<br />
            <span>to Calibrated Ground Truth.</span>
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-[#CBD5E1] leading-relaxed mt-4 mb-8">
            Explore verified data pipeline architectures deployed across frontier foundation laboratories, Level-4 autonomous fleets, hospital networks, and multilingual speech systems.
          </p>

          <div className="hero-actions">
            <Link className="button button-crimson" to="/contact">
              Scope Custom Case Study <ArrowUpRight size={17} />
            </Link>
            <a className="text-link text-link-light" href="#case-grid">
              Browse Production Pipelines <ArrowRight size={16} />
            </a>
          </div>
        </div>
        <div className="page-hero-glow" />
      </section>

      {/* Main Content & Grid */}
      <section id="case-grid" className="section section-white">
        <div className="container">
          {/* Note / Disclaimer Banner */}
          <div className="case-note">
            <FlaskConical size={20} className="shrink-0 text-[#EC5E27]" />
            <div>
              <strong className="block text-sm text-[#12151A] mb-0.5">Engineering Architecture Standards:</strong>
              <p className="text-xs text-[#5F646D] leading-relaxed">
                The workflows below reflect actual operational frameworks, rubric designs, and delivery specifications engineered by DaQube. Specific client identifiers and proprietary model weights are sanitized under non-disclosure obligations.
              </p>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#F1F3F5]">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#8E939D] mr-2">
              <Filter size={14} /> FILTER BY DOMAIN:
            </div>
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
                    <img src={item.image} alt={item.imageAlt} loading="lazy" />
                    <span>{item.type}</span>
                  </div>
                  <div className="case-copy">
                    <span className="eyebrow">{item.industry}</span>
                    <h2>{item.title}</h2>
                    <p>{item.summary}</p>
                    <span className="text-link">
                      Explore Technical Architecture <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </ThreeDTiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Technical FAQ for SEO */}
      <section className="section section-tint">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <span className="eyebrow"> CLIENT ENGAGEMENT FAQ</span>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-[#12151A] tracking-tight mt-1">
              Frequently Asked Technical Questions
            </h2>
          </div>

          <div className="space-y-4">
            <details className="bg-white p-5 rounded-2xl border border-[#E9ECEF] cursor-pointer group">
              <summary className="font-bold text-[#12151A] text-sm md:text-base list-none flex items-center justify-between">
                <span>How do you guarantee zero training data leakage into public evaluation sets?</span>
                <span className="text-[#EC5E27] font-bold text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-sm text-[#5F646D] leading-relaxed mt-3 pt-3 border-t border-[#F8F9FA]">
                All benchmarking datasets and gold-standard evaluation prompts are generated in air-gapped cleanroom environments without using web scrapers. We verify synthetic sets with n-gram containment filters against public pre-training scrapes (Common Crawl, The Pile, GitHub) to ensure strict out-of-distribution evaluation integrity.
              </p>
            </details>

            <details className="bg-white p-5 rounded-2xl border border-[#E9ECEF] cursor-pointer group">
              <summary className="font-bold text-[#12151A] text-sm md:text-base list-none flex items-center justify-between">
                <span>What are your standard turnaround SLAs for high-throughput sensor fusion pipelines?</span>
                <span className="text-[#EC5E27] font-bold text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-sm text-[#5F646D] leading-relaxed mt-3 pt-3 border-t border-[#F8F9FA]">
                For 3D LiDAR point clouds and synchronized multi-camera temporal tracking, our dedicated production pods deliver up to 50,000 fully annotated frames per week with continuous QA gates enforcing sub-5cm bounding box IoU tolerances. Feasibility pilots and calibration runs are completed within 5 business days.
              </p>
            </details>

            <details className="bg-white p-5 rounded-2xl border border-[#E9ECEF] cursor-pointer group">
              <summary className="font-bold text-[#12151A] text-sm md:text-base list-none flex items-center justify-between">
                <span>Can DaQube ingest proprietary custom schemas (ROSbag, Parquet, Darwin, COCO)?</span>
                <span className="text-[#EC5E27] font-bold text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-sm text-[#5F646D] leading-relaxed mt-3 pt-3 border-t border-[#F8F9FA]">
                Yes. Our data ingestion framework natively parses raw ROSbag sensor dumps, KITTI/nuScenes formats, Praat TextGrid acoustics, and custom JSON schemas. We deliver production-ready outputs directly into your internal cloud storage enclaves (AWS S3, GCP, Azure Blob) with verified cryptographic checksums.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-white">
        <div className="container cta-panel">
          <div className="cta-symbol"><Sparkles size={26} /></div>
          <div className="cta-copy">
            <span className="eyebrow">CUSTOM BENCHMARK SCOPING</span>
            <h2>Need a tailored workflow for your proprietary architecture?</h2>
            <p>Our solutions architects can design a calibrated data sprint matching your exact sensor rig or model loss function.</p>
          </div>
          <Link to="/contact" className="button button-crimson">
            Schedule Technical Discovery <ArrowRight size={17} />
          </Link>
          <span className="cta-watermark">DQ</span>
        </div>
      </section>
    </>
  );
}

export default CaseStudiesPage;
