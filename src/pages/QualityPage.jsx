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
    metric: "ISO 27001 Certified Aligned",
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
    metric: "GDPR · CCPA · DPDP Act Compliant",
    text: "Dedicated healthcare cleanrooms executing Business Associate Agreements (BAA) with complete de-identification routines and signed biometric opt-in releases."
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
            <a className="text-link font-semibold text-[#12151A] hover:text-[#EC5E27] flex items-center gap-1" href="#trust-center">
              Explore Our Trust Center <ArrowRight size={16} />
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

      {/* 3. THE 6 QUALITY PILLARS GRID */}
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
                className="p-7 rounded-2xl bg-[#F8FAFC] border border-[#E9ECEF] flex flex-col justify-between hover:border-[#EC5E27]/40 transition-all shadow-xs"
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

      {/* 4. PART 1: TRUST CENTER (FULL INTEGRATION FROM LEGAL AND TRUST) */}
      <section id="trust-center" className="section section-tint border-t border-[#E9ECEF]">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF3ED] border border-[#EC5E27]/30 text-xs font-mono font-bold text-[#EC5E27] uppercase tracking-wider mb-3">
              <ShieldCheck size={14} /> DaQube Trust Center
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#12151A] tracking-tight">
              Transparent Data Sourcing & Infrastructure Security
            </h2>
            <p className="text-sm md:text-base text-[#5F646D] max-w-2xl mx-auto mt-3">
              DaQube provides high-quality, human-sourced data to power frontier AI. The people who contribute that data and the clients who rely on it both trust us with something valuable. Here is how we collect, curate, and protect data at every stage.
            </p>
          </div>

          <div className="space-y-8">
            {/* Trust Grid 1: What We Do & How We Collect */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-7 rounded-2xl bg-white border border-[#E9ECEF] shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#FFF3ED] text-[#EC5E27] flex items-center justify-center mb-4">
                  <Database size={20} />
                </div>
                <h3 className="text-lg font-bold text-[#12151A] mb-2">What We Do</h3>
                <p className="text-xs sm:text-sm text-[#5F646D] leading-relaxed mb-3">
                  DaQube collects, curates, and delivers ground-truth datasets used to train and evaluate AI systems. Our datasets span text, audio, images, 4K video, LiDAR point clouds, and multimodal structured data. We work directly with first-party enterprise clients who commission data for their own AI products, sourcing exclusively from real human contributors who knowingly participate.
                </p>
                <div className="text-xs font-semibold text-[#EC5E27] flex items-center gap-1.5">
                  <CheckCircle2 size={14} /> 100% First-Party Direct Commissioning
                </div>
              </div>

              <div className="p-7 rounded-2xl bg-white border border-[#E9ECEF] shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#FFF3ED] text-[#EC5E27] flex items-center justify-center mb-4">
                  <UserCheck size={20} />
                </div>
                <h3 className="text-lg font-bold text-[#12151A] mb-2">How We Collect Data</h3>
                <p className="text-xs sm:text-sm text-[#5F646D] leading-relaxed mb-3">
                  All data comes from human contributors who willingly take part through guided contribution tasks, structured surveys, client-supplied material enhancement, or direct vetted partner communities.
                </p>
                <div className="p-3 rounded-xl bg-[#FFF8F5] border border-[#EC5E27]/20 text-xs text-[#12151A] font-medium">
                  <strong>Strict Sourcing Boundary:</strong> We do not scrape private accounts, buy data from unknown brokers, or collect data covertly. Every contributor is informed of what is being captured and how it will be utilized.
                </div>
              </div>
            </div>

            {/* Trust Grid 2: Why We Collect & Consent Rights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-7 rounded-2xl bg-white border border-[#E9ECEF] shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#FFF3ED] text-[#EC5E27] flex items-center justify-center mb-4">
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="text-lg font-bold text-[#12151A] mb-2">Why We Collect Data</h3>
                <ul className="text-xs sm:text-sm text-[#5F646D] space-y-2 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-[#EC5E27] font-bold">•</span>
                    <span>Create training, validation, and testing benchmarks for enterprise AI models.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EC5E27] font-bold">•</span>
                    <span>Improve AI accuracy, fairness, and cultural diversity across 120+ regional dialects.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EC5E27] font-bold">•</span>
                    <span>Verify contribution quality, prevent automated bot fraud, and ensure fair worker compensation.</span>
                  </li>
                </ul>
                <p className="text-xs text-[#8E939D] mt-3 italic">
                  We enforce strict purpose limitation: if a project does not require a piece of data, we do not ask for it.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-white border border-[#E9ECEF] shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#FFF3ED] text-[#EC5E27] flex items-center justify-center mb-4">
                  <Scale size={20} />
                </div>
                <h3 className="text-lg font-bold text-[#12151A] mb-2">Consent and Contributor Rights</h3>
                <ul className="text-xs sm:text-sm text-[#5F646D] space-y-2 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-[#EC5E27] font-bold">✓</span>
                    <span><strong>Informed Consent:</strong> Clear consent terms agreed to before any submission begins.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EC5E27] font-bold">✓</span>
                    <span><strong>Voluntary Participation & Withdrawal:</strong> Contributors may stop or request deletion at any time.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EC5E27] font-bold">✓</span>
                    <span><strong>Fair Treatment:</strong> Transparent living-wage compensation benchmarks paid promptly.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EC5E27] font-bold">✓</span>
                    <span><strong>No Minors:</strong> Contribution programs are strictly for adults aged 18 and older.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Trust Center Banner: How We Protect Data (4 Architectural Pillars) */}
            <div className="p-8 rounded-2xl bg-white border border-[#E9ECEF] shadow-sm">
              <h3 className="text-xl font-bold text-[#12151A] mb-6 flex items-center gap-2">
                <Lock size={22} className="text-[#EC5E27]" />
                How We Protect Your Data (Technical & Physical Controls)
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <div className="text-xs font-mono font-bold uppercase text-[#EC5E27] mb-1">01 / ENCRYPTION</div>
                  <h4 className="font-bold text-sm text-[#12151A] mb-1">In Transit & At Rest</h4>
                  <p className="text-xs text-[#5F646D] leading-relaxed">
                    All data in transit is encrypted via TLS 1.2+. Stored data uses AES-256 with keys isolated, regularly rotated, and restricted to authorized personnel.
                  </p>
                </div>

                <div>
                  <div className="text-xs font-mono font-bold uppercase text-[#EC5E27] mb-1">02 / INFRASTRUCTURE</div>
                  <h4 className="font-bold text-sm text-[#12151A] mb-1">Private Cloud Enclaves</h4>
                  <p className="text-xs text-[#5F646D] leading-relaxed">
                    Data is stored on access-controlled servers across AWS, GCP, and Azure in North America, the EU, and India, with production strictly isolated from test environments.
                  </p>
                </div>

                <div>
                  <div className="text-xs font-mono font-bold uppercase text-[#EC5E27] mb-1">03 / ACCESS CONTROL</div>
                  <h4 className="font-bold text-sm text-[#12151A] mb-1">Least Privilege & MFA</h4>
                  <p className="text-xs text-[#5F646D] leading-relaxed">
                    Mandatory multi-factor authentication (MFA) on all administrative systems, comprehensive immutable audit logging, and signed employee NDAs.
                  </p>
                </div>

                <div>
                  <div className="text-xs font-mono font-bold uppercase text-[#EC5E27] mb-1">04 / INTEGRITY</div>
                  <h4 className="font-bold text-sm text-[#12151A] mb-1">SHA-256 Checksums</h4>
                  <p className="text-xs text-[#5F646D] leading-relaxed">
                    Checksums detect unauthorized changes, direct identifiers are masked, and encrypted backup recovery procedures are regularly audited.
                  </p>
                </div>
              </div>
            </div>

            {/* Client Protection, Incident Response & Reporting */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-[#E9ECEF]">
                <h4 className="font-bold text-sm text-[#12151A] mb-2 flex items-center gap-1.5">
                  <ShieldCheck size={16} className="text-[#EC5E27]" /> Client Data Isolation
                </h4>
                <p className="text-xs text-[#5F646D] leading-relaxed">
                  Client datasets are kept confidential under formal agreements and never shared with other clients. Datasets are delivered exclusively via secure channels, and scratch copies are destroyed upon project sign-off.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E9ECEF]">
                <h4 className="font-bold text-sm text-[#12151A] mb-2 flex items-center gap-1.5">
                  <AlertTriangle size={16} className="text-[#EC5E27]" /> 72-Hour Incident SLA
                </h4>
                <p className="text-xs text-[#5F646D] leading-relaxed">
                  We maintain a documented incident response protocol. In the event of confirmed data compromise, we contain the issue immediately and notify affected parties and regulators within 72 hours.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E9ECEF]">
                <h4 className="font-bold text-sm text-[#12151A] mb-2 flex items-center gap-1.5">
                  <Mail size={16} className="text-[#EC5E27]" /> Report Security Concerns
                </h4>
                <p className="text-xs text-[#5F646D] leading-relaxed mb-3">
                  If you discover a vulnerability or have a technical compliance inquiry, our security team responds promptly.
                </p>
                <a
                  href="mailto:security@daqube.ai"
                  className="text-xs font-bold text-[#EC5E27] hover:underline flex items-center gap-1"
                >
                  security@daqube.ai <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TECHNICAL FAQ */}
      <section className="section section-white">
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
              <p className="text-sm text-[#5F646D] leading-relaxed mt-3 pt-3 border-t border-[#F8F9FA]">
                Yes. For sensitive defense, healthcare, and enterprise IP, our annotator workforce connects directly to your private AWS / Azure / GCP tenancy via Zero-Trust Network Access (ZTNA) with multi-factor authentication. Data never leaves your storage buckets.
              </p>
            </details>

            <details className="bg-white p-5 rounded-2xl border border-[#E9ECEF] cursor-pointer group shadow-xs">
              <summary className="font-bold text-[#12151A] text-sm md:text-base list-none flex items-center justify-between">
                <span>How are annotator biases and drift tracked across multi-month sprints?</span>
                <span className="text-[#EC5E27] font-bold text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-sm text-[#5F646D] leading-relaxed mt-3 pt-3 border-t border-[#F8F9FA]">
                We maintain ongoing rolling statistical baselines per annotator. If a rater’s agreement score with gold benchmarks diverges by more than 1.5 standard deviations over 50 consecutive tasks, their queue is suspended automatically for review and re-calibration by senior adjudicators.
              </p>
            </details>

            <details className="bg-white p-5 rounded-2xl border border-[#E9ECEF] cursor-pointer group shadow-xs">
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

      {/* 6. BOTTOM CTA */}
      <section className="section section-tint">
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
