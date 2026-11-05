import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
const serviceLinks = {
    "01": "/services/image-collection",
    "02": "/services/audio-collection",
    "03": "/services/transcription",
    "04": "/services/annotation",
    "05": "/services/multimodal-data",
    "06": "/services/ai-evaluation"
};
export function ServiceCard({ icon: Icon, number, title, description, tags, image, imageAlt }) {
    return (<Link className="service-card" to={serviceLinks[number] ?? "/services"}>
      <div className="service-card-image"><img src={image} alt={imageAlt} loading="lazy"/><span>{number} / CAPABILITY</span></div>
      <div className="service-card-top"><span className="service-icon"><Icon size={23}/></span><span className="service-number">{number}</span></div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tag-list">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      <span className="card-arrow" aria-label="Learn more"><ArrowUpRight size={18}/></span>
    </Link>);
}
