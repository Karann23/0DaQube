import { Link } from "react-router-dom";
import { ArrowLeft, Home, Search, HelpCircle } from "lucide-react";

export function NotFoundPage() {
  return (
    <section className="section section-white" style={{ minHeight: "75vh", display: "flex", alignItems: "center" }}>
      <div className="container" style={{ textAlign: "center", maxWidth: "680px" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "72px",
            height: "72px",
            borderRadius: "20px",
            background: "rgba(236, 94, 39, 0.12)",
            color: "#EC5E27",
            marginBottom: "24px",
            border: "1px solid rgba(236, 94, 39, 0.2)"
          }}
        >
          <HelpCircle size={36} />
        </div>
        <div className="eyebrow" style={{ justifyContent: "center" }}>
           404 — PAGE NOT FOUND
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-[#12151A] mt-2 mb-4 tracking-tight">
          Lost in the latent space?
        </h1>
        <p className="text-base text-[#5F646D] leading-relaxed mb-8">
          The page or dataset specification you requested does not exist or has been relocated. Explore our verified data capabilities below.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link to="/" className="button button-crimson">
            <Home size={16} /> Return to Homepage
          </Link>
          <Link to="/services" className="button button-dark">
            Explore Services
          </Link>
          <Link to="/contact" className="button" style={{ background: "#F5F5E2", color: "#12151A" }}>
            Contact Support
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-[rgba(20,23,26,0.08)] text-xs text-[#8E939D]">
          Looking for a specific capability? Check out our{" "}
          <Link to="/network" className="text-[#EC5E27] font-semibold hover:underline">
            Global Contributor Network
          </Link>{" "}
          or{" "}
          <Link to="/quality" className="text-[#EC5E27] font-semibold hover:underline">
            Quality & Trust Framework
          </Link>
          .
        </div>
      </div>
    </section>
  );
}
export default NotFoundPage;
