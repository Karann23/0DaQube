import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, CheckCircle2, ChevronRight, Globe2, Smartphone, Users, MapPin, Shield } from "lucide-react";
import { ImagePlaceholder } from "../components/image-placeholder";

export function NetworkContributorsPage() {
  return (
    <>
      <section className="page-hero page-hero-dark">
        <div className="container">
          <div className="breadcrumb" style={{ marginBottom: "16px" }}>
            <Link to="/network">Network</Link>
            <ChevronRight size={14} className="inline mx-2 opacity-50" />
            <span>Global Contributors & Field Operations</span>
          </div>

          <span className="eyebrow eyebrow-light">
             GLOBAL FIELD WORKFORCE
          </span>
          <h1>
            25,000+ Verified Contributors.<br />
            <span>Capturing the Real World.</span>
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-[#CBD5E1] leading-relaxed mt-4 mb-8">
            Deploy localized, demographically balanced contributor cohorts across 100+ countries for in-field data capture, acoustic recordings, and everyday visual diversity.
          </p>

          <div className="hero-actions">
            <Link className="button button-crimson" to="/contact">
              Deploy Contributor Cohort <ArrowUpRight size={17} />
            </Link>
            <a className="text-link text-link-light" href="#field-ops">
              Explore Field Ops Protocol <ArrowRight size={16} />
            </a>
          </div>
        </div>
        <div className="page-hero-glow" />
      </section>

      {/* Primary Visual Space: Global Footprint / Contributor Density */}
      <section className="section section-white !py-8">
        <div className="container">
          <div className="relative rounded-2xl overflow-hidden border border-[#1E2530] bg-[#0A0D14] shadow-xl aspect-[21/9]">
            <img
              src="/images/network_globe.jpg"
              alt="Global Contributor Geographic Density"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-xs text-white/90">
              <div>
                <span className="font-mono font-bold text-[#EC5E27] uppercase tracking-wider block text-[10px] mb-0.5">
                  GLOBAL CONTRIBUTOR GEOGRAPHIC DENSITY
                </span>
                <span className="text-white font-medium text-xs md:text-sm">
                  Real-time participant distribution across North America, Europe, Asia-Pacific, Latin America & Africa
                </span>
              </div>
              <span className="hidden sm:inline-block font-mono text-[11px] px-2.5 py-1 rounded bg-black/60 border border-white/15 text-white/80 shrink-0">
                100+ Countries · 1,000+ Micro-Locales
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Field Operations & In-Field Collection */}
      <section id="field-ops" className="section section-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="eyebrow">FIELD DATA OPERATIONS</span>
              <h2 className="font-display text-2xl md:text-4xl font-extrabold text-[#12151A] tracking-tight mt-1 mb-6">
                Capturing real conditions that synthetic data cannot simulate.
              </h2>
              <p className="text-base text-[#5F646D] leading-relaxed mb-6">
                When machine learning models enter production, they encounter uncurated acoustic environments, diverse device microphones, regional accents, and uneven lighting. DaQube's global contributor network executes structured capture protocols directly on consumer hardware in target geographies.
              </p>

              <div className="space-y-4 text-sm">
                <div className="p-4 rounded-xl bg-[#FDFDF1] border border-[rgba(20,23,26,0.06)]">
                  <div className="font-bold text-[#12151A] flex items-center gap-2 mb-1">
                    <Smartphone size={16} className="text-[#EC5E27]" /> Multi-Device Hardware Diversity
                  </div>
                  <p className="text-xs text-[#5F646D] leading-relaxed">
                    Capture audio and visual signals across 80+ smartphone models, smart speakers, dashcams, and body-worn sensors to prevent hardware-specific overfitting.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#FDFDF1] border border-[rgba(20,23,26,0.06)]">
                  <div className="font-bold text-[#12151A] flex items-center gap-2 mb-1">
                    <MapPin size={16} className="text-[#EC5E27]" /> On-Site Environment Scenarios
                  </div>
                  <p className="text-xs text-[#5F646D] leading-relaxed">
                    Deploy field teams into retail stores, transit stations, industrial plants, and agricultural fields for calibrated scene capture and object variation.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#FDFDF1] border border-[rgba(20,23,26,0.06)]">
                  <div className="font-bold text-[#12151A] flex items-center gap-2 mb-1">
                    <Shield size={16} className="text-[#EC5E27]" /> Vetted Identity & Audit Trails
                  </div>
                  <p className="text-xs text-[#5F646D] leading-relaxed">
                    Every contributor undergoes biometric identity verification, fraud detection screening, and sign-off on explicit data release agreements.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Space: Contributor App & Collection Interface */}
            <div className="lg:col-span-5">
              <ImagePlaceholder
                aspect="4/3"
                label="CONTRIBUTOR MOBILE COLLECTION INTERFACE"
                caption="Guided mobile capture workflow: Acoustic SNR metering, lighting guidance, and prompt adherence checks"
                specs="Mobile App UI · Automated Audio Screening · Instant Quality Feedback"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sibling Subpages Navigation */}
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
            <Link to="/network/domain-experts" className="p-5 rounded-2xl bg-white border border-[rgba(20,23,26,0.08)] hover:border-[#EC5E27] transition-all">
              <span className="text-xs font-bold text-[#EC5E27] uppercase">Pillar 02</span>
              <div className="font-display text-base font-bold text-[#12151A] mt-1">Domain Experts (MDs, JDs, Engineers)</div>
              <p className="text-xs text-[#5F646D] mt-1">Verified specialists for Frontier AI alignment, clinical medicine, and code evaluation.</p>
            </Link>
            <Link to="/network/ethics-compliance" className="p-5 rounded-2xl bg-white border border-[rgba(20,23,26,0.08)] hover:border-[#EC5E27] transition-all">
              <span className="text-xs font-bold text-[#EC5E27] uppercase">Pillar 03</span>
              <div className="font-display text-base font-bold text-[#12151A] mt-1">Ethical AI Labor & Compliance</div>
              <p className="text-xs text-[#5F646D] mt-1">Fair living wages, PII anonymization, and ISO 27001 secure data custody.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
export default NetworkContributorsPage;
