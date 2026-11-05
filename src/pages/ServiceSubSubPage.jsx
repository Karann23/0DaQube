import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, ArrowUpRight, CheckCircle2, ChevronRight, Shield, Clock, FileCheck2, Code2, Layers, Cpu, Terminal } from "lucide-react";
import { getServiceSubpage, getServiceCategory } from "../lib/services-taxonomy";
import { ImagePlaceholder } from "../components/image-placeholder";
import {
  ThreeDLidarRadar,
  ThreeDAudioVisualizer,
  ThreeDNeuralMatrix,
  ThreeDSecurityEnclave
} from "../components/ThreeDVisualizers";

export function ServiceSubSubPage() {
  const { categorySlug, subSlug } = useParams();
  const subpage = getServiceSubpage(categorySlug, subSlug);
  const [activeTab, setActiveTab] = useState("overview");

  if (!subpage) {
    return <Navigate to="/solutions" replace />;
  }

  const category = subpage.category;

  // Choose 3D visualizer
  const renderVisualizer = () => {
    const s = subpage.slug.toLowerCase();
    if (s.includes("lidar") || s.includes("video") || s.includes("biometrics") || s.includes("tracking")) {
      return <ThreeDLidarRadar label={`${subpage.title.toUpperCase()} — SENSOR ENGINE`} />;
    }
    if (s.includes("asr") || s.includes("tts") || s.includes("phonetic") || s.includes("audio")) {
      return <ThreeDAudioVisualizer title={`${subpage.title.toUpperCase()} — ACOUSTIC SIGNAL`} />;
    }
    if (s.includes("rlhf") || s.includes("red-teaming") || s.includes("model-evaluation") || s.includes("multilingual")) {
      return <ThreeDNeuralMatrix />;
    }
    return <ThreeDSecurityEnclave />;
  };

  // Generate realistic JSON schema representation for ML engineers
  const getSampleJson = () => {
    return JSON.stringify(
      {
        pipeline_id: `dq_${category.slug}_${subpage.slug}`,
        timestamp: "2026-11-04T00:00:00Z",
        coordinate_system: "Sub-pixel normalized / 64-bit float",
        inter_annotator_agreement: {
          metric: "Krippendorff_Alpha",
          value: 0.912,
          gold_pass_rate: "99.4%"
        },
        provenance: {
          cleanroom: "ISO_27001_Enclave_US_East",
          legal_status: "Commercial_Perpetual_Derivative_Cleared",
          gdpr_ccpa_compliant: true
        },
        sample_annotation_payload: {
          entity_class: subpage.title,
          confidence_score: 0.994,
          temporal_track_id: "TK_10482_A",
          verified_by: "Domain_Lead_Specialist_#482"
        }
      },
      null,
      2
    );
  };

  return (
    <>
      {/* Sub-Subpage Hero */}
      <section className="page-hero page-hero-dark">
        <div className="container">
          <div className="breadcrumb" style={{ marginBottom: "16px" }}>
            <Link to="/solutions">Solutions</Link>
            <ChevronRight size={14} className="inline mx-2 opacity-50" />
            <Link to={`/solutions/${category.slug}`}>{category.title}</Link>
            <ChevronRight size={14} className="inline mx-2 opacity-50" />
            <span>{subpage.title}</span>
          </div>

          <span className="eyebrow eyebrow-light">
             {subpage.eyebrow}
          </span>
          <h1>
            {subpage.title}<br />
            <span>Built for Enterprise Production.</span>
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-[#CBD5E1] leading-relaxed mt-4 mb-8">
            {subpage.short}
          </p>

          <div className="hero-actions">
            <Link
              className="button button-crimson"
              to={`/contact?service=${encodeURIComponent(`${category.title} — ${subpage.title}`)}`}
            >
              Scope This Pipeline <ArrowUpRight size={17} />
            </Link>
            <a className="text-link text-link-light" href="#workflow">
              Review Engineering Process <ArrowRight size={16} />
            </a>
          </div>
        </div>
        <div className="page-hero-glow" />
      </section>

      {/* Hero Visual Space: Clean Blueprint Container */}
      <section className="section section-white !py-8">
        <div className="container">
          <ImagePlaceholder
            aspect="21/9"
            label={`${subpage.title.toUpperCase()} GROUND-TRUTH SPECIFICATION`}
            caption={`High-density visual ground truth: Coordinate schema, multi-channel alignment, and label hierarchy for ${subpage.title}`}
            specs="Sensor Frame · 64-Bit Precision Coordinates · Multi-Layer Mask"
          />
        </div>
      </section>



      {/* Deep Dive & Technical Architecture */}
      <section className="section section-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <span className="eyebrow">TECHNICAL OVERVIEW</span>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold text-[#12151A] tracking-tight mt-1 mb-6">
                Why precision matters for this discipline.
              </h2>
              <p className="text-base text-[#2D3139] leading-relaxed mb-6 font-medium">
                {subpage.deepDive}
              </p>

              <h3 className="font-display text-lg font-bold text-[#12151A] mt-8 mb-4">
                Key Project Deliverables
              </h3>
              <div className="space-y-3">
                {subpage.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E9ECEF]">
                    <CheckCircle2 size={18} className="text-[#EC5E27] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#12151A] leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Technical Specs & JSON Schema Preview */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E9ECEF] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-[#EC5E27] uppercase tracking-wider mb-4 pb-2 border-b border-[#E9ECEF]">
                  <Cpu size={15} /> Technical Pipeline Specifications
                </div>
                <div className="space-y-3.5 text-xs">
                  {Object.entries(subpage.specifications).map(([key, val]) => (
                    <div key={key}>
                      <span className="text-[#8E939D] font-mono uppercase block text-[10px]">
                        {key.replace(/([A-Z])/g, " $1")}
                      </span>
                      <span className="font-bold text-[#12151A] text-xs mt-0.5 block">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* JSON Manifest Snippet */}
              <div className="p-5 rounded-2xl bg-[#090C10] border border-[#21262D] text-white font-mono text-xs overflow-x-auto">
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#21262D] text-[10px] text-[#8E939D]">
                  <span className="flex items-center gap-1.5 text-[#EC5E27] font-bold">
                    <Terminal size={12} /> Handoff Schema Preview
                  </span>
                  <span>JSONL Manifest</span>
                </div>
                <pre className="text-[11px] leading-relaxed text-[#CBD5E1]">
                  {getSampleJson()}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Workflow Phases */}
      <section id="workflow" className="section section-tint">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">THE ENGINEERING WORKFLOW</span>
            <h2 className="font-display text-2xl md:text-4xl font-extrabold text-[#12151A] tracking-tight mt-1">
              End-to-End Delivery Pipeline
            </h2>
            <p className="text-sm text-[#5F646D] mt-2">
              Four structured phases ensuring deterministic quality and rigorous acceptance verification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subpage.workflow.map((step, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-[#E9ECEF] flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-[#FFF3ED] text-[#EC5E27] font-mono font-extrabold text-sm flex items-center justify-center mb-4">
                    0{idx + 1}
                  </div>
                  <h4 className="font-display text-base font-bold text-[#12151A] mb-2">
                    {step.phase}
                  </h4>
                  <p className="text-xs text-[#5F646D] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-[#F8F9FA] text-[11px] font-mono text-[#8E939D]">
                  GATE 0{idx + 1}: VERIFIED
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-Subpage Direct CTA */}
      <section className="section section-white">
        <div className="container cta-panel">
          <div className="cta-symbol"><CheckCircle2 size={26} /></div>
          <div className="cta-copy">
            <span className="eyebrow">DEPLOY THIS PIPELINE</span>
            <h2>Ready to calibrate {subpage.title}?</h2>
            <p>Schedule a 30-minute scoping session with our lead machine learning systems engineer.</p>
          </div>
          <Link
            className="button button-crimson"
            to={`/contact?service=${encodeURIComponent(`${category.title} — ${subpage.title}`)}`}
          >
            Launch Scoping Session <ArrowRight size={17} />
          </Link>
          <span className="cta-watermark">DQ</span>
        </div>
      </section>
    </>
  );
}

export default ServiceSubSubPage;
