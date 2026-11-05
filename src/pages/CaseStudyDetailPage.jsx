import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, ClipboardList, Layers3, Cpu, ShieldCheck, Sparkles } from "lucide-react";
import { caseStudies } from "../lib/content";
import {
  ThreeDLidarRadar,
  ThreeDAudioVisualizer,
  ThreeDNeuralMatrix,
  ThreeDSecurityEnclave
} from "../components/ThreeDVisualizers";

export function CaseStudyDetailPage() {
  const { slug } = useParams();
  const item = caseStudies.find((x) => x.slug === slug);

  if (!item) {
    return <Navigate to="/case-studies" replace />;
  }

  // Pick appropriate 3D interactive visualizer
  const renderVisualizer = () => {
    if (slug.includes("lidar") || slug.includes("vision") || slug.includes("retail")) {
      return <ThreeDLidarRadar label={`${item.title.toUpperCase()} — 3D SENSOR SIMULATION`} />;
    }
    if (slug.includes("speech") || slug.includes("audio")) {
      return <ThreeDAudioVisualizer title={`${item.title.toUpperCase()} — ACOUSTIC SPECTRUM`} />;
    }
    if (slug.includes("llm") || slug.includes("alignment") || slug.includes("red-teaming")) {
      return <ThreeDNeuralMatrix />;
    }
    return <ThreeDSecurityEnclave />;
  };

  return (
    <>
      {/* Hero */}
      <section className="article-hero">
        <div className="container article-hero-inner">
          <Link to="/case-studies" className="back-link">
            <ArrowLeft size={15} /> Back to all case studies
          </Link>
          <span className="eyebrow eyebrow-light">
            {item.industry} · {item.type}
          </span>
          <h1>{item.title}</h1>
          <p>{item.summary}</p>
        </div>
      </section>

      {/* Featured Cover Image Container (Responsive, crisp sizing) */}
      <div className="container article-cover">
        <img src={item.image} alt={item.imageAlt} />
      </div>

      {/* Main Detail Body */}
      <div className="container case-detail-wrap">
        <div className="case-disclaimer">
          <ClipboardList size={18} />
          <p>{item.note}</p>
        </div>

        {/* 1. Challenge */}
        <section className="case-detail-section">
          <span className="eyebrow">01 / THE OPERATIONAL CHALLENGE</span>
          <h2>Defining the Failure Modes in Production</h2>
          <p>{item.challenge}</p>
        </section>



        {/* 2. Approach */}
        <section className="case-detail-section">
          <span className="eyebrow">02 / TECHNICAL APPROACH</span>
          <h2>Engineering Specifications and Guidelines</h2>
          <div className="case-approach-list">
            {item.approach.map((point, i) => (
              <div key={i}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Workflow Steps */}
        <section className="case-detail-section">
          <span className="eyebrow">03 / END-TO-END PIPELINE WORKFLOW</span>
          <h2>Deterministic Milestones from Ingestion to Handoff</h2>
          <div className="case-workflow-grid">
            {item.workflow.map((step, i) => (
              <div key={i}>
                <Layers3 size={19} />
                <span>PHASE 0{i + 1}</span>
                <h3>{step}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Deliverables */}
        <section className="case-detail-section">
          <span className="eyebrow">04 / CONTRACTED ARTIFACTS & DELIVERABLES</span>
          <h2>Acceptance Criteria and Quality Verification</h2>
          <div className="case-deliverables">
            {item.deliverables.map((d, i) => (
              <div key={i}>
                <CheckCircle2 size={17} />
                <span>{d}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA Card */}
        <div className="case-detail-cta">
          <div>
            <h2>Have a similar data engineering challenge?</h2>
            <p>Speak directly with an ML solutions engineer to scope specifications, sample runs, and milestone delivery schedules.</p>
          </div>
          <Link to="/contact" className="button button-crimson shrink-0">
            Discuss Your Project <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default CaseStudyDetailPage;
