import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, CheckCircle2, ChevronRight, Shield, Lock, Server, FileCheck, EyeOff } from "lucide-react";
import { ImagePlaceholder } from "../components/image-placeholder";

export function QualitySecurityPage() {
  return (
    <>
      <section className="page-hero page-hero-dark">
        <div className="container">
          <div className="breadcrumb" style={{ marginBottom: "16px" }}>
            <Link to="/quality">Quality & Trust</Link>
            <ChevronRight size={14} className="inline mx-2 opacity-50" />
            <span>Enterprise Security & Compliance</span>
          </div>

          <span className="eyebrow eyebrow-light">
             AIR-GAPPED SECURITY CONTROLS
          </span>
          <h1>
            Enterprise Security.<br />
            <span>Air-Gapped & Audited.</span>
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-[#CBD5E1] leading-relaxed mt-4 mb-8">
            ISO 27001 Certified certified, ISO/IEC 27001 aligned infrastructure with HIPAA Business Associate Agreements (BAA), virtual desktop isolation, and multi-tenant cryptographic separation.
          </p>

          <div className="hero-actions">
            <Link className="button button-crimson" to="/contact">
              Request Security Whitepaper <ArrowUpRight size={17} />
            </Link>
            <a className="text-link text-link-light" href="#controls">
              Inspect Security Architecture <ArrowRight size={16} />
            </a>
          </div>
        </div>
        <div className="page-hero-glow" />
      </section>

      {/* Visual Space: Security Architecture & Encryption Diagram */}
      <section className="section section-white !py-8">
        <div className="container">
          <ImagePlaceholder
            aspect="21/9"
            label="ENTERPRISE SECURITY TOPOLOGY & DATA TRANSIT ENCLAVE"
            caption="Zero-trust architecture: AES-256 at rest, TLS 1.3 in transit, and role-based cryptographic enclave partitioning"
            specs="ISO 27001 Certified · ISO 27001 · HIPAA BAA · Air-Gapped VDI"
          />
        </div>
      </section>

      {/* Controls Detail */}
      <section id="controls" className="section section-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="eyebrow">PHYSICAL & DIGITAL SAFEGUARDS</span>
              <h2 className="font-display text-2xl md:text-4xl font-extrabold text-[#12151A] tracking-tight mt-1 mb-6">
                Protecting unreleased models and sensitive enterprise IP.
              </h2>
              <p className="text-base text-[#5F646D] leading-relaxed mb-6">
                Leading AI labs and Fortune 500 enterprises cannot risk unreleased prompt sequences, proprietary codebase snippets, or patient healthcare records leaking. DaQube enforces strict physical and cryptographic guardrails across every stage of data ingestion, labeling, and delivery.
              </p>

              <div className="space-y-4 text-sm">
                <div className="p-4 rounded-xl bg-[#FDFDF1] border border-[rgba(20,23,26,0.06)]">
                  <div className="font-bold text-[#12151A] flex items-center gap-2 mb-1">
                    <Server size={16} className="text-[#EC5E27]" /> Isolated Virtual Desktop Infrastructure (VDI)
                  </div>
                  <p className="text-xs text-[#5F646D] leading-relaxed">
                    Annotators operate within locked-down, ephemeral virtual machines with disabled local clipboards, disabled USB transfers, watermarked displays, and disabled local file saving.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#FDFDF1] border border-[rgba(20,23,26,0.06)]">
                  <div className="font-bold text-[#12151A] flex items-center gap-2 mb-1">
                    <EyeOff size={16} className="text-[#EC5E27]" /> Automated PII Redaction at Ingestion
                  </div>
                  <p className="text-xs text-[#5F646D] leading-relaxed">
                    Prior to human review, incoming datasets pass through automated redaction pipelines masking social security numbers, banking details, personal names, and vehicle license plates.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#FDFDF1] border border-[rgba(20,23,26,0.06)]">
                  <div className="font-bold text-[#12151A] flex items-center gap-2 mb-1">
                    <Lock size={16} className="text-[#EC5E27]" /> Dedicated VPC & On-Premises Cleanrooms
                  </div>
                  <p className="text-xs text-[#5F646D] leading-relaxed">
                    For defense, healthcare, and finance clients, we deploy dedicated AWS/GCP/Azure tenant peering or conduct annotation inside physically guarded, camera-monitored facility cleanrooms.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Space: Physical Cleanroom & Screen Monitoring */}
            <div className="lg:col-span-5">
              <ImagePlaceholder
                aspect="4/3"
                label="PHYSICALLY GUARDED CLEANROOM FACILITY"
                caption="Access-controlled secure labeling enclave with biometric turnstiles, Faraday shielding, and CCTV recording"
                specs="Physical Cleanroom · Biometric Access Only · Zero Mobile Devices Permitted"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sibling Link */}
      <section className="section section-tint !py-12">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-bold text-[#12151A] uppercase tracking-wider">
              Explore Quality Framework
            </span>
            <Link to="/quality" className="text-xs font-bold text-[#EC5E27] hover:underline flex items-center gap-1">
              Quality Overview <ArrowRight size={13} />
            </Link>
          </div>
          <Link to="/quality/calibration-framework" className="p-6 rounded-2xl bg-white border border-[rgba(20,23,26,0.08)] hover:border-[#EC5E27] transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#EC5E27] uppercase">Pillar 02</span>
              <div className="font-display text-lg font-bold text-[#12151A] mt-1">Multi-Tier Calibration & Gold QA</div>
              <p className="text-xs text-[#5F646D] mt-1">Inter-annotator agreement metrics, blind gold tasks, and statistical consensus models.</p>
            </div>
            <span className="text-xs font-bold text-[#EC5E27] flex items-center gap-1 shrink-0">
              Inspect Framework <ArrowRight size={14} />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
export default QualitySecurityPage;
