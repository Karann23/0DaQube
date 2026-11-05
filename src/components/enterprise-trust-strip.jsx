import { Shield, Lock, Award, FileCheck2, Globe2, Sparkles } from "lucide-react";

export function EnterpriseTrustStrip() {
  const credentials = [
    {
      icon: Shield,
      title: "ISO 27001 Certified",
      sub: "Enterprise Security Aligned"
    },
    {
      icon: Lock,
      title: "ISO/IEC 27001",
      sub: "Information Security Controls"
    },
    {
      icon: FileCheck2,
      title: "GDPR & CCPA",
      sub: "Strict Privacy & Opt-in Consent"
    },
    {
      icon: Award,
      title: "HIPAA / BAA Ready",
      sub: "De-identified Healthcare Data"
    },
    {
      icon: Globe2,
      title: "100+ Countries",
      sub: "Vetted Contributor Footprint"
    }
  ];

  return (
    <section className="enterprise-trust-wrapper" aria-label="Enterprise Security and Compliance">
      <div className="container">
        <div className="enterprise-trust-inner">
          <div className="trust-kicker">
            <Sparkles size={14} className="text-[#EC5E27]" />
            <span>ENTERPRISE STANDARDS</span>
          </div>

          <div className="trust-items-grid">
            {credentials.map((c, i) => (
              <div key={i} className="trust-item">
                <span className="trust-icon">
                  <c.icon size={18} />
                </span>
                <div className="trust-text">
                  <span className="trust-title">{c.title}</span>
                  <span className="trust-sub">{c.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default EnterpriseTrustStrip;
