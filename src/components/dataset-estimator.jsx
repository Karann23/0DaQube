import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Calculator,
  Sliders,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Users,
  FileCode2,
  Cpu,
  Zap,
  Activity,
  Layers,
  Camera,
  Video,
  Mic,
  FileText,
  Headphones,
  Crosshair,
  Boxes
} from "lucide-react";

export const ESTIMATOR_MODALITIES = [
  {
    id: "image-collection",
    name: "Image Data Collection",
    subtitle: "Visual perception, retail SKU, optical defect capture",
    unitLabel: "images",
    icon: Camera,
    baseMultiplier: 1.1,
    minVol: 2000,
    maxVol: 250000,
    defaultVol: 25000,
    formats: ["4K RAW / Uncompressed", "COCO Manifest", "YOLO Annotations", "PASCAL VOC", "Parquet"]
  },
  {
    id: "video-collection",
    name: "Video Data Collection",
    subtitle: "High-speed 60/120 FPS, egocentric AR, multi-camera",
    unitLabel: "video clips",
    icon: Video,
    baseMultiplier: 1.4,
    minVol: 500,
    maxVol: 50000,
    defaultVol: 5000,
    formats: ["ProRes / MP4 Genlock", "Timestamp JSON", "Frame Extraction Sets", "Action Manifests"]
  },
  {
    id: "speech-collection",
    name: "Speech Data Collection",
    subtitle: "120+ languages, 1,000+ locales, multi-mic & expressive TTS",
    unitLabel: "recorded hours",
    icon: Mic,
    baseMultiplier: 1.3,
    minVol: 50,
    maxVol: 5000,
    defaultVol: 500,
    formats: ["48kHz / 96kHz Lossless WAV", "Speaker Demographic Manifests", "Prompt Alignment JSON"]
  },
  {
    id: "text-collection",
    name: "Text Data & Labeling",
    subtitle: "Multilingual corpora, table cell OCR, entity parsing",
    unitLabel: "documents / records",
    icon: FileText,
    baseMultiplier: 0.9,
    minVol: 5000,
    maxVol: 500000,
    defaultVol: 50000,
    formats: ["JSONL / HuggingFace", "CoNLL-U / BIO", "Markdown with AST", "Key-Value Trees"]
  },
  {
    id: "annotation",
    name: "Image & Video Annotation",
    subtitle: "Sub-pixel polygon masks, 2D bounding, persistent tracking",
    unitLabel: "labeled assets",
    icon: Layers,
    baseMultiplier: 1.25,
    minVol: 5000,
    maxVol: 300000,
    defaultVol: 30000,
    formats: ["COCO JSON", "YOLO v8/v11", "Mask R-CNN Polygons", "KITTI Formats"]
  },
  {
    id: "transcription",
    name: "Audio Transcription",
    subtitle: "Verbatim ground truth, speaker diarization, Praat tiers",
    unitLabel: "audio hours",
    icon: Headphones,
    baseMultiplier: 1.15,
    minVol: 50,
    maxVol: 5000,
    defaultVol: 400,
    formats: ["Praat TextGrid", "SRT / WebVTT", "Whisper Timestamps", "JSONL Utterances"]
  },
  {
    id: "adas-lidar",
    name: "ADAS & LiDAR Annotation",
    subtitle: "128-beam 3D cuboids, velocity vectors, sensor fusion",
    unitLabel: "point-cloud frames",
    icon: Crosshair,
    baseMultiplier: 1.7,
    minVol: 2000,
    maxVol: 100000,
    defaultVol: 15000,
    formats: ["nuScenes Schema", "Waymo Open Dataset", "KITTI 3D", "PCD / LAS / Rosbag"]
  },
  {
    id: "off-the-shelf",
    name: "Off-the-Shelf AI Datasets",
    subtitle: "Pre-collected commercial speech, vision & ADAS catalogs",
    unitLabel: "catalog packages",
    icon: Boxes,
    baseMultiplier: 0.5,
    minVol: 1,
    maxVol: 25,
    defaultVol: 3,
    formats: ["Commercial License Clearance", "Direct S3 / GCS Sync", "Pre-Validated Gold Slices"]
  }
];

export const CADENCE_OPTIONS = [
  { id: "sprint", name: "Fast-Track Sprint", time: "1 – 2 Weeks", multiplier: 1.35, desc: "Dedicated high-velocity squad with daily rolling deliveries." },
  { id: "standard", name: "Standard Cadence", time: "3 – 4 Weeks", multiplier: 1.0, desc: "Balanced engineering pipeline with bi-weekly calibration milestones." },
  { id: "enterprise", name: "Continuous Pipeline", time: "Quarterly Retainer", multiplier: 0.85, desc: "Dedicated ongoing cleanroom capacity with reserved capacity." }
];

export function DatasetEstimator() {
  const navigate = useNavigate();
  const [selectedModalityId, setSelectedModalityId] = useState("image-collection");
  const [cadenceId, setCadenceId] = useState("standard");

  const currentModality = useMemo(() => {
    return ESTIMATOR_MODALITIES.find((m) => m.id === selectedModalityId) || ESTIMATOR_MODALITIES[0];
  }, [selectedModalityId]);

  const [volume, setVolume] = useState(currentModality.defaultVol);

  // Update volume when modality changes if out of bounds
  const handleModalityChange = (modalityId) => {
    setSelectedModalityId(modalityId);
    const m = ESTIMATOR_MODALITIES.find((x) => x.id === modalityId) || ESTIMATOR_MODALITIES[0];
    setVolume(m.defaultVol);
  };

  const estimate = useMemo(() => {
    const selectedCadence = CADENCE_OPTIONS.find((c) => c.id === cadenceId) || CADENCE_OPTIONS[1];
    
    // Dynamic calculation
    const baseUnitHours = currentModality.baseMultiplier * 0.06;
    const totalHours = Math.max(20, Math.round(volume * baseUnitHours * selectedCadence.multiplier));
    
    // Recommended specialized squad sizing
    const annotatorCount = Math.max(3, Math.ceil(totalHours / 140));
    const qaEngineerCount = Math.max(1, Math.ceil(annotatorCount * 0.22));
    const solutionsLeadCount = 1;
    const totalTeam = annotatorCount + qaEngineerCount + solutionsLeadCount;

    // Weekly ingestion throughput
    const weeksFactor = cadenceId === "sprint" ? 1.5 : cadenceId === "standard" ? 3.5 : 12;
    const weeklyRate = Math.round(volume / weeksFactor);

    return {
      totalHours: totalHours.toLocaleString(),
      totalTeam,
      annotatorCount,
      qaEngineerCount,
      turnaround: selectedCadence.time,
      weeklyRate: weeklyRate.toLocaleString(),
      formats: currentModality.formats
    };
  }, [currentModality, volume, cadenceId]);

  const handleProceedToContact = () => {
    const params = new URLSearchParams({
      service: currentModality.id,
      volume: `${volume.toLocaleString()} ${currentModality.unitLabel}`,
      cadence: cadenceId,
      details: `Configured via DaQube Live Estimation Model: ${volume.toLocaleString()} ${currentModality.unitLabel} under ${currentModality.name}. Cadence: ${estimate.turnaround}. Est. Team: ${estimate.totalTeam} Specialists (~${estimate.totalHours} hrs).`
    });
    navigate(`/contact?${params.toString()}`);
  };

  return (
    <div className="dataset-estimator-card">
      {/* Estimator Header */}
      <div className="estimator-header">
        <div className="flex items-center gap-2.5">
          <span className="w-10 h-10 rounded-xl bg-[rgba(236,94,39,0.12)] text-[#EC5E27] flex items-center justify-center">
            <Calculator size={20} />
          </span>
          <div>
            <h3 className="font-display text-xl font-bold text-[#12151A]">
              Interactive Dataset Scoping Engine
            </h3>
            <p className="text-xs text-[#5F646D]">
              Select a core capability, adjust project volume, and inspect real-time calibrated engineering telemetry.
            </p>
          </div>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F5F5E2] text-[#2D3139]">
          <Activity size={14} className="text-[#EC5E27] animate-pulse" /> Empirical Sizing Model
        </span>
      </div>

      <div className="estimator-grid">
        {/* Left Column: Interactive Inputs */}
        <div className="estimator-controls">
          {/* 1. Core Modality Selection (8 Canonical Capabilities) */}
          <div className="control-group">
            <label className="control-label flex items-center justify-between">
              <span>1. Choose Core Capability</span>
              <span className="text-[11px] font-mono text-[#EC5E27] font-bold">
                8 SPECIALIZED DISCIPLINES
              </span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
              {ESTIMATOR_MODALITIES.map((m) => {
                const IconComponent = m.icon;
                const isSelected = selectedModalityId === m.id;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => handleModalityChange(m.id)}
                    className={`text-left p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-2.5 ${
                      isSelected
                        ? "border-[#EC5E27] bg-[rgba(236,94,39,0.06)] shadow-sm ring-1 ring-[#EC5E27]/40"
                        : "border-[rgba(20,23,26,0.08)] bg-white hover:border-[rgba(20,23,26,0.25)]"
                    }`}
                  >
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                      isSelected ? "bg-[#EC5E27] text-white" : "bg-[#F1F3F5] text-[#5F646D]"
                    }`}>
                      <IconComponent size={15} />
                    </div>
                    <div className="min-w-0">
                      <div className={`font-semibold text-xs truncate ${isSelected ? "text-[#EC5E27]" : "text-[#12151A]"}`}>
                        {m.name}
                      </div>
                      <div className="text-[10.5px] text-[#5F646D] line-clamp-1 mt-0.5">
                        {m.subtitle}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Interactive Volume Slider */}
          <div className="control-group mt-6 p-4 rounded-2xl bg-[#F8FAFC] border border-[rgba(20,23,26,0.06)]">
            <div className="flex justify-between items-center mb-2">
              <label className="control-label !mb-0 font-bold text-xs text-[#12151A]">
                2. Project Volume / Dataset Scale
              </label>
              <div className="flex items-center gap-2">
                <span className="font-mono font-extrabold text-sm text-[#EC5E27] bg-[#FFF3ED] px-2.5 py-0.5 rounded-lg border border-[#EC5E27]/30">
                  {volume.toLocaleString()} {currentModality.unitLabel}
                </span>
              </div>
            </div>

            <input
              type="range"
              min={currentModality.minVol}
              max={currentModality.maxVol}
              step={Math.max(1, Math.round((currentModality.maxVol - currentModality.minVol) / 50))}
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-full accent-[#EC5E27] cursor-pointer mt-1"
            />

            <div className="flex justify-between text-[10.5px] text-[#8E939D] mt-2 font-mono">
              <span>{currentModality.minVol.toLocaleString()} (Pilot Benchmark)</span>
              <span>{Math.round(currentModality.maxVol * 0.5).toLocaleString()} (Production)</span>
              <span>{currentModality.maxVol.toLocaleString()}+ (Enterprise Scale)</span>
            </div>
          </div>

          {/* 3. Delivery Cadence / Engineering Priority */}
          <div className="control-group mt-5">
            <label className="control-label">
              3. Delivery Cadence & Engineering Priority
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-1.5">
              {CADENCE_OPTIONS.map((c) => {
                const isSelected = cadenceId === c.id;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setCadenceId(c.id)}
                    className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? "border-[#EC5E27] bg-[rgba(236,94,39,0.06)] shadow-sm"
                        : "border-[rgba(20,23,26,0.08)] bg-white hover:border-[rgba(20,23,26,0.2)]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`font-semibold text-xs ${isSelected ? "text-[#EC5E27]" : "text-[#12151A]"}`}>
                        {c.name}
                      </span>
                    </div>
                    <div className="font-mono text-[11px] font-bold text-[#EC5E27] mt-1">
                      {c.time}
                    </div>
                    <div className="text-[10px] text-[#5F646D] mt-0.5 leading-snug">
                      {c.desc}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Output: Real-Time Blueprint Card */}
        <div className="estimator-summary">
          <div className="summary-card">
            <div className="flex items-center justify-between pb-3 border-b border-[rgba(20,23,26,0.08)]">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#EC5E27] block">
                  CALIBRATED WORKFLOW BLUEPRINT
                </span>
                <span className="text-xs font-bold text-[#12151A]">
                  {currentModality.name}
                </span>
              </div>
              <span className="flex items-center gap-1 text-[10.5px] text-[#12151A] font-semibold bg-[#F5F5E2] px-2 py-0.5 rounded-full border border-[rgba(20,23,26,0.08)]">
                <ShieldCheck size={13} className="text-[#EC5E27]" /> SLA Guaranteed
              </span>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-3.5 my-4">
              <div className="metric-box">
                <span className="metric-label flex items-center gap-1">
                  <Clock size={12} className="text-[#EC5E27]" /> Delivery Horizon
                </span>
                <span className="metric-val">{estimate.turnaround}</span>
              </div>
              <div className="metric-box">
                <span className="metric-label flex items-center gap-1">
                  <Sparkles size={12} className="text-[#EC5E27]" /> Target Accuracy
                </span>
                <span className="metric-val text-[#EC5E27]">99.8% Ground Truth</span>
              </div>
              <div className="metric-box">
                <span className="metric-label flex items-center gap-1">
                  <Users size={12} className="text-[#EC5E27]" /> Dedicated Squad
                </span>
                <span className="metric-val">{estimate.totalTeam} Specialists</span>
              </div>
              <div className="metric-box">
                <span className="metric-label flex items-center gap-1">
                  <Zap size={12} className="text-[#EC5E27]" /> Est. Engineering Effort
                </span>
                <span className="metric-val">~{estimate.totalHours} hrs</span>
              </div>
            </div>

            {/* Live Squad Allocation Breakdown */}
            <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[rgba(20,23,26,0.06)] mb-3 text-xs">
              <span className="text-[10px] font-mono uppercase font-bold text-[#5F646D] block mb-1">
                Specialist Squad Composition:
              </span>
              <div className="flex items-center justify-between text-[11px] text-[#12151A] py-0.5 border-b border-[rgba(20,23,26,0.04)]">
                <span>• Calibrated Task Annotators</span>
                <span className="font-mono font-bold">{estimate.annotatorCount} Leads</span>
              </div>
              <div className="flex items-center justify-between text-[11px] text-[#12151A] py-0.5 border-b border-[rgba(20,23,26,0.04)]">
                <span>• Statistical QA & Arbitration</span>
                <span className="font-mono font-bold">{estimate.qaEngineerCount} QA Leads</span>
              </div>
              <div className="flex items-center justify-between text-[11px] text-[#12151A] py-0.5">
                <span>• Weekly Throughput Pace</span>
                <span className="font-mono font-bold text-[#EC5E27]">~{estimate.weeklyRate} / week</span>
              </div>
            </div>



            {/* Action CTA */}
            <div className="mt-5">
              <button
                type="button"
                onClick={handleProceedToContact}
                className="button button-crimson w-full justify-center text-xs"
              >
                Discuss Project with this Spec <ArrowRight size={15} />
              </button>
              <div className="text-center mt-2 text-[10.5px] text-[#8E939D]">
                Includes NDA execution, feasibility test, & pilot sample validation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DatasetEstimator;
