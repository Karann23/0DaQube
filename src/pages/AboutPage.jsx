import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Workflow,
  Building2,
  BriefcaseBusiness,
  Sparkles,
  ShieldCheck,
  MessageCircle,
  Compass,
  ClipboardCheck,
  Handshake,
} from "lucide-react";

import "./AboutPage.css";

/* =========================================================
   EDITABLE PAGE CONTENT
   Update copy, values and image paths here.
   All image paths below were checked against the uploaded
   DaQube project archive.
========================================================= */

const collagePhotos = [
  {
    src: "/images/robotics_main.webp",
    alt: "Robotics research and human interaction with intelligent systems",
  },
  {
    src: "/images/services_image_collection.webp",
    alt: "Examples of image data collection across different subjects",
  },
  {
    src: "/images/services_video_collection.webp",
    alt: "Video and motion data collection examples",
  },
  {
    src: "/images/annotation_main.jpg",
    alt: "Structured image annotation and bounding box example",
  },
  {
    src: "/images/services_annotation.webp",
    alt: "Examples of visual data annotation",
  },
  {
    src: "/images/speech_main.webp",
    alt: "Speech and audio data workflow",
  },
  {
    src: "/images/services_speech_collection.webp",
    alt: "Audio and speech collection examples",
  },
  {
    src: "/images/services_transcription.webp",
    alt: "Transcription and language data workflow examples",
  },
  {
    src: "/images/video_collection_main.jpg",
    alt: "Video dataset processing and analysis",
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Understand the objective",
    description:
      "Define the AI application, data requirements, target coverage and acceptance criteria before work begins.",
  },
  {
    number: "02",
    title: "Collect with context",
    description:
      "Build collection workflows around the required formats, scenarios, languages and project specifications.",
  },
  {
    number: "03",
    title: "Structure and annotate",
    description:
      "Organize, label, transcribe and enrich datasets according to the agreed guidelines and output schema.",
  },
  {
    number: "04",
    title: "Review and deliver",
    description:
      "Check outputs against project requirements and prepare organized deliverables for downstream use.",
  },
];

const values = [
  {
    slug: "communication",
    title: "Communication",
    icon: MessageCircle,
    description:
      "We keep briefs, feedback and decisions clear and timely. Open communication helps everyone understand the goal, the standards and the next step.",
  },
  {
    slug: "trust",
    title: "Trust",
    icon: ShieldCheck,
    description:
      "We build trust through responsible data handling, transparent processes and delivery against the requirements we agree on.",
  },
  {
    slug: "freedom",
    title: "Freedom",
    icon: Compass,
    description:
      "We make room for initiative, fresh ideas and different ways of solving problems. People should have space to bring their best thinking to the work.",
  },
  {
    slug: "ownership",
    title: "Ownership",
    icon: ClipboardCheck,
    description:
      "We take responsibility from the first brief to final handover, raise challenges early and follow through on our commitments.",
  },
  {
    slug: "respect",
    title: "Respect",
    icon: Handshake,
    description:
      "We value the people behind every project, the customers we work with and the communities represented in the data we collect.",
  },
];

/* =========================================================
   WORD REVEAL
   Each word is its own inline block with an explicit visual
   gap. This avoids the collapsed/missing spaces in headings.
========================================================= */

function WordReveal({ text, className = "" }) {
  const words = text.trim().split(/\s+/);

  return (
    <span className={className} aria-label={text}>
      {words.map((word, index) => (
        <span className="dq-word-wrap" key={`${word}-${index}`}>
          <span
            className="dq-word"
            style={{ "--word-index": index }}
            aria-hidden="true"
          >
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}

/* =========================================================
   SCROLL REVEAL
   Uses the browser's IntersectionObserver; no extra package.
========================================================= */

function ScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".dq-about-page [data-dq-reveal]"
    );

    const reduceMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -45px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}

/* =========================================================
   MAIN ABOUT PAGE
========================================================= */

export function AboutPage() {
  return (
    <div className="dq-about-page">
      <ScrollReveal />

      {/* 01 — HERO */}
      <section className="dq-about-hero">
        <div className="dq-about-hero-decoration" aria-hidden="true">
          <span className="dq-hero-orbit dq-orbit-one" />
          <span className="dq-hero-orbit dq-orbit-two" />
          <span className="dq-hero-cross">✳</span>
        </div>

        <div className="dq-about-container dq-about-hero-grid">
          <div className="dq-hero-copy" data-dq-reveal>
            <div className="dq-eyebrow dq-eyebrow-orange">
              <span className="dq-eyebrow-dot" />
              THE STORY BEHIND DAQUBE
            </div>

            <h1>
              <span className="dq-heading-line">
                <WordReveal text="The data behind" />
              </span>
              <span className="dq-heading-line dq-heading-accent">
                <WordReveal text="intelligence." />
              </span>
            </h1>

            <p className="dq-hero-description">
              Behind every intelligent system is data worth understanding.
              DaQube brings together real-world data collection, human
              expertise and structured quality workflows to help AI teams
              build with greater context and confidence.
            </p>

            <div className="dq-hero-actions">
              <Link to="/contact" className="dq-button dq-button-orange">
                Let&apos;s build together <ArrowUpRight size={18} />
              </Link>
              <Link to="/services" className="dq-text-button">
                Explore what we do <ArrowRight size={17} />
              </Link>
            </div>

            <div className="dq-hero-bottom-note">
              <span className="dq-note-line" />
              <span>THE DATA BEHIND INTELLIGENCE.</span>
            </div>
          </div>

          <div className="dq-hero-visual" data-dq-reveal>
            <div className="dq-hero-image-frame">
              <img
                src="/images/robotics_main.webp"
                alt="Robotics research and human interaction with intelligent systems"
                fetchPriority="high"
              />
            </div>

            <div className="dq-hero-floating-card dq-hero-card-top">
              <span className="dq-floating-card-icon">
                <BrainCircuit size={19} />
              </span>
              <span>
                <strong>AI-ready</strong>
                <small>Built around context</small>
              </span>
            </div>

            <div className="dq-hero-floating-card dq-hero-card-bottom">
              <span className="dq-live-dot" />
              <span>
                <strong>Human + technology</strong>
                <small>Working together</small>
              </span>
            </div>

            <span className="dq-hero-image-caption">
              REAL-WORLD DATA. MEANINGFUL INTELLIGENCE.
            </span>
          </div>
        </div>

        <div className="dq-hero-scroll" aria-hidden="true">
          <span /> SCROLL TO EXPLORE
        </div>
      </section>

      {/* 02 — WHY WE EXIST */}
      <section className="dq-brand-statement">
        <div className="dq-about-container dq-brand-statement-inner">
          <div className="dq-section-label" data-dq-reveal>
            <span>01 / WHY WE EXIST</span>
            <span className="dq-label-rule" />
          </div>

          <div className="dq-brand-statement-copy">
            <h2 data-dq-reveal>
              <WordReveal text="AI is only as useful as the data that teaches it." />
            </h2>

            <div className="dq-brand-statement-side" data-dq-reveal>
              <p>
                Models learn from examples of the world. Those examples need
                to carry the right context, represent meaningful variation
                and follow a clear specification.
              </p>
              <p>
                That is the work DaQube focuses on: helping organizations
                source, structure, annotate and evaluate the information
                their AI systems depend on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — WHO WE ARE (replaces the six service cards) */}
      <section className="dq-who-section">
        <div className="dq-about-container">
          <div className="dq-who-layout">
            <div className="dq-who-intro" data-dq-reveal>
              <div className="dq-eyebrow">
                <span className="dq-eyebrow-dot" />
                WHO WE ARE
              </div>

              <h2>
                A founder-led team <span>for the NewWorld.</span>
              </h2>

              <div className="dq-who-meta">
                <span>FOUNDED 2026</span>
                <span>FOUNDER-LED</span>
              </div>
            </div>

            <div className="dq-who-copy" data-dq-reveal>
              <p>
                Founded in 2026 in India, DaQube is a founder-led AI
                data company helping organizations build stronger
                foundations for intelligent systems. We bring together
                real-world data collection, human expertise and structured
                workflows to support projects from initial requirements
                through collection, preparation and delivery.
              </p>

              <p>
                Our capabilities span image, video, audio and text data,
                alongside annotation, transcription, quality assurance and
                AI evaluation. We shape each engagement around the intended
                application, the required context and the specifications
                that make a dataset useful to the teams working with it.
              </p>

              <p>
                Think of DaQube as your AI-powered data partner: turning
                requirements into a clear workflow, raw information into
                structured datasets, and project goals into outcomes that
                matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — FROM REAL-WORLD DATA TO DELIVERY */}
      <section className="dq-impact-section">
        <div className="dq-about-container">
          <div className="dq-impact-heading">
            <div data-dq-reveal>
              <div className="dq-eyebrow dq-eyebrow-light">
                <span className="dq-eyebrow-dot" />
                FROM REQUIREMENT TO DELIVERY
              </div>

              <h2>
                <WordReveal text="From real-world signals" />
                <br />
                <span className="dq-impact-heading-accent">
                  <WordReveal text="to AI-ready data." />
                </span>
              </h2>
            </div>

            <p data-dq-reveal>
              A useful dataset is more than a collection of files. It is the
              result of a clearly defined objective, a structured process
              and consistent attention to detail.
            </p>
          </div>

          <div className="dq-workflow">
            {workflowSteps.map((step, index) => (
              <article
                className="dq-workflow-step"
                key={step.number}
                data-dq-reveal
                style={{ "--reveal-delay": `${index * 100}ms` }}
              >
                <div className="dq-workflow-step-top">
                  <span>{step.number}</span>
                  {index < workflowSteps.length - 1 && (
                    <span className="dq-workflow-connector">
                      <ArrowRight size={18} />
                    </span>
                  )}
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>

          <div className="dq-impact-bottom" data-dq-reveal>
            <span className="dq-impact-bottom-icon">
              <Workflow size={20} />
            </span>
            <p>
              Every stage connects to the next, helping keep the original
              project requirements visible throughout the workflow.
            </p>
            <Link to="/quality" className="dq-impact-link">
              Discover our quality approach <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 05 — EXPANDED PHOTO COLLAGE */}
      <section className="dq-visual-story-section">
        <div className="dq-about-container">
          <div className="dq-collage-heading" data-dq-reveal>
            <div className="dq-eyebrow">
              <span className="dq-eyebrow-dot" />
              A CLOSER LOOK AT THE WORK
            </div>
            <p>
              Different forms of information. One thoughtful approach to
              making data useful for AI.
            </p>
          </div>

          <div className="dq-photo-collage dq-photo-collage--expanded">
            {collagePhotos.map((photo, index) => (
              <figure
                className={`dq-photo dq-photo--${index + 1}`}
                key={photo.src}
                data-dq-reveal
                style={{ "--reveal-delay": `${(index % 4) * 65}ms` }}
              >
                <img src={photo.src} alt={photo.alt} loading="eager" decoding="async" />
              </figure>
            ))}

            <div className="dq-collage-center" aria-label="DaQube">
              <span className="dq-collage-ring">
                <img src="/images/logos/daqube-logo.svg" alt="DaQube" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — WHERE WE STAND */}
      <section className="dq-belief-section">
        <div className="dq-about-container dq-belief-grid">
          <div className="dq-belief-symbol" data-dq-reveal>
            <div className="dq-belief-symbol-ring">
              <ShieldCheck size={76} strokeWidth={1} />
              <span>DQ</span>
            </div>
            <span className="dq-belief-orbit" />
          </div>

          <div className="dq-belief-copy" data-dq-reveal>
            <div className="dq-eyebrow dq-eyebrow-light">
              <span className="dq-eyebrow-dot" />
              WHERE WE STAND
            </div>

            <div className="dq-belief-quote-icon">
              <span aria-hidden="true">“</span>
            </div>

            <h2>
              Data quality is not just about getting more data. It is about
              getting the <span>right data, with the right context.</span>
            </h2>

            <p>
              We believe useful AI development calls for thoughtful
              collection, clear expectations, responsible handling and
              quality checks that reflect the purpose of each project.
            </p>

            <Link to="/quality" className="dq-belief-link">
              Explore Quality &amp; Trust <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* 07 — HOW WE APPROACH THE WORK: FIVE VALUES */}
      <section className="dq-values-section">
        <div className="dq-about-container">
          <div className="dq-values-heading" data-dq-reveal>
            <div>
              <div className="dq-eyebrow">
                <span className="dq-eyebrow-dot" />
                OUR VALUES
              </div>
              <h2>HOW WE APPROACH THE WORK</h2>
            </div>

            <p>
              The way we work matters. These principles guide our
              communication, collaboration and accountability throughout
              every engagement.
            </p>
          </div>

          <div className="dq-values-grid">
            <div
              className="dq-values-shape dq-values-shape--top"
              aria-hidden="true"
            />

            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.slug}
                  className={`dq-value-card dq-value-card--${value.slug}`}
                  data-dq-reveal
                  style={{ "--reveal-delay": `${index * 80}ms` }}
                >
                  <div className="dq-value-icon">
                    <Icon size={25} strokeWidth={1.6} />
                  </div>
                  <div className="dq-value-content">
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
                </article>
              );
            })}

            <div className="dq-values-note">
              <span>DAQUBE / OUR APPROACH</span>
              <p>
                Good work is built through clear expectations, responsible
                decisions and shared ownership.
              </p>
            </div>

            <div
              className="dq-values-shape dq-values-shape--bottom"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      {/* 08 — COMPANY AT A GLANCE */}
      <section className="dq-company-section">
        <div className="dq-about-container">
          <div className="dq-company-heading" data-dq-reveal>
            <div>
              <div className="dq-eyebrow">
                <span className="dq-eyebrow-dot" />
                A CLOSER LOOK
              </div>
              <h2>
                <WordReveal text="DaQube at a glance." />
              </h2>
            </div>

            <p>
              A quick introduction to what we do, who we work with and how
              we approach AI data projects.
            </p>
          </div>

          <div className="dq-company-table" data-dq-reveal>
            <div className="dq-company-row">
              <span>Company</span>
              <strong>DaQube</strong>
            </div>
            <div className="dq-company-row">
              <span>Founded</span>
              <strong>2026, India</strong>
            </div>
            <div className="dq-company-row">
              <span>Tagline</span>
              <strong>The Data Behind Intelligence.</strong>
            </div>
            <div className="dq-company-row">
              <span>Focus</span>
              <strong>
                AI data collection, preparation, annotation and evaluation
              </strong>
            </div>
            <div className="dq-company-row">
              <span>Capabilities</span>
              <strong>
                Image, video, audio, speech, text, transcription, annotation
                and quality assurance
              </strong>
            </div>
            <div className="dq-company-row">
              <span>Market</span>
              <strong>Global</strong>
            </div>
            <div className="dq-company-row">
              <span>Engagement</span>
              <strong>Client projects and tailored data workflows</strong>
            </div>
          </div>
        </div>
      </section>

      {/* 09 — FINAL CTA */}
      <section className="dq-about-cta-section">
        <div className="dq-about-container">
          <div className="dq-about-cta" data-dq-reveal>
            <div className="dq-cta-decoration" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>

            <div className="dq-cta-content">
              <div className="dq-eyebrow dq-eyebrow-light">
                <Sparkles size={15} />
                THE NEXT STEP STARTS HERE
              </div>

              <h2>
                Have a data challenge?
                <br />
                <span>Let&apos;s make it work.</span>
              </h2>

              <p>
                Tell us what your AI system needs to see, hear, understand
                or evaluate. Let&apos;s explore the right approach together.
              </p>

              <div className="dq-cta-actions">
                <Link to="/contact" className="dq-button dq-button-white">
                  Discuss your project <ArrowUpRight size={18} />
                </Link>
                <Link to="/services" className="dq-cta-text-link">
                  Explore capabilities <ArrowRight size={17} />
                </Link>
              </div>
            </div>

            <div className="dq-cta-watermark" aria-hidden="true">
              DQ
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;