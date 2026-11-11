import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, ShieldCheck, Sparkles } from "lucide-react";
import { Brand } from "./brand";
import { siteConfig } from "../lib/home-content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand & Corporate Statement */}
          <div className="footer-brand-block lg:col-span-2">
            <Brand asLink height={36} />
            <p className="mt-4 text-[#8E939D] text-sm leading-relaxed max-w-sm">
              The high-precision data engine for frontier AI models. Built on verified domain expertise, air-gapped security, and sub-millisecond acoustic and pixel ground truth.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <a className="footer-email" href={`mailto:${siteConfig.contactEmail}`}>
                <Mail size={16} /> {siteConfig.contactEmail}
              </a>
              <div className="inline-flex items-center gap-2 text-xs text-[#8E939D] font-mono mt-1">
                <ShieldCheck size={14} className="text-[#EC5E27]" />
                <span>ISO 27001 Aligned · ISO 27001 Certified · HIPAA BAA</span>
              </div>
            </div>
          </div>

          {/* Column 1: Services Taxonomy */}
          <div className="footer-column">
            <h4>Core Capabilities</h4>
            <Link to="/services/image-collection">Image Data Collection</Link>
            <Link to="/services/video-collection">Video Data Collection</Link>
            <Link to="/services/speech-collection">Speech Data Collection</Link>
            <Link to="/services/text-collection">Text Data & Labeling</Link>
            <Link to="/services/annotation">Image & Video Annotation</Link>
            <Link to="/services/transcription">Audio Transcription Services</Link>
            <Link to="/services/adas-lidar">ADAS & LiDAR Annotation</Link>
            <Link to="/services/off-the-shelf">Off-The-Shelf Datasets</Link>
          </div>

          {/* Column 2: Network & Trust */}
          <div className="footer-column">
            <h4>Network & Trust</h4>
            <Link to="/network">Global Contributor Network</Link>
            <Link to="/quality">Quality & Trust Assurance</Link>
            <Link to="/case-studies">Enterprise Case Studies</Link>
          </div>

          {/* Column 3: Company & Direct Engagement */}
          <div className="footer-column">
            <h4>Company</h4>
            <Link to="/about">About DaQube</Link>
            <Link to="/industries">Industries</Link>
            <Link to="/insights">Insights & Research</Link>
            <Link to="/contact" className="font-semibold text-[#EC5E27] mt-2 inline-flex items-center gap-1">
              Discuss a Project <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom mt-12 pt-6 border-t border-[#262A33]">
          <span>© {new Date().getFullYear()} DaQube Technologies Inc. All rights reserved.</span>
          <span className="footer-note">Architecting the ground truth for physical and generative AI.</span>
          <div>
            <Link to="/privacy">Privacy Notice</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
