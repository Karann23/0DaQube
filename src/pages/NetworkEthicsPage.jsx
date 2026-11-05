import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, CheckCircle2, ChevronRight, HeartHandshake, Shield, Lock, FileCheck, Users } from "lucide-react";
import { ImagePlaceholder } from "../components/image-placeholder";

export function NetworkEthicsPage() {
  return (
    <>
      <section className="page-hero page-hero-dark">
        <div className="container">
          <div className="breadcrumb" style={{ marginBottom: "16px" }}>
            <Link to="/network">Network</Link>
            <ChevronRight size={14} className="inline mx-2 opacity-50" />
            <span>Ethical AI Labor & Data Custody</span>
          </div>

          <span className="eyebrow eyebrow-light">
             RESPONSIBLE DATA STEWARDSHIP
          </span>
          <h1>
            Ethical Sourcing.<br />
            <span>Uncompromising Security.</span>
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-[#CBD5E1] leading-relaxed mt-4 mb-8">
            Fair living-wage compensation, explicit informed consent for biometric assets, automated PII scrubbing, and ISO 27001 Certified air-gapped data custody.
          </p>

          <div className="hero-actions">
            <Link className="button button-crimson" to="/contact">
              Inquire About Compliance Protocols <ArrowUpRight size={17} />
            </Link>
            <a className="text-link text-link-light" href="#standards">
              Review Ethical Commitments <ArrowRight size={16} />
            </a>
          </div>
        </div>
        <div className="page-hero-glow" />
      </section>

      {/* Primary Visual Space: Security & PII Redaction Pipeline */}
      <section className="section section-white !py-8">
        <div className="container">
          <ImagePlaceholder
            aspect="21/9"
            label="AUTOMATED PII SANITIZATION & AIR-GAPPED VAULT"
            caption="Multi-layer tokenization: Real-time scrubbing of names, phone numbers, face blurring, and metadata redaction"
            specs="ISO 27001 Certified · Zero Data Retention Sandbox · End-to-End Encryption"
          />
        </div>
      </section>

      {/* Standards Section */}
      <section id="standards" className="section section-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="eyebrow">LABOR & GOVERNANCE</span>
              <h2 className="font-display text-2xl md:text-4xl font-extrabold text-[#12151A] tracking-tight mt-1 mb-6">
                Sustainable AI data requires ethical human partnerships.
              </h2>
              <p className="text-base text-[#5F646D] leading-relaxed mb-6">
                Underpaid, uncalibrated crowd labor yields contaminated training data and reputational risk for foundation model creators. DaQube enforces fair pay above local market medians, humane working hours, and comprehensive mental health support for sensitive content reviewers.
              </p>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FDFDF1] border border-[rgba(20,23,26,0.06)]">
                  <HeartHandshake size={20} className="text-[#EC5E27] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#12151A]">Fair Living-Wage Commitment: </span>
                    <span className="text-[#5F646D]">Indexed above regional living-wage benchmarks in every country of operation, with transparent milestone incentives.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FDFDF1] border border-[rgba(20,23,26,0.06)]">
                  <FileCheck size={20} className="text-[#EC5E27] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#12151A]">Informed & Revocable Consent: </span>
                    <span className="text-[#5F646D]">Every participant signs explicit model releases with documented rights for audio, biometric, and video assets under GDPR Article 9.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FDFDF1] border border-[rgba(20,23,26,0.06)]">
                  <Lock size={20} className="text-[#EC5E27] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#12151A]">Audited PII De-Identification: </span>
                    <span className="text-[#5F646D]">Automated face blurring, license plate masking, and text token anonymization prior to any delivery handoff.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Space: Consent & Data Chain-of-Custody Certificate */}
            <div className="lg:col-span-5">
              <ImagePlaceholder
                aspect="4/3"
                label="DATA PROVENANCE & CHAIN-OF-CUSTODY AUDIT"
                caption="Immutable record of participant consent, licensing clearance, and verification signatures"
                specs="Cryptographic Hashing · Tamper-Evident Manifest · Complete Provenance"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sibling Links */}
      <section className="section section-tint !py-12">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-bold text-[#12151A] uppercase tracking-wider">
              Explore Network Pillars
            </span>
            <Link to="/network" className="text-xs font-bold text-[#EC5E27] hover:underline flex items-center gap-1">
              Network Overview <ArrowRight size={13} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link to="/network/contributors" className="p-5 rounded-2xl bg-white border border-[rgba(20,23,26,0.08)] hover:border-[#EC5E27] transition-all">
              <span className="text-xs font-bold text-[#EC5E27] uppercase">Pillar 01</span>
              <div className="font-display text-base font-bold text-[#12151A] mt-1">Global Contributors & Field Ops</div>
              <p className="text-xs text-[#5F646D] mt-1">25K+ verified annotators for in-field speech, video, and localized language data.</p>
            </Link>
            <Link to="/network/domain-experts" className="p-5 rounded-2xl bg-white border border-[rgba(20,23,26,0.08)] hover:border-[#EC5E27] transition-all">
              <span className="text-xs font-bold text-[#EC5E27] uppercase">Pillar 02</span>
              <div className="font-display text-base font-bold text-[#12151A] mt-1">Domain Experts (MDs, JDs, Engineers)</div>
              <p className="text-xs text-[#5F646D] mt-1">Verified specialists for Frontier AI alignment, clinical medicine, and code evaluation.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
export default NetworkEthicsPage;
