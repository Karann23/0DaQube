import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ChevronRight, Globe2, ShieldCheck, Cpu, Terminal, Users2, Award, Building2, CheckCircle2 } from "lucide-react";
import { ImagePlaceholder } from "../components/image-placeholder";

export function AboutCompanyPage() {
  return (
    <>
      <section className="page-hero page-hero-dark">
        <div className="container">
          <div className="breadcrumb" style={{ marginBottom: "16px" }}>
            <Link to="/about">About Us</Link>
            <ChevronRight size={14} className="inline mx-2 opacity-50" />
            <span>Company, Leadership & Infrastructure</span>
          </div>

          <span className="eyebrow eyebrow-light">
             OPERATIONAL FOUNDATION
          </span>
          <h1>
            Architecting the Ground Truth<br />
            <span>for Frontier Machine Learning.</span>
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-[#CBD5E1] leading-relaxed mt-4 mb-8">
            Founded by ML infrastructure engineers and linguistic operations directors, DaQube bridges the chasm between raw synthetic data and production-grade model reliability through verified human expertise and air-gapped security.
          </p>

          <div className="hero-actions">
            <Link className="button button-crimson" to="/contact">
              Partner With Us <ArrowUpRight size={17} />
            </Link>
            <Link className="text-link text-link-light" to="/about/careers">
              Workforce Standards <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        <div className="page-hero-glow" />
      </section>

      {/* Visual Space: Global Infrastructure & Cleanroom Map */}
      <section className="section section-white !py-8">
        <div className="container">
          <ImagePlaceholder
            aspect="21/9"
            label="GLOBAL DATA ENGINE INFRASTRUCTURE & AIR-GAPPED LAB TOPOLOGY"
            caption="DaQube operational footprint: High-throughput annotation hubs in North America, Europe, and Asia-Pacific backed by ISO 27001 sound & vision cleanrooms"
            specs="100% Cryptographic Data Lineage · AES-256 Storage · Zero Pre-Training Web Scrapes"
          />
        </div>
      </section>

      {/* Company Philosophy & The Data Bottleneck */}
      <section className="section section-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="eyebrow">THE OPERATIONAL BOTTLENECK</span>
              <h2 className="font-display text-2xl md:text-4xl font-extrabold text-[#12151A] tracking-tight mt-1 mb-6">
                Compute is a commodity. Ground truth is the differentiator.
              </h2>
              <p className="text-base text-[#5F646D] leading-relaxed mb-6">
                As foundation models scale past trillions of tokens, public web corpora have reached diminishing returns, poisoned by recursive synthetic loops, low-quality scraping, and benchmark leakage. Frontier laboratories no longer need more text; they require authentic, highly calibrated expert judgment.
              </p>
              <p className="text-base text-[#5F646D] leading-relaxed mb-8">
                DaQube was formed to deliver enterprise data engineering with the same rigor applied to distributed systems: strict statistical inter-annotator agreement metrics (Krippendorff’s Alpha ≥ 0.88), deterministic audit trails, signed biometric provenance, and air-gapped computing enclaves for sensitive IP.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F8F9FA] border border-[#E9ECEF]">
                  <CheckCircle2 size={18} className="text-[#EC5E27] mt-0.5 shrink-0" />
                  <div>
                    <strong className="block text-sm text-[#12151A]">Strict IP Provenance</strong>
                    <span className="text-xs text-[#5F646D]">100% commercially indemnified, cleanroom-generated data with complete legal provenance.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F8F9FA] border border-[#E9ECEF]">
                  <CheckCircle2 size={18} className="text-[#EC5E27] mt-0.5 shrink-0" />
                  <div>
                    <strong className="block text-sm text-[#12151A]">Domain-Vetted Specialist Pool</strong>
                    <span className="text-xs text-[#5F646D]">Tier-4 credentialed doctors, staff software engineers, legal scholars, and phoneticians.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#12151A] text-white p-8 rounded-2xl relative overflow-hidden">
                <span className="text-xs font-mono uppercase tracking-widest text-[#EC5E27] block mb-3">KEY METRICS</span>
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-extrabold font-display text-white">1,000+</div>
                    <div className="text-sm text-[#8E939D] mt-1">Linguistic locales, dialects, and micro-accents natively represented.</div>
                  </div>
                  <div className="h-px bg-[#262A33]" />
                  <div>
                    <div className="text-4xl font-extrabold font-display text-white">99.8%</div>
                    <div className="text-sm text-[#8E939D] mt-1">SLA adherence on high-throughput enterprise pipelines.</div>
                  </div>
                  <div className="h-px bg-[#262A33]" />
                  <div>
                    <div className="text-4xl font-extrabold font-display text-white">ISO 27001</div>
                    <div className="text-sm text-[#8E939D] mt-1">Certified information security management and ISO 27001 Certified audit alignment.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Leadership & Scientific Advisory */}
      <section className="section section-tint">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="eyebrow"> TECHNICAL LEADERSHIP</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#12151A] tracking-tight mt-1 mb-4">
              Engineered by AI Practitioners
            </h2>
            <p className="text-base text-[#5F646D]">
              Our leadership unites distributed computing architects, applied research scientists, and international data operations executives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-[#E9ECEF] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FFF3ED] text-[#EC5E27] flex items-center justify-center mb-5">
                  <Cpu size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#12151A] mb-1">ML Systems & Alignment Core</h3>
                <p className="text-xs text-[#8E939D] mb-4">Distributed Pipeline Architecture · DPO / RLHF Calibration</p>
                <p className="text-sm text-[#5F646D] leading-relaxed mb-6">
                  Directing our proprietary annotation ingestion framework, continuous active-learning validation routines, and synthetic-to-human preference adjudication pipelines.
                </p>
              </div>
              <div className="pt-4 border-t border-[#F1F3F5] text-xs font-mono text-[#8E939D]">
                FOCUS: ZERO PRE-TRAINING LEAKAGE
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E9ECEF] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FFF3ED] text-[#EC5E27] flex items-center justify-center mb-5">
                  <Globe2 size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#12151A] mb-1">Acoustic & Multilingual Operations</h3>
                <p className="text-xs text-[#8E939D] mb-4">Praat TextGrid Systems · 120+ Dialect Sourcing</p>
                <p className="text-sm text-[#5F646D] leading-relaxed mb-6">
                  Overseeing worldwide studio cleanrooms, spontaneous speech collection protocols, and phonetically balanced corpora for frontier neural speech models.
                </p>
              </div>
              <div className="pt-4 border-t border-[#F1F3F5] text-xs font-mono text-[#8E939D]">
                FOCUS: SUB-10MS TIME ALIGNMENT
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E9ECEF] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FFF3ED] text-[#EC5E27] flex items-center justify-center mb-5">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#12151A] mb-1">Security & Legal Provenance Council</h3>
                <p className="text-xs text-[#8E939D] mb-4">Air-Gapped Enclaves · Biometric Rights & BAA</p>
                <p className="text-sm text-[#5F646D] leading-relaxed mb-6">
                  Enforcing strict ISO 27001 Certified data residency, zero-trust virtual desktop environments, and explicit signed consent documentation across every collected asset.
                </p>
              </div>
              <div className="pt-4 border-t border-[#F1F3F5] text-xs font-mono text-[#8E939D]">
                FOCUS: HIPAA BAA & GDPR COMPLIANCE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Cleanroom Facility Standards */}
      <section className="section section-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <ImagePlaceholder
                aspect="4/3"
                label="ACOUSTIC WHISPER ROOM & SECURE TERMINAL LAB"
                caption="Physical sound-isolation facility (-60 dBFS noise floor) with biometric ingress control"
                specs="Class-A Acoustic Shielding · Faraday Enclosure Available"
              />
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <span className="eyebrow">PHYSICAL INFRASTRUCTURE</span>
              <h2 className="font-display text-2xl md:text-4xl font-extrabold text-[#12151A] tracking-tight mt-1 mb-6">
                Specialized Cleanrooms for High-Precision Capture
              </h2>
              <p className="text-base text-[#5F646D] leading-relaxed mb-6">
                High-fidelity model training cannot rely solely on crowdsourced mobile recordings. For state-of-the-art text-to-speech, sensitive biometric calibration, and confidential model evaluation, DaQube operates dedicated physical cleanrooms:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FFF3ED] text-[#EC5E27] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</div>
                  <div>
                    <strong className="text-sm text-[#12151A] block">Sound-Isolated Acoustic Whisper Chambers</strong>
                    <span className="text-sm text-[#5F646D]">Certified &lt; -60 dBFS noise floors equipped with Neumann U87 and Sennheiser MKH rigs for 48kHz/96kHz 24-bit PCM corpora.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FFF3ED] text-[#EC5E27] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</div>
                  <div>
                    <strong className="text-sm text-[#12151A] block">Biometric Lighting & Multi-Camera Rigs</strong>
                    <span className="text-sm text-[#5F646D]">Color-calibrated D65 daylight, infrared, and extreme lux environments for facial anti-spoofing and gaze training.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FFF3ED] text-[#EC5E27] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</div>
                  <div>
                    <strong className="text-sm text-[#12151A] block">Air-Gapped Model Evaluation Enclaves</strong>
                    <span className="text-sm text-[#5F646D]">Physical cleanrooms with disabled USB ports, shielded wireless networks, and biometric entry controls for adversarial red-teaming of unreleased weights.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-tint">
        <div className="container cta-panel">
          <div className="cta-symbol"><Building2 size={26} /></div>
          <div className="cta-copy">
            <span className="eyebrow">PARTNER WITH DAQUBE</span>
            <h2>Build your custom data pipeline with our team.</h2>
            <p>Schedule a technical discovery session with an ML systems engineer.</p>
          </div>
          <Link className="button button-crimson" to="/contact">
            Schedule Technical Discovery <ArrowRight size={17} />
          </Link>
          <span className="cta-watermark">DQ</span>
        </div>
      </section>
    </>
  );
}
export default AboutCompanyPage;
