import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, CheckCircle2, ChevronRight, Stethoscope, Scale, Code2, Cpu, Award } from "lucide-react";
import { ImagePlaceholder } from "../components/image-placeholder";

export function NetworkDomainExpertsPage() {
  return (
    <>
      <section className="page-hero page-hero-dark">
        <div className="container">
          <div className="breadcrumb" style={{ marginBottom: "16px" }}>
            <Link to="/network">Network</Link>
            <ChevronRight size={14} className="inline mx-2 opacity-50" />
            <span>Subject Matter Experts (SMEs)</span>
          </div>

          <span className="eyebrow eyebrow-light">
             SPECIALIZED INTELLIGENCE
          </span>
          <h1>
            850+ Vetted Domain Experts.<br />
            <span>Aligning Frontier Models.</span>
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-[#CBD5E1] leading-relaxed mt-4 mb-8">
            Board-certified physicians, licensed attorneys, PhD researchers, and staff software engineers providing high-complexity SFT, RLHF, and benchmark evaluation.
          </p>

          <div className="hero-actions">
            <Link className="button button-crimson" to="/contact">
              Request Expert Cohort <ArrowUpRight size={17} />
            </Link>
            <a className="text-link text-link-light" href="#expert-disciplines">
              View Expert Disciplines <ArrowRight size={16} />
            </a>
          </div>
        </div>
        <div className="page-hero-glow" />
      </section>

      {/* Primary Visual Space: Expert Review Environment */}
      <section className="section section-white !py-8">
        <div className="container">
          <ImagePlaceholder
            aspect="21/9"
            label="DOMAIN-EXPERT CODE & CLINICAL REVIEW WORKSPACE"
            caption="Verified specialist annotation interface with multi-dimensional rubric scoring and citation auditing"
            specs="Credentialed Raters · Real-Time Inter-Annotator Agreement · Full Chain-of-Thought Audit"
          />
        </div>
      </section>

      {/* Disciplines Grid */}
      <section id="expert-disciplines" className="section section-tint">
        <div className="container">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow">DOMAINS OF EXPERTISE</span>
            <h2 className="font-display text-2xl md:text-4xl font-extrabold text-[#12151A] tracking-tight mt-1">
              Deep professional knowledge where generic crowd rating fails.
            </h2>
            <p className="text-sm text-[#5F646D] mt-2 leading-relaxed">
              When models must reason through multi-file codebase refactoring, complex legal statutes, or clinical contraindications, only verified domain specialists can evaluate output fidelity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-white border border-[rgba(20,23,26,0.08)] flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-[rgba(236,94,39,0.1)] text-[#EC5E27] flex items-center justify-center mb-4">
                <Code2 size={24} />
              </div>
              <h3 className="font-display text-lg font-bold text-[#12151A] mb-2">Staff Software Engineers</h3>
              <p className="text-xs text-[#5F646D] leading-relaxed mb-4">
                Full-stack and systems engineers evaluating complex multi-turn code generation, vulnerability identification, test coverage, and API architecture in Python, Rust, C++, Go, and TypeScript.
              </p>
              <div className="text-[11px] font-mono text-[#12151A] bg-[#F5F5E2] p-2.5 rounded-lg mt-auto">
                Average Experience: 8+ Years · FAANG & High-Growth Alumni
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-[rgba(20,23,26,0.08)] flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-[rgba(236,94,39,0.1)] text-[#EC5E27] flex items-center justify-center mb-4">
                <Stethoscope size={24} />
              </div>
              <h3 className="font-display text-lg font-bold text-[#12151A] mb-2">Clinical Doctors & Radiologists</h3>
              <p className="text-xs text-[#5F646D] leading-relaxed mb-4">
                Board-certified MDs evaluating medical conversation summaries, pharmacology interactions, clinical diagnostic prompts, and medical imaging segmentation under strict HIPAA BAA protocols.
              </p>
              <div className="text-[11px] font-mono text-[#12151A] bg-[#F5F5E2] p-2.5 rounded-lg mt-auto">
                Credentialing: Active Medical Licenses · Verified Specialty Boards
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-[rgba(20,23,26,0.08)] flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-[rgba(236,94,39,0.1)] text-[#EC5E27] flex items-center justify-center mb-4">
                <Scale size={24} />
              </div>
              <h3 className="font-display text-lg font-bold text-[#12151A] mb-2">Attorneys & Compliance Officers</h3>
              <p className="text-xs text-[#5F646D] leading-relaxed mb-4">
                Licensed legal practitioners evaluating contract risk extraction, statutory interpretation, cross-jurisdiction tax reasoning, and regulatory compliance benchmarking.
              </p>
              <div className="text-[11px] font-mono text-[#12151A] bg-[#F5F5E2] p-2.5 rounded-lg mt-auto">
                Jurisdictions: US Federal/State, UK, EU GDPR, Singapore Law
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sibling Links */}
      <section className="section section-white !py-12">
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
            <Link to="/network/contributors" className="p-5 rounded-2xl bg-[#FDFDF1] border border-[rgba(20,23,26,0.08)] hover:border-[#EC5E27] transition-all">
              <span className="text-xs font-bold text-[#EC5E27] uppercase">Pillar 01</span>
              <div className="font-display text-base font-bold text-[#12151A] mt-1">Global Contributors & Field Ops</div>
              <p className="text-xs text-[#5F646D] mt-1">25K+ verified annotators for in-field speech, video, and localized language data.</p>
            </Link>
            <Link to="/network/ethics-compliance" className="p-5 rounded-2xl bg-[#FDFDF1] border border-[rgba(20,23,26,0.08)] hover:border-[#EC5E27] transition-all">
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
export default NetworkDomainExpertsPage;
