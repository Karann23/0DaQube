import { Mail, MessageSquareText, ShieldCheck, Clock, FileCheck } from "lucide-react";
import { ContactForm } from "../components/contact-form";
import { siteConfig } from "../lib/home-content";

export function ContactPage() {
    return (<section className="contact-page">
      <div className="container contact-layout">
        <div className="contact-copy">
          <span className="eyebrow"> CONTACT DAQUBE</span>
          <h1>Let's talk about<br /><span>your data needs.</span></h1>
          <p className="contact-lead">Tell us what you're building, what your model needs to learn, and what a useful delivery looks like for your team.</p>
          <div className="contact-points">
            <div>
              <span><MessageSquareText size={19}/></span>
              <div>
                <h3>A technical conversation, not a sales script</h3>
                <p>Speak directly with AI solutions architects and data workflow leads.</p>
              </div>
            </div>
            <div>
              <span><ShieldCheck size={19}/></span>
              <div>
                <h3>Scope & NDA before commitment</h3>
                <p>Mutual NDAs executed upfront. Align on modalities, taxonomy, and acceptance criteria.</p>
              </div>
            </div>
            <div>
              <span><Clock size={19}/></span>
              <div>
                <h3>Fast Turnaround & Pilots</h3>
                <p>Calibrated pilot deliverables and feasibility benchmarks delivered within 5 business days.</p>
              </div>
            </div>
            <div>
              <span><Mail size={19}/></span>
              <div>
                <h3>Direct Inquiries</h3>
                <p><a href={`mailto:${siteConfig.contactEmail}`} className="text-[#EC5E27] font-semibold">{siteConfig.contactEmail}</a></p>
              </div>
            </div>
          </div>
          <div className="contact-note">
            <FileCheck size={15} className="inline mr-1 text-[#EC5E27]" />
            Enterprise air-gapped security, ISO 27001 Certified, and HIPAA/BAA options available upon request.
          </div>
        </div>
        <ContactForm />
      </div>
    </section>);
}
export default ContactPage;
