import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Clock3, BookOpen, Sparkles, Filter } from "lucide-react";
import { articles } from "../lib/content";
import { ThreeDTiltCard } from "../components/ThreeDVisualizers";

const categories = ["All Articles", "DATA STRATEGY", "ANNOTATION", "AUDIO & SPEECH", "AI EVALUATION"];

export function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("All Articles");

  const filteredArticles = activeCategory === "All Articles"
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="page-hero page-hero-dark">
        <div className="container">
          <span className="eyebrow eyebrow-light">
             THE DAQUBE RESEARCH JOURNAL
          </span>
          <h1>
            Engineering Principles for<br />
            <span>High-Performing AI Data.</span>
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-[#CBD5E1] leading-relaxed mt-4 mb-8">
            Technical guides, mathematical consensus formulas, and empirical research on dataset coverage, RLHF rubrics, acoustic forced alignment, and 3D perception ground truth.
          </p>

          <div className="hero-actions">
            <Link className="button button-crimson" to="/contact">
              Discuss With Authors <ArrowUpRight size={17} />
            </Link>
            <a className="text-link text-link-light" href="#journal-grid">
              Read Research Articles <ArrowRight size={16} />
            </a>
          </div>
        </div>
        <div className="page-hero-glow" />
      </section>

      {/* Main Grid */}
      <section id="journal-grid" className="section section-white">
        <div className="container">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#F1F3F5]">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#8E939D] mr-2">
              <Filter size={14} /> FILTER BY TOPIC:
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-[#12151A] text-white shadow-sm"
                    : "bg-[#F1F3F5] text-[#5F646D] hover:text-[#12151A] hover:bg-[#E9ECEF]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="insight-grid">
            {filteredArticles.map((article, i) => (
              <ThreeDTiltCard key={article.slug} maxTilt={6}>
                <Link to={`/insights/${article.slug}`} className="insight-card">
                  <div className="insight-image">
                    <img src={article.image} alt={article.imageAlt} loading="eager" decoding="async" />
                    <span>{article.category}</span>
                  </div>
                  <div className="insight-card-copy">
                    <div className="insight-meta">
                      {article.date} <span>·</span> <Clock3 size={13} /> {article.readTime}
                    </div>
                    <h2>{article.title}</h2>
                    <p>{article.excerpt}</p>
                    <span className="text-link">
                      Read Technical Article <ArrowRight size={15} />
                    </span>
                  </div>
                </Link>
              </ThreeDTiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Journal CTA */}
      <section className="section section-tint">
        <div className="container detail-cta">
          <div>
            <span className="eyebrow">PUT THE IDEAS TO WORK</span>
            <h2>Have a dataset challenge to solve?</h2>
            <p>Tell us what you're building and where your data workflow needs support.</p>
          </div>
          <Link to="/contact" className="button button-crimson">
            Discuss a Project <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}

export default InsightsPage;
