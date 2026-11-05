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
  Scale,
  Lock,
  Server,
  Key,
  Database,
  UserCheck,
  AlertTriangle,
  Mail,
  FileText
} from "lucide-react";
import { SectionHeading } from "../components/section-heading";
import { ThreeDTiltCard } from "../components/ThreeDVisualizers";

const certificationsList = [
  {
    id: "iso27001",
    code: "ISO/IEC 27001",
    title: "Information Security",
    tag: "Top Priority · Standard",
    tagColor: "bg-[#FFF3ED] text-[#EC5E27] border-[#EC5E27]/30",
    desc: "Protects confidential client data, access controls, and information security.",
    logo: "/images/certifications/iso27001.svg",
    alt: "ISO/IEC 27001 Information Security Logo"
  },
  {
    id: "iso9001",
    code: "ISO 9001",
    title: "Quality Management",
    tag: "Top Priority · Quality",
    tagColor: "bg-[#FFF3ED] text-[#EC5E27] border-[#EC5E27]/30",
    desc: "Quality processes, consistency, operational controls, and continuous improvement.",
    logo: "/images/certifications/iso9001.jpg",
    alt: "ISO 9001 Quality Management Logo"
  },
  {
    id: "iso42001",
    code: "ISO/IEC 42001",
    title: "AI Management System",
    tag: "Core to DaQube · Frontier AI",
    tagColor: "bg-blue-50 text-blue-700 border-blue-200",
    desc: "Responsible AI management, governance, and risk management.",
    logo: "/images/certifications/iso42001.jpg",
    alt: "ISO/IEC 42001 AI Management Logo"
  },
  {
    id: "iso27701",
    code: "ISO/IEC 27701",
    title: "Privacy Management",
    tag: "Privacy Standard",
    tagColor: "bg-slate-50 text-slate-700 border-slate-200",
    desc: "Privacy controls and personal information management.",
    logo: "/images/certifications/iso27701.jpg",
    alt: "ISO/IEC 27701 Privacy Management Logo"
  },
  {
    id: "soc2",
    code: "SOC 2 Type II",
    title: "Security & Trust",
    tag: "Independent Audit",
    tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    desc: "Independent auditing of security, availability, confidentiality, and related controls.",
    logo: "/images/certifications/soc2.jpg",
    alt: "AICPA SOC 2 Type II Logo"
  },
  {
    id: "gdpr",
    code: "GDPR Compliant",
    title: "Data Protection",
    tag: "EU Regulation",
    tagColor: "bg-blue-50 text-blue-800 border-blue-200",
    desc: "European personal data protection regulation and consent compliance.",
    logo: "/images/certifications/gdpr.jpg",
    alt: "EU GDPR Data Protection Logo"
  },
  {
    id: "hipaa",
    code: "HIPAA Compliant",
    title: "Healthcare Data Privacy",
    tag: "Clinical Standard",
    tagColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    desc: "Strict healthcare information security for clinical & protected US health data.",
    logo: "/images/certifications/hipaa.jpg",
    alt: "HIPAA Healthcare Privacy Logo"
  },
  {
    id: "nist",
    code: "NIST AI RMF",
    title: "Responsible AI Framework",
    tag: "AI Governance",
    tagColor: "bg-amber-50 text-amber-800 border-amber-200",
    desc: "Federal framework for identifying, mapping, measuring, and managing AI-related risks.",
    logo: "/images/certifications/nist_airmf.jpg",
    alt: "NIST AI Risk Management Framework Logo"
  }
];

const qualityPillars = [
  {
    icon: SlidersHorizontal,
    title: "Statistical Inter-Annotator Agreement",
    metric: "Krippendorff's α ≥ 0.88",
    text: "Statistical agreement calculated across independent raters on every batch, separating genuine ambiguity from annotator variance."
  },
  {
    icon: Eye,
    title: "Double-Blind Gold Task Injection",
    metric: "5% Continuous Gold Sampling",
    text: "Pre-screened gold tasks dynamically injected into queues without raters' knowledge, triggering immediate alerts on quality slips."
  },
  {
    icon: LockKeyhole,
    title: "Air-Gapped Infrastructure & VDI",
    metric: "Zero-Trust Architecture",
    text: "Confidential model weights and customer telemetry processed inside air-gapped virtual desktops with disabled copy/paste."
  },
  {
    icon: FileCheck2,
    title: "100% Cryptographic Data Lineage",
    metric: "SHA-256 Provenance",
    text: "Every collected utterance, frame, and annotation carries immutable timestamped credentials and copyright clearance."
  },
  {
    icon: ClipboardCheck,
    title: "Deterministic Task Taxonomies",
    metric: "Sub-Pixel Boundaries",
    text: "Operationalized rubrics with counterexamples eliminate guesswork for visual segmentation, LiDAR cuboids, and RLHF ranking."
  },
  {
    icon: ShieldCheck,
    title: "HIPAA BAA & Regulatory Adherence",
    metric: "GDPR · CCPA · DPDP Act",
    text: "Dedicated healthcare cleanrooms executing Business Associate Agreements (BAA) with complete de-identification."
  }
];

export function QualityPage() {
  return (
    <>
      {/* 1. PAGE HERO */}
      <section className="page-hero relative overflow-hidden">
        <div className="container relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF3ED] border border-[#EC5E27]/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#EC5E27] animate-ping" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#EC5E27]">
              ENTERPRISE TRUST & QUALITY ASSURANCE
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-[#12151A] max-w-4xl leading-[1.12]">
            Quality is an Empirical Science. <br />
            <span className="text-[#EC5E27]">Not a Marketing Slogan.</span>
          </h1>

          <p className="max-w-2xl text-base md:text-lg text-[#5F646D] leading-relaxed mt-4 mb-8">
            Frontier AI systems fail when trained on noisy, ambiguous, or uncalibrated labels. DaQube enforces mathematical consensus, continuous blind gold testing, and air-gapped security for leading machine learning enterprises.
          </p>

          <div className="hero-actions flex flex-wrap gap-4 items-center">
            <Link className="button button-crimson shadow-xl" to="/contact">
              Request Security & Quality Audit <ArrowUpRight size={17} />
            </Link>
            <a className="text-link font-semibold text-[#12151A] hover:text-[#EC5E27] flex items-center gap-1" href="#certifications">
              View Certifications & Standards <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 2. SUBPAGE NAVIGATION CARDS */}
      <section className="section section-tint !py-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ThreeDTiltCard maxTilt={6}>
              <Link
                to="/quality/security-compliance"
                className="p-8 rounded-2xl bg-white border border-[#E9ECEF] hover:border-[#EC5E27] block transition-all h-full shadow-sm hover:shadow-xl group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFF3ED] text-[#EC5E27] flex items-center justify-center mb-4 group-hover:bg-[#EC5E27] group-hover:text-white transition-all">
                  <ShieldCheck size={24} />
                </div>
                <span className="text-xs font-mono font-bold text-[#EC5E27] uppercase tracking-wider block mb-1">
                  SUBPAGE 01 / AIR-GAPPED VDI
                </span>
                <h3 className="text-xl font-bold text-[#12151A] mb-2 group-hover:text-[#EC5E27] transition-colors">
                  Enterprise Security & Compliance
                </h3>
                <p className="text-sm text-[#5F646D] leading-relaxed mb-4">
                  ISO 27001 Certified audit alignment, ISO/IEC 27001 certified controls, HIPAA Business Associate Agreements, and encrypted data storage enclaves.
                </p>
                <span className="text-xs font-bold text-[#EC5E27] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Inspect Security Architecture <ArrowRight size={14} />
                </span>
              </Link>
            </ThreeDTiltCard>

            <ThreeDTiltCard maxTilt={6}>
              <Link
                to="/quality/calibration-framework"
                className="p-8 rounded-2xl bg-white border border-[#E9ECEF] hover:border-[#EC5E27] block transition-all h-full shadow-sm hover:shadow-xl group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFF3ED] text-[#EC5E27] flex items-center justify-center mb-4 group-hover:bg-[#EC5E27] group-hover:text-white transition-all">
                  <CheckCircle2 size={24} />
                </div>
                <span className="text-xs font-mono font-bold text-[#EC5E27] uppercase tracking-wider block mb-1">
                  SUBPAGE 02 / MATHEMATICAL AGREEMENT
                </span>
                <h3 className="text-xl font-bold text-[#12151A] mb-2 group-hover:text-[#EC5E27] transition-colors">
                  Statistical Calibration Framework
                </h3>
                <p className="text-sm text-[#5F646D] leading-relaxed mb-4">
                  Inter-annotator agreement metrics (Krippendorff's Alpha, Cohen's Kappa, IoU), dynamic blind gold injection, and multi-pass rater adjudication workflows.
                </p>
                <span className="text-xs font-bold text-[#EC5E27] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Review Calibration Metrics <ArrowRight size={14} />
                </span>
              </Link>
            </ThreeDTiltCard>
          </div>
        </div>
      </section>

      {/* 3. CERTIFICATIONS & STANDARDS SHOWCASE (8 UNIFIED LOGOS) */}
      <section id="certifications" className="section section-white !py-12 border-b border-[#E9ECEF]">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF3ED] border border-[#EC5E27]/30 text-xs font-mono font-bold text-[#EC5E27] uppercase tracking-wider mb-3">
              <ShieldCheck size={14} /> CERTIFIED COMPLIANCE & STANDARDS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#12151A] tracking-tight">
              Enterprise Governance & Accreditations
            </h2>
            <p className="text-sm text-[#5F646D] mt-2">
              DaQube's operations, security controls, and AI dataset pipelines are aligned with international information security, quality management, and ethical AI standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {certificationsList.map((cert) => (
              <div
                key={cert.id}
                className="p-5 rounded-2xl bg-white border border-[#E9ECEF] hover:border-[#EC5E27] transition-all flex flex-col justify-between shadow-xs hover:shadow-lg group"
              >
                <div>
                  {/* Standardized Logo Box maintaining uniform size across all 8 */}
                  <div className="h-24 w-full rounded-xl bg-[#F8FAFC] border border-[#F1F3F5] flex items-center justify-center p-2 mb-4 group-hover:bg-[#FFF8F5] transition-colors">
                    <img
                      src={cert.logo}
                      alt={cert.alt}
                      className="max-h-16 max-w-[140px] w-auto h-auto object-contain rounded"
                      loading="lazy"
                    />
                  </div>

                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border inline-block mb-2 ${cert.tagColor}`}>
                    {cert.tag}
                  </span>
                  <h3 className="text-base font-bold text-[#12151A] mb-0.5 leading-snug group-hover:text-[#EC5E27] transition-colors">
                    {cert.code}
                  </h3>
                  <div className="text-xs font-semibold text-[#8E939D] mb-2">
                    {cert.title}
                  </div>
                </div>
                <p className="text-xs text-[#5F646D] leading-relaxed pt-2 border-t border-[#F8F9FA]">
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE 6 QUALITY PILLARS GRID */}
      <section id="pillars" className="section section-tint">
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
                className="p-7 rounded-2xl bg-white border border-[#E9ECEF] flex flex-col justify-between hover:border-[#EC5E27]/40 transition-all shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FFF3ED] text-[#EC5E27] flex items-center justify-center">
                      <p.icon size={20} />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-[#EC5E27] px-2.5 py-1 rounded bg-[#FFF3ED] border border-[#EC5E27]/30">
                      {p.metric}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#12151A] mb-2">{p.title}</h3>
                  <p className="text-xs text-[#5F646D] leading-relaxed">{p.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. STREAMLINED TRUST CENTER (CONCISE, SCANNABLE ARCHITECTURE) */}
      <section id="trust-center" className="section section-white border-t border-[#E9ECEF]">
        <div className="container max-w-5xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF3ED] border border-[#EC5E27]/30 text-xs font-mono font-bold text-[#EC5E27] uppercase tracking-wider mb-3">
              <ShieldCheck size={14} /> DaQube Trust Center
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#12151A] tracking-tight">
              Transparent Sourcing & Security Controls
            </h2>
            <p className="text-sm text-[#5F646D] max-w-xl mx-auto mt-2">
              High-quality human-sourced data to power frontier AI, governed by strict ethics and security.
            </p>
          </div>

          {/* 4 Streamlined Core Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E9ECEF]">
              <div className="w-9 h-9 rounded-xl bg-[#FFF3ED] text-[#EC5E27] flex items-center justify-center mb-3">
                <Database size={18} />
              </div>
              <h3 className="text-base font-bold text-[#12151A] mb-1.5">Direct First-Party Sourcing</h3>
              <p className="text-xs text-[#5F646D] leading-relaxed mb-3">
                All data is collected from real human contributors who knowingly participate in guided tasks, surveys, and domain annotation. We strictly do not scrape private accounts or buy unverified broker data.
              </p>
              <div className="text-[11px] font-semibold text-[#EC5E27] flex items-center gap-1.5">
                <CheckCircle2 size={13} /> 100% Commissioned Human Ground Truth
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E9ECEF]">
              <div className="w-9 h-9 rounded-xl bg-[#FFF3ED] text-[#EC5E27] flex items-center justify-center mb-3">
                <Scale size={18} />
              </div>
              <h3 className="text-base font-bold text-[#12151A] mb-1.5">Consent & Contributor Rights</h3>
              <p className="text-xs text-[#5F646D] leading-relaxed mb-3">
                Explicit opt-in consent for every project sprint. Contributors receive transparent living-wage compensation benchmarks, maintain the right to withdraw, and must be 18+ years of age.
              </p>
              <div className="text-[11px] font-semibold text-[#EC5E27] flex items-center gap-1.5">
                <CheckCircle2 size={13} /> Ethical Labor & Voluntary Participation
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E9ECEF]">
              <div className="w-9 h-9 rounded-xl bg-[#FFF3ED] text-[#EC5E27] flex items-center justify-center mb-3">
                <Lock size={18} />
              </div>
              <h3 className="text-base font-bold text-[#12151A] mb-1.5">Multi-Layered Data Protection</h3>
              <p className="text-xs text-[#5F646D] leading-relaxed mb-3">
                TLS 1.2+ in transit, AES-256 at rest, dedicated rotated key management, air-gapped virtual desktop infrastructure (VDI) with disabled peripheral ports, and automated PII scrubbing.
              </p>
              <div className="text-[11px] font-semibold text-[#EC5E27] flex items-center gap-1.5">
                <CheckCircle2 size={13} /> Air-Gapped Cleanroom Governance
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E9ECEF]">
              <div className="w-9 h-9 rounded-xl bg-[#FFF3ED] text-[#EC5E27] flex items-center justify-center mb-3">
                <ShieldCheck size={18} />
              </div>
              <h3 className="text-base font-bold text-[#12151A] mb-1.5">Client Enclaves & 72-Hour SLA</h3>
              <p className="text-xs text-[#5F646D] leading-relaxed mb-3">
                Non-commingled private cloud storage (AWS, GCP, Azure), certified cryptographic data destruction upon delivery, and a guaranteed 72-hour security incident notification SLA.
              </p>
              <div className="text-[11px] font-semibold text-[#EC5E27] flex items-center gap-1.5">
                <CheckCircle2 size={13} /> Strict Confidentiality & Incident Containment
              </div>
            </div>
          </div>

          {/* Quick Security Contact Bar */}
          <div className="mt-6 p-4 rounded-xl bg-[#FFF8F5] border border-[#EC5E27]/20 flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="text-[#12151A] font-medium">
              Have security questions or need to review our complete compliance dossier?
            </span>
            <a
              href="mailto:security@daqube.ai"
              className="font-bold text-[#EC5E27] hover:underline flex items-center gap-1"
            >
              security@daqube.ai <ArrowRight size={13} />
            </a>
          </div>
        </div>
      </section>

      {/* 6. TECHNICAL FAQ */}
      <section className="section section-tint">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <span className="eyebrow">TRUST ASSURANCE FAQ</span>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-[#12151A] tracking-tight mt-1">
              Enterprise Compliance & Data Handling
            </h2>
          </div>

          <div className="space-y-4">
            <details className="bg-white p-5 rounded-2xl border border-[#E9ECEF] cursor-pointer group shadow-xs">
              <summary className="font-bold text-[#12151A] text-sm md:text-base list-none flex items-center justify-between">
                <span>Can DaQube operate inside customer-managed VPC / cloud enclaves?</span>
                <span className="text-[#EC5E27] font-bold text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-xs md:text-sm text-[#5F646D] leading-relaxed mt-3 pt-3 border-t border-[#F8F9FA]">
                Yes. For sensitive defense, healthcare, and enterprise IP, our annotator workforce connects directly to your private AWS / Azure / GCP tenancy via Zero-Trust Network Access (ZTNA) with multi-factor authentication. Data never leaves your storage buckets.
              </p>
            </details>

            <details className="bg-white p-5 rounded-2xl border border-[#E9ECEF] cursor-pointer group shadow-xs">
              <summary className="font-bold text-[#12151A] text-sm md:text-base list-none flex items-center justify-between">
                <span>How are annotator biases and drift tracked across multi-month sprints?</span>
                <span className="text-[#EC5E27] font-bold text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-xs md:text-sm text-[#5F646D] leading-relaxed mt-3 pt-3 border-t border-[#F8F9FA]">
                We maintain ongoing rolling statistical baselines per annotator. If a rater’s agreement score with gold benchmarks diverges by more than 1.5 standard deviations over 50 consecutive tasks, their queue is suspended automatically for review and re-calibration by senior adjudicators.
              </p>
            </details>

            <details className="bg-white p-5 rounded-2xl border border-[#E9ECEF] cursor-pointer group shadow-xs">
              <summary className="font-bold text-[#12151A] text-sm md:text-base list-none flex items-center justify-between">
                <span>Do you provide commercial indemnification against IP infringement?</span>
                <span className="text-[#EC5E27] font-bold text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-xs md:text-sm text-[#5F646D] leading-relaxed mt-3 pt-3 border-t border-[#F8F9FA]">
                Yes. 100% of collected voice corpora, image assets, and expert demonstrations include signed legal releases granting perpetual, royalty-free commercial derivative rights. We provide full legal indemnification documentation upon delivery.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA */}
      <section className="section section-white">
        <div className="container cta-panel">
          <div className="cta-symbol"><ShieldCheck size={26} /></div>
          <div className="cta-copy">
            <span className="eyebrow">AUDIT OUR PIPELINES</span>
            <h2>Review our security whitepaper or schedule an audit.</h2>
            <p>Our compliance officer and security architects are available to review security packages and execute mutual NDAs.</p>
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
