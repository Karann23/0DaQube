import { useState, useRef, useEffect } from "react";
import { Cpu, ShieldCheck, Radio, Sparkles, Layers, Box, CheckCircle2, ChevronRight, Zap } from "lucide-react";

/**
 * 1. ThreeDTiltCard
 * Pure hardware-accelerated 3D perspective tilt on desktop with iridescent glare.
 * Touch-friendly ambient float on mobile.
 */
export function ThreeDTiltCard({ children, className = "", maxTilt = 12, glare = true, style = {} }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({ x: rotateX, y: rotateY, glareX, glareY, opacity: 0.25 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50, opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden transition-all duration-200 ease-out ${className}`}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-4px) scale3d(1.01, 1.01, 1.01)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale3d(1, 1, 1)",
        transformStyle: "preserve-3d",
        WebkitTransformStyle: "preserve-3d",
        WebkitBackfaceVisibility: "hidden",
        backfaceVisibility: "hidden",
        willChange: "transform",
        ...style
      }}
    >
      {glare && isHovered && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px z-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 250px at ${tilt.glareX}% ${tilt.glareY}%, rgba(255, 255, 255, 0.22), transparent 80%)`,
            opacity: tilt.opacity
          }}
        />
      )}
      {children}
    </div>
  );
}

/**
 * 2. ThreeDLidarRadar
 * Real-time 3D sensor simulation with sweep beam, point cloud nodes, and 3D bounding cuboid.
 * Designed for Computer Vision, Autonomous Mobility & ADAS pages.
 */
export function ThreeDLidarRadar({ label = "128-BEAM SPATIAL LIDAR SENSOR FUSION" }) {
  const [activeReturn, setActiveReturn] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReturn((prev) => (prev + 1) % 4);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  const targets = [
    { id: "VEHICLE_PRIMARY", dist: "18.4m", conf: "99.8%", iou: "0.94", cls: "Sedan" },
    { id: "PEDESTRIAN_CROSSING", dist: "8.2m", conf: "98.9%", iou: "0.91", cls: "Vulnerable User" },
    { id: "CYCLIST_ADJACENT", dist: "14.1m", conf: "99.2%", iou: "0.93", cls: "Cyclist" },
    { id: "ROAD_CURB_EDGE", dist: "3.7m", conf: "99.9%", iou: "0.97", cls: "Curb Polyline" }
  ];

  return (
    <div className="relative rounded-2xl bg-[#090C10] p-6 border border-[#21262D] shadow-2xl overflow-hidden font-mono text-white">
      {/* Top Header Strip */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-[#21262D]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
          <span className="text-xs uppercase tracking-wider text-[#A1A7B1] font-bold">{label}</span>
        </div>
        <div className="flex items-center gap-4 text-[11px] text-[#7D8590]">
          <span>FREQ: 20 Hz</span>
          <span>CHANNELS: 128</span>
          <span className="text-[#EC5E27] font-semibold">TOLERANCE: &lt; 5cm</span>
        </div>
      </div>

      {/* 3D Isometric Radar & Cuboid Arena */}
      <div className="relative h-64 md:h-72 w-full flex items-center justify-center overflow-hidden rounded-xl bg-[#05070A] border border-[#161B22]">
        {/* Radar Concentric Rings */}
        <div className="absolute w-52 h-52 rounded-full border border-[#21262D]/60" />
        <div className="absolute w-36 h-36 rounded-full border border-[#21262D]/70" />
        <div className="absolute w-20 h-20 rounded-full border border-[#EC5E27]/30" />

        {/* Crosshair Axes */}
        <div className="absolute w-full h-px bg-[#21262D]/40" />
        <div className="absolute h-full w-px bg-[#21262D]/40" />

        {/* Rotating Radar Sweep Laser */}
        <div
          className="absolute w-52 h-52 rounded-full pointer-events-none"
          style={{
            background: "conic-gradient(from 0deg, rgba(236, 94, 39, 0.45) 0deg, transparent 60deg, transparent 360deg)",
            animation: "radarSpin 4s linear infinite"
          }}
        />

        {/* 3D Wireframe Bounding Box Demonstration */}
        <div
          className="relative z-10 p-4 rounded-lg bg-[#0F141C]/80 border border-[#EC5E27] shadow-[0_0_20px_rgba(236,94,39,0.3)] backdrop-blur-md"
          style={{
            transform: "perspective(600px) rotateX(16deg) rotateY(-18deg)",
            transformStyle: "preserve-3d"
          }}
        >
          <div className="flex items-center justify-between gap-4 mb-2">
            <span className="text-[10px] font-bold text-[#EC5E27] uppercase tracking-wider">
              [CUBOID_ID: #{targets[activeReturn].id}]
            </span>
            <span className="text-[10px] text-[#10B981] font-bold">IoU: {targets[activeReturn].iou}</span>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[11px] text-[#CBD5E1]">
            <div>CLASS: <strong className="text-white">{targets[activeReturn].cls}</strong></div>
            <div>DIST: <strong className="text-[#EC5E27]">{targets[activeReturn].dist}</strong></div>
            <div>CONF: <strong className="text-white">{targets[activeReturn].conf}</strong></div>
            <div>FRAME: <strong className="text-[#A1A7B1]">#10,482</strong></div>
          </div>

          <div className="mt-3 pt-2 border-t border-[#21262D] flex items-center justify-between text-[10px] text-[#7D8590]">
            <span>X: +4.82m | Y: -1.24m | Z: +0.65m</span>
            <span className="text-[#10B981] flex items-center gap-1">
              <CheckCircle2 size={11} /> 9-DoF Calibrated
            </span>
          </div>
        </div>

        {/* Ambient Point Cloud Particle Scatter */}
        <div className="absolute top-12 left-16 w-1.5 h-1.5 rounded-full bg-[#EC5E27] shadow-[0_0_8px_#EC5E27] animate-ping" />
        <div className="absolute bottom-16 right-20 w-1.5 h-1.5 rounded-full bg-[#38BDF8] shadow-[0_0_8px_#38BDF8]" />
        <div className="absolute top-24 right-14 w-1 h-1 rounded-full bg-[#A855F7]" />
        <div className="absolute bottom-10 left-28 w-1 h-1 rounded-full bg-[#E2E8F0]" />
      </div>

      {/* Target Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
        {targets.map((tgt, i) => (
          <button
            key={tgt.id}
            type="button"
            onClick={() => setActiveReturn(i)}
            className={`p-2.5 rounded-xl text-left border text-xs transition-all ${
              activeReturn === i
                ? "bg-[#161B22] border-[#EC5E27] text-white shadow-sm"
                : "bg-[#0B0E14] border-[#21262D] text-[#7D8590] hover:text-[#CBD5E1]"
            }`}
          >
            <div className="font-bold text-[11px] truncate">{tgt.cls}</div>
            <div className="text-[10px] text-[#EC5E27] mt-0.5">{tgt.dist} · IoU {tgt.iou}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

/**
 * 3. ThreeDAudioVisualizer
 * Real-time 3D animated acoustic spectrogram and waveform visualizer.
 * Designed for Speech, ASR & Expressive TTS pages.
 */
export function ThreeDAudioVisualizer({ title = "ACOUSTIC SPECTROGRAM & PHONETIC TEXTGRID" }) {
  const [isPlaying, setIsPlaying] = useState(true);

  const phonemes = [
    { sym: "d", dur: "45ms", time: "0.00 - 0.04s" },
    { sym: "ə", dur: "65ms", time: "0.04 - 0.10s" },
    { sym: "k", dur: "55ms", time: "0.10 - 0.16s" },
    { sym: "j", dur: "35ms", time: "0.16 - 0.19s" },
    { sym: "uː", dur: "110ms", time: "0.19 - 0.30s" },
    { sym: "b", dur: "50ms", time: "0.30 - 0.35s" }
  ];

  return (
    <div className="rounded-2xl bg-[#090C10] p-6 border border-[#21262D] shadow-2xl font-mono text-white">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-[#21262D]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#EC5E27] animate-pulse" />
          <span className="text-xs uppercase tracking-wider text-[#A1A7B1] font-bold">{title}</span>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-[#7D8590]">
          <span>48kHz 24-bit PCM</span>
          <span>SNR: &gt; 42 dBFS</span>
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="px-2 py-0.5 rounded bg-[#161B22] border border-[#21262D] text-[#EC5E27] text-xs font-semibold hover:border-[#EC5E27]"
          >
            {isPlaying ? "PAUSE HARMONICS" : "RESUME HARMONICS"}
          </button>
        </div>
      </div>

      {/* 3D Waveform Spectrum Canvas */}
      <div className="relative h-44 w-full rounded-xl bg-[#05070A] border border-[#161B22] p-4 flex items-end justify-between gap-1 overflow-hidden">
        {/* Dynamic Waveform Bars */}
        {Array.from({ length: 32 }).map((_, idx) => {
          const heightPercent = isPlaying
            ? Math.sin(idx * 0.45) * 35 + 50 + (idx % 3) * 6
            : 30 + (idx % 4) * 8;
          return (
            <div
              key={idx}
              className="w-full rounded-t transition-all duration-300"
              style={{
                height: `${Math.min(95, Math.max(12, heightPercent))}%`,
                background:
                  idx > 12 && idx < 22
                    ? "linear-gradient(180deg, #EC5E27 0%, #FF8A50 100%)"
                    : "linear-gradient(180deg, rgba(236,94,39,0.5) 0%, rgba(56,189,248,0.3) 100%)",
                boxShadow: idx > 12 && idx < 22 ? "0 0 10px rgba(236,94,39,0.4)" : "none"
              }}
            />
          );
        })}

        {/* Pitch Contour Line */}
        <div className="absolute top-8 left-4 right-4 h-px border-b border-dashed border-[#38BDF8]/60 pointer-events-none flex items-center justify-between text-[9px] text-[#38BDF8]">
          <span>F0 PITCH CONTOUR: 142 Hz</span>
          <span>JITTER: 0.12%</span>
        </div>
      </div>

      {/* Praat TextGrid Alignment Slice */}
      <div className="mt-4">
        <div className="text-[10px] text-[#7D8590] uppercase tracking-wider mb-1.5 flex items-center justify-between">
          <span>PRAAT TEXTGRID PHONETIC TIERS (SUB-10MS TIME ALIGNMENT)</span>
          <span className="text-[#10B981]">100% Manual Gold Verification</span>
        </div>
        <div className="grid grid-cols-6 gap-1 bg-[#05070A] p-1.5 rounded-lg border border-[#161B22]">
          {phonemes.map((ph, idx) => (
            <div
              key={idx}
              className="p-2 rounded bg-[#10141C] border border-[#21262D] text-center hover:border-[#EC5E27] transition-all"
            >
              <div className="text-sm font-bold text-[#EC5E27]">/{ph.sym}/</div>
              <div className="text-[9px] text-[#A1A7B1] mt-0.5">{ph.dur}</div>
              <div className="text-[8px] text-[#7D8590] truncate">{ph.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * 4. ThreeDNeuralMatrix
 * Interactive RLHF / DPO Preference Alignment Node.
 * Designed for Generative AI, Alignment & Red Teaming pages.
 */
export function ThreeDNeuralMatrix() {
  const [activePrompt, setActivePrompt] = useState(0);

  const prompts = [
    {
      title: "Differential Diagnosis Reasoning (Clinical AI)",
      prompt: "A 45-year-old presents with acute pleuritic chest pain and dyspnea post-flight. Formulate differential with explicit risk stratification.",
      chosen: {
        score: "+1.84 Reward",
        reason: "Grounds pulmonary embolism (Wells Score = 6.0) as highest pre-test probability, orders CT pulmonary angiogram, rules out tension pneumothorax with explicit rationale."
      },
      rejected: {
        score: "-1.42 Penalty",
        reason: "Generic advice without clinical risk score, suggests OTC ibuprofen before ruling out life-threatening pulmonary thromboembolism."
      }
    },
    {
      title: "Zero-Knowledge Proof Implementation (Cryptographic Systems)",
      prompt: "Write a Circom circuit verifying knowledge of private key without revealing signature bytes.",
      chosen: {
        score: "+2.12 Reward",
        reason: "Includes sound constraint generation (R1CS), handles underflow edge cases, includes unit test with snarkjs verification harness."
      },
      rejected: {
        score: "-1.95 Penalty",
        reason: "Unconstrained signal leading to malicious proof spoofing, missing nullifier checks."
      }
    }
  ];

  return (
    <div className="rounded-2xl bg-[#090C10] p-6 border border-[#21262D] shadow-2xl font-mono text-white">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-[#21262D]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#A855F7] animate-pulse" />
          <span className="text-xs uppercase tracking-wider text-[#A1A7B1] font-bold">
            DIRECT PREFERENCE OPTIMIZATION (DPO) HARNESS
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-[#7D8590]">
          <span>TIER-4 DOMAIN AUDITORS</span>
          <span className="text-[#10B981]">KRIPPENDORFF'S α: 0.91</span>
        </div>
      </div>

      {/* Prompt Selector */}
      <div className="flex gap-2 mb-4">
        {prompts.map((p, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActivePrompt(idx)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activePrompt === idx
                ? "bg-[#EC5E27] text-white"
                : "bg-[#161B22] text-[#A1A7B1] hover:text-white"
            }`}
          >
            Example #{idx + 1}: {p.title}
          </button>
        ))}
      </div>

      {/* Prompt Box */}
      <div className="p-3 rounded-xl bg-[#05070A] border border-[#161B22] text-xs text-[#E2E8F0] mb-4">
        <span className="text-[#EC5E27] font-bold uppercase tracking-wider block text-[10px] mb-1">
          INSTRUCTION PROMPT:
        </span>
        "{prompts[activePrompt].prompt}"
      </div>

      {/* Pairwise Chosen vs Rejected Split */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Chosen Candidate */}
        <div className="p-4 rounded-xl bg-[#071610] border border-[#10B981]/50 relative">
          <div className="flex items-center justify-between mb-2">
            <span className="px-2 py-0.5 rounded bg-[#10B981]/20 text-[#10B981] font-bold text-[10px] tracking-wider uppercase">
              PREFERRED CANDIDATE (Y_w)
            </span>
            <span className="text-xs font-bold text-[#10B981]">
              {prompts[activePrompt].chosen.score}
            </span>
          </div>
          <p className="text-xs text-[#CBD5E1] leading-relaxed">
            {prompts[activePrompt].chosen.reason}
          </p>
          <div className="mt-3 pt-2 border-t border-[#10B981]/20 text-[10px] text-[#10B981] flex items-center gap-1 font-bold">
            <CheckCircle2 size={12} /> Accepted into Frontier SFT Training Matrix
          </div>
        </div>

        {/* Rejected Candidate */}
        <div className="p-4 rounded-xl bg-[#1A0B0B] border border-[#EF4444]/50 relative">
          <div className="flex items-center justify-between mb-2">
            <span className="px-2 py-0.5 rounded bg-[#EF4444]/20 text-[#EF4444] font-bold text-[10px] tracking-wider uppercase">
              REJECTED CANDIDATE (Y_l)
            </span>
            <span className="text-xs font-bold text-[#EF4444]">
              {prompts[activePrompt].rejected.score}
            </span>
          </div>
          <p className="text-xs text-[#CBD5E1] leading-relaxed">
            {prompts[activePrompt].rejected.reason}
          </p>
          <div className="mt-3 pt-2 border-t border-[#EF4444]/20 text-[10px] text-[#EF4444] font-bold">
            ✗ Negative Loss Gradient Assigned (DPO Penalty)
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 5. ThreeDSecurityEnclave
 * Interactive 3D Cryptographic Enclave & Air-Gapped VDI Cleanroom.
 * Designed for Quality, Trust, Security & Compliance pages.
 */
export function ThreeDSecurityEnclave() {
  return (
    <div className="rounded-2xl bg-[#090C10] p-6 border border-[#21262D] shadow-2xl font-mono text-white">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-[#21262D]">
        <div className="flex items-center gap-2">
          <ShieldCheck size={18} className="text-[#10B981]" />
          <span className="text-xs uppercase tracking-wider text-[#A1A7B1] font-bold">
            AIR-GAPPED CRYPTOGRAPHIC ENCLAVE TOPOLOGY
          </span>
        </div>
        <div className="flex items-center gap-4 text-[11px] text-[#7D8590]">
          <span>ISO 27001 AUDITED</span>
          <span className="text-[#10B981]">HIPAA BAA COMPLIANT</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-[#05070A] border border-[#161B22]">
          <div className="text-[10px] text-[#EC5E27] font-bold uppercase tracking-wider mb-1">
            01 / INGRESS CONTROL
          </div>
          <div className="text-sm font-bold text-white mb-2">Zero-Trust VDI Cleanrooms</div>
          <p className="text-xs text-[#7D8590] leading-relaxed">
            Strict virtual desktop infrastructure with copy/paste disabled, USB ingress blocked, and watermarked session recording.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#05070A] border border-[#161B22]">
          <div className="text-[10px] text-[#EC5E27] font-bold uppercase tracking-wider mb-1">
            02 / ENCRYPTION AT REST
          </div>
          <div className="text-sm font-bold text-white mb-2">FIPS 140-2 Level 3 HSM</div>
          <p className="text-xs text-[#7D8590] leading-relaxed">
            AES-256 GCM cryptographic envelope encryption. Per-client master key rotation and multi-tenant physical partition.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#05070A] border border-[#161B22]">
          <div className="text-[10px] text-[#EC5E27] font-bold uppercase tracking-wider mb-1">
            03 / DATA PURGE SLA
          </div>
          <div className="text-sm font-bold text-white mb-2">Cryptographic Erasure</div>
          <p className="text-xs text-[#7D8590] leading-relaxed">
            DoD 5220.22-M compliant disk scrubbing and certified destruction certificates upon completion of delivery sprints.
          </p>
        </div>
      </div>
    </div>
  );
}
