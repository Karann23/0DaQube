import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CarFront,
  Languages,
  ShoppingBag,
  Bot,
  Microscope,
  Building2,
  ShieldCheck,
  Cpu,
  Activity,
  Layers,
  Sparkles
} from "lucide-react";
import { SectionHeading } from "../components/section-heading";
import { ThreeDTiltCard } from "../components/ThreeDVisualizers";

const industrySectors = [
  {
    icon: CarFront,
    title: "Autonomous Vehicles & ADAS",
    eyebrow: "MOBILITY & PHYSICAL AI",
    summary: "Pixel-accurate 3D LiDAR point clouds, oriented bounding cuboids, 8-camera video temporal tracking, and calibrated sensor fusion.",
    metrics: "IoU ≥ 0.94 · Sub-5cm Corner Tolerance",
    deliverables: ["KITTI & nuScenes format cuboids", "Dense point-cloud ground segmentation", "Persistent vehicle/pedestrian Re-ID through occlusion", "Dynamic velocity and trajectory vectors"],
    link: "/solutions/adas-lidar"
  },
  {
    icon: Bot,
    title: "Frontier Foundation Model Laboratories",
    eyebrow: "GENERATIVE AI & ALIGNMENT",
    summary: "High-parameter model alignment via Supervised Fine-Tuning (SFT), Direct Preference Optimization (DPO), and multi-turn adversarial red-teaming.",
    metrics: "Krippendorff's α ≥ 0.88 · Zero Data Leakage",
    deliverables: ["Domain-expert chain-of-thought traces", "Pairwise preference comparisons (DPO/KTO)", "Harm auditing exploit trees (OWASP Top 10)", "Closed-circuit evaluation benchmarks"],
    link: "/solutions/text-collection"
  },
  {
    icon: Activity,
    title: "Healthcare, BioPharma & Clinical AI",
    eyebrow: "MEDICAL GROUND TRUTH",
    summary: "Air-gapped clinical record OCR, diagnostic lab extraction, medical named-entity recognition (NER), and pharmacology attribution.",
    metrics: "HIPAA BAA · 99.9% Character Accuracy",
    deliverables: ["Cell-accurate lab test panel extraction", "Differential diagnosis reasoning validation", "De-identified medical imaging annotation", "Biomedical vocabulary mapping (SNOMED, ICD-10)"],
    link: "/solutions/text-collection"
  },
  {
    icon: Languages,
    title: "Multilingual Speech & Conversational AI",
    eyebrow: "VOICE INTELLIGENCE",
    summary: "Spontaneous conversational voice datasets across 120+ languages and 1,000+ regional locales with millisecond Praat TextGrid phonetic alignments.",
    metrics: "1,000+ Locales · 48kHz 24-bit Lossless",
    deliverables: ["In-cabin automotive reverberant audio", "Multi-microphone array recordings", "Phonetic diphones/triphones for expressive TTS", "Explicit biometric consent releases (GDPR/BIPA)"],
    link: "/solutions/speech-collection"
  },
  {
    icon: ShoppingBag,
    title: "Automated Retail & Smart Logistics",
    eyebrow: "COMPUTER VISION",
    summary: "60 FPS camera perception for cashierless checkout, 21-point hand skeleton tracking, and shelf-level product recognition.",
    metrics: "60 FPS Tracking · Zero ID Swaps",
    deliverables: ["Product bounding boxes & polygons", "Hand-object interaction event timestamps", "Cross-camera re-identification (ReID)", "SKU packaging variation coverage"],
    link: "/solutions/annotation"
  },
  {
    icon: Building2,
    title: "Financial Intelligence & Regulatory Compliance",
    eyebrow: "ENTERPRISE DOCUMENT AI",
    summary: "Key-value pair extraction from SEC filings, 10-K tables, trade finance documents, and earnings call transcript diarization.",
    metrics: "ISO 27001 Certified · Zero Hallucination",
    deliverables: ["Multi-page table reading order graphs", "Financial entity extraction & ticker mapping", "Earnings call sentiment & tone tagging", "Audit-ready provenance certificates"],
    link: "/solutions/text-collection"
  }
];

export function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero page-hero-dark">
        <div className="container">
          <span className="eyebrow eyebrow-light">
             MISSION-CRITICAL DOMAINS
          </span>
          <h1>
            Engineered for the Real-World<br />
            <span>Environments Your Models Serve.</span>
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-[#CBD5E1] leading-relaxed mt-4 mb-8">
            Off-the-shelf internet data fails in high-stakes operational settings. We build bespoke data collection, annotation, and human alignment workflows tailored to your sector's regulatory constraints and sensor modalities.
          </p>

          <div className="hero-actions">
            <Link className="button button-crimson" to="/contact">
              Scope Industry Brief <ArrowUpRight size={17} />
            </Link>
            <a className="text-link text-link-light" href="#sectors">
              Explore Industry Solutions <ArrowRight size={16} />
            </a>
          </div>
        </div>
        <div className="page-hero-glow" />
      </section>

      {/* Industry Sectors Grid */}
      <section id="sectors" className="section section-white">
        <div className="container">
          <SectionHeading
            eyebrow="DOMAIN EXPERTISE"
            title="Six Specialized Production Practices."
            description="Every sector engagement is staffed by domain-qualified specialists: licensed physicians, automotive engineers, computer vision architects, and financial analysts."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {industrySectors.map((sector) => (
              <ThreeDTiltCard key={sector.title} maxTilt={6}>
                <div className="p-8 rounded-2xl bg-white border border-[#E9ECEF] flex flex-col justify-between h-full hover:border-[#EC5E27] hover:shadow-xl transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#FFF3ED] text-[#EC5E27] flex items-center justify-center">
                        <sector.icon size={22} />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#EC5E27] px-2.5 py-1 rounded bg-[#FFF3ED]">
                        {sector.metrics}
                      </span>
                    </div>

                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#8E939D] block mb-1 font-bold">
                      {sector.eyebrow}
                    </span>
                    <h3 className="text-xl font-bold text-[#12151A] mb-3">{sector.title}</h3>
                    <p className="text-sm text-[#5F646D] leading-relaxed mb-6">{sector.summary}</p>

                    <div className="space-y-2 mb-6 pt-4 border-t border-[#F8F9FA]">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#12151A] font-bold block mb-1">
                        KEY ARTIFACTS:
                      </span>
                      {sector.deliverables.map((d, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#5F646D]">
                          <span className="text-[#EC5E27] font-bold">•</span>
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={sector.link}
                    className="inline-flex items-center justify-between w-full p-3 rounded-xl bg-[#12151A] text-white hover:bg-[#EC5E27] transition-colors text-xs font-bold"
                  >
                    <span>View Specialized Pipeline</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </ThreeDTiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Technical FAQ */}
      <section className="section section-tint">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <span className="eyebrow"> INDUSTRY FAQ</span>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-[#12151A] tracking-tight mt-1">
              Sector Compliance & Calibration Questions
            </h2>
          </div>

          <div className="space-y-4">
            <details className="bg-white p-5 rounded-2xl border border-[#E9ECEF] cursor-pointer group">
              <summary className="font-bold text-[#12151A] text-sm md:text-base list-none flex items-center justify-between">
                <span>How do you handle HIPAA Business Associate Agreements (BAA) for medical AI?</span>
                <span className="text-[#EC5E27] font-bold text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-sm text-[#5F646D] leading-relaxed mt-3 pt-3 border-t border-[#F8F9FA]">
                We execute formal HIPAA BAAs prior to ingesting clinical data. Annotation is executed exclusively inside air-gapped, ISO 27001 Certified certified environments by licensed medical doctors and certified health informatics specialists with multi-factor authentication.
              </p>
            </details>

            <details className="bg-white p-5 rounded-2xl border border-[#E9ECEF] cursor-pointer group">
              <summary className="font-bold text-[#12151A] text-sm md:text-base list-none flex items-center justify-between">
                <span>Can we deploy custom collection hardware (sensors, cameras, microphones) to your field network?</span>
                <span className="text-[#EC5E27] font-bold text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-sm text-[#5F646D] leading-relaxed mt-3 pt-3 border-t border-[#F8F9FA]">
                Yes. For automotive, smart speaker, and retail robotics projects, clients frequently ship physical camera rigs or custom acoustic microphone arrays to our physical collection facilities to ensure zero hardware discrepancy between training data and deployment sensors.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section section-white">
        <div className="container cta-panel">
          <div className="cta-symbol"><Sparkles size={26} /></div>
          <div className="cta-copy">
            <span className="eyebrow">YOUR INDUSTRY, YOUR SPECIFICATIONS</span>
            <h2>Have a specialized regulatory or sensor requirement?</h2>
            <p>Our solutions architects can customize an engagement plan around your exact data constraints.</p>
          </div>
          <Link className="button button-crimson" to="/contact">
            Start Technical Discovery <ArrowRight size={17} />
          </Link>
          <span className="cta-watermark">DQ</span>
        </div>
      </section>
    </>
  );
}

export default IndustriesPage;
