import { Link } from "react-router-dom";
import { ShieldCheck, Lock, FileText, ArrowLeft, Mail, CheckCircle2, AlertCircle } from "lucide-react";

export function PrivacyPage() {
  return (
    <>
      <section className="article-hero !py-14">
        <div className="container article-hero-inner">
          <div className="mb-4">
            <Link to="/" className="back-link inline-flex items-center gap-1.5 text-xs text-[#CBD5E1] hover:text-[#EC5E27] transition-colors">
              <ArrowLeft size={14} /> Back to Home
            </Link>
          </div>
          <span className="eyebrow eyebrow-light block mb-2">LEGAL & DATA GOVERNANCE</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-2">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-[#CBD5E1] mt-3">
            Effective Date: November 5, 2026 · Last Updated: November 5, 2026
          </p>
        </div>
      </section>

      <section className="section section-white legal-page">
        <div className="container max-w-4xl space-y-10">
          {/* Quick Summary Banner */}
          <div className="p-6 rounded-2xl bg-[#FFF8F5] border border-[#EC5E27]/30 flex items-start gap-4">
            <ShieldCheck size={24} className="text-[#EC5E27] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-sm text-[#12151A] mb-1">Our Privacy Commitment</h3>
              <p className="text-xs text-[#5F646D] leading-relaxed">
                DaQube provides high-precision human-sourced datasets for AI training and evaluation. We never sell personal data to third-party brokers, scrape private accounts, or collect data covertly. Every contributor and enterprise client is protected by strict consent protocols, encryption, and air-gapped cleanroom governance.
              </p>
            </div>
          </div>

          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-bold text-[#12151A] mb-3">1. Who We Are</h2>
            <p className="text-sm text-[#4A4F59] leading-relaxed mb-3">
              This Privacy Policy explains how DaQube Technologies Inc. ("DaQube", "we", "us", "our") handles personal data. It applies to visitors of our websites (<a href="https://daqube.ai" className="text-[#EC5E27] underline">daqube.ai</a> and associated domains), to contributors who provide data to us, and to enterprise clients and business contacts.
            </p>
            <p className="text-sm text-[#4A4F59] leading-relaxed">
              For the purposes of applicable data protection law (including the GDPR, UK GDPR, and the Digital Personal Data Protection Act), DaQube acts as the <strong>Data Controller / Data Fiduciary</strong> for account, website, and contributor management data. Where we process data under specific client instructions or annotate client-supplied materials, the client acts as the Data Controller and DaQube acts as the <strong>Data Processor</strong>.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-bold text-[#12151A] mb-3">2. Information We Collect</h2>
            <div className="space-y-4 text-sm text-[#4A4F59] leading-relaxed">
              <div>
                <h4 className="font-bold text-[#12151A] text-sm mb-1">a) Information you give us:</h4>
                <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#5F646D]">
                  <li><strong>Account and contact details:</strong> Name, professional email address, phone number, country of residence, and organizational credentials.</li>
                  <li><strong>Contributor submissions:</strong> Content submitted for AI training projects, including conversational audio recordings, written text, image and video captures, manual annotations, bounding boxes, and survey responses.</li>
                  <li><strong>Demographic information:</strong> Age range, gender, native language, accent, and geographic region when required by a project rubric to ensure demographic representation and bias mitigation. This is always collected with explicit opt-in.</li>
                  <li><strong>Payment and payout details:</strong> Bank account, UPI, PayPal, or enterprise payment details required to compensate contributors and vendors.</li>
                  <li><strong>Identity verification credentials:</strong> Official documentation required where legally mandated to verify contributor age, prevent multi-account fraud, or comply with tax obligations.</li>
                  <li><strong>Communications:</strong> Project scoping enquiries, customer support tickets, feedback forms, and correspondence.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#12151A] text-sm mb-1">b) Information collected automatically:</h4>
                <p className="text-xs text-[#5F646D] leading-relaxed">
                  When you access our platform, we automatically record technical device information including IP address, browser type, operating system, language preferences, referring URLs, session timestamps, and page interaction telemetry.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#12151A] text-sm mb-1">c) Sensitive & Biometric Data:</h4>
                <p className="text-xs text-[#5F646D] leading-relaxed">
                  Certain specialized computer vision and speech projects involve facial imagery, gaze vectors, or acoustic voiceprints. We collect sensitive and biometric data strictly with explicit, opt-in consent detailing the intended AI training scope, retention lifecycle, and de-identification routines.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-bold text-[#12151A] mb-3">3. Why We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2 text-xs text-[#5F646D] leading-relaxed">
              <li><strong>To deliver enterprise AI data solutions:</strong> Creating, validating, annotating, and delivering high-precision training and evaluation datasets to our clients.</li>
              <li><strong>To manage contributor operations:</strong> Onboarding, task assignment, quality assurance audits, calibration benchmarking, and prompt compensation.</li>
              <li><strong>To uphold system security:</strong> Preventing automated bot fraud, mitigating duplicate submissions, monitoring anomalous access, and enforcing our terms.</li>
              <li><strong>To enhance platform infrastructure:</strong> Analyzing pipeline throughput, optimizing annotator interfaces, and debugging technical workflows.</li>
              <li><strong>To fulfill statutory obligations:</strong> Maintaining tax, accounting, audit, and regulatory compliance records.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-bold text-[#12151A] mb-3">4. Legal Basis for Processing</h2>
            <p className="text-sm text-[#4A4F59] leading-relaxed mb-2">
              Where data protection laws such as GDPR, UK GDPR, or the DPDP Act apply, we process personal data under the following legal bases:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#5F646D]">
              <li><strong>Consent:</strong> Specifically for contributor data submissions, biometric capture, and optional demographic profiling. You may withdraw consent at any time.</li>
              <li><strong>Contractual Performance:</strong> To fulfill service agreements with enterprise clients and pay contributors for completed task milestones.</li>
              <li><strong>Legitimate Interests:</strong> To protect platform integrity, prevent fraud, and maintain rigorous dataset quality controls, balanced against individual privacy rights.</li>
              <li><strong>Legal Obligation:</strong> To comply with applicable tax, financial reporting, and statutory regulatory requirements.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl font-bold text-[#12151A] mb-3">5. How We Share Information</h2>
            <p className="text-sm text-[#4A4F59] leading-relaxed mb-3">
              <strong>DaQube does not sell, rent, or trade personal data to third parties for commercial advertising.</strong> We share data only in the following controlled circumstances:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs text-[#5F646D]">
              <li><strong>With Enterprise Clients:</strong> Contributor submissions are delivered to enterprise clients as structured datasets for AI training and evaluation, as authorized by contributor consent. Wherever feasible, direct identifiers are irreversibly stripped or pseudonymized prior to handoff.</li>
              <li><strong>With Trusted Infrastructure Providers:</strong> Cloud hosting (AWS, GCP, Azure), payment processors, identity verification vendors, and security monitoring services operating under binding Data Processing Agreements (DPAs) and strict confidentiality clauses.</li>
              <li><strong>For Legal & Regulatory Compliance:</strong> When required by court order, subpoena, applicable law, or to protect the safety, rights, and security of DaQube, our workforce, or the public.</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, financing, or sale of company assets, subject to standard confidentiality protections.</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl font-bold text-[#12151A] mb-3">6. International Data Transfers</h2>
            <p className="text-sm text-[#4A4F59] leading-relaxed">
              Because DaQube coordinates a global workforce across 100+ countries, data may be processed outside of your home country. When transferring personal data internationally, we employ sanctioned transfer mechanisms, including Standard Contractual Clauses (SCCs), UK International Data Transfer Agreements (IDTAs), and robust contractual security controls to ensure equivalent data protection.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-xl font-bold text-[#12151A] mb-3">7. Data Retention & Erasure</h2>
            <p className="text-sm text-[#4A4F59] leading-relaxed mb-2">
              We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#5F646D]">
              <li><strong>Account and financial records:</strong> Maintained for the active life of the account plus 7 years to satisfy statutory tax and legal auditing obligations.</li>
              <li><strong>Contributor submissions:</strong> Retained for the active duration of the project sprint and client contractual warranty period, unless consent is revoked earlier.</li>
              <li><strong>Web analytics and logs:</strong> Retained for a rolling period of up to 24 months before automated purge.</li>
            </ul>
            <p className="text-xs text-[#5F646D] mt-2">
              When retention schedules expire, data is securely wiped using certified cryptographic erasure standards.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-xl font-bold text-[#12151A] mb-3">8. Your Rights and Choices</h2>
            <p className="text-sm text-[#4A4F59] leading-relaxed mb-3">
              Depending on your jurisdiction (e.g. EU/EEA, UK, California, India), you possess specific statutory rights regarding your personal data:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#5F646D] mb-4">
              <li><strong>Access:</strong> Request confirmation and copies of personal data we hold about you.</li>
              <li><strong>Rectification:</strong> Request correction of inaccurate, obsolete, or incomplete information.</li>
              <li><strong>Erasure:</strong> Request the deletion of your personal data ("right to be forgotten").</li>
              <li><strong>Withdrawal of Consent:</strong> Revoke consent for processing at any time without retroactive penalty.</li>
              <li><strong>Restriction & Objection:</strong> Object to processing based on legitimate interests or request processing restrictions.</li>
              <li><strong>Data Portability:</strong> Receive your provided data in a structured, commonly used machine-readable format.</li>
            </ul>
            <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E9ECEF] text-xs text-[#5F646D]">
              <strong className="text-[#12151A]">Important Note on Trained AI Models:</strong> Once contributor data has been irreversibly de-identified, delivered to a client, or embedded into trained model weights, technical extraction of individual training points may be mathematically impossible. Upon consent withdrawal, DaQube immediately ceases all future use, packaging, and distribution of your submissions.
            </div>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-xl font-bold text-[#12151A] mb-3">9. Cookies and Tracking Technologies</h2>
            <p className="text-sm text-[#4A4F59] leading-relaxed">
              We utilize essential, functional, and performance cookies to authenticate sessions, remember user preferences, and analyze site navigation. You can manage or block cookies through your browser settings, though disabling essential cookies may impact platform functionality.
            </p>
          </div>

          {/* Section 10 */}
          <div>
            <h2 className="text-xl font-bold text-[#12151A] mb-3">10. Security Architecture</h2>
            <p className="text-sm text-[#4A4F59] leading-relaxed">
              We enforce multi-layered defense controls as detailed in our Trust Center: TLS 1.2+ encryption in transit, AES-256 cryptographic envelope encryption at rest, air-gapped virtual desktop infrastructure (VDI) with disabled peripheral ports, multi-factor authentication (MFA), and round-the-clock intrusion monitoring.
            </p>
          </div>

          {/* Section 11 */}
          <div>
            <h2 className="text-xl font-bold text-[#12151A] mb-3">11. Protection of Children's Privacy</h2>
            <p className="text-sm text-[#4A4F59] leading-relaxed">
              DaQube's services and contribution programs are exclusively intended for adults aged 18 and older. We do not knowingly solicit or collect personal information from individuals under 18. If we discover an account belongs to a minor, we immediately terminate access and purge all associated records.
            </p>
          </div>

          {/* Section 12 */}
          <div>
            <h2 className="text-xl font-bold text-[#12151A] mb-3">12. Third-Party Websites</h2>
            <p className="text-sm text-[#4A4F59] leading-relaxed">
              Our website may contain links to external third-party platforms or industry partners. DaQube is not responsible for the privacy practices or content of third-party domains; we encourage you to review their independent privacy notices.
            </p>
          </div>

          {/* Section 13 */}
          <div>
            <h2 className="text-xl font-bold text-[#12151A] mb-3">13. Policy Updates</h2>
            <p className="text-sm text-[#4A4F59] leading-relaxed">
              We may revise this Privacy Policy periodically to reflect changes in our operational procedures or legal requirements. Updated versions will be posted here with an updated effective date. For material modifications, we provide prominent notice via email or platform banner.
            </p>
          </div>

          {/* Section 14 */}
          <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E9ECEF]">
            <h2 className="text-xl font-bold text-[#12151A] mb-3">14. Contact Us & Grievance Redressal</h2>
            <p className="text-sm text-[#4A4F59] leading-relaxed mb-4">
              To exercise your data subject rights, submit a privacy inquiry, or reach our Data Protection Officer:
            </p>
            <div className="space-y-2 text-xs text-[#5F646D]">
              <p><strong>Entity:</strong> DaQube Technologies Inc.</p>
              <p><strong>Privacy Contact:</strong> <a href="mailto:privacy@daqube.ai" className="text-[#EC5E27] font-semibold">privacy@daqube.ai</a></p>
              <p><strong>Security Operations:</strong> <a href="mailto:security@daqube.ai" className="text-[#EC5E27] font-semibold">security@daqube.ai</a></p>
              <p><strong>Response Time:</strong> Our privacy governance team responds to verified requests within 30 days (or within timelines prescribed by local law).</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PrivacyPage;
