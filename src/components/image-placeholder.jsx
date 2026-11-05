import { Image as ImageIcon, Camera, Scan, Layers } from "lucide-react";

export function ImagePlaceholder({
  aspect = "16/9",
  label = "IMAGE ASSET SPACE",
  caption = "Raw Sensor Frame / Ground-Truth Visualization",
  specs = "1920 × 1080 · 60 FPS · Calibrated Asset",
  className = ""
}) {
  return (
    <div
      className={`image-space-placeholder ${className}`}
      style={{ aspectRatio: aspect }}
      role="img"
      aria-label={`${label} — ${caption}`}
    >
      {/* Corner crosshairs for technical precision aesthetic */}
      <div className="placeholder-crosshair top-left" aria-hidden="true" />
      <div className="placeholder-crosshair top-right" aria-hidden="true" />
      <div className="placeholder-crosshair bottom-left" aria-hidden="true" />
      <div className="placeholder-crosshair bottom-right" aria-hidden="true" />

      {/* Grid overlay */}
      <div className="placeholder-grid-overlay" aria-hidden="true" />

      {/* Top technical spec badge */}
      <div className="placeholder-top-badge">
        <Scan size={13} className="text-[#EC5E27]" />
        <span>{specs}</span>
      </div>

      {/* Center Icon & Label */}
      <div className="placeholder-center-content">
        <div className="placeholder-icon-ring">
          <Camera size={26} strokeWidth={1.8} className="text-[#EC5E27]" />
        </div>
        <div className="placeholder-title">{label}</div>
        <div className="placeholder-subtitle">High-Resolution Visual Space</div>
      </div>

      {/* Bottom status bar */}
      <div className="placeholder-bottom-bar">
        <span className="placeholder-pulse" />
        <span className="placeholder-caption">{caption}</span>
      </div>
    </div>
  );
}
export default ImagePlaceholder;
