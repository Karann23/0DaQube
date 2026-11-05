import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function TermsPage() {
  return (
    <>
      <section className="article-hero !py-12">
        <div className="container article-hero-inner">
          <Link to="/" className="back-link">
            <ArrowLeft size={15} /> Back to Home
          </Link>
          <span className="eyebrow eyebrow-light">LEGAL TERMS</span>
          <h1>Terms of Service & Engagement Framework</h1>
          <p>
            Effective Date: November 4, 2026 · Governing Master Services Agreements and Platform Services.
          </p>
        </div>
      </section>

      <section className="section section-white legal-page">
        <div className="container max-w-4xl space-y-8">
          <div>
            <h2 className="text-xl font-bold text-[#12151A] mb-3">1. Engagement Framework & SOWs</h2>
            <p className="text-sm text-[#4A4F59] leading-relaxed">
              These Terms of Service govern the use of DaQube Technologies Inc. ("DaQube") digital properties and outline the commercial framework under which enterprise data collection, annotation, and model alignment services are contracted. All production data services are executed pursuant to a separately negotiated Master Services Agreement (MSA) and project-specific Statements of Work (SOW) defining milestones, acceptance criteria, and deliverable schemas.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#12151A] mb-3">2. Intellectual Property Rights & Model Ownership</h2>
            <p className="text-sm text-[#4A4F59] leading-relaxed">
              Upon full settlement of contracted invoices, all final annotated datasets, expert chain-of-thought demonstrations, and calibrated preference matrices created specifically for the client under a valid SOW become the exclusive property of the client, including all derivative machine learning training rights. DaQube retains zero proprietary claim over customer-provided source weights or resulting fine-tuned checkpoints.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#12151A] mb-3">3. Acceptance Criteria & Quality Gates</h2>
            <p className="text-sm text-[#4A4F59] leading-relaxed">
              Every production sprint operates under mutually defined quantitative quality gates (e.g. Krippendorff's Alpha ≥ 0.88, IoU ≥ 0.92, or Word Error Rate ≤ 2.5%). If a milestone delivery fails to satisfy the agreed statistical consensus threshold, DaQube remediates and re-annotates the defective batch slice at no additional cost.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#12151A] mb-3">4. Confidentiality & Non-Disclosure</h2>
            <p className="text-sm text-[#4A4F59] leading-relaxed">
              Both parties agree to treat all shared prompts, test sets, engineering specifications, and architectural documentation as strictly confidential information, protected under binding mutual non-disclosure obligations for a minimum term of five (5) years.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#12151A] mb-3">5. Governing Law & Dispute Resolution</h2>
            <p className="text-sm text-[#4A4F59] leading-relaxed">
              These terms and related enterprise agreements shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of laws principles. For legal inquiries or commercial contracting agreements, contact <a href="mailto:legal@daqube.com" className="text-[#EC5E27] font-semibold">legal@daqube.com</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default TermsPage;
