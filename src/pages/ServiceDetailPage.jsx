import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  CircleCheck,
  FileCheck2,
  Layers3,
  Play,
  ShieldCheck,
  Cpu,
  Clock,
  Sparkles,
  HelpCircle
} from "lucide-react";
import { services, getServiceBySlug } from "../lib/content";
import { ImagePlaceholder } from "../components/image-placeholder";
import {
  ThreeDLidarRadar,
  ThreeDAudioVisualizer,
  ThreeDNeuralMatrix,
  ThreeDSecurityEnclave
} from "../components/ThreeDVisualizers";

export function ServiceDetailPage({ slugOverride }) {
  const params = useParams();
  const slug = slugOverride || params.slug || params.categorySlug;
  const service = getServiceBySlug(slug) || services.find((item) => item.slug === slug);
  const [imgError, setImgError] = useState(false);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const related = services.filter((item) => service.related && service.related.includes(item.slug));

  // Determine which 3D visualizer best represents this service
  const renderVisualizer = () => {
    const s = slug.toLowerCase();
    if (s.includes("lidar") || s.includes("adas") || s.includes("image") || s.includes("video") || s.includes("annotation")) {
      return <ThreeDLidarRadar label={`${service.title.toUpperCase()} — REAL-TIME SENSOR ENGINE`} />;
    }
    if (s.includes("speech") || s.includes("audio") || s.includes("transcription")) {
      return <ThreeDAudioVisualizer title={`${service.title.toUpperCase()} — ACOUSTIC HARMONICS & TIMING`} />;
    }
    if (s.includes("text") || s.includes("evaluation") || s.includes("nlp")) {
      return <ThreeDNeuralMatrix />;
    }
    return <ThreeDSecurityEnclave />;
  };

  return (
    <>
      {/* Service Detail Hero */}
      <section className="detail-hero">
        <div className="container detail-hero-grid">
          <div className="detail-hero-copy">
            <div className="breadcrumb" style={{ marginBottom: "14px" }}>
              <Link to="/services">Services</Link>
              <ChevronRight size={14} className="inline mx-2 opacity-50" />
              <span>{service.title}</span>
            </div>

            <span className="eyebrow eyebrow-light">
               {service.eyebrow}
            </span>

            <h1>
              {service.title}<br />
              <span>Built Around Your Brief.</span>
            </h1>

            <p>{service.intro}</p>

            <div className="hero-actions">
              <Link to={`/contact?service=${encodeURIComponent(service.title)}`} className="button button-crimson">
                Scope This Service <ArrowUpRight size={17} />
              </Link>
              <a href="#how-it-works" className="text-link text-link-light">
                See Engineering Process <ArrowRight size={16} />
              </a>
            </div>

            <div className="detail-trust mt-6 flex flex-wrap gap-4 text-xs text-[#CBD5E1]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-[#EC5E27]" /> Defined Acceptance Criteria (IoU ≥ 0.92)
              </span>
              <span className="flex items-center gap-1.5">
                <FileCheck2 size={16} className="text-[#EC5E27]" /> 100% Cryptographic Data Lineage
              </span>
            </div>
          </div>

          {/* Hero Media Container with Graceful Fallback and High-Definition Sizing */}
          <div className="detail-hero-media">
            {!imgError && service.image ? (
              <img
                src={service.image}
                alt={service.imageAlt || service.title}
                onError={() => setImgError(true)}
              />
            ) : (
              <ImagePlaceholder
                aspect="16/10"
                label={`${service.title.toUpperCase()} GROUND TRUTH FRAME`}
                caption={`Production visual asset for ${service.title}`}
                specs="Multi-Modal Sensor Array · Sub-Pixel Annotation · Clean IP Lineage"
              />
            )}
            <div className="media-caption">
              <span className="media-caption-dot" /> DATA BUILT FOR YOUR USE CASE
            </div>
          </div>
        </div>
      </section>



      {/* Embedded Video Showcase (if available) */}
      {service.video && (
        <section className="detail-video-section">
          <div className="container video-feature">
            <div className="video-frame">
              <video controls muted playsInline preload="metadata" poster={service.image}>
                <source src={service.video} type="video/mp4" />
                Your browser does not support embedded video.
              </video>
              <span className="video-chip">
                <Play size={13} fill="currentColor" /> VISUAL PIPELINE OVERVIEW
              </span>
            </div>
            <div className="video-copy">
              <span className="eyebrow eyebrow-light">FROM RAW INPUT TO MACHINE SIGNAL</span>
              <h2>Make every example count.</h2>
              <p>
                Frontier machine learning systems require structured inputs that reflect real-world operating distributions: lighting variations, acoustic noise floors, and sub-pixel edge cases.
              </p>
              <div className="video-points">
                <span><CircleCheck size={17} /> Specification-led taxonomy design</span>
                <span><CircleCheck size={17} /> Continuous inter-annotator agreement tracking</span>
                <span><CircleCheck size={17} /> Air-gapped ISO 27001 Certified handoff</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Technical Use Cases Grid */}
      <section className="section section-tint">
        <div className="container">
          <div className="section-heading mb-10">
            <span className="eyebrow">DEPLOYMENT USE CASES</span>
            <h2>Designed for the job your model must perform.</h2>
            <p>Scope a single focused pipeline or combine complementary modalities across visual, voice, and text.</p>
          </div>
          <div className="use-case-grid">
            {service.useCases.map((item, i) => (
              <article className="use-case-card" key={item}>
                <span className="use-case-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{item}</h3>
                <span className="use-case-line" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Phase Engineering Lifecycle */}
      <section className="section section-white" id="how-it-works">
        <div className="container">
          <div className="section-heading mb-10">
            <span className="eyebrow">HOW WE WORK</span>
            <h2>A clear path from requirements to delivery.</h2>
            <p>Deterministic milestones with verifiable quality gates at every phase.</p>
          </div>
          <div className="detail-process-grid">
            {service.process.map((step, i) => (
              <article className="detail-process-card" key={step.title}>
                <div className="detail-process-top">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <div />
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables & Deliverable Schemas */}
      <section className="section detail-deliverables-section">
        <div className="container detail-deliverables-grid">
          <div>
            <span className="eyebrow eyebrow-light">CONTRACTED DELIVERABLES</span>
            <h2>Outputs that fit directly into your pipeline.</h2>
            <p>
              Delivered in your native target format: COCO, YOLO, Pascal VOC, KITTI 3D, ROSbag, Parquet, or custom JSON schemas with complete cryptographic audit manifests.
            </p>
            <Link to="/contact" className="button button-crimson mt-4">
              Scope Your Deliverables <ArrowRight size={17} />
            </Link>
          </div>
          <div className="deliverable-list">
            {service.deliverables.map((item) => (
              <div key={item}>
                <CheckCircle2 size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical FAQ for Search Engine Optimization */}
      <section className="section section-tint">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <span className="eyebrow"> SERVICE FAQ</span>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-[#12151A] tracking-tight mt-1">
              Specifications & Engagement Questions
            </h2>
          </div>

          <div className="space-y-4">
            <details className="bg-white p-5 rounded-2xl border border-[#E9ECEF] cursor-pointer group">
              <summary className="font-bold text-[#12151A] text-sm md:text-base list-none flex items-center justify-between">
                <span>What quality assurance thresholds are applied to this service?</span>
                <span className="text-[#EC5E27] font-bold text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-sm text-[#5F646D] leading-relaxed mt-3 pt-3 border-t border-[#F8F9FA]">
                We enforce statistically validated Inter-Annotator Agreement (Krippendorff's Alpha ≥ 0.88 or IoU ≥ 0.92 depending on modality). Ongoing blind gold-standard tasks are dynamically injected into rater workflows to detect and prevent annotator drift before delivery.
              </p>
            </details>

            <details className="bg-white p-5 rounded-2xl border border-[#E9ECEF] cursor-pointer group">
              <summary className="font-bold text-[#12151A] text-sm md:text-base list-none flex items-center justify-between">
                <span>How is biometric and enterprise data secured during capture?</span>
                <span className="text-[#EC5E27] font-bold text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-sm text-[#5F646D] leading-relaxed mt-3 pt-3 border-t border-[#F8F9FA]">
                All assets are encrypted in transit (TLS 1.3) and at rest (AES-256). Biometric collections include signed explicit releases compliant with GDPR, CCPA, and Illinois BIPA. For proprietary models, data is processed inside air-gapped virtual desktop environments (VDI) with disabled peripheral ports.
              </p>
            </details>

            <details className="bg-white p-5 rounded-2xl border border-[#E9ECEF] cursor-pointer group">
              <summary className="font-bold text-[#12151A] text-sm md:text-base list-none flex items-center justify-between">
                <span>Can we request custom schema adaptations during active collection?</span>
                <span className="text-[#EC5E27] font-bold text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-sm text-[#5F646D] leading-relaxed mt-3 pt-3 border-t border-[#F8F9FA]">
                Yes. Our agile engineering sprint cycles support schema versioning. When downstream model experiments reveal new edge cases or required attributes, taxonomy updates are calibrated through pilot batches before rolling out across production pods.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Related Capabilities */}
      {related.length > 0 && (
        <section className="section section-white">
          <div className="container">
            <div className="section-heading mb-8">
              <span className="eyebrow">RELATED CAPABILITIES</span>
              <h2>Connect the data pipeline.</h2>
            </div>
            <div className="related-service-grid">
              {related.map((item) => (
                <Link to={`/services/${item.slug}`} className="related-service-card" key={item.slug}>
                  <img src={item.image} alt={item.imageAlt || item.title} />
                  <div>
                    <span className="eyebrow">{item.eyebrow}</span>
                    <h3>{item.title}</h3>
                    <p>{item.short}</p>
                    <span className="text-link">
                      Explore Service <ArrowRight size={15} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA Panel */}
      <section className="section section-tint">
        <div className="container detail-cta">
          <div>
            <span className="eyebrow">HAVE A SPECIFIC REQUIREMENT?</span>
            <h2>Let's turn your brief into a production pipeline.</h2>
            <p>
              Share your modality, approximate volume, target use case, and delivery format. An ML solutions architect will review your brief within 24 hours.
            </p>
          </div>
          <Link to="/contact" className="button button-crimson">
            Talk to an ML Engineer <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}

export default ServiceDetailPage;
