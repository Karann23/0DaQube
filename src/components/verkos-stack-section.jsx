import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export const serviceItems = [
  {
    number: "01",
    title: "Image & video collection",
    layer: "Visual Perception Layer",
    accentTitle: "CALIBRATED VISION CAPTURE",
    description: "Collect the visual examples your systems need—from everyday scenes to rare edge cases, across environments, devices, and lighting conditions.",
    tags: ["Image capture", "Video frames", "Scenario coverage"],
    image: "/images/video_collection_main.jpg",
    imageAlt: "Detailed technology components for visual data collection",
    callout1: "EDGE SCENARIOS",
    callout2: "HIGH DENSITY FRAMES",
    href: "/services/image-collection"
  },
  {
    number: "02",
    title: "Audio & speech",
    layer: "Acoustic Signal Layer",
    accentTitle: "MULTILINGUAL VOICE ENGINE",
    description: "Build speech and sound datasets for voice assistants, automatic speech recognition, acoustic events, and localized multilingual experiences.",
    tags: ["Speech & accents", "Sound events", "Language coverage"],
    image: "/images/speech_main.webp",
    imageAlt: "Microphone and headphones for speech data recording",
    callout1: "SPEECH & ACCENTS",
    callout2: "ACOUSTIC COVERAGE",
    href: "/services/speech-collection"
  },
  {
    number: "03",
    title: "Text & transcription",
    layer: "Semantic Language Layer",
    accentTitle: "GROUND-TRUTH DOCUMENT NLP",
    description: "Turn recordings and documents into usable language data with transcription, normalization, OCR-ready text, and locale-aware human review.",
    tags: ["Transcription", "OCR & documents", "Localization"],
    image: "/images/text_annotation.webp",
    imageAlt: "Writing and transcription workspace",
    callout1: "DOCUMENT OCR",
    callout2: "LOCALE ADAPTATION",
    href: "/services/text-collection"
  },
  {
    number: "04",
    title: "Annotation & labeling",
    layer: "Spatial Ground-Truth Layer",
    accentTitle: "PIXEL-PERFECT ANNOTATION",
    description: "Make raw examples machine-readable with task-specific labels, from classification and entities to boxes, polygons, and dense segmentation.",
    tags: ["Classification", "Boxes & polygons", "Segmentation"],
    image: "/images/annotation_main.jpg",
    imageAlt: "Digital visual analysis interface",
    callout1: "BOUNDING BOXES",
    callout2: "POLYGON SEGMENTATION",
    href: "/services/annotation"
  },
  {
    number: "05",
    title: "Multimodal data",
    layer: "Sensor Fusion Layer",
    accentTitle: "TIME-ALIGNED SENSOR FUSION",
    description: "Connect modalities with aligned timestamps, transcripts, metadata, and labels for systems that interpret the real world from multiple signals.",
    tags: ["Image + text", "Audio + video", "Aligned metadata"],
    image: "/images/robotics_main.webp",
    imageAlt: "Robotics and connected sensor technology",
    callout1: "TIMESTAMP ALIGNMENT",
    callout2: "MULTI-SENSOR FUSION",
    href: "/services/adas-lidar"
  },
  {
    number: "06",
    title: "AI evaluation",
    layer: "Feedback & Alignment Layer",
    accentTitle: "RLHF & RUBRIC EVALUATION",
    description: "Evaluate model outputs against clear rubrics, compare responses, surface failure patterns, and create closed feedback loops for continuous improvement.",
    tags: ["Rubric scoring", "Preference ranking", "Error analysis"],
    image: "/images/services_ots.webp",
    imageAlt: "Team reviewing data and project results",
    callout1: "RLHF SCORING",
    callout2: "PREFERENCE RANKING",
    href: "/services/off-the-shelf"
  }
];

export function VerkosStackSection() {
  return (
    <section id="services-section" className="verkos-section" aria-label="What We Do — Service Stacks">
      <div className="container">
        {/* Section Header */}
        <div className="verkos-section-header">
          <div className="verkos-kicker">
             WHAT WE DO
          </div>
          <h2 className="verkos-section-title">
            From raw inputs to <span className="text-crimson">training-ready data.</span>
          </h2>
          <p className="verkos-section-lead">
            From custom data capture and transcription to precise labeling and human evaluation, bring the building blocks of better AI into one coordinated workflow.
          </p>
        </div>

        {/* 3D Stacking Cards Container */}
        <div className="verkos-cards-stack">
          {serviceItems.map((item, index) => {
            return (
              <article
                key={item.number}
                className="verkos-card"
                style={{
                  top: `calc(88px + ${index * 24}px)`,
                  zIndex: index + 1
                }}
              >
                <div className="verkos-card-inner">
                  {/* Left Column: Information */}
                  <div className="verkos-card-left">
                    {/* Vertical Progress Dots */}
                    <div className="verkos-step-dots" aria-hidden="true">
                      {serviceItems.map((_, i) => (
                        <span
                          key={i}
                          className={`verkos-dot ${i === index ? "active" : i < index ? "past" : ""}`}
                        />
                      ))}
                    </div>

                    <div className="verkos-content-block">
                      <div className="verkos-meta-row">
                        <span className="verkos-layer-pill">
                          <span className="verkos-layer-dot" />
                          {item.layer}
                        </span>
                        <span className="verkos-number-badge">{item.number} / 06</span>
                      </div>

                      <h3 className="verkos-card-title">{item.title}</h3>
                      <p className="verkos-card-desc">{item.description}</p>

                      <div className="verkos-tag-list">
                        {item.tags.map((tag) => (
                          <span key={tag} className="verkos-tag">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="verkos-card-cta">
                        <Link to="/contact" className="button button-crimson button-small">
                          Scope this service <ArrowUpRight size={15} />
                        </Link>
                        <Link to={item.href} className="text-link text-link-silver">
                          View details <ArrowRight size={15} />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: 3D Isometric Stacking Platform with Original Photo */}
                  <div className="verkos-card-right">
                    <div className="verkos-isometric-stage">
                      {/* Orbital Wireframe Halo Rings */}
                      <div className="verkos-orbit-ring ring-outer" aria-hidden="true" />
                      <div className="verkos-orbit-ring ring-inner" aria-hidden="true" />

                      {/* Floating Callouts with Connector Pins matching Verkos */}
                      <div className="verkos-callout callout-top">
                        <span className="callout-pin" />
                        <span className="callout-text">{item.callout1}</span>
                      </div>
                      <div className="verkos-callout callout-bottom">
                        <span className="callout-pin" />
                        <span className="callout-text">{item.callout2}</span>
                      </div>

                      {/* 3D Stacked Slab Platform */}
                      <div className="verkos-3d-stack-platform">
                        {/* Under-slab extruded base layers */}
                        <div className="verkos-slab-tier tier-base" />
                        <div className="verkos-slab-tier tier-mid" />

                        {/* Top surface slab holding the photo */}
                        <div className="verkos-slab-tier tier-top">
                          <div className="verkos-photo-holder">
                            <img
                              src={item.image}
                              alt={item.imageAlt}
                              className="verkos-slab-image"
                              loading="eager"
                              decoding="async"
                            />
                            <div className="verkos-photo-overlay">
                              <span className="verkos-slab-label">{item.accentTitle}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Section Footer */}
        <div className="verkos-bottom-cta">
          <span>Need a combination of services?</span>
          <Link to="/contact" className="text-link text-link-crimson">
            Let's scope your workflow <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
export default VerkosStackSection;
