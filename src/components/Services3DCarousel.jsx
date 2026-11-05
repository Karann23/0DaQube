import { createPortal } from "react-dom";
import { useState, useRef, useEffect, useCallback } from "react";
import {
  ArrowRight,
  BookOpen,
  LayoutGrid,
  Plus,
  Check,
  X,
  ExternalLink,
  Search,
  Sparkles,
  Layers,
  ShieldCheck,
  Workflow,
  Maximize2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "../lib/content";
import "./Services3DCarousel.css";

const MAX_SERVICES = 8;

export function Services3DCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [showGridModal, setShowGridModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  // Uber-style floating cursor direction and visibility
  const [cursorDirection, setCursorDirection] = useState("right"); // "left" | "right"
  const [isCursorActive, setIsCursorActive] = useState(false);
  const stageRef = useRef(null);
  const cursorRef = useRef(null);

  const items = services.slice(0, MAX_SERVICES);
  const total = items.length;

  const startXRef = useRef(0);
  const startYRef = useRef(0);
  const isPointerDownRef = useRef(false);
  const hasMovedRef = useRef(false);
  const dragOffsetRef = useRef(0);
  const pointerDownTargetRef = useRef(null);

  const nextPage = useCallback(() => {
    setActiveIndex((current) => (current + 1) % total);
  }, [total]);

  const previousPage = useCallback(() => {
    setActiveIndex((current) => (current - 1 + total) % total);
  }, [total]);

  // Open details modal safely (ONLY when clicking dedicated buttons)
  const openDetailsModal = useCallback(() => {
    setShowDetailsModal(true);
  }, []);

  // Track cursor movement & direction across the carousel stage
  const handleStageMouseMove = (e) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const isRight = x >= rect.width / 2;

    setCursorDirection(isRight ? "right" : "left");

    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;

      // Hide custom arrow when hovering over clickable buttons / links
      const isInteractive = Boolean(
        e.target.closest("a, button, input, .book-explore-btn, .journal-topbar, .journal-floating-dock, .topbar-btn, .search-clear-btn")
      );
      cursorRef.current.style.opacity = isInteractive ? "0" : "1";
      cursorRef.current.style.visibility = isInteractive ? "hidden" : "visible";
    }
  };

  const handleStageMouseEnter = () => {
    setIsCursorActive(true);
  };

  const handleStageMouseLeave = () => {
    setIsCursorActive(false);
  };

  // Pointer drag gestures
  const handlePointerDown = (e) => {
    if (e.target.closest("a, button, input")) return;

    startXRef.current = e.clientX;
    startYRef.current = e.clientY;
    pointerDownTargetRef.current = e.target;
    isPointerDownRef.current = true;
    hasMovedRef.current = false;
    dragOffsetRef.current = 0;
  };

  const handlePointerMove = (e) => {
    if (!isPointerDownRef.current) return;

    const deltaX = e.clientX - startXRef.current;
    const deltaY = e.clientY - startYRef.current;

    if (!hasMovedRef.current) {
      if (Math.abs(deltaX) > 6 && Math.abs(deltaX) > Math.abs(deltaY)) {
        hasMovedRef.current = true;
        setIsDragging(true);
        try {
          e.currentTarget.setPointerCapture(e.pointerId);
        } catch {
          // ignore
        }
      }
    }

    if (hasMovedRef.current) {
      dragOffsetRef.current = deltaX;
      setDragOffset(deltaX);
    }
  };

  const handlePointerUp = (e) => {
    if (!isPointerDownRef.current) return;
    isPointerDownRef.current = false;

    const wasDragging = hasMovedRef.current;
    hasMovedRef.current = false;
    setIsDragging(false);

    try {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch {
      // ignore
    }

    const delta = dragOffsetRef.current;
    setDragOffset(0);
    dragOffsetRef.current = 0;

    // If it was a real drag, check page change threshold
    if (wasDragging) {
      const threshold = 60;
      if (delta > threshold) {
        previousPage();
      } else if (delta < -threshold) {
        nextPage();
      }
      return;
    }

    // IF IT WAS A TAP / CLICK (not dragged):
    const target = pointerDownTargetRef.current;
    if (!target) return;

    // If clicked on an interactive button/link, let it do its job
    if (target.closest("a, button, input, .book-explore-btn, .topbar-btn, .dock-action-btn"))
      return;

    // CLICK ANYWHERE ON THE SIDE CHANGES TO NEXT OR PREVIOUS (DOES NOT OPEN POPUP):
    const rect = stageRef.current ? stageRef.current.getBoundingClientRect() : null;
    const clickX = rect ? (e.clientX - rect.left) : e.clientX;
    const isRightSide = rect ? (clickX >= rect.width / 2) : (e.clientX >= window.innerWidth / 2);

    if (isRightSide) {
      nextPage();
    } else {
      previousPage();
    }
  };

  // Keyboard navigation & Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShowDetailsModal(false);
        setShowGridModal(false);
        setShowSearch(false);
        return;
      }
      if (showGridModal || showDetailsModal || showSearch) return;

      if (e.key === "ArrowLeft") {
        previousPage();
      } else if (e.key === "ArrowRight") {
        nextPage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [previousPage, nextPage, showGridModal, showDetailsModal, showSearch]);

  if (!total) return null;

  const currentService = items[activeIndex];

  // Clean category tag without number prefixes
  const cleanCategory = (text) => text.replace(/^\d+\s*\/\s*/, "").trim();

  // Filtered services for search
  const filteredServices = items.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.short.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="journal-section">
      {/* BACKGROUND GLOW ACCENTS */}
      <div className="journal-ambient-glow" />
      <div className="journal-ambient-grid" />

      {/* TOP HEADER */}
      <header className="journal-topbar">
        {/* LEFT ICONS */}
        <div className="journal-topbar-left">
          <button
            type="button"
            className="topbar-btn"
            title="Book View"
            aria-label="Book view"
          >
            <BookOpen size={18} />
          </button>
          <button
            type="button"
            className="topbar-btn"
            title="Overview Grid"
            aria-label="Overview grid"
            onClick={() => setShowGridModal(true)}
          >
            <LayoutGrid size={18} />
          </button>
        </div>

        {/* CENTER TITLE */}
        <div className="journal-topbar-center">
          <h2 className="journal-main-title">Services</h2>
        </div>

        {/* RIGHT ICONS */}
        <div className="journal-topbar-right">
          <button
            type="button"
            className={`topbar-btn ${showSearch ? "is-active" : ""}`}
            title="Search Services"
            aria-label="Search services"
            onClick={() => setShowSearch(!showSearch)}
          >
            <Search size={18} />
          </button>
        </div>
      </header>

      {/* SEARCH DROPDOWN */}
      {showSearch && (
        <div className="journal-search-drawer">
          <div className="journal-search-box">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search services, e.g. computer vision, audio, annotation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            {searchQuery && (
              <button
                type="button"
                className="search-clear-btn"
                onClick={() => setSearchQuery("")}
              >
                <X size={14} />
              </button>
            )}
          </div>

          {searchQuery && (
            <div className="journal-search-results">
              {filteredServices.map((service) => {
                const sIndex = items.findIndex((s) => s.slug === service.slug);
                return (
                  <button
                    key={service.slug}
                    type="button"
                    className="journal-search-item"
                    onClick={() => {
                      setActiveIndex(sIndex);
                      setShowSearch(false);
                      setSearchQuery("");
                    }}
                  >
                    <img src={service.image} alt={service.title} />
                    <div>
                      <strong>{service.title}</strong>
                      <span>{cleanCategory(service.eyebrow)}</span>
                    </div>
                  </button>
                );
              })}
              {filteredServices.length === 0 && (
                <div className="journal-search-empty">
                  No services found matching "{searchQuery}"
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* SUBTITLE */}
      <div className="journal-sub-heading">
        <p>
          Explore our specialized data and AI capabilities through an interactive 3D experience.
        </p>
      </div>

      {/* 3D CYLINDRICAL STAGE */}
      <div
        ref={stageRef}
        onMouseMove={handleStageMouseMove}
        onMouseEnter={handleStageMouseEnter}
        onMouseLeave={handleStageMouseLeave}
        className={`journal-stage ${isDragging ? "is-dragging" : ""} ${showGridModal ? "is-modal-open" : ""}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {/* UBER-STYLE FLOATING CURSOR ARROW (points left or right following mouse) */}
        <div
          ref={cursorRef}
          className={`uber-floating-cursor ${isCursorActive && !showGridModal ? "is-visible" : ""} ${cursorDirection === "left" ? "direction-left" : "direction-right"}`}
          aria-hidden="true"
        >
          <svg
            className="uber-cursor-svg"
            viewBox="0 0 54 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 14H48M36 2L48 14L36 26"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* FLOOR SHADOW */}
        <div className="journal-stage-shadow" />

        {/* 3D CAROUSEL CONTAINER */}
        <div className="journal-wheel">
          {items.map((service, index) => {
            let diff = index - activeIndex;
            while (diff > total / 2) diff -= total;
            while (diff < -total / 2) diff += total;

            const isActive = diff === 0;
            const distance = Math.abs(diff);
            const direction = diff < 0 ? -1 : 1;

            // Compute 3D transformation values
            let translateX = 0;
            let translateZ = 0;
            let rotateY = 0;
            let scale = 1;
            let opacity = 1;
            let zIndex = 50;

            if (isActive) {
              translateX = dragOffset * 0.75;
              translateZ = 85;
              rotateY = Math.max(-12, Math.min(12, dragOffset * -0.035));
              scale = 1;
              opacity = 1;
              zIndex = 50;
            } else {
              const baseOffset = 310;
              const spacingStep = 80;
              const zStep = 70;
              const rotStep = 7.5;

              translateX =
                direction * (baseOffset + (distance - 1) * spacingStep) +
                dragOffset * 0.45;
              translateZ = -(50 + (distance - 1) * zStep);
              rotateY = -direction * (22 + (distance - 1) * rotStep);
              scale = Math.max(0.7, 0.96 - distance * 0.065);
              opacity = Math.max(0.48, 1 - distance * 0.13);
              zIndex = 50 - distance * 5;
            }

            return (
              <article
                key={service.slug}
                className={`journal-card ${
                  isActive ? "is-active" : "is-stacked"
                }`}
                style={{
                  transform: `translate(-50%, -50%) translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity,
                  zIndex,
                }}
                onClick={() => {
                  if (!isDragging && !isActive) {
                    setActiveIndex(index);
                  }
                }}
              >
                {isActive ? (
                  /* =========================================
                     ACTIVE CARD: OPEN 2-PAGE SPREAD
                     ========================================= */
                  <div
                    className="book-spread book-spread-clickable"
                    role="region"
                    aria-label={`${service.title} details`}
                  >
                    {/* LEFT PAGE - IMMERSIVE PHOTO COLLAGE */}
                    <div className="book-page book-page-left">
                      <div className="book-left-header">
                        <span className="book-badge-pill">
                          <span className="badge-dot" />
                          {cleanCategory(service.eyebrow)}
                        </span>
                      </div>

                      <div className="book-photo-collage">
                        <img
                          src={service.image}
                          alt={service.imageAlt || service.title}
                          className="book-page-image"
                          draggable={false}
                        />
                        <div className="book-page-overlay" />
                      </div>
                    </div>

                    {/* SPINE SEAM / 3D HINGE */}
                    <div className="book-spine-seam">
                      <div className="spine-seam-shadow" />
                      <div className="spine-seam-line" />
                    </div>

                    {/* RIGHT PAGE - SERVICE SPEC & DETAILS */}
                    <div className="book-page book-page-right">
                      <div className="book-right-header">
                        <span className="book-category-tag">
                          {cleanCategory(service.eyebrow)}
                        </span>
                      </div>

                      <h3 className="book-right-title">{service.title}</h3>

                      <p className="book-right-desc">{service.short}</p>

                      {/* KEY DELIVERABLES */}
                      <div className="book-deliverables-box">
                        <span className="deliverables-label">
                          KEY DELIVERABLES
                        </span>
                        <div className="deliverables-tags">
                          {service.deliverables.slice(0, 3).map((item, i) => (
                            <span key={i} className="deliverable-tag">
                              <Check size={12} className="tag-check" />
                              <span>{item}</span>
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* ACTION BUTTON: ONLY CLICKING THIS OPENS SERVICE PAGE */}
                      <div className="book-action-row">
                        <Link
                          to={`/services/${service.slug}`}
                          className="book-explore-btn"
                          tabIndex={isActive ? 0 : -1}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>EXPLORE SERVICE</span>
                          <ArrowRight size={16} />
                        </Link>
                      </div>

                      {/* SUBTLE PAGE CORNER FOLDOUT */}
                      <div className="book-corner-curl" />
                    </div>
                  </div>
                ) : (
                  /* =========================================
                     INACTIVE CARD: STACKED JOURNAL PAGE
                     ========================================= */
                  <div className="stacked-card-view">
                    <img
                      className="stacked-card-img"
                      src={service.image}
                      alt={service.imageAlt || service.title}
                      draggable={false}
                    />
                    <div className="stacked-card-gradient" />

                    <div className="stacked-card-info">
                      <h4 className="stacked-card-title">{service.title}</h4>
                      <span className="stacked-card-eyebrow">
                        {cleanCategory(service.eyebrow)}
                      </span>
                    </div>

                    {/* Paper edge lines on the exposed edge */}
                    <div
                      className={`stacked-paper-edge ${
                        direction < 0 ? "edge-left" : "edge-right"
                      }`}
                    />

                    <div className="stacked-hover-hint">
                      <span>Click to view</span>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>

      {/* FLOATING ACTION DOCK */}
      <div className="journal-floating-dock">
        <button
          type="button"
          className="dock-action-btn"
          title="All Services Grid"
          aria-label="All services grid"
          onClick={() => setShowGridModal(true)}
        >
          <LayoutGrid size={18} />
        </button>

        <Link
          to="/contact"
          className="dock-action-btn dock-btn-primary"
          title="Scope a Project"
          aria-label="Scope a project"
        >
          <Plus size={20} />
        </Link>
      </div>

      {/* OVERVIEW GRID MODAL (PORTALED DIRECTLY TO DOCUMENT.BODY) */}
      {showGridModal &&
        createPortal(
          <div
            className="journal-modal-backdrop"
            onClick={() => setShowGridModal(false)}
          >
            <div
              className="journal-grid-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid-modal-header">
                <div>
                  <span className="eyebrow eyebrow-light">ALL CAPABILITIES</span>
                  <h3>All Services Overview</h3>
                  <p>Select any capability to inspect its 3D interactive spread.</p>
                </div>
                <button
                  type="button"
                  className="grid-modal-close"
                  onClick={() => setShowGridModal(false)}
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="grid-modal-cards">
                {items.map((service, index) => (
                  <div
                    key={service.slug}
                    className={`grid-modal-card ${index === activeIndex ? "is-current" : ""}`}
                    onClick={() => {
                      setActiveIndex(index);
                      setShowGridModal(false);
                    }}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="grid-card-thumb">
                      <img src={service.image} alt={service.title} />
                    </div>
                    <div className="grid-card-meta">
                      <span className="grid-card-eyebrow">
                        {cleanCategory(service.eyebrow)}
                      </span>
                      <h4>{service.title}</h4>
                      <p>{service.short}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}