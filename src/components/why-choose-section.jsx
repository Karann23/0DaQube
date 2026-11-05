import React from "react";
export const VALUE_PILLARS = [
    {
        id: "scale",
        title: "Global Scale You Can Count On",
        points: [
            "Vetted contributor & specialist network across 100+ countries",
            "50+ languages and localized regional dialect coverage",
            "150+ dedicated specialists & 1K+ active contributors",
            "Multi-modal data capture: audio, image, video, and text",
            "Remote, mobile on-site, or custom in-field data collection options"
        ],
        icon: (<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
        <path d="M2 12h20"/>
        <circle cx="7.5" cy="8.5" r="1.5" fill="#FFFFFF" stroke="none"/>
        <circle cx="16.5" cy="8.5" r="1.5" fill="#FFFFFF" stroke="none"/>
        <circle cx="12" cy="16" r="1.5" fill="#FFFFFF" stroke="none"/>
      </svg>)
    },
    {
        id: "quality",
        title: "Enterprise-Ready Quality & Compliance",
        points: [
            "ISO-aligned secure facilities & rigorous operational protocols",
            "Full GDPR, CCPA, and international data privacy compliance",
            "Built-in QA: gold tasks, multi-pass reviews, and real-time analytics",
            "Human-in-the-loop validation by default",
            "99% annotation accuracy on enterprise production pipelines"
        ],
        icon: (<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>)
    },
    {
        id: "expertise",
        title: "Deep Expertise in High-Impact Use Cases",
        points: [
            "AI data partner to global technology pioneers & enterprises",
            "Specialized in speech, computer vision, audio, and conversational AI",
            "Advanced pipelines: 3D bounding, LiDAR, segmentation & audio phonetics",
            "Industry-tailored solutions: automotive, healthcare, finance & technology",
            "Evaluation pipelines built for safety, fairness, and model alignment"
        ],
        icon: (<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2"/>
        <rect x="5" y="5" width="14" height="14" rx="3"/>
        <circle cx="12" cy="12" r="3"/>
        <path d="M9 9h.01M15 9h.01M9 15h.01M15 15h.01"/>
      </svg>)
    },
    {
        id: "engagement",
        title: "Flexible Engagement Models",
        points: [
            "Fully Managed Service or Dedicated Workforce-as-a-Service",
            "Seamless integration with your tools, pipelines, and workflows",
            "Custom workflows for pre-training, fine-tuning, and red-teaming",
            "Transparent SLAs, real-time tracking, and structured delivery",
            "Scales rapidly from pilot validation to continuous enterprise delivery"
        ],
        icon: (<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3"/>
        <circle cx="4" cy="14" r="2"/>
        <circle cx="12" cy="8" r="2"/>
        <circle cx="20" cy="16" r="2"/>
      </svg>)
    }
];
export function WhyChooseSection() {
    return (<section className="why-choose-section" id="why-choose-daqube" aria-label="Why Choose DaQube for Critical AI">
      <div className="why-choose-ambient-glow" aria-hidden="true"/>
      <div className="container why-choose-container">
        {/* Section Header */}
        <div className="why-choose-header">
          <div className="why-choose-eyebrow">
             PROVEN ENTERPRISE ADVANTAGE
          </div>
          <h2 className="why-choose-title">
            Why choose <span className="why-choose-title-highlight">DaQube</span> for critical AI
          </h2>
          <p className="why-choose-subtitle">
            Trusted by global AI leaders for scale, precision, and secure delivery.
          </p>
        </div>

        {/* 4 Feature Columns Grid */}
        <div className="why-choose-grid">
          {VALUE_PILLARS.map((pillar) => (<article className="why-choose-card" key={pillar.id}>
              {/* Top Vibrant Orange Badge */}
              <div className="why-choose-icon-badge" aria-hidden="true">
                {pillar.icon}
              </div>

              {/* Pillar Title */}
              <h3 className="why-choose-card-title">{pillar.title}</h3>

              {/* Bullet Points */}
              <ul className="why-choose-bullet-list">
                {pillar.points.map((point, idx) => (<li className="why-choose-bullet-item" key={idx}>
                    <span className="why-choose-bullet-dot" aria-hidden="true">•</span>
                    <span>{point}</span>
                  </li>))}
              </ul>
            </article>))}
        </div>
      </div>
    </section>);
}
