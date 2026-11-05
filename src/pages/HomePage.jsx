import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ShieldCheck, Sparkles, Target, Users, Workflow, Globe2, Calculator } from "lucide-react";
import { SectionHeading } from "../components/section-heading";
import { SynapticHero } from "../components/synaptic-hero";
import { VerkosStackSection } from "../components/verkos-stack-section";
import { MetricsStrip } from "../components/metrics-strip";
import { EnterpriseTrustStrip } from "../components/enterprise-trust-strip";
import { WhyChooseSection } from "../components/why-choose-section";
import { DatasetEstimator } from "../components/dataset-estimator";
import { ThreeDTiltCard } from "../components/ThreeDVisualizers";
import { homeModalityCards, homeProcessSteps } from "../lib/home-content";

export function HomePage() {
    return (<>
      <SynapticHero />

      <MetricsStrip />

      <EnterpriseTrustStrip />

      <VerkosStackSection />

      <section className="section section-white modality-section">
        <div className="container">
          <SectionHeading eyebrow="DATA IN EVERY MODALITY" title="Build a clearer picture of the real world." description="From a single document to hours of video or speech, we shape raw inputs into consistent examples your AI workflow can use."/>
          <div className="modality-grid">
            {homeModalityCards.map((card) => (
              <ThreeDTiltCard key={card.number} maxTilt={8} style={{ borderRadius: "18px" }}>
                <article
                  className="modality-card modality-image"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(7,18,38,.02) 10%, rgba(7,18,38,.88) 100%), url(${card.image})`,
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <span className="modality-number">{card.number}</span>
                  <div>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                </article>
              </ThreeDTiltCard>
            ))}
          </div>
          <div className="modality-footnote">
             Every engagement is scoped to your specifications, coverage needs and acceptance criteria.
          </div>
        </div>
      </section>

      <section className="section section-video-showcase">
        <div className="container video-showcase-grid">
          <div className="video-showcase-copy">
            <span className="eyebrow eyebrow-light"> SEE THE WORKFLOW</span>
            <h2>Real-world inputs.<br /><span>Structured for AI.</span></h2>
            <p>Explore how visual, audio and language data move through a deliberate collection and review workflow. Every project is scoped to its own requirements.</p>
            <Link className="text-link text-link-light" to="/services">Explore all capabilities <ArrowRight size={17}/></Link>
          </div>
          <div className="video-showcase-frame">
            <video autoPlay loop muted playsInline webkit-playsinline="true" preload="auto" aria-label="DaQube workflow demonstration video">
              <source src="/videos/Workflow_Demonstration.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
            <span className="video-showcase-caption"> DATA COLLECTION IN MOTION</span>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container split-section">
          <div className="split-copy">
            <span className="eyebrow"> THE DAQUBE APPROACH</span>
            <h2>Useful AI starts with data that reflects the real world.</h2>
            <p>Models learn from the examples they see. Coverage gaps, ambiguous labels and inconsistent transcripts can become blind spots later. A deliberate data process helps teams address those issues earlier.</p>
            <p>DaQube helps plan the collection, annotation and review steps around your use case—so datasets arrive organized, documented and ready for the next stage of development.</p>
            <Link className="button button-dark" to="/quality">Explore our approach <ArrowUpRight size={16}/></Link>
          </div>
          <div className="principle-stack">
            <div className="principle-card"><span className="principle-icon"><Target size={20}/></span><div><h3>Purpose-built</h3><p>Specifications and workflows shaped around your use case.</p></div><span className="principle-index">01</span></div>
            <div className="principle-card"><span className="principle-icon"><Users size={20}/></span><div><h3>Human-centered</h3><p>People, clear instructions and review built into the process.</p></div><span className="principle-index">02</span></div>
            <div className="principle-card"><span className="principle-icon"><ShieldCheck size={20}/></span><div><h3>Quality-aware</h3><p>Defined checks, issue tracking and agreed acceptance criteria.</p></div><span className="principle-index">03</span></div>
            <div className="principle-card"><span className="principle-icon"><Workflow size={20}/></span><div><h3>Workflow-ready</h3><p>Structured deliverables designed for your downstream pipeline.</p></div><span className="principle-index">04</span></div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <SectionHeading eyebrow="HOW WE WORK" title="A clear path from brief to delivery." description="A practical project flow: agree on the target, test the guidelines, validate early samples and scale only when the output meets the agreed criteria." centered/>
          <div className="process-grid">
            {homeProcessSteps.map((step, index) => (<div className="process-step" key={step.number}>
                <div className="process-top"><span>{step.number}</span>{index < homeProcessSteps.length - 1 && <div className="process-connector"/>}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>))}
          </div>
        </div>
      </section>

      <section className="industries-band">
        <div className="container industries-band-inner">
          <div>
            <span className="eyebrow eyebrow-light"> BUILT FOR COMPLEX WORK</span>
            <h2>Different industries.<br /><span>Different data needs.</span></h2>
            <p>From visual perception to language understanding, the workflow starts with your model and the world it needs to understand.</p>
            <Link className="text-link text-link-light" to="/industries">Explore industries <ArrowRight size={17}/></Link>
          </div>
          <div className="industry-pills">
            <span>Computer vision</span><span>Speech & language</span><span>Retail & commerce</span>
            <span>Mobility & robotics</span><span>Enterprise AI</span><span>Research & evaluation</span>
            <span>Multimodal systems</span>
          </div>
          <div className="band-decoration"><div /><div /><div /></div>
        </div>
      </section>

      {/* Why Choose DaQube Section */}
      <WhyChooseSection />

      {/* Interactive Dataset Estimator Section */}
      <section className="section section-white">
        <div className="container">
          <SectionHeading
            eyebrow="ESTIMATE & SCOPE"
            title="Calculate your dataset requirements."
            description="Explore timelines, workforce calibration, and delivery schemas based on your target modality and volume."
            centered
          />
          <div className="mt-8">
            <DatasetEstimator />
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <SectionHeading eyebrow="INSIGHTS & WORKFLOWS" title="Ideas you can put to work." description="Explore practical articles and illustrative project workflows for planning better training data."/>
          <div className="home-editorial-grid">
            <ThreeDTiltCard maxTilt={6} style={{ borderRadius: "16px" }}>
              <Link to="/insights/why-data-coverage-matters" className="home-editorial-card" style={{ height: "100%", width: "100%" }}>
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85" alt="Technology components"/>
                <div><span className="eyebrow">DATA STRATEGY · 5 MIN READ</span><h3>Why data coverage matters more than dataset size</h3><p>Plan around real-world variation, not just a file count.</p><span className="text-link">Read the article <ArrowRight size={15}/></span></div>
              </Link>
            </ThreeDTiltCard>
            <ThreeDTiltCard maxTilt={6} style={{ borderRadius: "16px" }}>
              <Link to="/case-studies/retail-shelf-vision" className="home-editorial-card" style={{ height: "100%", width: "100%" }}>
                <img src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=1000&q=85" alt="Retail shelf display"/>
                <div><span className="eyebrow">ILLUSTRATIVE WORKFLOW</span><h3>Designing a retail shelf dataset for visual recognition</h3><p>See how coverage planning, image capture and annotation could fit together.</p><span className="text-link">Explore the workflow <ArrowRight size={15}/></span></div>
              </Link>
            </ThreeDTiltCard>
          </div>
          <div className="section-bottom-link">
            <span>More practical guides and example workflows</span>
            <span className="home-editorial-links">
              <Link className="text-link" to="/insights">All insights <ArrowRight size={15}/></Link>
              <Link className="text-link" to="/case-studies">All case studies <ArrowRight size={15}/></Link>
              <Link className="text-link" to="/network">Global Network <ArrowRight size={15}/></Link>
            </span>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container cta-panel">
          <div className="cta-symbol"><Sparkles size={26}/></div>
          <div className="cta-copy">
            <span className="eyebrow">LET'S BUILD WHAT'S NEXT</span>
            <h2>Have a data challenge?</h2>
            <p>Tell us what your model needs. We'll help you shape the right data workflow.</p>
          </div>
          <Link className="button button-crimson" to="/contact">Start a conversation <ArrowRight size={17}/></Link>
          <span className="cta-watermark">DQ</span>
        </div>
      </section>
    </>);
}
export default HomePage;
