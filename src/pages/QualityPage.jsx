import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  ClipboardCheck,
  Eye,
  FileCheck2,
  LockKeyhole,
  ShieldCheck,
  SlidersHorizontal,
  CheckCircle2,
  Sparkles,
  Cpu,
  Building2,
  Scale
} from "lucide-react";
import { SectionHeading } from "../components/section-heading";
import { ThreeDSecurityEnclave, ThreeDTiltCard } from "../components/ThreeDVisualizers";

const qualityPillars = [
  {
    icon: SlidersHorizontal,
    title: "Statistical Inter-Annotator Agreement",
    metric: "Krippendorff's α ≥ 0.88",
    text: "We calculate statistical agreement across independent raters on every batch, mathematically separating genuine prompt ambiguity from annotator variance before dataset export."
  },
  {
    icon: Eye,
    title: "Double-Blind Gold Task Injection",
    metric: "5% Continuous Gold Sampling",
    text: "Pre-screened gold-standard tasks are dynamically mixed into active production queues without raters' knowledge, triggering immediate alerts when accuracy slips below agreed tolerances."
  },
  {
    icon: LockKeyhole,
    title: "Air-Gapped Infrastructure & VDI",
    metric: "ISO 27001 Certified · ISO 27001",
    text: "All confidential model weights, customer telemetry, and medical records are processed inside air-gapped virtual desktops with disabled copy/paste and peripheral port locks."
  },
  {
    icon: FileCheck2,
    title: "100% Cryptographic Data Lineage",
    metric: "SHA-256 Verified Provenance",
    text: "Every collected utterance, image frame, and human judgment trace carries immutable timestamped author credentials, hardware calibration metadata, and explicit copyright clearance."
  },
  {
    icon: ClipboardCheck,
    title: "Deterministic Task Taxonomies",
    metric: "Sub-Pixel Boundary Guidelines",
    text: "Clear, operationalized rubrics with positive and negative counterexamples eliminate subjective guesswork for visual polygon segmentation, 3D LiDAR cuboids, and RLHF ranking."
  },
  {
    icon: ShieldCheck,
    title: "HIPAA BAA & Regulatory Adherence",
    metric: "GDPR · CCPA · BIPA Compliant",
    text: "Dedicated healthcare cleanrooms executing Business Associate Agreements (BAA) with complete de-identification routines and signed biometric opt-in releases."
  }
];

export function QualityPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero page-hero-dark">
        <div className="container">
          <span className="eyebrow eyebrow-light">
             ENTERPRISE TRUST & ASSURANCE
          </span>
          <h1>
            Quality is an Empirical Science.<br />
            <span>Not a Marketing Slogan.</span>
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-[#CBD5E1] leading-relaxed mt-4 mb-8">
            Frontier AI systems fail when trained on noisy, ambiguous, or uncalibrated labels. DaQube enforces mathematical consensus, continuous blind gold testing, and air-gapped security for leading machine learning enterprises.
          </p>

          <div className="hero-actions">
            <Link className="button button-crimson" to="/contact">
              Request Security & Quality Audit <ArrowUpRight size={17} />
            </Link>
            <a className="text-link text-link-light" href="#pillars">
              Inspect Quality Methodology <ArrowRight size={16} />
            </a>
          </div>
        </div>
        <div className="page-hero-glow" />
      </section>



      {/* Subpage Navigation Cards */}
      <section className="section section-tint !py-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ThreeDTiltCard maxTilt={6}>
              <Link
                to="/quality/security-compliance"
                className="p-8 rounded-2xl bg-white border border-[#E9ECEF] hover:border-[#EC5E27] block transition-all h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFF3ED] text-[#EC5E27] flex items-center justify-center mb-4">
                  <ShieldCheck size={24} />
                </div>
                <span className="text-xs font-mono font-bold text-[#EC5E27] uppercase tracking-wider block mb-1">
                  SUBPAGE 01 / AIR-GAPPED VDI
                </span>
                <h3 className="text-xl font-bold text-[#12151A] mb-2">
                  Enterprise Security & Compliance
                </h3>
                <p className="text-sm text-[#5F646D] leading-relaxed mb-4">
                  ISO 27001 Certified audit report alignment, ISO/IEC 27001 certified controls, HIPAA Business Associate Agreements, and encrypted data storage enclaves.
                </p>
                <span className="text-xs font-bold text-[#EC5E27] flex items-center gap-1">
                  Inspect Security Architecture <ArrowRight size={14} />
                </span>
              </Link>
            </ThreeDTiltCard>

            <ThreeDTiltCard maxTilt={6}>
              <Link
                to="/quality/calibration-framework"
                className="p-8 rounded-2xl bg-white border border-[#E9ECEF] hover:border-[#EC5E27] block transition-all h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFF3ED] text-[#EC5E27] flex items-center justify-center mb-4">
                  <CheckCircle2 size={24} />
                </div>
                <span className="text-xs font-mono font-bold text-[#EC5E27] uppercase tracking-wider block mb-1">
                  SUBPAGE 02 / MATHEMATICAL AGREEMENT
                </span>
                <h3 className="text-xl font-bold text-[#12151A] mb-2">
                  Statistical Calibration Framework
                </h3>
                <p className="text-sm text-[#5F646D] leading-relaxed mb-4">
                  Inter-annotator agreement metrics (Krippendorff's Alpha, Cohen's Kappa, IoU), dynamic blind gold injection, and multi-pass rater adjudication workflows.
                </p>
                <span className="text-xs font-bold text-[#EC5E27] flex items-center gap-1">
                  Review Calibration Metrics <ArrowRight size={14} />
                </span>
              </Link>
            </ThreeDTiltCard>
          </div>
        </div>
      </section>

      {/* The 6 Quality Pillars Grid */}
      <section id="pillars" className="section section-white">
        <div className="container">
          <SectionHeading
            eyebrow="EMPIRICAL CONTROLS"
            title="Six Rigorous Principles Built Into Every Sprint."
            description="We reject subjective crowd metrics. Every dataset delivery is backed by reproducible statistical consensus and certified acceptance gates."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {qualityPillars.map((p) => (
              <article
                key={p.title}
                className="p-7 rounded-2xl bg-[#F8FAFC] border border-[#E9ECEF] flex flex-col justify-between hover:border-[#EC5E27]/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FFF3ED] text-[#EC5E27] flex items-center justify-center">
                      <p.icon size={20} />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-[#EC5E27] px-2.5 py-1 rounded bg-white border border-[#E9ECEF]">
                      {p.metric}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#12151A] mb-2">{p.title}</h3>
                  <p className="text-sm text-[#5F646D] leading-relaxed">{p.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Technical FAQ for SEO */}
      <section className="section section-tint">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <span className="eyebrow"> TRUST ASSURANCE FAQ</span>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-[#12151A] tracking-tight mt-1">
              Enterprise Compliance & Data Handling
            </h2>
          </div>

          <div className="space-y-4">
            <details className="bg-white p-5 rounded-2xl border border-[#E9ECEF] cursor-pointer group">
              <summary className="font-bold text-[#12151A] text-sm md:text-base list-none flex items-center justify-between">
                <span>Can DaQube operate inside customer-managed VPC / cloud enclaves?</span>
                <span className="text-[#EC5E27] font-bold text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-sm text-[#5F646D] leading-relaxed mt-3 pt-3 border-t border-[#F8F9FA]">
                Yes. For sensitive defense, healthcare, and enterprise IP, our annotator workforce connects directly to your private AWS / Azure / GCP tenancy via Zero-Trust Network Access (ZTNA) with multi-factor biometric authentication. Data never leaves your storage buckets.
              </p>
            </details>

            <details className="bg-white p-5 rounded-2xl border border-[#E9ECEF] cursor-pointer group">
              <summary className="font-bold text-[#12151A] text-sm md:text-base list-none flex items-center justify-between">
                <span>How are annotator biases and drift tracked across multi-month sprints?</span>
                <span className="text-[#EC5E27] font-bold text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-sm text-[#5F646D] leading-relaxed mt-3 pt-3 border-t border-[#F8F9FA]">
                We maintain ongoing rolling statistical baselines per annotator. If a rater’s agreement score with gold benchmarks diverges by more than 1.5 standard deviations over 50 consecutive tasks, their queue is suspended automatically for review and re-calibration by senior adjudicators.
              </p>
            </details>

            <details className="bg-white p-5 rounded-2xl border border-[#E9ECEF] cursor-pointer group">
              <summary className="font-bold text-[#12151A] text-sm md:text-base list-none flex items-center justify-between">
                <span>Do you provide commercial indemnification against IP infringement?</span>
                <span className="text-[#EC5E27] font-bold text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-sm text-[#5F646D] leading-relaxed mt-3 pt-3 border-t border-[#F8F9FA]">
                Yes. 100% of collected voice corpora, image assets, and expert demonstrations include signed legal releases granting perpetual, royalty-free commercial derivative rights. We provide full legal indemnification documentation upon delivery.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section section-white">
        <div className="container cta-panel">
          <div className="cta-symbol"><ShieldCheck size={26} /></div>
          <div className="cta-copy">
            <span className="eyebrow">AUDIT OUR PIPELINES</span>
            <h2>Review our security whitepaper or schedule an audit.</h2>
            <p>Our compliance officer and security architects are available to review ISO 27001 Certified packages and execute mutual NDAs.</p>
          </div>
          <Link className="button button-crimson" to="/contact">
            Request Compliance Package <ArrowRight size={17} />
          </Link>
          <span className="cta-watermark">DQ</span>
        </div>
      </section>
    </>
  );
}

export default QualityPage;
