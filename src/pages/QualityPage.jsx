
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

const certificationsList = [
  {
    id: "iso27001",
    code: "ISO/IEC 27001",
    title: "Information Security",
    tag: "Top Priority · Standard",
    tagColor: "bg-[#FFF3ED] text-[#EC5E27] border-[#EC5E27]/30",
    desc: "Protects confidential client data, access controls, and information security.",
    logo: "/images/certifications/iso27001.svg",
    alt: "ISO/IEC 27001 Information Security Logo"
  },
  {
    id: "iso9001",
    code: "ISO 9001",
    title: "Quality Management",
    tag: "Top Priority · Quality",
    tagColor: "bg-[#FFF3ED] text-[#EC5E27] border-[#EC5E27]/30",
    desc: "Quality processes, consistency, operational controls, and continuous improvement.",
    logo: "/images/certifications/iso9001.jpg",
    alt: "ISO 9001 Quality Management Logo"
  },
  {
    id: "iso42001",
    code: "ISO/IEC 42001",
    title: "AI Management System",
    tag: "Core to DaQube · Frontier AI",
    tagColor: "bg-blue-50 text-blue-700 border-blue-200",
    desc: "Responsible AI management, governance, and risk management.",
    logo: "/images/certifications/iso42001.jpg",
    alt: "ISO/IEC 42001 AI Management Logo"
  },
  {
    id: "iso27701",
    code: "ISO/IEC 27701",
    title: "Privacy Management",
    tag: "Privacy Standard",
    tagColor: "bg-slate-50 text-slate-700 border-slate-200",
    desc: "Privacy controls and personal information management.",
    logo: "/images/certifications/iso27701.jpg",
    alt: "ISO/IEC 27701 Privacy Management Logo"
  },
  {
    id: "soc2",
    code: "SOC 2 Type II",
    title: "Security & Trust",
    tag: "Independent Audit",
    tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    desc: "Independent auditing of security, availability, confidentiality, and related controls.",
    logo: "/images/certifications/soc2.jpg",
    alt: "AICPA SOC 2 Type II Logo"
  },
  {
    id: "gdpr",
    code: "GDPR Compliant",
    title: "Data Protection",
    tag: "EU Regulation",
    tagColor: "bg-blue-50 text-blue-800 border-blue-200",
    desc: "European personal data protection regulation and consent compliance.",
    logo: "/images/certifications/gdpr.jpg",
    alt: "EU GDPR Data Protection Logo"
  },
  {
    id: "hipaa",
    code: "HIPAA Compliant",
    title: "Healthcare Data Privacy",
    tag: "Clinical Standard",
    tagColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    desc: "Strict healthcare information security for clinical & protected US health data.",
    logo: "/images/certifications/hipaa.jpg",
    alt: "HIPAA Healthcare Privacy Logo"
  },
  {
    id: "nist",
    code: "NIST AI RMF",
    title: "Responsible AI Framework",
    tag: "AI Governance",
    tagColor: "bg-amber-50 text-amber-800 border-amber-200",
    desc: "Federal framework for identifying, mapping, measuring, and managing AI-related risks.",
    logo: "/images/certifications/nist_airmf.jpg",
    alt: "NIST AI Risk Management Framework Logo"
  }
];

const legalSections = [
  {
    id: "privacy",
    eyebrow: "YOUR INFORMATION",
    title: "Privacy Policy",
    intro: (
      <>
        At <strong>DaQube</strong>, safeguarding your privacy and ensuring the
        security of your personal data are fundamental priorities. This Privacy
        Policy outlines the types of information we collect, how it is used, and
        the measures we take to protect your data when you interact with our
        platform and services.
      </>
    ),
    content: [
      {
        title: "1. Data We Collect",
        paragraphs: [
          "To deliver a seamless, efficient, and personalized experience, DaQube collects specific categories of information:"
        ],
        bullets: [
          <>
            <strong>Identity &amp; Professional Data:</strong> When you inquire
            about our services, register on our platform, or submit an
            application for a role, we may collect your full name, email
            address, contact number, and relevant professional or career
            details.
          </>,
          <>
            <strong>Technical &amp; Interaction Data:</strong> We automatically
            log telemetry data regarding how you navigate and use our website,
            including your IP address, browser specifications, device
            identifiers, access times, and the specific pages you view.
          </>,
          <>
            <strong>Cookies &amp; Tracking Technologies:</strong> We use cookies
            and similar local storage technologies to remember your
            preferences, optimize site performance, and improve functionality.
          </>
        ]
      },
      {
        title: "2. How Your Information Is Used",
        paragraphs: [
          "DaQube processes the collected data to support its core operational and business objectives, including:"
        ],
        bullets: [
          "Operating, maintaining, and continuously improving our platform and services.",
          "Communicating important administrative updates, system changes, or policy revisions.",
          "Enabling access to interactive platform tools and features at your request.",
          "Addressing user inquiries, delivering technical support, and evaluating recruitment applications.",
          "Analyzing platform usage metrics and performance trends to enhance user experience and service quality."
        ]
      },
      {
        title: "3. Information Security",
        paragraphs: [
          "DaQube uses technical, administrative, and organizational safeguards designed to protect personal data against unauthorized access, alteration, or disclosure. While we work to protect information using appropriate security measures, no digital transmission over the internet or electronic storage system can be guaranteed to be completely secure."
        ]
      },
      {
        title: "4. Email Communications & Delivery",
        paragraphs: [
          "When you create an account or engage with our platform, you may receive essential transactional and operational messages required to maintain your account, including one-time verification passcodes, security alerts, and password recovery emails. Where you have given permission, we may also send platform announcements, assessment alerts, and service updates."
        ],
        bullets: [
          <>
            <strong>Managing Your Preferences:</strong> You can withdraw from
            non-essential or promotional mailing lists at any time by using the
            unsubscribe link in our emails, adjusting your preferences through
            an available unsubscribe portal, or contacting our support team.
          </>,
          <>
            <strong>Email Delivery:</strong> Where Amazon Simple Email Service
            (SES) is used to manage email delivery, addresses that generate a
            hard bounce or spam complaint may be added to a suppression list to
            prevent further delivery attempts.
          </>
        ]
      },
      {
        title: "5. Sharing & Third-Party Service Providers",
        paragraphs: [
          "DaQube does not sell, rent, or trade your personally identifiable information to external commercial entities. We may share necessary information with trusted infrastructure partners and service providers who help us host our platform, support business operations, or deliver services, such as email communications. These providers are expected to protect the information they process and use it only for the services they provide to us."
        ]
      },
      {
        title: "6. Regulatory Compliance & Your Privacy Rights",
        paragraphs: [
          "Depending on your jurisdiction, you may have rights concerning your personal information under applicable privacy laws, including the General Data Protection Regulation (GDPR) and India's Digital Personal Data Protection Act, 2023."
        ],
        bullets: [
          <><strong>Access:</strong> You may request a copy of the personal data we hold about you.</>,
          <><strong>Correction:</strong> You may request that incomplete or inaccurate personal information be corrected.</>,
          <><strong>Deletion:</strong> You may ask us to delete your personal data, subject to applicable legal and operational requirements.</>,
          <><strong>Retention:</strong> We retain personal information only for as long as it is needed for the purposes described in this policy or as required by applicable legal, tax, or regulatory obligations.</>
        ]
      },
      {
        title: "7. Contact Information",
        paragraphs: [
          <>
            If you have questions, concerns, or requests regarding this Privacy
            Policy or how your data is handled, contact us at{" "}
            <a className="font-semibold text-[#EC5E27] hover:underline" href="mailto:karan@daqube.ai">
              karan@daqube.ai
            </a>.
          </>
        ]
      }
    ]
  },
  {
    id: "terms",
    eyebrow: "WEBSITE USE",
    title: "Terms & Conditions",
    intro: (
      <>
        These Terms and Conditions govern your access to and use of the website
        operated by <strong>DaQube AI Solutions</strong>, India (“DaQube”, “we”,
        “our”, or “us”). By accessing or browsing this website, you agree to
        these terms. If you do not agree, please do not use the website.
      </>
    ),
    content: [
      {
        title: "Scope of Our Services",
        paragraphs: [
          "This website provides an overview of our capabilities across AI data operations, digital growth strategies, and creative design. All material published here is for general information and does not constitute a binding commercial offer. Any formal engagement or project undertaken by DaQube is subject to a separate written agreement, such as a Master Services Agreement (MSA), Statement of Work (SOW), or signed proposal. If these website terms conflict with a signed client agreement, the signed agreement will take precedence."
        ]
      },
      {
        title: "Acceptable Website Use",
        paragraphs: ["When using this website, you agree not to:"],
        bullets: [
          "Engage in activity that violates applicable local, national, or international laws.",
          "Attempt to bypass security controls or gain unauthorized access to our web servers, databases, or internal infrastructure.",
          "Submit unsolicited promotions, malicious scripts, or fraudulent information through our contact forms.",
          "Use automated tools to harvest, scrape, or extract website content or architecture in bulk without our permission."
        ]
      },
      {
        title: "Project Submissions & Inquiries",
        paragraphs: [
          "By submitting a project inquiry or business brief through our website, you confirm that the information you provide is accurate to the best of your knowledge and that you have the right to share it. An inquiry does not establish a client relationship or require either party to enter into a commercial arrangement. Personal information submitted through an inquiry is handled in accordance with our Privacy Policy."
        ]
      },
      {
        title: "Intellectual Property",
        paragraphs: [
          "Unless otherwise stated, the materials on this website, including source code, visual design, written content, graphics, and brand marks, belong to DaQube or its licensors. You may view and reference the website for personal or internal business evaluation. Commercial reproduction, redistribution, or modification without prior written permission is not permitted. Client trademarks, brand names, and endorsements remain the property of their respective owners."
        ]
      },
      {
        title: "External Platforms & Links",
        paragraphs: [
          "Our website may link to or integrate with third-party platforms, including Google, LinkedIn, Instagram, and WhatsApp. DaQube does not control these services. Your use of them is subject to their own terms and privacy policies."
        ]
      },
      {
        title: "Website Availability & Disclaimers",
        paragraphs: [
          "We make reasonable efforts to keep website information accurate and current. However, we do not guarantee that all content is exhaustive or free from errors, or that the website will always be available without interruption."
        ]
      },
      {
        title: "Limitation of Liability",
        paragraphs: [
          "To the fullest extent permitted by applicable law, DaQube will not be liable for indirect, incidental, or consequential losses arising from your use of this website or reliance on its content. Nothing in these terms excludes or limits liability where doing so would be unlawful."
        ]
      },
      {
        title: "Governing Law",
        paragraphs: [
          "These Terms and Conditions are governed by the laws of the Republic of India. Any dispute arising in connection with the use of this website will be subject to the jurisdiction of the competent courts in India."
        ]
      }
    ]
  }
];

function LegalSection({ section }) {
  return (
    <section
      id={section.id}
      className="scroll-mt-28 border-t border-[#E9ECEF] py-14 md:py-20"
    >
      <div className="mb-9 max-w-3xl">
        <span className="mb-3 inline-flex items-center rounded-full border border-[#EC5E27]/25 bg-[#FFF3ED] px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-[#EC5E27]">
          {section.eyebrow}
        </span>
        <h2 className="text-3xl font-extrabold tracking-tight text-[#12151A] md:text-4xl">
          {section.title}
        </h2>
        <p className="mt-4 text-sm leading-7 text-[#5F646D] md:text-base">
          {section.intro}
        </p>
      </div>

      <div className="grid gap-x-14 gap-y-9 lg:grid-cols-[minmax(0,1fr)_minmax(250px,0.32fr)]">
        <div className="space-y-8">
          {section.content.map((item) => (
            <article key={item.title}>
              <h3 className="text-base font-bold text-[#12151A] md:text-lg">
                {item.title}
              </h3>

              {item.paragraphs?.map((paragraph, index) => (
                <p
                  key={index}
                  className="mt-2 text-sm leading-7 text-[#626873] md:text-[15px]"
                >
                  {paragraph}
                </p>
              ))}

              {item.bullets && (
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-[#626873] md:text-[15px]">
                  {item.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>

        <aside className="h-fit rounded-2xl border border-[#E9ECEF] bg-[#F8FAFC] p-5 lg:sticky lg:top-28">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF3ED] text-[#EC5E27]">
            <ShieldCheck size={19} />
          </div>
          <h3 className="text-sm font-bold text-[#12151A]">
            {section.id === "privacy" ? "Your privacy matters" : "Using our website"}
          </h3>
          <p className="mt-2 text-xs leading-6 text-[#68707A]">
            {section.id === "privacy"
              ? "For privacy-related questions or requests, contact our team directly. We will review your request in line with applicable requirements."
              : "For questions about these terms or a potential project engagement, contact the DaQube team before proceeding."}
          </p>
          <a
            href="mailto:karan@daqube.ai"
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#EC5E27] hover:underline"
          >
            Contact DaQube <ArrowUpRight size={14} />
          </a>
        </aside>
      </div>
    </section>
  );
}

export function QualityPage() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <>
      {/* PAGE HERO with Background Video */}
      <section className="page-hero relative overflow-hidden min-h-[480px] md:min-h-[540px] flex items-center">
        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none opacity-100 mix-blend-multiply z-0"
        >
          <source src="/videos/Quality.mp4" type="video/mp4" />
        </video>

        {/* Minimal Soft Readability Veil — keeps robotic & human hands crisp and undulled */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background:
              "radial-gradient(ellipse 68% 78% at 40% 50%, rgba(253, 253, 241, 0.52) 0%, rgba(253, 253, 241, 0.25) 55%, rgba(253, 253, 241, 0.0) 100%)",
          }}
        />

        {/* Subtle bottom fade into content */}
        <div
          className="absolute bottom-0 left-0 right-0 h-14 pointer-events-none z-[1]"
          style={{
            background: "linear-gradient(to bottom, transparent, rgba(253, 253, 241, 0.65) 75%, #FFFFFF 100%)",
          }}
        />

        <div className="container relative z-10 w-full">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#EC5E27]/30 bg-[#FFF3ED]/95 backdrop-blur-sm px-3.5 py-1.5 shadow-sm">
            <span className="h-2 w-2 animate-ping rounded-full bg-[#EC5E27]" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#EC5E27]">
              ENTERPRISE TRUST & QUALITY ASSURANCE
            </span>
          </div>

          <h1
            className="max-w-4xl text-3xl font-extrabold leading-[1.12] tracking-tight text-[#12151A] sm:text-4xl md:text-6xl"
            style={{ textShadow: "0 2px 18px rgba(253, 253, 241, 0.95), 0 0 8px rgba(255, 255, 255, 0.85)" }}
          >
            Quality is an Empirical Science. <br />
            <span className="text-[#EC5E27]">Not a Marketing Slogan.</span>
          </h1>

          <p
            className="mb-8 mt-4 max-w-2xl text-base font-medium leading-relaxed text-[#3D424B] md:text-lg"
            style={{ textShadow: "0 1px 12px rgba(253, 253, 241, 0.95)" }}
          >
            Frontier AI systems fail when trained on noisy, ambiguous, or
            uncalibrated labels. DaQube focuses on clear project specifications,
            structured review, and dependable quality checks for AI data
            workflows.
          </p>

          <div className="hero-actions flex flex-wrap items-center gap-4">
            <Link className="button button-crimson shadow-xl" to="/contact">
              Discuss a Project <ArrowUpRight size={17} />
            </Link>
            <a
              className="text-link flex items-center gap-1 font-semibold text-[#12151A] hover:text-[#EC5E27]"
              style={{ textShadow: "0 1px 10px rgba(253, 253, 241, 0.95)" }}
              href="#certifications"
            >
              View Certifications & Standards <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* CERTIFIED COMPLIANCE & STANDARDS: ORIGINAL EIGHT CARDS PRESERVED */}
      <section
        id="certifications"
        className="section section-white border-b border-[#E9ECEF] !py-12"
      >
        <div className="container">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#EC5E27]/30 bg-[#FFF3ED] px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider text-[#EC5E27]">
              <ShieldCheck size={14} /> CERTIFIED COMPLIANCE & STANDARDS
            </div>
            <h2 className="text-2xl font-extrabold tracking-tight text-[#12151A] sm:text-3xl md:text-4xl">
              Enterprise Governance & Accreditations
            </h2>
            <p className="mt-2 text-sm text-[#5F646D]">
              DaQube's operations, security controls, and AI dataset pipelines
              are aligned with international information security, quality
              management, and ethical AI standards.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {certificationsList.map((cert) => (
              <div
                key={cert.id}
                className="group flex flex-col justify-between rounded-2xl border border-[#E9ECEF] bg-white p-5 shadow-xs transition-all hover:border-[#EC5E27] hover:shadow-lg"
              >
                <div>
                  <div className="mb-4 flex h-24 w-full items-center justify-center rounded-xl border border-[#F1F3F5] bg-[#F8FAFC] p-2 transition-colors group-hover:bg-[#FFF8F5]">
                    <img
                      src={cert.logo}
                      alt={cert.alt}
                      className="h-auto max-h-16 w-auto max-w-[140px] rounded object-contain"
                      loading="lazy"
                    />
                  </div>

                  <span
                    className={`mb-2 inline-block rounded border px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider ${cert.tagColor}`}
                  >
                    {cert.tag}
                  </span>
                  <h3 className="mb-0.5 text-base font-bold leading-snug text-[#12151A] transition-colors group-hover:text-[#EC5E27]">
                    {cert.code}
                  </h3>
                  <div className="mb-2 text-xs font-semibold text-[#8E939D]">
                    {cert.title}
                  </div>
                </div>
                <p className="border-t border-[#F8F9FA] pt-2 text-xs leading-relaxed text-[#5F646D]">
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRIVACY POLICY AND TERMS */}
      <section className="section section-white !py-0">
        {/* Wider than the original max-w-5xl trust container to reduce side whitespace */}
        <div className="container max-w-6xl">
          <LegalSection section={legalSections[0]} />
          <LegalSection section={legalSections[1]} />
        </div>
      </section>
    </>
  );
}

export default QualityPage;
