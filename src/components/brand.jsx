import { Link } from "react-router-dom";

/**
 * Official DaQube SVG Brand Logo
 * Vector assets derived from company brand guidelines (DRAFT 2).
 * Formatted with #EC5E27 electric crimson accent and #12151A dark charcoal typography.
 */
export function Brand({
  dark = false,
  asLink = false,
  className = "",
  height = 36,
  alt = "DaQube — The Data Behind Intelligence",
}) {
  const logoSrc = dark
    ? "/images/logos/daqube-logo-dark.svg"
    : "/images/logos/daqube-logo.svg";

  const content = (
    <span
      className={`site-brand-logo inline-flex items-center transition-transform duration-200 hover:opacity-95 ${className}`}
    >
      <img
        src={logoSrc}
        alt={alt}
        className="brand-logo-img block select-none"
        style={{
          "--logo-height": `${height}px`,
        }}
        loading="eager"
        decoding="async"
      />
    </span>
  );

  if (asLink) {
    return (
      <Link
        to="/"
        aria-label="DaQube home"
        className="inline-flex items-center text-decoration-none focus:outline-none"
      >
        {content}
      </Link>
    );
  }
  return content;
}

export default Brand;
