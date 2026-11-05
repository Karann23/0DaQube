import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, CheckCircle2, ChevronRight, Sliders, BarChart3, CheckSquare, Target, ShieldCheck } from "lucide-react";
import { ImagePlaceholder } from "../components/image-placeholder";

export function QualityCalibrationPage() {
  return (
    <>
      <section className="page-hero page-hero-dark">
        <div className="container">
          <div className="breadcrumb" style={{ marginBottom: "16px" }}>
            <Link to="/quality">Quality & Trust</Link>
            <ChevronRight size={14} className="inline mx-2 opacity-50" />
            <span>Multi-Tier Calibration & Gold QA</span>
          </div>

          <span className="eyebrow eyebrow-light">
             EMPIRICAL VERIFICATION
          </span>
          <h1>
            Calibration Over Claims.<br />
            <span>99.8% Measured Accuracy.</span>
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-[#CBD5E1] leading-relaxed mt-4 mb-8">
            Statistical inter-annotator agreement (Cohen's Kappa & Krippendorff's Alpha), automated blind gold-standard task injection, and multi-pass consensus adjudication.
          </p>

          <div className="hero-actions">
            <Link className="button button-crimson" to="/contact">
              Discuss Your Acceptance SLA <ArrowUpRight size={17} />
            </Link>
            <a className="text-link text-link-light" href="#metrics">
              See Statistical Verification <ArrowRight size={16} />
            </a>
          </div>
        </div>
        <div className="page-hero-glow" />
      </section>

      {/* Visual Space: Quality Dashboard & Kappa Matrix */}
      <section className="section section-white !py-8">
        <div className="container">
          <ImagePlaceholder
            aspect="21/9"
            label="REAL-TIME INTER-ANNOTATOR AGREEMENT (IAA) DASHBOARD"
            caption="Live statistical consensus tracking: Confusion matrices, IoU variance, and blind gold-task drift alerting"
            specs="Krippendorff's Alpha ≥ 0.92 · Sub-pixel IoU Bounding · Automated Linter"
          />
        </div>
      </section>

      {/* Methodology Section */}
      <section id="metrics" className="section section-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="eyebrow">CONTINUOUS STATISTICAL DRIFT CONTROL</span>
              <h2 className="font-display text-2xl md:text-4xl font-extrabold text-[#12151A] tracking-tight mt-1 mb-6">
                How we eliminate label ambiguity before production accelerates.
              </h2>
              <p className="text-base text-[#5F646D] leading-relaxed mb-6">
                Promising "100% accuracy" is marketing theater. In reality, real data quality is maintained through explicit acceptance thresholds, statistical consensus modeling, and structured adjudication for edge cases.
              </p>

              <div className="space-y-4 text-sm">
                <div className="p-4 rounded-xl bg-[#FDFDF1] border border-[rgba(20,23,26,0.06)]">
                  <div className="font-bold text-[#12151A] flex items-center gap-2 mb-1">
                    <Target size={16} className="text-[#EC5E27]" /> Blind Gold Task Injection (5%–10%)
                  </div>
                  <p className="text-xs text-[#5F646D] leading-relaxed">
                    Pre-validated benchmark samples are invisibly interleaved into active worker queues. Annotators falling below the agreed accuracy floor are automatically paused for retraining.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#FDFDF1] border border-[rgba(20,23,26,0.06)]">
                  <div className="font-bold text-[#12151A] flex items-center gap-2 mb-1">
                    <Sliders size={16} className="text-[#EC5E27]" /> Multi-Pass Double Blind Labeling
                  </div>
                  <p className="text-xs text-[#5F646D] leading-relaxed">
                    Critical categories are independently labeled by two separate operators. Where polygons or tokens diverge beyond tolerance, the asset is automatically escalated to a senior lead.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#FDFDF1] border border-[rgba(20,23,26,0.06)]">
                  <div className="font-bold text-[#12151A] flex items-center gap-2 mb-1">
                    <BarChart3 size={16} className="text-[#EC5E27]" /> Automated Schema & Format Linters
                  </div>
                  <p className="text-xs text-[#5F646D] leading-relaxed">
                    Every export package is verified by automated CI/CD schema linters checking missing keys, broken image references, truncated bounding polygons, and JSON validation.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Space: Adjudication Interface */}
            <div className="lg:col-span-5">
              <ImagePlaceholder
                aspect="4/3"
                label="SENIOR ADJUDICATION & SPLIT-RESOLUTION CONSOLE"
                caption="Side-by-side discrepancy resolver: Visualizing overlapping polygons, token spans, and rationale logs"
                specs="Sub-pixel Diff Tool · Multi-Rater Consensus Overlay · Automated Versioning"
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
          <Link to="/quality/security-compliance" className="p-6 rounded-2xl bg-white border border-[rgba(20,23,26,0.08)] hover:border-[#EC5E27] transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#EC5E27] uppercase">Pillar 01</span>
              <div className="font-display text-lg font-bold text-[#12151A] mt-1">Enterprise Security & Compliance</div>
              <p className="text-xs text-[#5F646D] mt-1">ISO 27001 Certified, ISO/IEC 27001, HIPAA BAA, and virtual cleanroom controls.</p>
            </div>
            <span className="text-xs font-bold text-[#EC5E27] flex items-center gap-1 shrink-0">
              Inspect Security <ArrowRight size={14} />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
export default QualityCalibrationPage;
