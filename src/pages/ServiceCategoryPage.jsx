import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, ArrowUpRight, CheckCircle2, ChevronRight, Layers, Sparkles, Shield, Cpu, FileCheck2, HelpCircle } from "lucide-react";
import { getServiceCategory, SERVICE_CATEGORIES } from "../lib/services-taxonomy";
import { ImagePlaceholder } from "../components/image-placeholder";
import { ServiceDetailPage } from "./ServiceDetailPage";
import { services } from "../lib/content";
import { SpatialDomainStage, ServiceCaseStudiesSection, getServiceSubpageImage } from "../components/SpatialDomainStage";
import { ThreeDTiltCard } from "../components/ThreeDVisualizers";

export function ServiceCategoryPage() {
  const { categorySlug } = useParams();
  const category = getServiceCategory(categorySlug);

  if (!category) {
    const legacy = services.find((s) => s.slug === categorySlug);
    if (legacy) {
      return <ServiceDetailPage slugOverride={categorySlug} />;
    }
    return <Navigate to="/solutions" replace />;
  }

  return (
    <>
      {/* Category Hero */}
      <section className="page-hero page-hero-dark">
        <div className="container">
          <div className="breadcrumb" style={{ marginBottom: "16px" }}>
            <Link to="/solutions">Solutions</Link>
            <ChevronRight size={14} className="inline mx-2 opacity-50" />
            <span>{category.title}</span>
          </div>

          <span className="eyebrow eyebrow-light">
             {category.eyebrow}
          </span>
          <h1>
            {category.title}<br />
            <span>{category.heroHighlight}</span>
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-[#CBD5E1] leading-relaxed mt-4 mb-8">
            {category.summary}
          </p>

          <div className="hero-actions">
            <Link className="button button-crimson" to={`/contact?service=${encodeURIComponent(category.title)}`}>
              Scope {category.title} <ArrowUpRight size={17} />
            </Link>
            <a className="text-link text-link-light" href="#subpages-list">
              Explore Sub-Disciplines <ArrowRight size={16} />
            </a>
          </div>
        </div>
        <div className="page-hero-glow" />
      </section>

      {/* Unique 3D Spatial Domain Stage with Gyro Tilt & Media Slots for this Service */}
      <section id="domain-stage" className="section section-tint !py-16 border-b border-[rgba(20,23,26,0.06)]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="eyebrow">TARGET OPERATING DOMAINS</span>
            <h2 className="font-display text-2xl md:text-4xl font-extrabold text-[#12151A] tracking-tight mt-1 mb-3">
              Classified Domains for {category.title}
            </h2>
            <p className="text-sm md:text-base text-[#5F646D] leading-relaxed">
              Explore purpose-built training datasets and specialized workflows built for your specific production requirements.
            </p>
          </div>

          <SpatialDomainStage serviceSlug={category.slug} serviceTitle={category.title} />
        </div>
      </section>

      {/* Case Studies Section with 3D Animation for this Service */}
      <ServiceCaseStudiesSection serviceSlug={category.slug} serviceTitle={category.title} />

      {/* Sub-Specializations / Subpages Grid (With 3D Cards) */}
      <section id="subpages-list" className="section section-tint">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="eyebrow">SPECIALIZED SUB-DISCIPLINES</span>
              <h2 className="font-display text-2xl md:text-4xl font-extrabold text-[#12151A] tracking-tight mt-1">
                Engineered for specialized requirements.
              </h2>
            </div>
            <p className="text-sm text-[#5F646D] max-w-md mt-2 md:mt-0 leading-relaxed">
              Select a specialized sub-practice to inspect specific deliverable schemas, annotator credentialing, and empirical quality benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.subpages.map((sub, idx) => {
              const cardImg = getServiceSubpageImage(category.slug, sub.slug, idx);
              return (
              <ThreeDTiltCard key={sub.slug} maxTilt={6}>
                <article className="flex flex-col p-7 rounded-2xl bg-white border border-[#E9ECEF] hover:border-[#EC5E27] hover:shadow-xl transition-all duration-300 h-full">
                  <div className="mb-5">
                    {cardImg ? (
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#E9ECEF] bg-[#0F172A]">
                        <img
                          src={cardImg}
                          alt={sub.title}
                          className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <ImagePlaceholder
                        aspect="16/10"
                        label={sub.title.toUpperCase()}
                        caption={`Dataset sample & ground truth schema for ${sub.title}`}
                        specs="Annotated Frame · Ground Truth Coordinate Layer"
                      />
                    )}
                  </div>

                  <span className="text-xs font-bold text-[#EC5E27] tracking-wider uppercase mb-1">
                    {sub.eyebrow}
                  </span>
                  <h3 className="font-display text-xl font-bold text-[#12151A] mb-2.5">
                    {sub.title}
                  </h3>
                  <p className="text-sm text-[#5F646D] leading-relaxed mb-6">
                    {sub.short}
                  </p>

                  <div className="mt-auto pt-4 border-t border-[#F8F9FA] flex items-center justify-between">
                    <Link
                      to={`/solutions/${category.slug}/${sub.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#EC5E27] hover:underline"
                    >
                      View Technical Specs & Workflow <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              </ThreeDTiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enterprise Capabilities & Sourcing Standards */}
      <section className="section section-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="eyebrow">PRECISION ENGINEERING</span>
              <h2 className="font-display text-2xl md:text-4xl font-extrabold text-[#12151A] tracking-tight mt-1 mb-4">
                Built to eliminate the gap between lab models and real-world deployment.
              </h2>
              <p className="text-sm md:text-base text-[#5F646D] leading-relaxed mb-6">
                Most machine learning pipelines fail not because of model architecture, but because training data lacks the nuance, edge-case coverage, and empirical consistency of deployment environments.
              </p>
              <div className="space-y-3.5 text-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#EC5E27] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#12151A]">Multi-Pass Consensus & Adjudication: </span>
                    <span className="text-[#5F646D]">Blind multi-annotator passes with automated Cohen's Kappa tracking and senior lead arbitration.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#EC5E27] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#12151A]">Air-Gapped Cleanroom Options: </span>
                    <span className="text-[#5F646D]">Secure virtual cleanrooms with disabled local clipboards, zero-data-retention, and ISO 27001 controls.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#EC5E27] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#12151A]">Zero IP Leakage & Verified Provenance: </span>
                    <span className="text-[#5F646D]">100% auditable contributor chain-of-custody with explicit commercial model training clearance.</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ImagePlaceholder
                aspect="4/3"
                label="AIR-GAPPED SECURITY & DATA CLEANROOM"
                caption="ISO/IEC 27001 & HIPAA BAA compliant secure data labeling infrastructure"
                specs="Secure Virtual Desktop Infrastructure (VDI) · DLP Monitored"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEO Technical FAQ */}
      <section className="section section-tint">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <span className="eyebrow"> DISCIPLINE FAQ</span>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-[#12151A] tracking-tight mt-1">
              Frequently Asked Questions About {category.title}
            </h2>
          </div>

          <div className="space-y-4">
            <details className="bg-white p-5 rounded-2xl border border-[#E9ECEF] cursor-pointer group">
              <summary className="font-bold text-[#12151A] text-sm md:text-base list-none flex items-center justify-between">
                <span>What deliverables and schemas are supported?</span>
                <span className="text-[#EC5E27] font-bold text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-sm text-[#5F646D] leading-relaxed mt-3 pt-3 border-t border-[#F8F9FA]">
                We support industry-standard machine learning schemas structured to fit your pipeline directly. Deliverables are verified against programmatic schemas before delivery.
              </p>
            </details>

            <details className="bg-white p-5 rounded-2xl border border-[#E9ECEF] cursor-pointer group">
              <summary className="font-bold text-[#12151A] text-sm md:text-base list-none flex items-center justify-between">
                <span>How fast can a calibrated pilot batch be completed?</span>
                <span className="text-[#EC5E27] font-bold text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-sm text-[#5F646D] leading-relaxed mt-3 pt-3 border-t border-[#F8F9FA]">
                Initial technical discovery, rubric formulation, and a 500-unit pilot run are delivered within 5 business days. Production velocity scales once inter-rater agreement meets your required acceptance threshold (typically Krippendorff's α ≥ 0.88).
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Other Categories Navigation */}
      <section className="section section-white !py-12">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-bold text-[#12151A] uppercase tracking-wider">
              Explore Other Core Disciplines
            </span>
            <Link to="/solutions" className="text-xs font-bold text-[#EC5E27] hover:underline flex items-center gap-1">
              All Solutions <ArrowRight size={13} />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {SERVICE_CATEGORIES.filter((c) => c.slug !== category.slug).map((c) => (
              <Link
                key={c.slug}
                to={`/solutions/${c.slug}`}
                className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E9ECEF] hover:border-[#EC5E27] transition-all text-center"
              >
                <div className="font-display text-sm font-bold text-[#12151A]">{c.title}</div>
                <div className="text-[11px] text-[#5F646D] mt-1 line-clamp-1">{c.heroHighlight}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceCategoryPage;
