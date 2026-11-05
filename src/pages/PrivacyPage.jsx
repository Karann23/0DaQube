import { Link } from "react-router-dom";
import { ShieldCheck, Lock, FileText, ArrowLeft } from "lucide-react";

export function PrivacyPage() {
  return (
    <>
      <section className="article-hero !py-12">
        <div className="container article-hero-inner">
          <Link to="/" className="back-link">
            <ArrowLeft size={15} /> Back to Home
          </Link>
          <span className="eyebrow eyebrow-light">GOVERNANCE & TRUST</span>
          <h1>Privacy Policy & Biometric Data Notice</h1>
          <p>
            Effective Date: November 4, 2026 · Committed to GDPR, CCPA, and Illinois BIPA compliance.
          </p>
        </div>
      </section>

      <section className="section section-white legal-page">
        <div className="container max-w-4xl space-y-8">
          <div>
            <h2 className="text-xl font-bold text-[#12151A] mb-3">1. Scope and Commitment</h2>
            <p className="text-sm text-[#4A4F59] leading-relaxed">
              DaQube Technologies Inc. ("DaQube", "we", "us", or "our") provides high-precision data collection, annotation, and model alignment services for machine learning teams. This Privacy Notice outlines how we collect, process, protect, and dispose of information submitted through our websites, platform portals, and data contribution operations.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#12151A] mb-3">2. Enterprise Data & Cleanroom Isolation</h2>
            <p className="text-sm text-[#4A4F59] leading-relaxed mb-3">
              We understand the critical sensitivity of unreleased foundation model weights, confidential prompts, and proprietary client telemetry. All enterprise annotation engagements are segregated:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#5F646D]">
              <li><strong>Air-Gapped Virtual Desktops (VDI):</strong> Annotator terminals have local copy/paste, external email, and USB peripheral egress disabled.</li>
              <li><strong>Client-Managed Cloud Enclaves:</strong> Data can remain within customer VPCs (AWS, GCP, Azure Blob) via authenticated Zero-Trust Network Access (ZTNA).</li>
              <li><strong>Certified Cryptographic Erasure:</strong> Upon delivery sprint completion, scratch copies are purged under DoD 5220.22-M standards with certified destruction receipts.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#12151A] mb-3">3. Biometric & Voice Data Protection (BIPA, GDPR, CCPA)</h2>
            <p className="text-sm text-[#4A4F59] leading-relaxed">
              When collecting facial imagery, gaze vectors, or spontaneous conversational speech recordings, DaQube adheres to strict informed opt-in consent protocols. Every contributor signs explicit legal model releases detailing the intended machine learning training scope, geographic distribution, and retention lifespan. Contributor biometric identifiers are never sold, traded, or used for automated credit scoring.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#12151A] mb-3">4. Information Collected on Web Properties</h2>
            <p className="text-sm text-[#4A4F59] leading-relaxed">
              When you submit a technical project enquiry or request a dataset estimate, we collect your name, corporate email, company name, target modalities, and project volume specifications. This information is used strictly to respond to your technical requirements and execute mutual non-disclosure agreements.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#12151A] mb-3">5. Data Subject Rights & Inquiries</h2>
            <p className="text-sm text-[#4A4F59] leading-relaxed">
              Under GDPR and CCPA/CPRA, contributors and enterprise contacts hold the right to access, rectify, or request the deletion of their personal data. For all privacy inquiries, data subject access requests (DSAR), or compliance whitepapers, contact our Data Protection Officer directly at <a href="mailto:privacy@daqube.com" className="text-[#EC5E27] font-semibold">privacy@daqube.com</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default PrivacyPage;
