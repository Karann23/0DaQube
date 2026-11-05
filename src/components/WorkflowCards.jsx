import "./WorkflowCards.css";
import { ThreeDTiltCard } from "./ThreeDVisualizers";

const workflowSteps = [
    {
        number: "01",
        title: "Scope",
        description: "Use case, data requirements, schema and acceptance criteria.",
    },
    {
        number: "02",
        title: "Produce",
        description: "Collection, preparation, transcription or annotation.",
    },
    {
        number: "03",
        title: "Review",
        description: "Sample checks, issue resolution and agreed validation.",
    },
    {
        number: "04",
        title: "Deliver",
        description: "Structured files, metadata and handoff documentation.",
    },
];

export default function WorkflowCards() {
    return (
      <section className="workflow-cards-section">
        <div className="workflow-cards-container">
          <div className="workflow-cards-heading">
            <span>ONE COORDINATED WORKFLOW</span>
            <h2>Combine capabilities without losing the detail.</h2>
            <p>
              Collection, annotation, transcription and evaluation often work best
              when they share one specification. Define the outcome first, then
              choose the stages needed to get there.
            </p>
          </div>

          <div className="workflow-cards-grid">
            {workflowSteps.map((step) => (
              <ThreeDTiltCard key={step.number} maxTilt={8} style={{ borderRadius: "16px" }}>
                <article className="workflow-card" style={{ height: "100%", width: "100%" }}>
                  <div className="workflow-card-number">{step.number}</div>
                  <div className="workflow-card-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                  <div className="workflow-card-accent" />
                </article>
              </ThreeDTiltCard>
            ))}
          </div>
        </div>
      </section>
    );
}
