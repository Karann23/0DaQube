import { Camera, Scan } from "lucide-react";

export function ImagePlaceholder({
  aspect = "16/9",
  label = "IMAGE ASSET SPACE",
  caption = "Raw Sensor Frame / Ground-Truth Visualization",
  specs = "1920 × 1080 · 60 FPS · Calibrated Asset",
  className = "",
}) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border border-[#E2E8F0] bg-gradient-to-br from-[#F8FAFC] via-[#FFF8F4] to-[#EEF2F6] p-4 flex flex-col justify-between shadow-inner ${className}`}
      style={{ aspectRatio: aspect }}
      role="img"
      aria-label={`${label} — ${caption}`}
    >
      {/* Subtle architectural dot/grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "radial-gradient(#CBD5E1 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
        aria-hidden="true"
      />

      {/* Corner crosshairs */}
      <span className="pointer-events-none absolute top-2.5 left-2.5 h-3 w-3 border-t-2 border-l-2 border-[#EC5E27]/45 rounded-tl" aria-hidden="true" />
      <span className="pointer-events-none absolute top-2.5 right-2.5 h-3 w-3 border-t-2 border-r-2 border-[#0EA5E9]/45 rounded-tr" aria-hidden="true" />
      <span className="pointer-events-none absolute bottom-2.5 left-2.5 h-3 w-3 border-b-2 border-l-2 border-[#0EA5E9]/45 rounded-bl" aria-hidden="true" />
      <span className="pointer-events-none absolute bottom-2.5 right-2.5 h-3 w-3 border-b-2 border-r-2 border-[#EC5E27]/45 rounded-br" aria-hidden="true" />

      {/* Top technical spec badge */}
      <div className="relative z-10 inline-flex items-center gap-1.5 self-start rounded-full border border-[#E2E8F0] bg-white/90 px-2.5 py-1 text-[10px] font-mono font-semibold text-[#475569] shadow-xs">
        <Scan size={12} className="text-[#EC5E27] shrink-0" />
        <span className="truncate max-w-[260px] sm:max-w-none">{specs}</span>
      </div>

      {/* Center Icon & Label */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center px-3 py-4 text-center">
        <div className="mb-2.5 flex h-11 w-11 items-center justify-center rounded-xl border border-[#EC5E27]/25 bg-[#FFF3ED] text-[#EC5E27] shadow-xs">
          <Camera size={20} strokeWidth={1.8} />
        </div>
        <div className="font-mono text-[11px] font-bold tracking-wider text-[#12151A] line-clamp-2">
          {label}
        </div>
        <div className="mt-0.5 text-[11px] text-[#64748B]">
          Technical Ground-Truth Blueprint
        </div>
      </div>

      {/* Bottom status bar */}
      <div className="relative z-10 flex items-center gap-2 rounded-lg border border-[#E2E8F0]/80 bg-white/80 px-2.5 py-1.5 text-[11px] text-[#475569]">
        <span className="h-2 w-2 rounded-full bg-[#10B981] shrink-0" />
        <span className="truncate">{caption}</span>
      </div>
    </div>
  );
}

export default ImagePlaceholder;
