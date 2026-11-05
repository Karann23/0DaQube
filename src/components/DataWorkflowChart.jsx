import React, { useState, useRef, useCallback, useLayoutEffect } from "react";
import { Database, Cpu, ClipboardCheck, UserCheck, BrainCircuit, ShieldCheck, SearchCheck, ArrowRight, Sparkles, } from "lucide-react";
import "./DataWorkflowChart.css";
export const WORKFLOW_STAGES = [
    {
        stepId: 1,
        number: "01",
        title: "Data Collection & Pre-training",
        description: "Sourcing multimodal datasets and structuring domain corpora.",
        activeCards: ["data-collection", "pre-training", "arrow-1"],
    },
    {
        stepId: 2,
        number: "02",
        title: "Post Training (SFT & RLHF)",
        description: "Supervised fine tuning, prompt engineering and human reward modeling.",
        activeCards: ["sft", "rlhf", "post-training-box", "arrow-2", "arrow-3"],
    },
    {
        stepId: 3,
        number: "03",
        title: "Quality Control & Evaluation",
        description: "Accuracy checks, bias red-teaming, and continuous feedback loop.",
        activeCards: ["qa", "dataset-eval", "evaluation-box", "down-arrow", "feedback-post", "feedback-data"],
    },
    {
        stepId: 4,
        number: "04",
        title: "Human-Aligned LLM",
        description: "Final production-grade model optimized for natural language and safety.",
        activeCards: ["human-aligned-llm", "eval-output-arrow", "arrow-3"],
    },
];
// ============================================================================
// 2. EDIT TOP PIPELINE NODES (Data Collection, Pre-training, Post-Training, LLM)
//    Edit card titles, descriptions, and badges here.
// ============================================================================
export const TOP_PIPELINE = {
    dataCollection: {
        id: "data-collection",
        stageId: 1,
        title: "Data Collection",
        description: "Collection and creation of required data",
        icon: Database,
    },
    preTraining: {
        id: "pre-training",
        stageId: 1,
        title: "Pre-training",
        description: "High-quality data, domain + vertical market expertise",
        icon: Cpu,
    },
    postTrainingGroup: {
        id: "post-training-box",
        badge: "POST TRAINING",
        sft: {
            id: "sft",
            stageId: 2,
            title: "Supervised Fine Tuning",
            description: "Prompt creation, rating and ranking",
            icon: ClipboardCheck,
        },
        rlhf: {
            id: "rlhf",
            stageId: 2,
            title: "Reinforcement Learning from Human Feedback (RLHF)",
            description: "Human inputs through rewards",
            icon: UserCheck,
        },
    },
    humanAlignedLlm: {
        id: "human-aligned-llm",
        stageId: 4,
        title: "Human-aligned LLM",
        description: "Optimized for natural language interaction",
        icon: BrainCircuit,
    },
};
// ============================================================================
// 3. EDIT QUALITY CONTROL & EVALUATION CARDS (Bottom Dashed Box)
//    Edit QA & Dataset Evaluation card text here.
// ============================================================================
export const EVALUATION_SECTION = {
    badge: "EVALUATION",
    cards: [
        {
            id: "qa",
            stageId: 3,
            tag: "RED TEAMING & QA",
            title: "Quality Assurance",
            description: "Accuracy, consistency and completeness checks. Evaluate for inclusion, bias and hallucinations.",
            icon: ShieldCheck,
        },
        {
            id: "dataset-eval",
            stageId: 3,
            tag: "MODEL EVALUATION",
            title: "Dataset Evaluation",
            description: "Sampling, validation benchmarks, automated scoring and continuous human reviews.",
            icon: SearchCheck,
        },
    ],
};
// ============================================================================
// 4. EDIT ARROW LABELS & FEEDBACK LOOP TEXT
//    Edit connecting arrow annotations matching the architecture diagram.
// ============================================================================
export const ARROW_ANNOTATIONS = {
    downEvaluationTitle: "Evaluation",
    downEvaluationSub: "Automated & human evaluation",
    feedbackPostTraining: "Feedback to refine alignment and safety",
    feedbackDataCollection: "Feedback for Data Collection to improve dataset quality",
    evaluationOutput: "Evaluation output",
};
// Magnifier settings (Enlarged lens dimensions)
const MAGNIFIER_SCALE = 1.45;
const LENS_WIDTH = 380;
const LENS_HEIGHT = 190;
export default function DataWorkflowChart() {
    const [activeStage, setActiveStage] = useState(1);
    const diagramRef = useRef(null);
    // Element Refs to dynamically calculate connecting SVG paths
    const dataCardRef = useRef(null);
    const preCardRef = useRef(null);
    const postBoxRef = useRef(null);
    const evalBoxRef = useRef(null);
    const llmCardRef = useRef(null);
    // Computed SVG Paths for Arrows
    const [paths, setPaths] = useState({
        downArrow: "",
        feedbackPost: "",
        feedbackData: "",
        evalToLlm: "",
        downLabelPos: { x: 0, y: 0 },
        feedbackPostPos: { x: 0, y: 0 },
        feedbackDataPos: { x: 0, y: 0 },
        evalOutputPos: { x: 0, y: 0 },
    });
    // Mouse coordinates inside diagram container for Enlarged Glasses Lens
    const [mousePos, setMousePos] = useState({
        x: 0,
        y: 0,
        visible: false,
    });
    const [diagramSize, setDiagramSize] = useState({
        width: 1200,
        height: 520,
    });
    // Calculate pixel-exact paths connecting nodes
    const calculatePaths = useCallback(() => {
        if (!diagramRef.current)
            return;
        const cont = diagramRef.current.getBoundingClientRect();
        setDiagramSize({ width: cont.width, height: cont.height });
        const getRel = (el) => {
            if (!el)
                return { x: 0, y: 0, left: 0, right: 0, top: 0, bottom: 0, width: 0, height: 0 };
            const r = el.getBoundingClientRect();
            return {
                x: r.left - cont.left + r.width / 2,
                y: r.top - cont.top + r.height / 2,
                left: r.left - cont.left,
                right: r.right - cont.left,
                top: r.top - cont.top,
                bottom: r.bottom - cont.top,
                width: r.width,
                height: r.height,
            };
        };
        const dataR = getRel(dataCardRef.current);
        const postR = getRel(postBoxRef.current);
        const evalR = getRel(evalBoxRef.current);
        const llmR = getRel(llmCardRef.current);
        if (postR.width === 0 || evalR.width === 0)
            return;
        // 1. Downward arrow from Post-Training to Evaluation
        const downX = evalR.left + evalR.width * 0.52;
        const downY1 = postR.bottom + 2;
        const downY2 = evalR.top - 6;
        const downPath = `M ${downX} ${downY1} L ${downX} ${downY2}`;
        // Mid Y coordinate between post and eval boxes
        const midY = (postR.bottom + evalR.top) / 2;
        // 2. Feedback branch going up into Post-Training (to the left of Evaluation)
        const postBranchX = evalR.left - 65;
        const feedbackPostPath = `M ${evalR.left} ${midY} L ${postBranchX} ${midY} L ${postBranchX} ${postR.bottom + 6}`;
        // 3. Feedback loop running left to Data Collection (runs cleanly below the Evaluation box)
        const feedbackDataY = evalR.bottom + 18;
        const dataTargetX = dataR.x || (dataR.left + 70);
        const feedbackDataPath = `M ${evalR.left + 10} ${feedbackDataY} L ${dataTargetX} ${feedbackDataY} L ${dataTargetX} ${dataR.bottom + 6}`;
        // 4. Evaluation output arrow to Human-aligned LLM
        const llmTargetX = llmR.x || (llmR.left + 70);
        const evalOutputPath = `M ${evalR.right - 10} ${feedbackDataY} L ${llmTargetX} ${feedbackDataY} L ${llmTargetX} ${llmR.bottom + 6}`;
        setPaths({
            downArrow: downPath,
            feedbackPost: feedbackPostPath,
            feedbackData: feedbackDataPath,
            evalToLlm: evalOutputPath,
            downLabelPos: { x: downX + 68, y: midY },
            feedbackPostPos: { x: postBranchX, y: midY },
            feedbackDataPos: { x: (evalR.left + dataTargetX) / 2, y: feedbackDataY - 14 },
            evalOutputPos: { x: (evalR.right + llmTargetX) / 2, y: feedbackDataY - 14 },
        });
    }, []);
    useLayoutEffect(() => {
        calculatePaths();
        window.addEventListener("resize", calculatePaths);
        return () => window.removeEventListener("resize", calculatePaths);
    }, [calculatePaths]);
    // Handle cursor moving over the diagram
    const handleMouseMove = (e) => {
        if (!diagramRef.current)
            return;
        const rect = diagramRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            visible: true,
        });
    };
    const handleMouseLeave = () => {
        setMousePos((prev) => ({ ...prev, visible: false }));
    };
    // Check if a card or connector is active based on current active stage
    const currentStageObj = WORKFLOW_STAGES.find((s) => s.stepId === activeStage) || WORKFLOW_STAGES[0];
    const isCardActive = (cardId) => currentStageObj.activeCards.includes(cardId);
    // Diagram Inner Content (shared between normal view and magnified lens)
    const renderDiagramContent = (isMagnified = false) => {
        return (<div className={`dw-diagram-inner ${isMagnified ? "is-magnified-view" : ""}`}>
        {/* SVG ARROWS & CONNECTORS LAYER */}
        <svg className="dw-svg-overlay" aria-hidden="true">
          <defs>
            {/* Standard subtle arrow markers */}
            <marker id="dw-arrow-down-idle" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
              <path d="M 0 0 L 6 3 L 0 6 z" fill="rgba(255, 255, 255, 0.4)"/>
            </marker>
            <marker id="dw-arrow-up-idle" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
              <path d="M 0 0 L 6 3 L 0 6 z" fill="rgba(255, 255, 255, 0.4)"/>
            </marker>

            {/* Active glowing flame orange arrow markers */}
            <marker id="dw-arrow-down-active" markerWidth="7" markerHeight="7" refX="4" refY="3.5" orient="auto">
              <path d="M 0 0 L 7 3.5 L 0 7 z" fill="#EC5E27"/>
            </marker>
            <marker id="dw-arrow-up-active" markerWidth="7" markerHeight="7" refX="4" refY="3.5" orient="auto">
              <path d="M 0 0 L 7 3.5 L 0 7 z" fill="#EC5E27"/>
            </marker>
          </defs>

          {/* 1. Downward arrow from Post-Training to Evaluation */}
          {paths.downArrow && (<path d={paths.downArrow} className={`dw-svg-path ${isCardActive("down-arrow") ? "is-active" : ""}`} markerEnd={isCardActive("down-arrow") ? "url(#dw-arrow-down-active)" : "url(#dw-arrow-down-idle)"}/>)}

          {/* 2. Feedback line to Post-Training */}
          {paths.feedbackPost && (<path d={paths.feedbackPost} className={`dw-svg-path ${isCardActive("feedback-post") ? "is-active" : ""}`} markerEnd={isCardActive("feedback-post") ? "url(#dw-arrow-up-active)" : "url(#dw-arrow-up-idle)"}/>)}

          {/* 3. Feedback line to Data Collection */}
          {paths.feedbackData && (<path d={paths.feedbackData} className={`dw-svg-path ${isCardActive("feedback-data") ? "is-active" : ""}`} markerEnd={isCardActive("feedback-data") ? "url(#dw-arrow-up-active)" : "url(#dw-arrow-up-idle)"}/>)}

          {/* 4. Output arrow to Human-aligned LLM */}
          {paths.evalToLlm && (<path d={paths.evalToLlm} className={`dw-svg-path ${isCardActive("eval-output-arrow") ? "is-active" : ""}`} markerEnd={isCardActive("eval-output-arrow") ? "url(#dw-arrow-up-active)" : "url(#dw-arrow-up-idle)"}/>)}
        </svg>

        {/* FLOATING TEXT LABELS FOR ARROWS */}
        {paths.downLabelPos.x > 0 && (<div className={`dw-arrow-label-pill pill-down ${isCardActive("down-arrow") ? "is-active" : ""}`} style={{ left: `${paths.downLabelPos.x}px`, top: `${paths.downLabelPos.y}px` }}>
            <strong>{ARROW_ANNOTATIONS.downEvaluationTitle}</strong>
            <span>{ARROW_ANNOTATIONS.downEvaluationSub}</span>
          </div>)}

        {paths.feedbackPostPos.x > 0 && (<div className={`dw-arrow-label-pill pill-post ${isCardActive("feedback-post") ? "is-active" : ""}`} style={{ left: `${paths.feedbackPostPos.x}px`, top: `${paths.feedbackPostPos.y}px` }}>
            <span>{ARROW_ANNOTATIONS.feedbackPostTraining}</span>
          </div>)}

        {paths.feedbackDataPos.x > 0 && (<div className={`dw-arrow-label-pill pill-data ${isCardActive("feedback-data") ? "is-active" : ""}`} style={{ left: `${paths.feedbackDataPos.x}px`, top: `${paths.feedbackDataPos.y}px` }}>
            <span>{ARROW_ANNOTATIONS.feedbackDataCollection}</span>
          </div>)}

        {paths.evalOutputPos.x > 0 && (<div className={`dw-arrow-label-pill pill-llm ${isCardActive("eval-output-arrow") ? "is-active" : ""}`} style={{ left: `${paths.evalOutputPos.x}px`, top: `${paths.evalOutputPos.y}px` }}>
            <span>{ARROW_ANNOTATIONS.evaluationOutput}</span>
          </div>)}

        {/* ------------------------------------------------------------------ */}
        {/* TOP ROW: PRODUCTION PIPELINE                                       */}
        {/* ------------------------------------------------------------------ */}
        <div className="dw-top-pipeline">
          {/* Node 1: Data Collection */}
          <div ref={!isMagnified ? dataCardRef : undefined} className={`dw-node-card ${isCardActive(TOP_PIPELINE.dataCollection.id) ? "is-active" : "is-dimmed"}`} onClick={() => setActiveStage(TOP_PIPELINE.dataCollection.stageId)}>
            <div className="dw-node-icon">
              <TOP_PIPELINE.dataCollection.icon size={26} strokeWidth={1.5}/>
            </div>
            <h3>{TOP_PIPELINE.dataCollection.title}</h3>
            <p>{TOP_PIPELINE.dataCollection.description}</p>
          </div>

          {/* Solid Connector Arrow 1 */}
          <div className={`dw-solid-arrow ${isCardActive("arrow-1") ? "is-active" : ""}`}>
            <ArrowRight size={18}/>
          </div>

          {/* Node 2: Pre-training */}
          <div ref={!isMagnified ? preCardRef : undefined} className={`dw-node-card ${isCardActive(TOP_PIPELINE.preTraining.id) ? "is-active" : "is-dimmed"}`} onClick={() => setActiveStage(TOP_PIPELINE.preTraining.stageId)}>
            <div className="dw-node-icon">
              <TOP_PIPELINE.preTraining.icon size={26} strokeWidth={1.5}/>
            </div>
            <h3>{TOP_PIPELINE.preTraining.title}</h3>
            <p>{TOP_PIPELINE.preTraining.description}</p>
          </div>

          {/* Solid Connector Arrow 2 */}
          <div className={`dw-solid-arrow ${isCardActive("arrow-2") ? "is-active" : ""}`}>
            <ArrowRight size={18}/>
          </div>

          {/* Dashed Box: Post Training (Enclosing SFT + RLHF) */}
          <div ref={!isMagnified ? postBoxRef : undefined} className={`dw-dashed-group post-training-group ${isCardActive(TOP_PIPELINE.postTrainingGroup.id) ? "is-active" : ""}`}>
            <div className="dw-group-badge">{TOP_PIPELINE.postTrainingGroup.badge}</div>

            <div className="dw-group-cards">
              {/* Node 3: Supervised Fine Tuning */}
              <div className={`dw-node-card dw-inner-card ${isCardActive(TOP_PIPELINE.postTrainingGroup.sft.id) ? "is-active" : "is-dimmed"}`} onClick={() => setActiveStage(TOP_PIPELINE.postTrainingGroup.sft.stageId)}>
                <div className="dw-node-icon">
                  <TOP_PIPELINE.postTrainingGroup.sft.icon size={24} strokeWidth={1.5}/>
                </div>
                <h3>{TOP_PIPELINE.postTrainingGroup.sft.title}</h3>
                <p>{TOP_PIPELINE.postTrainingGroup.sft.description}</p>
              </div>

              {/* Node 4: RLHF */}
              <div className={`dw-node-card dw-inner-card ${isCardActive(TOP_PIPELINE.postTrainingGroup.rlhf.id) ? "is-active" : "is-dimmed"}`} onClick={() => setActiveStage(TOP_PIPELINE.postTrainingGroup.rlhf.stageId)}>
                <div className="dw-node-icon">
                  <TOP_PIPELINE.postTrainingGroup.rlhf.icon size={24} strokeWidth={1.5}/>
                </div>
                <h3>{TOP_PIPELINE.postTrainingGroup.rlhf.title}</h3>
                <p>{TOP_PIPELINE.postTrainingGroup.rlhf.description}</p>
              </div>
            </div>
          </div>

          {/* Solid Accent Connector Arrow 3 */}
          <div className={`dw-solid-arrow dw-accent-arrow ${isCardActive("arrow-3") ? "is-active" : ""}`}>
            <ArrowRight size={20}/>
          </div>

          {/* Node 5: Human-aligned LLM */}
          <div ref={!isMagnified ? llmCardRef : undefined} className={`dw-node-card dw-llm-card ${isCardActive(TOP_PIPELINE.humanAlignedLlm.id) ? "is-active" : "is-dimmed"}`} onClick={() => setActiveStage(TOP_PIPELINE.humanAlignedLlm.stageId)}>
            <div className="dw-llm-accent-glow"/>
            <div className="dw-node-icon dw-llm-icon">
              <TOP_PIPELINE.humanAlignedLlm.icon size={28} strokeWidth={1.6}/>
            </div>
            <h3>{TOP_PIPELINE.humanAlignedLlm.title}</h3>
            <p>{TOP_PIPELINE.humanAlignedLlm.description}</p>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* BOTTOM ROW: QUALITY CONTROL & EVALUATION (Directly under Post)    */}
        {/* ------------------------------------------------------------------ */}
        <div className="dw-bottom-area">
          <div ref={!isMagnified ? evalBoxRef : undefined} className={`dw-dashed-group evaluation-group ${isCardActive("evaluation-box") ? "is-active" : ""}`}>
            <div className="dw-group-cards">
              {EVALUATION_SECTION.cards.map((card) => {
                const Icon = card.icon;
                const active = isCardActive(card.id);
                return (<div key={card.id} className={`dw-node-card dw-eval-card ${active ? "is-active" : "is-dimmed"}`} onClick={() => setActiveStage(card.stageId)}>
                    <div className="dw-node-icon">
                      <Icon size={24} strokeWidth={1.5}/>
                    </div>
                    <span className="dw-eval-tag">{card.tag}</span>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>);
            })}
            </div>
          </div>
        </div>
      </div>);
    };
    return (<section className="dw-section" aria-label="Interactive AI Data Pipeline Workflow">
      <div className="dw-container">
        {/* Section Heading (Compact to ensure entire view fits in one screen) */}
        <div className="dw-heading">
          <span className="dw-eyebrow">
            <Sparkles size={13}/>
            INTERACTIVE LLM WORKFLOW
          </span>
          <h2>
            From Raw Real-World Data to <span>Human-Aligned AI.</span>
          </h2>
          <p>
            Trace each stage of data preparation, supervised training, evaluation, and feedback loops.
            Hover over the diagram with the AR lens to inspect details.
          </p>
        </div>

        {/* 1. TOP PROCESS STAGES TABS (Step 01 to Step 04) */}
        <div className="dw-stages">
          {WORKFLOW_STAGES.map((stage) => {
            const isActive = activeStage === stage.stepId;
            return (<div className={`dw-stage ${isActive ? "active" : ""}`} key={stage.number} onClick={() => setActiveStage(stage.stepId)} onMouseEnter={() => setActiveStage(stage.stepId)}>
                <div className="dw-stage-head">
                  <span className="dw-stage-number">{stage.number}</span>
                  <span className="dw-stage-dot"/>
                </div>
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
                <div className="dw-stage-line"/>
              </div>);
        })}
        </div>

        {/* 2. MAIN INTERACTIVE DIAGRAM ARENA */}
        <div ref={diagramRef} className="dw-diagram-wrapper" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          {/* Base Diagram Rendering */}
          {renderDiagramContent(false)}

          {/* 3. ENLARGED AR GLASSES MAGNIFIER (No 'Apple Glass' text) */}
          {mousePos.visible && (<div className="ar-glasses-container" style={{
                left: `${mousePos.x}px`,
                top: `${mousePos.y}px`,
            }}>
              <div className="ar-glasses-frame">
                {/* Crown Hardware Accent */}
                <div className="ar-glasses-crown"/>

                {/* Spatial Specular Reflection */}
                <div className="ar-glasses-sheen"/>

                {/* Clean AR HUD Overlays (Apple Glass text removed, pure HUD reticle) */}
                <div className="ar-glasses-hud">
                  <div className="ar-glasses-hud-top">
                    <div className="ar-hud-badge">
                      <span className="ar-hud-dot"/>
                      <span>DATA INSPECTOR</span>
                    </div>
                    <span className="ar-hud-zoom">1.45× ZOOM</span>
                  </div>

                  {/* Corner Target Brackets */}
                  <div className="ar-bracket tl"/>
                  <div className="ar-bracket tr"/>
                  <div className="ar-bracket bl"/>
                  <div className="ar-bracket br"/>
                </div>

                {/* Center Reticle Crosshair */}
                <div className="ar-glasses-crosshair"/>

                {/* Center Nose Bridge Detail */}
                <div className="ar-glasses-bridge"/>

                {/* Magnified Optical Pass-through Viewport */}
                <div className="ar-glasses-viewport">
                  <div className="ar-glasses-magnified-content" style={{
                width: `${diagramSize.width}px`,
                height: `${diagramSize.height}px`,
                transform: `translate3d(${-mousePos.x * MAGNIFIER_SCALE + LENS_WIDTH / 2}px, ${-mousePos.y * MAGNIFIER_SCALE + LENS_HEIGHT / 2}px, 0) scale(${MAGNIFIER_SCALE})`,
            }}>
                    {renderDiagramContent(true)}
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>);
}
