import { useState, useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Layers3,
  Clock3,
  HelpCircle,
  BookOpen
} from "lucide-react";
import { caseStudies, getCaseStudyBySlug } from "../lib/content";
import { ThreeDTiltCard } from "../components/ThreeDVisualizers";
import { ImagePlaceholder } from "../components/image-placeholder";

/**
 * Renders either the photo set in `src/lib/content.js` (under `item.sectionPhotos.section1`, `section2`, `section3`)
 * or a clean visual space placeholder if the string in `src/lib/content.js` is still empty `""`.
 */
function SectionPhotoSpace({ photoUrl, altText, sectionLabel, recommendation, codePath }) {
  if (photoUrl && photoUrl.trim() !== "") {
    return (
      <div className="case-section-photo-box">
        <img src={photoUrl} alt={altText} loading="lazy" />
      </div>
    );
  }

  return (
    <div className="mt-7">
      <ImagePlaceholder
        aspect="21/8"
        label={sectionLabel}
        caption={recommendation}
        specs={codePath}
      />
    </div>
  );
}

export function CaseStudyDetailPage() {
  const { slug } = useParams();
  const item = getCaseStudyBySlug(slug);

  const [activePhase, setActivePhase] = useState(0);
  const [activeDeepDiveTab, setActiveDeepDiveTab] = useState(0);

  useEffect(() => {
    setActivePhase(0);
    setActiveDeepDiveTab(0);
  }, [slug]);

  if (!item) {
    return <Navigate to="/case-studies" replace />;
  }

  const relatedStudies = caseStudies
    .filter((cs) => cs.slug !== item.slug)
    .slice(0, 3);

  return (
    <>
      {/* 1. Unified Dark Hero Section (#090C10 with #EC5E27 accents) */}
      <section className="article-hero">
        <div className="article-hero-inner">
          <Link to="/case-studies" className="back-link">
            <ArrowLeft size={15} /> Back to all case studies
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="eyebrow eyebrow-light !mb-0">
              {item.industry} · {item.type}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#94A3B8] bg-white/5 px-3 py-1 rounded-full border border-white/10">
              <Clock3 size={13} className="text-[#EC5E27]" /> {item.readTime}
            </span>
          </div>
          <h1>{item.title}</h1>
          <p>{item.summary}</p>

          {/* Interactive Section Quick-Jump Bar */}
          <div className="flex flex-wrap items-center gap-2 mt-6 pt-5 border-t border-white/10">
            <a href="#section-challenge" className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/5 text-[#CBD5E1] hover:bg-[#EC5E27] hover:text-white transition-all">
              01 / Challenge & Scope
            </a>
            <a href="#section-approach" className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/5 text-[#CBD5E1] hover:bg-[#EC5E27] hover:text-white transition-all">
              02 / Technical Approach
            </a>
            <a href="#section-comparison" className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/5 text-[#CBD5E1] hover:bg-[#EC5E27] hover:text-white transition-all">
              Comparison Matrix
            </a>
            <a href="#section-workflow" className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/5 text-[#CBD5E1] hover:bg-[#EC5E27] hover:text-white transition-all">
              03 / 5-Phase Workflow
            </a>
            <a href="#section-deliverables" className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/5 text-[#CBD5E1] hover:bg-[#EC5E27] hover:text-white transition-all">
              04 / Deliverables
            </a>
            <a href="#section-faq" className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/5 text-[#CBD5E1] hover:bg-[#EC5E27] hover:text-white transition-all">
              05 / Technical FAQs
            </a>
          </div>
        </div>
      </section>

      {/* 2. Featured Hero Cover Image (Updated via `image` property in src/lib/content.js) */}
      <div className="article-cover">
        <img src={item.image} alt={item.imageAlt} />
      </div>

      {/* Main Detail Body (Expanded 1360px container for balanced left/right spacing) */}
      <div className="case-detail-wrap">
        {/* Executive Intro */}
        {item.intro && (
          <p className="text-lg md:text-xl font-medium text-[#12151A] leading-relaxed mb-6">
            {item.intro}
          </p>
        )}

        {/* DaQube Note Banner */}
        <div className="case-disclaimer">
          <ClipboardList size={18} />
          <p>{item.note}</p>
        </div>

        {/* SECTION 01: Challenge & Collected Data Scope */}
        <section id="section-challenge" className="case-detail-section">
          <span className="eyebrow">01 / THE OPERATIONAL CHALLENGE & DATA SCOPE</span>
          <h2>{item.challengeTitle || "Defining the Operational Requirements"}</h2>
          <p>{item.challenge}</p>

          {item.collectedDataTypes && item.collectedDataTypes.length > 0 && (
            <div className="mt-6 p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2E8F0] shadow-sm">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#EC5E27] mb-3">
                KEY DATA TYPES & MODALITIES COVERED IN THIS WORKFLOW:
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {item.collectedDataTypes.map((dt, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#FDFDF1] border border-[#E9ECEF] text-sm text-[#12151A] font-medium"
                  >
                    <CheckCircle2 size={16} className="text-[#EC5E27] shrink-0 mt-0.5" />
                    <span>{dt}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 01 Photo Space (Updated in code via item.sectionPhotos.section1 in src/lib/content.js) */}
          <SectionPhotoSpace
            photoUrl={item.sectionPhotos?.section1}
            altText={`${item.title} - Section 01 Visual`}
            sectionLabel="SECTION 01 VISUAL SPACE"
            recommendation={item.sectionPhotoGuides?.section1 || "Add your Section 01 overview image path in src/lib/content.js"}
            codePath={`src/lib/content.js → sectionPhotos.section1`}
          />
        </section>

        {/* SECTION 02: Technical Approach (4 Boxes in 1 Line) */}
        <section id="section-approach" className="case-detail-section">
          <span className="eyebrow">02 / TECHNICAL APPROACH & METHODOLOGY</span>
          <h2>{item.approachTitle || "Engineering Specifications and Guidelines"}</h2>
          <div className="case-approach-list">
            {item.approach.map((point, i) => (
              <div key={i}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <p>{point}</p>
              </div>
            ))}
          </div>

          {/* Section 02 Photo Space (Updated in code via item.sectionPhotos.section2 in src/lib/content.js) */}
          <SectionPhotoSpace
            photoUrl={item.sectionPhotos?.section2}
            altText={`${item.title} - Section 02 Visual`}
            sectionLabel="SECTION 02 VISUAL SPACE"
            recommendation={item.sectionPhotoGuides?.section2 || "Add your Section 02 technical breakdown image path in src/lib/content.js"}
            codePath={`src/lib/content.js → sectionPhotos.section2`}
          />
        </section>

        {/* Comparison Matrix & Deep-Dive Sections */}
        {(item.comparisonTable || (item.deepDiveSections && item.deepDiveSections.length > 0)) && (
          <section id="section-comparison" className="case-detail-section">
            <span className="eyebrow">BENCHMARK MATRIX & DEEP-DIVE ANALYSIS</span>
            <h2>{item.comparisonTable?.title || "Technical Architecture Breakdown"}</h2>

            {item.comparisonTable && (
              <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0] shadow-sm bg-white mt-4 mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#090C10] text-white text-xs font-mono uppercase tracking-wider">
                      {item.comparisonTable.headers.map((h, i) => (
                        <th key={i} className="py-3.5 px-5 border-b border-white/10">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E9ECEF] text-sm">
                    {item.comparisonTable.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-[#FFF8F5] transition-colors">
                        {row.map((cell, cIdx) => (
                          <td
                            key={cIdx}
                            className={`py-3.5 px-5 ${
                              cIdx === 0
                                ? "font-bold text-[#12151A] bg-[#F8FAFC]/60"
                                : "text-[#4A4F59]"
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {item.deepDiveSections && item.deepDiveSections.length > 0 && (
              <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm">
                <div className="flex flex-wrap gap-2 mb-5 pb-3 border-b border-[#F1F3F5]">
                  {item.deepDiveSections.map((sec, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveDeepDiveTab(idx)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                        activeDeepDiveTab === idx
                          ? "bg-[#EC5E27] text-white shadow-sm"
                          : "bg-[#F8FAFC] text-[#5F646D] hover:text-[#12151A]"
                      }`}
                    >
                      <BookOpen size={14} />
                      <span>{sec.heading}</span>
                    </button>
                  ))}
                </div>
                {item.deepDiveSections[activeDeepDiveTab] && (
                  <div className="space-y-3">
                    <h3 className="text-lg font-extrabold text-[#12151A]">
                      {item.deepDiveSections[activeDeepDiveTab].heading}
                    </h3>
                    {item.deepDiveSections[activeDeepDiveTab].paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="text-sm text-[#4A4F59] leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            )}
          </section>
        )}

        {/* SECTION 03: Interactive 5-Step Workflow (5 Boxes in 1 Line) */}
        <section id="section-workflow" className="case-detail-section">
          <span className="eyebrow">03 / END-TO-END PIPELINE WORKFLOW</span>
          <h2>Deterministic Milestones from Ingestion to Handoff</h2>
          <div className="case-workflow-grid">
            {item.workflow.map((step, i) => (
              <div
                key={i}
                onClick={() => setActivePhase(i)}
                className={`cursor-pointer transition-all ${
                  activePhase === i
                    ? "!border-[#EC5E27] !bg-[#FFF8F5] shadow-md -translate-y-1"
                    : "hover:border-[#EC5E27]/50"
                }`}
              >
                <Layers3 size={19} />
                <span>PHASE 0{i + 1}</span>
                <h3>{step}</h3>
              </div>
            ))}
          </div>

          {/* Section 03 Photo Space (Updated in code via item.sectionPhotos.section3 in src/lib/content.js) */}
          <SectionPhotoSpace
            photoUrl={item.sectionPhotos?.section3}
            altText={`${item.title} - Section 03 Workflow Visual`}
            sectionLabel="SECTION 03 WORKFLOW VISUAL SPACE"
            recommendation={item.sectionPhotoGuides?.section3 || "Add your Section 03 workflow diagram image path in src/lib/content.js"}
            codePath={`src/lib/content.js → sectionPhotos.section3`}
          />
        </section>

        {/* SECTION 04: Deliverables (4 Boxes in 1 Line) */}
        <section id="section-deliverables" className="case-detail-section">
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

        {/* SECTION 05: Interactive Technical FAQs */}
        {item.faqs && item.faqs.length > 0 && (
          <section id="section-faq" className="case-detail-section !border-b-0">
            <span className="eyebrow">05 / FREQUENTLY ASKED QUESTIONS</span>
            <h2>Technical & Operational FAQs</h2>
            <div className="space-y-3 mt-4">
              {item.faqs.map((faq, fIdx) => (
                <details
                  key={fIdx}
                  open={fIdx === 0}
                  className="bg-white p-5 rounded-2xl border border-[#E2E8F0] cursor-pointer group shadow-sm"
                >
                  <summary className="font-bold text-[#12151A] text-sm md:text-base list-none flex items-center justify-between gap-4">
                    <span className="flex items-center gap-2.5">
                      <HelpCircle size={17} className="text-[#EC5E27] shrink-0" />
                      <span>{faq.q}</span>
                    </span>
                    <span className="text-[#EC5E27] font-bold text-lg group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="text-sm text-[#5F646D] leading-relaxed mt-3 pt-3 border-t border-[#F1F3F5] mb-0">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Bottom CTA Card */}
        <div className="case-detail-cta">
          <div>
            <h2>Ready to build your custom dataset with DaQube.ai?</h2>
            <p>
              Speak directly with our AI data solutions team to scope data collection, annotation guidelines, sample pilots, and delivery timelines.
            </p>
          </div>
          <Link to="/contact" className="button button-crimson shrink-0">
            Discuss Your Project <ArrowRight size={17} />
          </Link>
        </div>

        {/* Related Case Studies Grid */}
        <div className="mt-16 pt-12 border-t border-[#E2E8F0]">
          <span className="eyebrow">KEEP EXPLORING</span>
          <h2 className="font-display text-2xl font-extrabold text-[#12151A] mt-1 mb-6">
            More Case Studies
          </h2>
          <div className="related-article-grid">
            {relatedStudies.map((rel) => (
              <ThreeDTiltCard key={rel.slug} maxTilt={6}>
                <Link className="related-article-card h-full" to={`/case-studies/${rel.slug}`}>
                  <img src={rel.image} alt={rel.imageAlt} loading="lazy" />
                  <div>
                    <span className="eyebrow">{rel.industry}</span>
                    <h3>{rel.title}</h3>
                    <span className="text-link">
                      Explore Case Study <ArrowRight size={15} />
                    </span>
                  </div>
                </Link>
              </ThreeDTiltCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CaseStudyDetailPage;
