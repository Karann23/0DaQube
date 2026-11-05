import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ChevronRight, Briefcase, GraduationCap, Code2, Sparkles, CheckCircle2, Globe2, ShieldAlert, ShieldCheck, Lock, Award, Users } from "lucide-react";
import { ImagePlaceholder } from "../components/image-placeholder";

const workforcePillars = [
  {
    icon: ShieldCheck,
    title: "Zero Exploitative Crowdsourcing",
    tag: "ETHICAL LABOR",
    description: "Unlike opaque crowdsourced micro-task farms, DaQube operates on direct, transparent contracts with verified living-wage standards across all regional hubs.",
    metrics: "100% Direct Contracts · Zero Algorithmic Wage Suppression"
  },
  {
    icon: GraduationCap,
    title: "Domain-Credentialed Task Leads",
    tag: "VERIFIED EXPERTISE",
    description: "Complex evaluations are governed by credentialed subject-matter specialists—licensed clinicians, software engineers, and acoustic phoneticians.",
    metrics: "Tier-4 Domain Specialization · Sub-Millisecond Ground Truth"
  },
  {
    icon: Lock,
    title: "Air-Gapped Security & VDI Enclaves",
    tag: "DATA PROTECTION",
    description: "Annotators and domain raters operate within restricted Virtual Desktop Infrastructures (VDI) with disabled USB transfers, clipboard isolation, and zero-trust logging.",
    metrics: "ISO 27001 Aligned · ISO 27001 Certified · Zero Local Storage"
  },
  {
    icon: Award,
    title: "Continuous Blind Gold Calibration",
    tag: "QUALITY GOVERNANCE",
    description: "Every production task stream incorporates continuous 5% blind golden task injection and mathematical inter-rater agreement monitoring.",
    metrics: "Krippendorff α ≥ 0.92 · Statistical Consensus Arbitration"
  }
];

export function AboutCareersPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero page-hero-dark">
        <div className="container">
          <div className="breadcrumb" style={{ marginBottom: "16px" }}>
            <Link to="/about">About Us</Link>
            <ChevronRight size={14} className="inline mx-2 opacity-50" />
            <span>Workforce Standards & Culture</span>
          </div>

          <span className="eyebrow eyebrow-light">
             WORKFORCE GOVERNANCE & STANDARDS
          </span>
          <h1>
            Engineering Rigor.<br />
            <span>Ethical Operations at Scale.</span>
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-[#CBD5E1] leading-relaxed mt-4 mb-8">
            How DaQube structures, governs, and calibrates our specialized engineering teams and global contributor network to produce ground-truth data for frontier foundation models.
          </p>

          <div className="hero-actions">
            <Link className="button button-crimson" to="/contact">
              Discuss an Enterprise Project <ArrowUpRight size={17} />
            </Link>
            <Link className="text-link text-link-light" to="/quality">
              Inspect Quality Framework <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        <div className="page-hero-glow" />
      </section>

      {/* HIRING NOTICE: APPLICATIONS CLOSED */}
      <section className="section section-white !py-8">
        <div className="container">
          <div className="p-6 md:p-8 rounded-3xl bg-[#F8FAFC] border border-[rgba(20,23,26,0.1)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[rgba(236,94,39,0.1)] text-[#EC5E27] flex items-center justify-center shrink-0 mt-1">
                <Users size={24} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#EC5E27] px-2 py-0.5 rounded bg-[#FFF3ED] border border-[#EC5E27]/20">
                    STATUS: FULLY STAFFED
                  </span>
                  <span className="text-xs text-[#5F646D]">Internal Operations</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#12151A] mt-1">
                  Recruitment & Applications Currently Closed
                </h3>
                <p className="text-xs md:text-sm text-[#5F646D] max-w-2xl mt-1 leading-relaxed">
                  Our core engineering squads, research teams, and global contributor hubs are currently at full operational capacity. We are not actively hiring or reviewing external job applications at this time.
                </p>
              </div>
            </div>

            <Link
              to="/contact"
              className="button button-dark shrink-0 text-xs font-bold"
            >
              Enterprise Partnerships <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Visual Space: Contributor Operations & Real-Time Gold Task Calibration */}
      <section className="section section-white !py-4">
        <div className="container">
          <ImagePlaceholder
            aspect="21/9"
            label="GLOBAL WORKFORCE TELEMETRY & CONTINUOUS QUALIFICATION ENGINE"
            caption="Real-time multi-tier specialist rater distribution, automated gold-task injection, and inter-annotator agreement tracking across global cleanrooms"
            specs="Krippendorff's Alpha Monitoring · Zero Algorithmic Wage Suppression · Merit-Based Task Allocation"
          />
        </div>
      </section>

      {/* Core Workforce Governance Pillars */}
      <section className="section section-tint">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow"> OPERATIONAL ETHICS</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#12151A] tracking-tight mt-1">
              How We Build and Govern Our Workforce
            </h2>
            <p className="text-xs md:text-sm text-[#5F646D] mt-2 leading-relaxed">
              High-accuracy AI models require motivated, credentialed, and fairly compensated human experts working under strict security protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workforcePillars.map((p, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl bg-white border border-[#E9ECEF] flex flex-col justify-between hover:border-[#EC5E27] transition-all hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#FFF3ED] text-[#EC5E27] flex items-center justify-center">
                      <p.icon size={22} />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#EC5E27]">
                      {p.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#12151A] mb-2">{p.title}</h3>
                  <p className="text-xs text-[#5F646D] leading-relaxed mb-6">{p.description}</p>
                </div>

                <div className="pt-4 border-t border-[#F1F3F5] text-[11px] font-mono font-semibold text-[#12151A]">
                  {p.metrics}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Security Callout */}
      <section className="section section-white">
        <div className="container">
          <div className="p-8 md:p-12 rounded-3xl bg-[#12151A] text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-[10.5px] font-mono uppercase tracking-widest text-[#EC5E27] font-bold block mb-2">
                ENTERPRISE AIR-GAPPED PILOTS
              </span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
                Need a Dedicated, Calibrated Cleanroom Squad?
              </h2>
              <p className="text-xs md:text-sm text-[#CBD5E1] leading-relaxed">
                We configure private VDI clusters, execute custom NDAs, and calibrate dedicated domain specialists specifically for your model's taxonomy and acceptance criteria.
              </p>
            </div>

            <Link
              to="/contact"
              className="button button-crimson shrink-0"
            >
              Discuss Your Requirements <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
export default AboutCareersPage;
