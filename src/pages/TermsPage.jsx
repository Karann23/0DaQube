import { Link } from "react-router-dom";
import { ArrowLeft, Scale, ShieldCheck, CheckCircle2 } from "lucide-react";

export function TermsPage() {
  return (
    <>
      <section className="article-hero !py-14">
        <div className="container article-hero-inner">
          <div className="mb-4">
            <Link to="/" className="back-link inline-flex items-center gap-1.5 text-xs text-[#CBD5E1] hover:text-[#EC5E27] transition-colors">
              <ArrowLeft size={14} /> Back to Home
            </Link>
          </div>
          <span className="eyebrow eyebrow-light block mb-2">LEGAL CONTRACTS & GOVERNANCE</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-2">
            Terms & Conditions
          </h1>
          <p className="text-sm sm:text-base text-[#CBD5E1] mt-3">
            Effective Date: November 5, 2026 · Last Updated: November 5, 2026
          </p>
        </div>
      </section>

      <section className="section section-white legal-page">
        <div className="container max-w-4xl space-y-10">
          {/* Terms Overview Banner */}
          <div className="p-6 rounded-2xl bg-[#FFF8F5] border border-[#EC5E27]/30 flex items-start gap-4">
            <Scale size={24} className="text-[#EC5E27] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-sm text-[#12151A] mb-1">Contractual Summary</h3>
              <p className="text-xs text-[#5F646D] leading-relaxed">
                These Terms and Conditions govern your access to the DaQube platform, websites (<a href="https://daqube.ai" className="text-[#EC5E27] underline">daqube.ai</a>), contributor portals, and related AI dataset services provided by DaQube Technologies Inc. ("DaQube", "we", "us"). By accessing or utilizing our services, you agree to be bound by these Terms.
              </p>
            </div>
          </div>

          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-bold text-[#12151A] mb-3">1. Eligibility</h2>
            <p className="text-sm text-[#4A4F59] leading-relaxed">
              You must be at least 18 years of age and legally competent to enter into a binding contract to utilize our platform and contribution programs. If you access the site on behalf of a corporation, organization, or enterprise entity, you warrant that you possess full legal authority to bind that entity to these Terms.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-bold text-[#12151A] mb-3">2. Permitted Use & Code of Conduct</h2>
            <p className="text-sm text-[#4A4F59] leading-relaxed mb-3">
              You agree to use DaQube web properties strictly for lawful purposes and in accordance with these Terms. You agree NOT to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#5F646D]">
              <li>Violate any applicable federal, state, local, or international statutory regulation or law.</li>
              <li>Submit false, fraudulent, automated, plagiarized, or misleading data contributions.</li>
              <li>Attempt to compromise, probe, or gain unauthorized access to our server enclaves, database clusters, or user accounts.</li>
              <li>Interfere with site availability through denial-of-service (DoS) attempts, malware, or bandwidth overloading.</li>
              <li>Scrape, crawl, extract, or reverse engineer site code, designs, or proprietary taxonomy rubrics without prior written authorization.</li>
              <li>Use DaQube's proprietary materials, taxonomy schemas, or documentation to build a competing data service.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-bold text-[#12151A] mb-3">3. User Accounts & Security</h2>
            <p className="text-sm text-[#4A4F59] leading-relaxed">
              If you register an account, you must provide accurate, current, and verifiable information. You are solely responsible for maintaining the confidentiality of your credentials and multi-factor authentication devices. You agree to notify DaQube immediately at <a href="mailto:security@daqube.ai" className="text-[#EC5E27] font-semibold">security@daqube.ai</a> upon discovering any unauthorized account activity.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-bold text-[#12151A] mb-3">4. Contributor Terms & Data Submission</h2>
            <p className="text-sm text-[#4A4F59] leading-relaxed mb-3">
              When participating in data collection, audio recording, photo capture, video capture, or data annotation sprints, the following terms apply:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs text-[#5F646D]">
              <li><strong>Originality & Legal Clearance:</strong> You confirm that all submitted content is your original creation, that you hold all necessary rights and model releases, that your submissions do not infringe third-party IP or privacy rights, and that submissions are not generated by AI unless explicitly specified by the project scope.</li>
              <li><strong>Consent for AI Training:</strong> You explicitly consent to DaQube collecting, processing, curating, and licensing your submissions to our enterprise clients specifically for machine learning model training, validation, benchmarking, and commercial deployment.</li>
              <li><strong>License Grant:</strong> You grant DaQube a worldwide, irrevocable, royalty-bearing or paid-up, transferable, sublicensable license to use, reproduce, adapt, package, and deliver your submitted contributions to clients for AI training and evaluation purposes.</li>
              <li><strong>Compensation & Quality Standards:</strong> Where projects offer financial compensation, payments will be disbursed upon verification of task quality against the project rubric. We reserve the right to reject submissions and withhold payout for automated, duplicate, fraudulent, or sub-standard work.</li>
              <li><strong>Independent Contractor Status:</strong> Contributors participate as independent freelancers, not as employees, agents, or joint-venture partners of DaQube.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl font-bold text-[#12151A] mb-3">5. Enterprise Client Engagements</h2>
            <p className="text-sm text-[#4A4F59] leading-relaxed">
              Enterprise data collection, annotation, and model alignment services for corporate clients are governed by individually executed Master Services Agreements (MSA) and Statements of Work (SOW). In the event of a conflict between these website Terms and a signed enterprise agreement, the executed agreement shall supersede.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl font-bold text-[#12151A] mb-3">6. Intellectual Property & Deliverables Ownership</h2>
            <p className="text-sm text-[#4A4F59] leading-relaxed mb-2">
              All website software, graphical assets, animations, interactive widgets, brand marks, and documentation are owned by or licensed to DaQube Technologies Inc. and protected under international copyright and trademark laws.
            </p>
            <p className="text-xs text-[#5F646D]">
              Ownership of bespoke custom datasets, annotation masks, and preference matrices produced for clients is transferred exclusively to the commissioning client upon full settlement of contracted invoices, pursuant to the applicable SOW.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-xl font-bold text-[#12151A] mb-3">7. Confidentiality & Non-Disclosure</h2>
            <p className="text-sm text-[#4A4F59] leading-relaxed">
              If non-public materials (including task taxonomies, customer prompts, internal guidelines, or technical evaluation sets) are shared with you during a project, you agree to maintain absolute confidentiality and refrain from disclosing or utilizing them outside the project scope.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-xl font-bold text-[#12151A] mb-3">8. Privacy & Data Protection</h2>
            <p className="text-sm text-[#4A4F59] leading-relaxed">
              Our <Link to="/privacy" className="text-[#EC5E27] underline">Privacy Policy</Link> outlines how personal information is collected, processed, and safeguarded, and is incorporated into these Terms by reference.
            </p>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-xl font-bold text-[#12151A] mb-3">9. Third-Party Services & Links</h2>
            <p className="text-sm text-[#4A4F59] leading-relaxed">
              The website may contain integrations or links to external third-party software tools, cloud providers, or payment gateways. DaQube does not endorse, control, or assume liability for third-party practices.
            </p>
          </div>

          {/* Section 10 */}
          <div>
            <h2 className="text-xl font-bold text-[#12151A] mb-3">10. Disclaimers of Warranties</h2>
            <p className="text-sm text-[#4A4F59] leading-relaxed">
              The website, public tools, and preliminary evaluations are provided on an <strong>"AS IS"</strong> and <strong>"AS AVAILABLE"</strong> basis without warranties of any kind, whether express, implied, or statutory, including warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>
          </div>

          {/* Section 11 */}
          <div>
            <h2 className="text-xl font-bold text-[#12151A] mb-3">11. Limitation of Liability</h2>
            <p className="text-sm text-[#4A4F59] leading-relaxed">
              To the maximum extent permitted by law, DaQube Technologies Inc., its directors, employees, and affiliates will not be liable for any indirect, incidental, punitive, or consequential damages, or loss of profits, data, or business goodwill. DaQube’s total aggregate liability arising out of or related to your use of the website shall not exceed $100 USD (or the total fees paid by you to DaQube in the preceding 12 months, whichever is greater).
            </p>
          </div>

          {/* Section 12 */}
          <div>
            <h2 className="text-xl font-bold text-[#12151A] mb-3">12. Indemnification</h2>
            <p className="text-sm text-[#4A4F59] leading-relaxed">
              You agree to defend, indemnify, and hold harmless DaQube, its officers, employees, and successors from and against any third-party claims, liabilities, damages, and legal expenses arising from your violation of these Terms, misuse of the platform, or submission of infringing or unverified data.
            </p>
          </div>

          {/* Section 13 */}
          <div>
            <h2 className="text-xl font-bold text-[#12151A] mb-3">13. Suspension & Termination</h2>
            <p className="text-sm text-[#4A4F59] leading-relaxed">
              We reserve the right to suspend or terminate your account or platform access immediately without notice if we detect fraudulent activity, security violations, breach of contributor rubrics, or failure to comply with these Terms.
            </p>
          </div>

          {/* Section 14 */}
          <div>
            <h2 className="text-xl font-bold text-[#12151A] mb-3">14. Changes to Terms</h2>
            <p className="text-sm text-[#4A4F59] leading-relaxed">
              We reserve the right to modify these Terms at our discretion. Revised Terms will be posted with an updated effective date. Continued access after modifications constitutes binding acceptance of the updated Terms.
            </p>
          </div>

          {/* Section 15 */}
          <div>
            <h2 className="text-xl font-bold text-[#12151A] mb-3">15. Governing Law & Dispute Resolution</h2>
            <p className="text-sm text-[#4A4F59] leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, and the laws of India, without regard to conflict of laws principles. The parties agree to submit to the exclusive jurisdiction of the competent courts in resolving any dispute arising hereunder, following reasonable good-faith commercial negotiation.
            </p>
          </div>

          {/* Section 16 */}
          <div>
            <h2 className="text-xl font-bold text-[#12151A] mb-3">16. General Provisions</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#5F646D]">
              <li><strong>Entire Agreement:</strong> These Terms and our Privacy Policy constitute the entire legal understanding between you and DaQube regarding web platform use.</li>
              <li><strong>Severability:</strong> If any provision is deemed unenforceable, the remaining provisions will continue in full legal effect.</li>
              <li><strong>No Waiver:</strong> Failure to enforce any right or provision under these Terms shall not constitute a waiver of future enforcement.</li>
            </ul>
          </div>

          {/* Section 17 */}
          <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E9ECEF]">
            <h2 className="text-xl font-bold text-[#12151A] mb-3">17. Contact & Legal Inquiries</h2>
            <p className="text-sm text-[#4A4F59] leading-relaxed mb-4">
              For all legal notices, contract inquiries, or intellectual property questions:
            </p>
            <div className="space-y-1.5 text-xs text-[#5F646D]">
              <p><strong>Entity:</strong> DaQube Technologies Inc.</p>
              <p><strong>Legal Operations:</strong> <a href="mailto:legal@daqube.ai" className="text-[#EC5E27] font-semibold">legal@daqube.ai</a></p>
              <p><strong>Security Reporting:</strong> <a href="mailto:security@daqube.ai" className="text-[#EC5E27] font-semibold">security@daqube.ai</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TermsPage;
