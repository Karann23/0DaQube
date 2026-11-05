import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronRight,
  ChevronDown,
  Sparkles,
  Cpu,
  Mic,
  Camera,
  FileText,
  Boxes,
  Users2,
  GraduationCap,
  Scale,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Briefcase,
  Layers,
  ArrowRight,
  Video,
  Headphones,
  Crosshair
} from "lucide-react";
import { Brand } from "./brand";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({});
  const location = useLocation();
  const headerRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);

  // Close everything whenever location changes
  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Handle ESC key to close mobile menu & active dropdown
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Click outside listener for dropdowns & mobile menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (key) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 220);
  };

  const toggleMobileAccordion = (key) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <header className="site-header-wrapper" ref={headerRef} onMouseLeave={handleMouseLeave}>
      <div className="site-header-glass">
        {/* Iridescent liquid border shimmer highlight */}
        <div className="site-header-liquid-rim" aria-hidden="true" />

        {/* BRAND LOGO */}
        <Link to="/" className="site-header-brand" onClick={() => setMenuOpen(false)}>
          <Brand />
        </Link>

        {/* DESKTOP NAVIGATION (Exactly 5 Topics) */}
        <nav className="site-header-navigation" aria-label="Main navigation">
          {/* 1. SOLUTIONS */}
          <div
            className="site-nav-item-wrapper"
            onMouseEnter={() => handleMouseEnter("solutions")}
          >
            <Link
              to="/solutions"
              className={`site-nav-link ${
                location.pathname.startsWith("/solutions") || location.pathname.startsWith("/services")
                  ? "site-nav-link-active"
                  : ""
              }`}
              onClick={() => setActiveDropdown(null)}
            >
              <span>Solutions</span>
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${
                  activeDropdown === "solutions" ? "rotate-180 text-[#EC5E27]" : "text-[#8E939D]"
                }`}
              />
            </Link>

            {/* SOLUTIONS SLEEK COMPACT DROPDOWN */}
            {activeDropdown === "solutions" && (
              <div
                className="liquid-dropdown-menu liquid-dropdown-solutions"
                onMouseEnter={() => handleMouseEnter("solutions")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="liquid-dropdown-compact-header flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#EC5E27] font-bold">
                      ENTERPRISE DATA PIPELINES
                    </span>
                    <h4 className="text-sm font-bold text-[#12151A] mt-0.5">
                      Ground-Truth AI Training & Evaluation Solutions
                    </h4>
                  </div>
                  <Link
                    to="/solutions"
                    className="text-xs font-semibold text-[#EC5E27] hover:underline flex items-center gap-1 flex-shrink-0 ml-4"
                    onClick={() => setActiveDropdown(null)}
                  >
                    All Solutions <ArrowRight size={13} />
                  </Link>
                </div>

                <div className="liquid-dropdown-grid-solutions">
                  <Link
                    to="/solutions/image-collection"
                    className="liquid-dropdown-card"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <div className="icon-box">
                      <Camera size={16} />
                    </div>
                    <div>
                      <div className="font-semibold text-xs text-[#12151A]">
                        Image Data Collection
                      </div>
                      <div className="text-[11px] text-[#5F646D] leading-tight mt-0.5">
                        High-resolution computer vision & object datasets.
                      </div>
                    </div>
                  </Link>

                  <Link
                    to="/solutions/video-collection"
                    className="liquid-dropdown-card"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <div className="icon-box">
                      <Video size={16} />
                    </div>
                    <div>
                      <div className="font-semibold text-xs text-[#12151A]">
                        Video Data Collection
                      </div>
                      <div className="text-[11px] text-[#5F646D] leading-tight mt-0.5">
                        Multi-angle motion, actions & temporal feeds.
                      </div>
                    </div>
                  </Link>

                  <Link
                    to="/solutions/speech-collection"
                    className="liquid-dropdown-card"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <div className="icon-box">
                      <Mic size={16} />
                    </div>
                    <div>
                      <div className="font-semibold text-xs text-[#12151A]">
                        Speech Data Collection
                      </div>
                      <div className="text-[11px] text-[#5F646D] leading-tight mt-0.5">
                        Multilingual conversational speech & 120+ accents.
                      </div>
                    </div>
                  </Link>

                  <Link
                    to="/solutions/text-collection"
                    className="liquid-dropdown-card"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <div className="icon-box">
                      <FileText size={16} />
                    </div>
                    <div>
                      <div className="font-semibold text-xs text-[#12151A]">
                        Text & NLP Datasets
                      </div>
                      <div className="text-[11px] text-[#5F646D] leading-tight mt-0.5">
                        Domain corpora, QA pairs & syntactic evaluation.
                      </div>
                    </div>
                  </Link>

                  <Link
                    to="/solutions/annotation"
                    className="liquid-dropdown-card"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <div className="icon-box">
                      <Layers size={16} />
                    </div>
                    <div>
                      <div className="font-semibold text-xs text-[#12151A]">
                        Annotation & Labeling
                      </div>
                      <div className="text-[11px] text-[#5F646D] leading-tight mt-0.5">
                        Pixel-perfect segmentation & bounding boxes.
                      </div>
                    </div>
                  </Link>

                  <Link
                    to="/solutions/transcription"
                    className="liquid-dropdown-card"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <div className="icon-box">
                      <Headphones size={16} />
                    </div>
                    <div>
                      <div className="font-semibold text-xs text-[#12151A]">
                        Audio Transcription
                      </div>
                      <div className="text-[11px] text-[#5F646D] leading-tight mt-0.5">
                        Verbatim, phonetic & speaker diarization.
                      </div>
                    </div>
                  </Link>

                  <Link
                    to="/solutions/adas-lidar"
                    className="liquid-dropdown-card"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <div className="icon-box">
                      <Crosshair size={16} />
                    </div>
                    <div>
                      <div className="font-semibold text-xs text-[#12151A]">
                        ADAS & LiDAR Perception
                      </div>
                      <div className="text-[11px] text-[#5F646D] leading-tight mt-0.5">
                        Synchronized point cloud & sensor fusion.
                      </div>
                    </div>
                  </Link>

                  <Link
                    to="/solutions/off-the-shelf"
                    className="liquid-dropdown-card"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <div className="icon-box">
                      <Boxes size={16} />
                    </div>
                    <div>
                      <div className="font-semibold text-xs text-[#12151A]">
                        Off-the-Shelf AI Datasets
                      </div>
                      <div className="text-[11px] text-[#5F646D] leading-tight mt-0.5">
                        Instant-access pre-cleared, licensed corpora.
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="liquid-dropdown-compact-footer flex items-center justify-between">
                  <span className="text-[11px] text-[#5F646D]">
                    Air-gapped cleanrooms & custom sensor protocols available
                  </span>
                  <Link
                    to="/contact"
                    className="text-[11px] font-bold text-[#EC5E27] hover:underline flex items-center gap-1"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Scope Project <ChevronRight size={12} />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* 2. NETWORK */}
          <div
            className="site-nav-item-wrapper"
            onMouseEnter={() => handleMouseEnter("network")}
          >
            <Link
              to="/network"
              className={`site-nav-link ${
                location.pathname.startsWith("/network") ? "site-nav-link-active" : ""
              }`}
              onClick={() => setActiveDropdown(null)}
            >
              <span>Network</span>
              <span className="site-nav-badge">Global</span>
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${
                  activeDropdown === "network" ? "rotate-180 text-[#EC5E27]" : "text-[#8E939D]"
                }`}
              />
            </Link>

            {/* NETWORK LIQUID GLASS DROPDOWN */}
            {activeDropdown === "network" && (
              <div
                className="liquid-dropdown-menu liquid-dropdown-compact"
                onMouseEnter={() => handleMouseEnter("network")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="liquid-dropdown-compact-header">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#EC5E27] font-bold">
                    HUMAN-IN-THE-LOOP NETWORK
                  </span>
                  <h4 className="text-sm font-bold text-[#12151A] mt-0.5">
                    Global Reach & Certified Domain Expertise
                  </h4>
                </div>

                <div className="space-y-2 p-3">
                  <Link
                    to="/network/contributors"
                    className="liquid-dropdown-card"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <div className="icon-box">
                      <Users2 size={16} />
                    </div>
                    <div>
                      <div className="font-semibold text-xs text-[#12151A]">
                        Global Contributor Workforce
                      </div>
                      <div className="text-[11px] text-[#5F646D] leading-tight mt-0.5">
                        In-field acoustic & visual data collection spanning 1,000+ locales.
                      </div>
                    </div>
                  </Link>

                  <Link
                    to="/network/domain-experts"
                    className="liquid-dropdown-card"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <div className="icon-box">
                      <GraduationCap size={16} />
                    </div>
                    <div>
                      <div className="font-semibold text-xs text-[#12151A]">
                        Tier-4 Domain Specialists
                      </div>
                      <div className="text-[11px] text-[#5F646D] leading-tight mt-0.5">
                        Credentialed MDs, PhDs, staff software engineers & legal scholars.
                      </div>
                    </div>
                  </Link>

                  <Link
                    to="/network/ethics-compliance"
                    className="liquid-dropdown-card"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <div className="icon-box">
                      <Scale size={16} />
                    </div>
                    <div>
                      <div className="font-semibold text-xs text-[#12151A]">
                        Ethical AI & Labor Standards
                      </div>
                      <div className="text-[11px] text-[#5F646D] leading-tight mt-0.5">
                        Verified contributor standards, transparent metrics & anti-churn policy.
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="liquid-dropdown-compact-footer">
                  <Link
                    to="/network"
                    className="text-xs font-semibold text-[#EC5E27] hover:underline flex items-center justify-between"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span>View Network Architecture</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* 3. CASE STUDIES (Direct Link) */}
          <Link
            to="/case-studies"
            className={`site-nav-link ${
              location.pathname.startsWith("/case-studies") ? "site-nav-link-active" : ""
            }`}
            onClick={() => setActiveDropdown(null)}
          >
            Case Studies
          </Link>

          {/* 4. QUALITY & TRUST */}
          <div
            className="site-nav-item-wrapper"
            onMouseEnter={() => handleMouseEnter("quality")}
          >
            <Link
              to="/quality"
              className={`site-nav-link ${
                location.pathname.startsWith("/quality") ? "site-nav-link-active" : ""
              }`}
              onClick={() => setActiveDropdown(null)}
            >
              <span>Quality & Trust</span>
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${
                  activeDropdown === "quality" ? "rotate-180 text-[#EC5E27]" : "text-[#8E939D]"
                }`}
              />
            </Link>

            {/* QUALITY LIQUID GLASS DROPDOWN */}
            {activeDropdown === "quality" && (
              <div
                className="liquid-dropdown-menu liquid-dropdown-compact"
                onMouseEnter={() => handleMouseEnter("quality")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="liquid-dropdown-compact-header">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#EC5E27] font-bold">
                    TRUST INFRASTRUCTURE
                  </span>
                  <h4 className="text-sm font-bold text-[#12151A] mt-0.5">
                    Air-Gapped Security & Statistical Verification
                  </h4>
                </div>

                <div className="space-y-2 p-3">
                  <Link
                    to="/quality/security-compliance"
                    className="liquid-dropdown-card"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <div className="icon-box">
                      <ShieldCheck size={16} />
                    </div>
                    <div>
                      <div className="font-semibold text-xs text-[#12151A]">
                        Enterprise Security & Compliance
                      </div>
                      <div className="text-[11px] text-[#5F646D] leading-tight mt-0.5">
                        ISO 27001 Certified, HIPAA BAA & air-gapped cleanrooms.
                      </div>
                    </div>
                  </Link>

                  <Link
                    to="/quality/calibration-framework"
                    className="liquid-dropdown-card"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <div className="icon-box">
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      <div className="font-semibold text-xs text-[#12151A]">
                        Calibration & QA Framework
                      </div>
                      <div className="text-[11px] text-[#5F646D] leading-tight mt-0.5">
                        Krippendorff's Alpha, blind gold testing & multi-rater adjudication.
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="liquid-dropdown-compact-footer">
                  <Link
                    to="/quality"
                    className="text-xs font-semibold text-[#EC5E27] hover:underline flex items-center justify-between"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span>Inspect Trust Assurance Model</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* 5. ABOUT US */}
          <div
            className="site-nav-item-wrapper"
            onMouseEnter={() => handleMouseEnter("about")}
          >
            <Link
              to="/about"
              className={`site-nav-link ${
                location.pathname.startsWith("/about") ? "site-nav-link-active" : ""
              }`}
              onClick={() => setActiveDropdown(null)}
            >
              <span>About Us</span>
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${
                  activeDropdown === "about" ? "rotate-180 text-[#EC5E27]" : "text-[#8E939D]"
                }`}
              />
            </Link>

            {/* ABOUT LIQUID GLASS DROPDOWN */}
            {activeDropdown === "about" && (
              <div
                className="liquid-dropdown-menu liquid-dropdown-compact"
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="liquid-dropdown-compact-header">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#EC5E27] font-bold">
                    ORGANIZATION & OPERATIONS
                  </span>
                  <h4 className="text-sm font-bold text-[#12151A] mt-0.5">
                    Engineering Culture & Standards
                  </h4>
                </div>

                <div className="space-y-2 p-3">
                  <Link
                    to="/about/company"
                    className="liquid-dropdown-card"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <div className="icon-box">
                      <Building2 size={16} />
                    </div>
                    <div>
                      <div className="font-semibold text-xs text-[#12151A]">
                        Company & Leadership
                      </div>
                      <div className="text-[11px] text-[#5F646D] leading-tight mt-0.5">
                        Operating principles, leadership council & physical lab infrastructure.
                      </div>
                    </div>
                  </Link>

                  <Link
                    to="/about/careers"
                    className="liquid-dropdown-card"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <div className="icon-box">
                      <Briefcase size={16} />
                    </div>
                    <div>
                      <div className="font-semibold text-xs text-[#12151A]">
                        Workforce Standards & Ethics
                      </div>
                      <div className="text-[11px] text-[#5F646D] leading-tight mt-0.5">
                        Core ML engineering principles and dedicated operational governance.
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="liquid-dropdown-compact-footer">
                  <Link
                    to="/about"
                    className="text-xs font-semibold text-[#EC5E27] hover:underline flex items-center justify-between"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span>Read Executive Mission</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* RIGHT ACTIONS & MOBILE TOGGLE CONTROLS */}
        <div className="site-header-controls">
          <Link
            to="/contact"
            className="site-header-cta"
            aria-label="Discuss Project"
            onClick={() => setMenuOpen(false)}
          >
            <span className="site-header-cta-label-full">Discuss Project</span>
            <span className="site-header-cta-label-short">Discuss</span>
            <ArrowUpRight size={14} className="site-header-cta-icon" />
          </Link>

          <button
            type="button"
            className="site-mobile-toggle"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE LIQUID GLASS DRAWER */}
      <div
        className={`site-mobile-menu ${menuOpen ? "site-mobile-menu-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="site-mobile-menu-inner">
          <nav aria-label="Mobile navigation" className="space-y-1">
            {/* 1. SOLUTIONS ACCORDION */}
            <div className="site-mobile-accordion-group">
              <div className="flex items-center justify-between p-3 rounded-xl hover:bg-[#F1F3F5]/80">
                <Link
                  to="/solutions"
                  className="text-sm font-bold text-[#12151A]"
                  onClick={() => setMenuOpen(false)}
                >
                  Solutions
                </Link>
                <button
                  type="button"
                  className="p-1 text-[#8E939D] hover:text-[#12151A]"
                  onClick={() => toggleMobileAccordion("solutions")}
                  aria-label="Toggle Solutions submenu"
                >
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      mobileExpanded.solutions || mobileExpanded.services ? "rotate-180 text-[#EC5E27]" : ""
                    }`}
                  />
                </button>
              </div>

              {(mobileExpanded.solutions || mobileExpanded.services) && (
                <div className="pl-4 pr-2 pb-2 space-y-2 border-l-2 border-[#EC5E27]/30 ml-4 my-1">
                  <Link
                    to="/solutions/image-collection"
                    className="block text-xs font-semibold text-[#12151A] hover:text-[#EC5E27] py-1"
                    onClick={() => setMenuOpen(false)}
                  >
                    Image Data Collection
                  </Link>
                  <Link
                    to="/solutions/video-collection"
                    className="block text-xs font-semibold text-[#12151A] hover:text-[#EC5E27] py-1"
                    onClick={() => setMenuOpen(false)}
                  >
                    Video Data Collection
                  </Link>
                  <Link
                    to="/solutions/speech-collection"
                    className="block text-xs font-semibold text-[#12151A] hover:text-[#EC5E27] py-1"
                    onClick={() => setMenuOpen(false)}
                  >
                    Speech Data Collection
                  </Link>
                  <Link
                    to="/solutions/text-collection"
                    className="block text-xs font-semibold text-[#12151A] hover:text-[#EC5E27] py-1"
                    onClick={() => setMenuOpen(false)}
                  >
                    Text & NLP Datasets
                  </Link>
                  <Link
                    to="/solutions/annotation"
                    className="block text-xs font-semibold text-[#12151A] hover:text-[#EC5E27] py-1"
                    onClick={() => setMenuOpen(false)}
                  >
                    Annotation & Labeling
                  </Link>
                  <Link
                    to="/solutions/transcription"
                    className="block text-xs font-semibold text-[#12151A] hover:text-[#EC5E27] py-1"
                    onClick={() => setMenuOpen(false)}
                  >
                    Audio Transcription Services
                  </Link>
                  <Link
                    to="/solutions/adas-lidar"
                    className="block text-xs font-semibold text-[#12151A] hover:text-[#EC5E27] py-1"
                    onClick={() => setMenuOpen(false)}
                  >
                    ADAS & LiDAR Perception
                  </Link>
                  <Link
                    to="/solutions/off-the-shelf"
                    className="block text-xs font-semibold text-[#12151A] hover:text-[#EC5E27] py-1"
                    onClick={() => setMenuOpen(false)}
                  >
                    Off-the-Shelf AI Datasets
                  </Link>
                  <Link
                    to="/solutions"
                    className="block text-xs font-bold text-[#EC5E27] underline pt-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    View All Solutions Overview →
                  </Link>
                </div>
              )}
            </div>

            {/* 2. NETWORK ACCORDION */}
            <div className="site-mobile-accordion-group">
              <div className="flex items-center justify-between p-3 rounded-xl hover:bg-[#F1F3F5]/80">
                <Link
                  to="/network"
                  className="flex items-center gap-2 text-sm font-bold text-[#12151A]"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>Network</span>
                  <span className="site-nav-badge-mobile">Global</span>
                </Link>
                <button
                  type="button"
                  className="p-1 text-[#8E939D] hover:text-[#12151A]"
                  onClick={() => toggleMobileAccordion("network")}
                  aria-label="Toggle Network submenu"
                >
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      mobileExpanded.network ? "rotate-180 text-[#EC5E27]" : ""
                    }`}
                  />
                </button>
              </div>

              {mobileExpanded.network && (
                <div className="pl-4 pr-2 pb-2 space-y-2 border-l-2 border-[#EC5E27]/30 ml-4 my-1">
                  <Link
                    to="/network/contributors"
                    className="block text-xs text-[#5F646D] hover:text-[#EC5E27] py-1"
                    onClick={() => setMenuOpen(false)}
                  >
                    • Global Contributor Workforce (1,000+ Locales)
                  </Link>
                  <Link
                    to="/network/domain-experts"
                    className="block text-xs text-[#5F646D] hover:text-[#EC5E27] py-1"
                    onClick={() => setMenuOpen(false)}
                  >
                    • Tier-4 Domain Specialists (MDs, PhDs, Engineers)
                  </Link>
                  <Link
                    to="/network/ethics-compliance"
                    className="block text-xs text-[#5F646D] hover:text-[#EC5E27] py-1"
                    onClick={() => setMenuOpen(false)}
                  >
                    • Ethical AI & Labor Standards
                  </Link>
                </div>
              )}
            </div>

            {/* 3. CASE STUDIES */}
            <Link
              to="/case-studies"
              className="flex items-center justify-between p-3 rounded-xl text-sm font-bold text-[#12151A] hover:bg-[#F1F3F5]/80"
              onClick={() => setMenuOpen(false)}
            >
              <span>Case Studies</span>
              <ChevronRight size={16} className="text-[#8E939D]" />
            </Link>

            {/* 4. QUALITY & TRUST ACCORDION */}
            <div className="site-mobile-accordion-group">
              <div className="flex items-center justify-between p-3 rounded-xl hover:bg-[#F1F3F5]/80">
                <Link
                  to="/quality"
                  className="text-sm font-bold text-[#12151A]"
                  onClick={() => setMenuOpen(false)}
                >
                  Quality & Trust
                </Link>
                <button
                  type="button"
                  className="p-1 text-[#8E939D] hover:text-[#12151A]"
                  onClick={() => toggleMobileAccordion("quality")}
                  aria-label="Toggle Quality submenu"
                >
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      mobileExpanded.quality ? "rotate-180 text-[#EC5E27]" : ""
                    }`}
                  />
                </button>
              </div>

              {mobileExpanded.quality && (
                <div className="pl-4 pr-2 pb-2 space-y-2 border-l-2 border-[#EC5E27]/30 ml-4 my-1">
                  <Link
                    to="/quality/security-compliance"
                    className="block text-xs text-[#5F646D] hover:text-[#EC5E27] py-1"
                    onClick={() => setMenuOpen(false)}
                  >
                    • Security & Compliance (ISO 27001, HIPAA BAA)
                  </Link>
                  <Link
                    to="/quality/calibration-framework"
                    className="block text-xs text-[#5F646D] hover:text-[#EC5E27] py-1"
                    onClick={() => setMenuOpen(false)}
                  >
                    • Calibration & QA Framework (Krippendorff's Alpha)
                  </Link>
                </div>
              )}
            </div>

            {/* 5. ABOUT US ACCORDION */}
            <div className="site-mobile-accordion-group">
              <div className="flex items-center justify-between p-3 rounded-xl hover:bg-[#F1F3F5]/80">
                <Link
                  to="/about"
                  className="text-sm font-bold text-[#12151A]"
                  onClick={() => setMenuOpen(false)}
                >
                  About Us
                </Link>
                <button
                  type="button"
                  className="p-1 text-[#8E939D] hover:text-[#12151A]"
                  onClick={() => toggleMobileAccordion("about")}
                  aria-label="Toggle About submenu"
                >
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      mobileExpanded.about ? "rotate-180 text-[#EC5E27]" : ""
                    }`}
                  />
                </button>
              </div>

              {mobileExpanded.about && (
                <div className="pl-4 pr-2 pb-2 space-y-2 border-l-2 border-[#EC5E27]/30 ml-4 my-1">
                  <Link
                    to="/about/company"
                    className="block text-xs text-[#5F646D] hover:text-[#EC5E27] py-1"
                    onClick={() => setMenuOpen(false)}
                  >
                    • Company, Leadership & Labs
                  </Link>
                  <Link
                    to="/about/careers"
                    className="block text-xs text-[#5F646D] hover:text-[#EC5E27] py-1"
                    onClick={() => setMenuOpen(false)}
                  >
                    • Workforce Standards & Ethics
                  </Link>
                </div>
              )}
            </div>
          </nav>

          <div className="site-mobile-footer mt-6">
            <Link
              to="/contact"
              className="button button-crimson w-full text-center justify-center"
              onClick={() => setMenuOpen(false)}
            >
              Discuss a Project <ArrowUpRight size={16} />
            </Link>
            <div className="site-mobile-sublinks mt-4">
              <Link to="/industries" onClick={() => setMenuOpen(false)}>Industries</Link>
              <span>•</span>
              <Link to="/insights" onClick={() => setMenuOpen(false)}>Insights</Link>
              <span>•</span>
              <Link to="/privacy" onClick={() => setMenuOpen(false)}>Privacy</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
