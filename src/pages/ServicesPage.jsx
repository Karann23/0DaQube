import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Services3DCarousel } from "../components/Services3DCarousel";
import { ServicesHeroMarquee } from "../components/ServicesHeroMarquee";
import WorkflowCards from "../components/WorkflowCards";
import DataWorkflowChart from "../components/DataWorkflowChart";
import "../components/ServicesCTA.css";

export function ServicesPage() {
  return (
    <>
      {/* ANIMATED SERVICES HERO */}
      <ServicesHeroMarquee />

      {/* IMMERSIVE SERVICES JOURNAL — 3D BOOK CAROUSEL */}
      <section className="section section-white !p-0">
        <Services3DCarousel />
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
