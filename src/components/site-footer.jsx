import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Linkedin, Mail, Globe2, ArrowUpRight } from "lucide-react";
import { siteConfig } from "../lib/home-content";

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="site-footer" aria-label="DaQube Footer">
      <div className="daqube-footer-arch">
        {/* Top Content Grid */}
        <div className="daqube-footer-top">
          {/* Column 1: Tagline, Copyright & Direct Email */}
          <div>
            <h3 className="daqube-footer-headline">
              Powering frontier AI models. One dataset at a time!
            </h3>
            <p className="daqube-footer-meta">
              &copy; {new Date().getFullYear()} DaQube Technologies Inc. &middot; Architecting the ground truth for physical &amp; generative AI.
            </p>
            <a className="daqube-footer-email" href={`mailto:${siteConfig.contactEmail}`}>
              <Mail size={14} /> {siteConfig.contactEmail}
            </a>
          </div>

          {/* Column 2: Navigation */}
          <nav className="daqube-footer-col" aria-label="Footer Navigation">
            <h4>NAVIGATION</h4>
            <Link to="/solutions">Solutions</Link>
            <Link to="/network">Global Network</Link>
            <Link to="/case-studies">Case Studies</Link>
            <Link to="/quality">Quality &amp; Trust</Link>
            <Link to="/industries">Industries</Link>
            <Link to="/about">About Us</Link>
          </nav>

          {/* Column 3: Solutions & Support */}
          <nav className="daqube-footer-col" aria-label="Solutions & Support">
            <h4>SOLUTIONS &amp; SUPPORT</h4>
            <Link to="/contact">Contact Us</Link>
            <Link to="/solutions/image-collection">Image Data Collection</Link>
            <Link to="/solutions/video-collection">Video Data Collection</Link>
            <Link to="/solutions/speech-collection">Speech &amp; Transcription</Link>
            <Link to="/solutions/annotation">Annotation &amp; ADAS</Link>
            <Link to="/solutions/off-the-shelf">Off-The-Shelf Datasets</Link>
          </nav>

          {/* Column 4: Newsletter & Social Links */}
          <div>
            <h4 className="daqube-footer-newsletter-title">
              GET THE LATEST FROM DAQUBE.
            </h4>

            <form className="daqube-footer-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (subscribed) setSubscribed(false);
                }}
                placeholder="Email Address"
                aria-label="Email Address"
              />
              <button type="submit">
                {subscribed ? (
                  <span className="inline-flex items-center gap-1">
                    <Check size={14} /> Joined
                  </span>
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>

            {subscribed && (
              <p className="mt-2 text-xs text-white/90 font-medium">
                Subscribed — dataset releases &amp; AI research updates queued.
              </p>
            )}

            <div className="mt-6">
              <h4 className="daqube-footer-newsletter-title !mb-2">FOLLOW US</h4>
              <div className="daqube-footer-socials">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="daqube-footer-social-btn"
                  aria-label="DaQube on LinkedIn"
                  title="LinkedIn"
                >
                  <Linkedin size={17} />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="daqube-footer-social-btn"
                  aria-label="DaQube on X"
                  title="X (Twitter)"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <Link
                  to="/network"
                  className="daqube-footer-social-btn"
                  aria-label="DaQube Global Network"
                  title="Global Network"
                >
                  <Globe2 size={17} />
                </Link>
                <Link
                  to="/contact"
                  className="daqube-footer-social-btn"
                  aria-label="Discuss a Project"
                  title="Discuss a Project"
                >
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Links + Oversized White DaQube Wordmark */}
        <div className="daqube-footer-wordmark-row">
          <div className="daqube-footer-legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <span>ISO 27001 &middot; GDPR &middot; HIPAA BAA</span>
          </div>

          <img
            src="/images/logos/daqube-logo-white.svg"
            alt="DaQube"
            className="daqube-footer-giant-logo"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
