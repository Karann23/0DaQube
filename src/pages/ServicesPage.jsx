import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Cpu, Mic, Camera, FileText, Boxes, CheckCircle2, ChevronRight, Sparkles, Video, Headphones, Crosshair, Layers } from "lucide-react";
import { Services3DCarousel } from "../components/Services3DCarousel";
import { ServicesHeroMarquee } from "../components/ServicesHeroMarquee";
import WorkflowCards from "../components/WorkflowCards";
import DataWorkflowChart from "../components/DataWorkflowChart";
import { SERVICE_CATEGORIES } from "../lib/services-taxonomy";
import { ThreeDTiltCard } from "../components/ThreeDVisualizers";
import "../components/ServicesCTA.css";

const categoryIcons = {
  "image-collection": Camera,
  "video-collection": Video,
  "speech-collection": Mic,
  "text-collection": FileText,
  "annotation": Layers,
  "transcription": Headphones,
  "adas-lidar": Crosshair,
  "off-the-shelf": Boxes,
};

export function ServicesPage() {
  return (
    <>
      {/* ANIMATED SERVICES HERO */}
      <ServicesHeroMarquee />

      {/* IMMERSIVE SERVICES JOURNAL — 3D BOOK CAROUSEL */}
      <section className="section section-white !p-0">
        <Services3DCarousel />
      </section>

      {/* ENTERPRISE DATA TAXONOMIES DIRECTORY (5 Categories & 12 Subpages) */}
      <section className="section section-tint">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="eyebrow"> PRODUCTION TAXONOMIES</span>
              <h2 className="font-display text-2xl md:text-4xl font-extrabold text-[#12151A] tracking-tight mt-1">
                Explore End-to-End Disciplines
              </h2>
            </div>
            <p className="text-sm text-[#5F646D] max-w-md mt-2 md:mt-0 leading-relaxed">
              Every discipline is engineered with dedicated cleanrooms, domain-credentialed annotators, and mathematical inter-rater agreement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_CATEGORIES.map((cat) => {
              const IconComponent = categoryIcons[cat.id] || Cpu;
              return (
                <ThreeDTiltCard key={cat.id} maxTilt={6}>
                  <div className="p-7 rounded-2xl bg-white border border-[#E9ECEF] flex flex-col justify-between h-full hover:border-[#EC5E27] hover:shadow-xl transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-11 h-11 rounded-xl bg-[#FFF3ED] text-[#EC5E27] flex items-center justify-center">
                          <IconComponent size={22} />
                        </div>
                        <span className="text-[10px] font-mono font-bold text-[#8E939D] uppercase tracking-wider">
                          {cat.eyebrow.split(" / ")[0]}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-[#12151A] mb-2">{cat.title}</h3>
                      <p className="text-xs text-[#5F646D] leading-relaxed mb-6">{cat.summary}</p>

                      <div className="space-y-2 mb-6 pt-4 border-t border-[#F8F9FA]">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#EC5E27] font-bold block mb-1">
                          SPECIALIZED SUB-DISCIPLINES:
                        </span>
                        {cat.subpages.map((sub) => (
                          <Link
                            key={sub.slug}
                            to={`/solutions/${cat.slug}/${sub.slug}`}
                            className="flex items-center justify-between p-2 rounded-lg bg-[#F8FAFC] hover:bg-[#FFF3ED] text-xs text-[#12151A] hover:text-[#EC5E27] transition-all group"
                          >
                            <span className="font-semibold truncate">{sub.title}</span>
                            <ChevronRight size={13} className="text-[#8E939D] group-hover:text-[#EC5E27] shrink-0 ml-2" />
                          </Link>
                        ))}
                      </div>
                    </div>

                    <Link
                      to={`/solutions/${cat.slug}`}
                      className="inline-flex items-center justify-between w-full p-3 rounded-xl bg-[#12151A] text-white hover:bg-[#EC5E27] transition-colors text-xs font-bold"
                    >
                      <span>Explore {cat.title}</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </ThreeDTiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOUR-CARD INTERACTIVE WORKFLOW */}
      <WorkflowCards />

      {/* FAQ SECTION */}
      <section className="section section-white">
        <div className="container service-faq">
          <div>
            <span className="eyebrow">COMMON QUESTIONS</span>
            <h2>Before we begin.</h2>
            <p>These are starting points; the final scope depends on the project brief.</p>
          </div>

          <div className="faq-list">
            <details>
              <summary>Can I request only one specialized service?</summary>
              <p>
                Yes. A project can focus on a single capability such as 3D LiDAR cuboids, clinical OCR, or phonetic transcription, or combine several services into an end-to-end multi-modal pipeline.
              </p>
            </details>

            <details>
              <summary>Can you follow our internal custom annotation schema?</summary>
              <p>
                Share your schema, edge-case catalog, and acceptance criteria during technical discovery. The workflow will be programmed directly into our annotation tools with custom validation constraints.
              </p>
            </details>

            <details>
              <summary>How do you verify quality before delivery?</summary>
              <p>
                We enforce statistically validated Inter-Annotator Agreement (Krippendorff's Alpha ≥ 0.88), continuous 5% blind gold-task injection, and multi-pass lead adjudication.
              </p>
            </details>

            <details>
              <summary>What are your compliance and air-gapped data guarantees?</summary>
              <p>
                We operate under strict ISO 27001 Certified alignment and ISO/IEC 27001 standards. Data is processed in air-gapped virtual desktop environments (VDI) with disabled peripheral ports and complete cryptographic erasure upon completion.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* DATA WORKFLOW CHART */}
      <DataWorkflowChart />

      {/* FINAL CTA WITH BRAIN CONNECTION IMAGE */}
      <section className="cta-brain-section">
        <div className="cta-brain-background">
          <img src="/images/brain-connection.jpg" alt="Two connected minds representing human intelligence and collaboration" />
        </div>

        <div className="cta-brain-overlay" />

        <div className="container cta-brain-content">
          <span className="eyebrow">NOT SURE WHERE TO START?</span>
          <h2>Let's shape the brief together.</h2>
          <p>
            Tell us about your model architecture, modalities, and intended outcome. We can help map the work into a practical, calibrated scope.
          </p>

          <Link className="cta-floating-button" to="/contact">
            Discuss Your Requirements <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}

export default ServicesPage;
