import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock3 } from "lucide-react";
import { articles } from "../lib/content";
export function InsightDetailPage() {
    const { slug } = useParams();
    const article = articles.find((a) => a.slug === slug);
    if (!article) {
        return <Navigate to="/insights" replace/>;
    }
    return (<>
      <section className="article-hero">
        <div className="container article-hero-inner">
          <Link to="/insights" className="back-link"><ArrowLeft size={15}/> All insights</Link>
          <span className="eyebrow">{article.category}</span>
          <h1>{article.title}</h1>
          <p>{article.excerpt}</p>
          <div className="insight-meta">
            {article.date}<span>·</span><Clock3 size={14}/>{article.readTime}
          </div>
        </div>
      </section>

      <div className="container article-cover">
        <img src={article.image} alt={article.imageAlt}/>
      </div>

      <article className="article-body">
        <p className="article-intro">{article.intro}</p>
        {article.sections.map((section) => (<section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((p) => (<p key={p}>{p}</p>))}
          </section>))}
        <aside className="article-takeaway">
          <span className="eyebrow">THE TAKEAWAY</span>
          <p>{article.takeaway}</p>
        </aside>
        <div className="article-end">
          <span>Need help applying this to your workflow?</span>
          <Link className="text-link" to="/contact">Talk to DaQube <ArrowRight size={16}/></Link>
        </div>
      </article>

      <section className="section section-tint">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">KEEP EXPLORING</span>
            <h2>More from the journal.</h2>
          </div>
          <div className="related-article-grid">
            {articles.filter((a) => a.slug !== article.slug).slice(0, 3).map((a) => (<Link className="related-article-card" to={`/insights/${a.slug}`} key={a.slug}>
                <img src={a.image} alt={a.imageAlt}/>
                <div>
                  <span className="eyebrow">{a.category}</span>
                  <h3>{a.title}</h3>
                  <span className="text-link">Read article <ArrowRight size={15}/></span>
                </div>
              </Link>))}
          </div>
        </div>
      </section>
    </>);
}
