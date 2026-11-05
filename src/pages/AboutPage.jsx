import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Layers,
  UsersRound,
  Building2,
  Briefcase,
  Globe2,
  Cpu,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Microscope,
  Scale,
  Fingerprint,
  FileCode2,
  Award,
  Headphones,
  Zap,
  Lock,
  Database,
  ChevronDown,
  Activity,
  X
} from "lucide-react";
import { SectionHeading } from "../components/section-heading";
import { ThreeDTiltCard } from "../components/ThreeDVisualizers";
import "./AboutPage.css";

export function AboutPage() {
  return (
    <>
      {/* 1. HERO SECTION WITH ANIMATED TEXT & TELEMETRY STATS */}
      <section className="page-hero relative overflow-hidden">
        <div className="container relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF3ED] border border-[#EC5E27]/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#EC5E27] animate-ping" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#EC5E27]">
              THE HUMAN INTELLIGENCE LAYER FOR FRONTIER AI
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-[#12151A] max-w-4xl leading-[1.12]">
            Transforming Real-World Nuance{" "}
            <br className="hidden sm:inline" />
            <span className="about-animated-gradient-text">
              Into Ground-Truth AI Intelligence.
            </span>
          </h1>

          <p className="max-w-3xl text-base md:text-lg text-[#5F646D] leading-relaxed mt-5 mb-8">
            As foundation models, multimodal LLMs, and autonomous systems scale past trillions of parameters, synthetic loops and generic web scraping hit diminishing returns. DaQube bridges the gap with 25,000+ verified specialists across 100+ countries, air-gapped cleanroom governance, and statistical consensus engineering.
          </p>

          <div className="hero-actions flex flex-wrap gap-4 items-center">
            <Link className="button button-crimson shadow-xl" to="/contact">
              Discuss Your Pipeline <ArrowUpRight size={17} />
            </Link>
            <Link className="text-link font-semibold text-[#12151A] hover:text-[#EC5E27] flex items-center gap-1" to="/about/company">
              Explore Our Physical Labs & Cleanrooms <ArrowRight size={16} />
            </Link>
          </div>

          {/* Real-time Global Metrics Showcase (Synthesized from GTS, LXT & Alanxa) */}
          <div className="about-stats-grid">
            <div className="about-stat-card">
              <div className="about-stat-value">25,000+</div>
              <div className="about-stat-label">Vetted Human Contributors</div>
              <div className="about-stat-sub">Across 100+ Countries</div>
            </div>

            <div className="about-stat-card">
              <div className="about-stat-value">1,000+</div>
              <div className="about-stat-label">Language & Dialect Locales</div>
              <div className="about-stat-sub">Global Cultural Nuance</div>
            </div>

            <div className="about-stat-card">
              <div className="about-stat-value">99.8%</div>
              <div className="about-stat-label">First-Pass Acceptance SLA</div>
              <div className="about-stat-sub">Statistical Consensus</div>
            </div>

            <div className="about-stat-card">
              <div className="about-stat-value">10M+</div>
              <div className="about-stat-label">Calibrated Annotation Units</div>
              <div className="about-stat-sub">Delivered into Production</div>
            </div>

            <div className="about-stat-card">
              <div className="about-stat-value">&lt; 5 Days</div>
              <div className="about-stat-label">Rapid Calibrated Pilot</div>
              <div className="about-stat-sub">Protocol Co-Design</div>
            </div>
          </div>
        </div>
        <div className="page-hero-glow" />
      </section>

      {/* 2. SUBPAGE QUICK LINKS (3D TILT CARDS) */}
      <section className="section section-white !py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ThreeDTiltCard maxTilt={6}>
              <Link
                to="/about/company"
                className="p-8 rounded-2xl bg-[#F8FAFC] border border-[#E9ECEF] hover:border-[#EC5E27] block transition-all h-full shadow-sm hover:shadow-xl group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFF3ED] text-[#EC5E27] flex items-center justify-center mb-4 group-hover:bg-[#EC5E27] group-hover:text-white transition-all">
                  <Building2 size={24} />
                </div>
                <span className="text-xs font-mono font-bold text-[#EC5E27] uppercase tracking-wider block mb-1">
                  SUBPAGE 01 / INFRASTRUCTURE & FACILITIES
                </span>
                <h3 className="text-xl font-bold text-[#12151A] mb-2 group-hover:text-[#EC5E27] transition-colors">
                  Company, Leadership & Physical Labs
                </h3>
                <p className="text-sm text-[#5F646D] leading-relaxed mb-4">
                  Meet our machine learning systems engineers, acoustic speech phoneticians, and tour our physical sound-isolated whisper chambers and biometric cleanroom testing studios.
                </p>
                <span className="text-xs font-bold text-[#EC5E27] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Explore Infrastructure & Leadership <ArrowRight size={14} />
                </span>
              </Link>
            </ThreeDTiltCard>

            <ThreeDTiltCard maxTilt={6}>
              <Link
                to="/about/careers"
                className="p-8 rounded-2xl bg-[#F8FAFC] border border-[#E9ECEF] hover:border-[#EC5E27] block transition-all h-full shadow-sm hover:shadow-xl group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFF3ED] text-[#EC5E27] flex items-center justify-center mb-4 group-hover:bg-[#EC5E27] group-hover:text-white transition-all">
                  <Briefcase size={24} />
                </div>
                <span className="text-xs font-mono font-bold text-[#EC5E27] uppercase tracking-wider block mb-1">
                  SUBPAGE 02 / WORKFORCE STANDARDS & ETHICS
                </span>
                <h3 className="text-xl font-bold text-[#12151A] mb-2 group-hover:text-[#EC5E27] transition-colors">
                  Ethical Labor Standards & Global Network
                </h3>
                <p className="text-sm text-[#5F646D] leading-relaxed mb-4">
                  Learn how we uphold living-wage benchmarks, reject predatory task clawbacks, and empower certified domain specialists with continuous skill development.
                </p>
                <span className="text-xs font-bold text-[#EC5E27] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Workforce & Ethics Standards <ArrowRight size={14} />
                </span>
              </Link>
            </ThreeDTiltCard>
          </div>
        </div>
      </section>

      {/* 3. THE GROUND-TRUTH BOTTLENECK: SYNTHETIC VS. HUMAN GROUND TRUTH */}
      <section className="section section-tint">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <span className="eyebrow">THE FOUNDATION MODEL BOTTLENECK</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#12151A] tracking-tight mt-2 mb-4 leading-tight">
                Models don't hallucinate in math. <br />
                <span className="text-[#EC5E27]">They hallucinate in nuance.</span>
              </h2>
              <p className="text-sm md:text-base text-[#5F646D] leading-relaxed mb-4">
                Public internet datasets are exhausted. Training subsequent model generations on AI-generated synthetic data triggers model collapse and amplifies societal biases.
              </p>
              <p className="text-sm md:text-base text-[#5F646D] leading-relaxed">
                DaQube was founded on a singular conviction: <strong className="text-[#12151A]">the quality ceiling of artificial intelligence is fundamentally bound to the caliber of human judgment used to train and calibrate it.</strong>
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-white border border-[#E9ECEF] shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center font-bold text-xs mb-3">
                    <X size={15} />
                  </div>
                  <h4 className="font-bold text-sm text-[#12151A] mb-2">Uncalibrated Web Scraping & Synthetic Data</h4>
                  <ul className="text-xs text-[#5F646D] space-y-2">
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-400 font-bold">•</span>
                      <span>Degraded accuracy on long-tail corner cases</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-400 font-bold">•</span>
                      <span>Recursive synthetic model collapse</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-400 font-bold">•</span>
                      <span>Severe cultural & demographic blindspots</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-400 font-bold">•</span>
                      <span>Regulatory exposure under EU AI Act & HIPAA</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#FFF8F5] to-white border border-[#EC5E27]/40 shadow-md relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#EC5E27]/10 rounded-full blur-xl pointer-events-none" />
                  <div className="w-8 h-8 rounded-lg bg-[#EC5E27] text-white flex items-center justify-center font-bold text-xs mb-3 shadow-md">
                    <CheckCircle2 size={15} />
                  </div>
                  <h4 className="font-bold text-sm text-[#12151A] mb-2">DaQube Calibrated Human Ground Truth</h4>
                  <ul className="text-xs text-[#5F646D] space-y-2">
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 size={13} className="text-[#EC5E27] mt-0.5 flex-shrink-0" />
                      <span className="font-medium text-[#12151A]">Targeted in-field edge-case capture</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 size={13} className="text-[#EC5E27] mt-0.5 flex-shrink-0" />
                      <span className="font-medium text-[#12151A]">Krippendorff's α ≥ 0.88 multi-tier consensus</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 size={13} className="text-[#EC5E27] mt-0.5 flex-shrink-0" />
                      <span className="font-medium text-[#12151A]">Native dialect & cultural demographic balance</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 size={13} className="text-[#EC5E27] mt-0.5 flex-shrink-0" />
                      <span className="font-medium text-[#12151A]">Air-gapped cleanroom audit trails & zero PII</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOUR CORE ARCHITECTURAL PILLARS (GTS + LXT + OMNYSYS + ALANXA SYNTHESIS) */}
      <section className="section section-white">
        <div className="container">
          <SectionHeading
            eyebrow="CORE ARCHITECTURAL PILLARS"
            title="Engineered for Precision. Built for Planetary Scale."
            description="Our end-to-end ground-truth architecture incorporates the best methodologies across systems engineering, acoustic linguistics, and air-gapped security governance."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {/* Pillar 1 */}
            <div className="about-pillar-card">
              <div className="about-pillar-icon">
                <Globe2 size={26} />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#EC5E27] font-bold block mb-1">
                PILLAR 01 · MULTIMODAL BREADTH
              </span>
              <h3 className="text-lg font-bold text-[#12151A] mb-2">
                Planetary In-Field Data Capture
              </h3>
              <p className="text-xs text-[#5F646D] leading-relaxed mb-4 flex-grow">
                Spanning 100+ countries and 1,000+ locales, our contributors collect in-field photographic datasets, 4K multi-angle video, conversational acoustic speech, and sensor telemetry under diverse environmental conditions.
              </p>
              <div className="text-[11px] font-semibold text-[#12151A] pt-3 border-t border-[#F1F3F5] flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-[#EC5E27]" />
                <span>120+ Dialects & Cultural Nuances</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="about-pillar-card">
              <div className="about-pillar-icon">
                <Microscope size={26} />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#EC5E27] font-bold block mb-1">
                PILLAR 02 · VERIFIED EXPERTS
              </span>
              <h3 className="text-lg font-bold text-[#12151A] mb-2">
                Credentialed Specialist Network
              </h3>
              <p className="text-xs text-[#5F646D] leading-relaxed mb-4 flex-grow">
                For high-stakes tasks like clinical healthcare, legal reasoning, financial audits, and multi-step code synthesis, we deploy pre-vetted specialists—including MDs, PhD researchers, and Staff Software Engineers.
              </p>
              <div className="text-[11px] font-semibold text-[#12151A] pt-3 border-t border-[#F1F3F5] flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-[#EC5E27]" />
                <span>Top 2% Subject Matter Specialists</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="about-pillar-card">
              <div className="about-pillar-icon">
                <Cpu size={26} />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#EC5E27] font-bold block mb-1">
                PILLAR 03 · STATISTICAL RIGOR
              </span>
              <h3 className="text-lg font-bold text-[#12151A] mb-2">
                Deterministic Consensus Pipeline
              </h3>
              <p className="text-xs text-[#5F646D] leading-relaxed mb-4 flex-grow">
                Every unit passes through multi-tier blind annotation, Krippendorff's alpha (α ≥ 0.88) statistical agreement scoring, and automated schema validation formatted directly for COCO, Parquet, and KITTI.
              </p>
              <div className="text-[11px] font-semibold text-[#12151A] pt-3 border-t border-[#F1F3F5] flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-[#EC5E27]" />
                <span>Continuous Calibration Telemetry</span>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="about-pillar-card">
              <div className="about-pillar-icon">
                <ShieldCheck size={26} />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#EC5E27] font-bold block mb-1">
                PILLAR 04 · ENTERPRISE TRUST
              </span>
              <h3 className="text-lg font-bold text-[#12151A] mb-2">
                Air-Gapped Cleanroom Topology
              </h3>
              <p className="text-xs text-[#5F646D] leading-relaxed mb-4 flex-grow">
                Sensitive biometric data and confidential weights are handled within zero-trust virtual desktop environments with disabled clipboard, blocked USB ports, zero external internet egress, and complete PII redaction.
              </p>
              <div className="text-[11px] font-semibold text-[#12151A] pt-3 border-t border-[#F1F3F5] flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-[#EC5E27]" />
                <span>ISO 27001 Certified & HIPAA BAA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE 3-PHASE EXECUTION LIFECYCLE (ALANXA + GTS RAPID DEPLOYMENT) */}
      <section className="section section-tint">
        <div className="container">
          <SectionHeading
            eyebrow="RAPID DEPLOYMENT LIFECYCLE"
            title="From Protocol Co-Design to Production Delivery in Days"
            description="We eliminate bureaucratic overhead with an agile, engineering-driven workflow designed to integrate seamlessly into your ML training loop."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="about-evolution-step">
              <span className="about-step-number">PHASE 01 · 5-DAY CALIBRATED PILOT</span>
              <h4 className="text-base font-bold text-[#12151A] mb-2">Protocol Co-Design & Calibration</h4>
              <p className="text-xs text-[#5F646D] leading-relaxed mb-4">
                Our ML engineers work directly with your team to formulate task schemas, edge-case taxomies, and gold-standard benchmark datasets. A 500-unit pilot is delivered in under 5 business days for immediate alignment.
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#EC5E27]">
                <Zap size={14} /> Rapid Iteration Loop
              </div>
            </div>

            <div className="about-evolution-step">
              <span className="about-step-number">PHASE 02 · HIGH-THROUGHPUT EXECUTION</span>
              <h4 className="text-base font-bold text-[#12151A] mb-2">Targeted Collection & Blind Consensus</h4>
              <p className="text-xs text-[#5F646D] leading-relaxed mb-4">
                We activate matched contributor cohorts across our global network. Data flows through dual-blind annotation tiers with automated inter-annotator disagreement flagging and senior specialist adjudication.
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#EC5E27]">
                <Activity size={14} /> Real-Time Telemetry Tracking
              </div>
            </div>

            <div className="about-evolution-step">
              <span className="about-step-number">PHASE 03 · CONTINUOUS PIPELINE DELIVERY</span>
              <h4 className="text-base font-bold text-[#12151A] mb-2">Automated Ingestion & Schema Delivery</h4>
              <p className="text-xs text-[#5F646D] leading-relaxed mb-4">
                Cleaned, validated data is packaged into native ML schemas (Parquet, COCO JSON, KITTI format, Praat TextGrids) and pushed directly into your cloud storage bucket (AWS S3, GCP Cloud Storage, Azure Blob).
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#EC5E27]">
                <Database size={14} /> Direct Bucket Ingestion
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. EXPANDED ENTERPRISE FAQ SECTION (ACCORDION) */}
      <section className="section section-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <span className="eyebrow">ENTERPRISE FAQ</span>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-[#12151A] tracking-tight mt-1">
              Frequently Asked Questions About DaQube
            </h2>
            <p className="text-sm text-[#5F646D] mt-2 max-w-xl mx-auto">
              Everything engineering leaders and AI procurement teams need to know about our global operations and data standards.
            </p>
          </div>

          <div className="space-y-4">
            <details className="bg-white p-5 rounded-2xl border border-[#E9ECEF] cursor-pointer group shadow-xs hover:border-[#EC5E27]/50 transition-all">
              <summary className="font-bold text-[#12151A] text-sm md:text-base list-none flex items-center justify-between">
                <span>Where are DaQube's operations and physical facilities located?</span>
                <span className="text-[#EC5E27] font-bold text-lg group-open:rotate-45 transition-transform flex-shrink-0 ml-4">+</span>
              </summary>
              <p className="text-xs md:text-sm text-[#5F646D] leading-relaxed mt-3 pt-3 border-t border-[#F8F9FA]">
                DaQube operates physical high-throughput data engineering and acoustic labs in North America, Europe, and Asia-Pacific, with distributed contributor hubs covering 100+ countries. We maintain physical sound-isolated whisper chambers (&lt; -60 dBFS noise floors) for studio-grade speech recording and dedicated air-gapped cleanrooms with disabled external ingress for confidential model evaluation.
              </p>
            </details>

            <details className="bg-white p-5 rounded-2xl border border-[#E9ECEF] cursor-pointer group shadow-xs hover:border-[#EC5E27]/50 transition-all">
              <summary className="font-bold text-[#12151A] text-sm md:text-base list-none flex items-center justify-between">
                <span>How does DaQube differ from traditional crowdsourcing platforms?</span>
                <span className="text-[#EC5E27] font-bold text-lg group-open:rotate-45 transition-transform flex-shrink-0 ml-4">+</span>
              </summary>
              <p className="text-xs md:text-sm text-[#5F646D] leading-relaxed mt-3 pt-3 border-t border-[#F8F9FA]">
                Unlike open-crowd marketplaces that rely on unverified anonymous workers, DaQube operates a curated, credential-verified network of over 25,000 contributors and domain specialists (MDs, PhDs, certified linguists, senior coders). We enforce blind multi-tier agreement protocols, deliver custom data collection from scratch, and maintain guaranteed SLAs on first-pass model acceptance.
              </p>
            </details>

            <details className="bg-white p-5 rounded-2xl border border-[#E9ECEF] cursor-pointer group shadow-xs hover:border-[#EC5E27]/50 transition-all">
              <summary className="font-bold text-[#12151A] text-sm md:text-base list-none flex items-center justify-between">
                <span>How do you handle data privacy, consent, and regulatory compliance?</span>
                <span className="text-[#EC5E27] font-bold text-lg group-open:rotate-45 transition-transform flex-shrink-0 ml-4">+</span>
              </summary>
              <p className="text-xs md:text-sm text-[#5F646D] leading-relaxed mt-3 pt-3 border-t border-[#F8F9FA]">
                All human participants provide explicit, legally vetted informed consent specifically authorizing machine learning model training. All visual and biometric data undergoes automated multi-pass PII redaction (face blurring, license plate masking, identifier scrubbing). Our infrastructure is fully ISO 27001 Certified, GDPR compliant, and ready for HIPAA Business Associate Agreements (BAA).
              </p>
            </details>

            <details className="bg-white p-5 rounded-2xl border border-[#E9ECEF] cursor-pointer group shadow-xs hover:border-[#EC5E27]/50 transition-all">
              <summary className="font-bold text-[#12151A] text-sm md:text-base list-none flex items-center justify-between">
                <span>What is the typical timeline for scoping and launching a custom project?</span>
                <span className="text-[#EC5E27] font-bold text-lg group-open:rotate-45 transition-transform flex-shrink-0 ml-4">+</span>
              </summary>
              <p className="text-xs md:text-sm text-[#5F646D] leading-relaxed mt-3 pt-3 border-t border-[#F8F9FA]">
                We can initiate protocol co-design and deploy a calibrated 500-unit pilot within 5 business days. Once your engineering team verifies the pilot benchmark, full-scale collection and multi-tier annotation ramps up immediately across our global contributor network.
              </p>
            </details>

            <details className="bg-white p-5 rounded-2xl border border-[#E9ECEF] cursor-pointer group shadow-xs hover:border-[#EC5E27]/50 transition-all">
              <summary className="font-bold text-[#12151A] text-sm md:text-base list-none flex items-center justify-between">
                <span>How does DaQube ensure ethical contributor compensation?</span>
                <span className="text-[#EC5E27] font-bold text-lg group-open:rotate-45 transition-transform flex-shrink-0 ml-4">+</span>
              </summary>
              <p className="text-xs md:text-sm text-[#5F646D] leading-relaxed mt-3 pt-3 border-t border-[#F8F9FA]">
                We are committed to ethical AI labor standards. We enforce fair, transparent compensation benchmarks tied to verified credentials and project difficulty, completely rejecting deceptive qualification churn, unpaid test batches, and predatory task clawbacks.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* 7. CTA BANNER */}
      <section className="section section-tint">
        <div className="container cta-panel">
          <div className="cta-symbol"><Sparkles size={26} /></div>
          <div className="cta-copy">
            <span className="eyebrow">BUILD WITH DAQUBE</span>
            <h2>Let's start with your ML problem.</h2>
            <p>Tell us what your AI system needs to learn, perceive, or evaluate—we'll deliver the ground truth.</p>
          </div>
          <Link className="button button-crimson" to="/contact">
            Scope a Pilot Project <ArrowRight size={17} />
          </Link>
          <span className="cta-watermark">DQ</span>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
