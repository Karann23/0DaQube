import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  LoaderCircle,
  Shield,
  Sparkles,
  ChevronDown
} from "lucide-react";

const CAPABILITIES = [
  { id: "image-collection", label: "Image Data Collection" },
  { id: "video-collection", label: "Video Data Collection" },
  { id: "speech-collection", label: "Speech Data Collection" },
  { id: "text-collection", label: "Text Data & Labeling" },
  { id: "annotation", label: "Image & Video Annotation" },
  { id: "transcription", label: "Audio Transcription" },
  { id: "adas-lidar", label: "ADAS & LiDAR Annotation" },
  { id: "off-the-shelf", label: "Off-the-Shelf AI Datasets" }
];

const SCOPE_TIERS = [
  { id: "pilot", label: "Pilot Feasibility" },
  { id: "production", label: "Production Scale" },
  { id: "enterprise", label: "Enterprise Tier" },
  { id: "custom", label: "Custom Pipeline" }
];

const TIMELINE_OPTIONS = [
  { id: "urgent", label: "Urgent Sprint", time: "< 2 Weeks" },
  { id: "standard", label: "Standard Cadence", time: "3 – 4 Weeks" },
  { id: "quarterly", label: "Next Quarter", time: "Planned Milestone" }
];

export function ContactForm() {
  const [searchParams] = useSearchParams();
  const [selectedService, setSelectedService] = useState("image-collection");
  const [selectedScope, setSelectedScope] = useState("production");
  const [volumeCount, setVolumeCount] = useState("");
  const [volumeUnit, setVolumeUnit] = useState("items");
  const [selectedTimeline, setSelectedTimeline] = useState("standard");

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    details: ""
  });

  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  // Sync incoming URL parameters from the Estimator or Service detail pages
  useEffect(() => {
    const serviceParam = searchParams.get("service");
    const volumeParam = searchParams.get("volume");
    const detailsParam = searchParams.get("details");

    if (serviceParam) {
      const match = CAPABILITIES.find(
        (c) => c.id === serviceParam || c.label.toLowerCase().includes(serviceParam.toLowerCase())
      );
      if (match) setSelectedService(match.id);
    }

    if (volumeParam) {
      const numericVolume = volumeParam.replace(/[^\d.]/g, "");
      if (numericVolume) setVolumeCount(numericVolume);
    }

    if (detailsParam) {
      setForm((prev) => ({
        ...prev,
        details: detailsParam + (prev.details ? `\n\n${prev.details}` : "")
      }));
    }
  }, [searchParams]);

  const handleInputChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const activeCapability = CAPABILITIES.find((c) => c.id === selectedService) || CAPABILITIES[0];
  const activeScopeObj = SCOPE_TIERS.find((s) => s.id === selectedScope) || SCOPE_TIERS[1];
  const activeTimelineObj = TIMELINE_OPTIONS.find((t) => t.id === selectedTimeline) || TIMELINE_OPTIONS[1];

  const parsedCount = Number(volumeCount);
  const formattedVolume =
    volumeCount.trim() !== "" && !Number.isNaN(parsedCount) && parsedCount > 0
      ? `${parsedCount.toLocaleString()} ${volumeUnit}`
      : "";
  const volumeSummary = formattedVolume
    ? `${activeScopeObj.label} · ${formattedVolume}`
    : activeScopeObj.label;

  async function submit(e) {
    e.preventDefault();
    setStatus("sending");
    setMessage("");

    // Simulate enterprise receipt
    setTimeout(() => {
      setStatus("success");
      setMessage(
        `Thank you, ${form.name || "Colleague"}! Your project specification for ${activeCapability.label} (${volumeSummary}) has been registered. An AI Solutions Architect and Data Workflow Lead will review your acceptance criteria and reach out within 24 hours.`
      );
    }, 900);
  }

  if (status === "success") {
    return (
      <div className="form-success p-8 rounded-3xl bg-white border border-[#E9ECEF] shadow-xl text-center">
        <div className="w-16 h-16 rounded-2xl bg-[rgba(236,94,39,0.12)] text-[#EC5E27] flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={36} />
        </div>
        <h3 className="font-display text-2xl font-bold text-[#12151A] mb-2">
          Project Specification Registered
        </h3>
        <p className="text-sm text-[#5F646D] max-w-lg mx-auto mb-6 leading-relaxed">
          {message}
        </p>

        <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[rgba(20,23,26,0.06)] max-w-md mx-auto text-left mb-6 text-xs space-y-1.5">
          <div className="flex justify-between gap-4">
            <span className="text-[#5F646D]">Configured Capability:</span>
            <span className="font-bold text-[#12151A] text-right">{activeCapability.label}</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-[#5F646D]">Dataset Volume:</span>
            <span className="font-bold text-[#12151A] text-right">{volumeSummary}</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-[#5F646D]">Timeline Urgency:</span>
            <span className="font-bold text-[#EC5E27] text-right">{activeTimelineObj.time}</span>
          </div>
        </div>

        <button
          className="button button-crimson"
          onClick={() => {
            setStatus("idle");
            setMessage("");
          }}
        >
          Scope Another Project Specification
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form !p-5 sm:!p-7 md:!p-9" onSubmit={submit}>
      <div className="form-intro mb-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="eyebrow"> INTERACTIVE SCOPING ARCHITECT</span>
          <span className="text-[11px] font-mono font-bold text-[#EC5E27] px-2.5 py-0.5 rounded-full bg-[#FFF3ED] border border-[#EC5E27]/20 shrink-0">
            SLA Response &lt; 24h
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#12151A] mt-1">
          Architect Your Project Requirements
        </h2>
        <p className="text-xs md:text-sm text-[#5F646D] mt-1">
          Select your target service, dataset volume, and delivery window to initiate a structured technical discovery.
        </p>
      </div>

      {/* STEP 1: Primary AI Capability Dropdown */}
      <div className="mb-6">
        <label
          htmlFor="capability-select"
          className="text-xs font-bold uppercase tracking-wider text-[#12151A] flex items-center justify-between mb-2"
        >
          <span>1. Select Primary AI Capability</span>
          <span className="text-[10px] font-mono text-[#8E939D] font-normal">Step 1 of 3</span>
        </label>
        <div className="relative">
          <select
            id="capability-select"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="w-full appearance-none rounded-xl border border-[rgba(20,23,26,0.14)] bg-white px-4 py-3 pr-10 text-sm font-semibold text-[#12151A] outline-none transition-all cursor-pointer hover:border-[rgba(20,23,26,0.3)] focus:border-[#EC5E27] focus:ring-2 focus:ring-[#EC5E27]/20"
          >
            {CAPABILITIES.map((c) => (
              <option key={c.id} value={c.id}>
                {c.label}
              </option>
            ))}
          </select>
          <ChevronDown
            size={18}
            className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#5F646D]"
          />
        </div>
      </div>

      {/* STEP 2 & 3: Dataset Volume & Delivery Window */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Dataset Volume: Clean Tiers + Custom Numeric Input */}
        <div>
          <label
            htmlFor="dataset-volume-number"
            className="text-xs font-bold uppercase tracking-wider text-[#12151A] block mb-2"
          >
            2. Estimated Dataset Volume
          </label>
          <div className="grid grid-cols-2 gap-1.5 mb-2">
            {SCOPE_TIERS.map((s) => {
              const isSelected = selectedScope === s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSelectedScope(s.id)}
                  className={`px-3 py-2.5 rounded-xl border text-left cursor-pointer transition-all ${
                    isSelected
                      ? "border-[#EC5E27] bg-[#FFF3ED]/70 text-[#EC5E27] shadow-sm font-semibold"
                      : "border-[rgba(20,23,26,0.08)] bg-white text-[#12151A] hover:border-[rgba(20,23,26,0.2)]"
                  }`}
                >
                  <div className="text-xs font-bold leading-tight">{s.label}</div>
                </button>
              );
            })}
          </div>
          <div className="flex items-stretch gap-1.5">
            <input
              id="dataset-volume-number"
              type="number"
              min="1"
              step="1"
              inputMode="numeric"
              value={volumeCount}
              onChange={(e) => setVolumeCount(e.target.value)}
              placeholder="Enter exact volume (e.g. 50000)"
              className="flex-1 min-w-0 rounded-xl border border-[rgba(20,23,26,0.14)] bg-white px-3.5 py-2 text-sm text-[#12151A] placeholder:text-[#8E939D] outline-none transition-all focus:border-[#EC5E27] focus:ring-2 focus:ring-[#EC5E27]/20"
            />
            <div className="relative shrink-0">
              <select
                aria-label="Dataset volume unit"
                value={volumeUnit}
                onChange={(e) => setVolumeUnit(e.target.value)}
                className="h-full appearance-none rounded-xl border border-[rgba(20,23,26,0.14)] bg-white pl-3 pr-8 py-2 text-xs font-semibold text-[#12151A] outline-none transition-all cursor-pointer focus:border-[#EC5E27] focus:ring-2 focus:ring-[#EC5E27]/20"
              >
                <option value="items">items</option>
                <option value="hours">hours</option>
              </select>
              <ChevronDown
                size={14}
                className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[#5F646D]"
              />
            </div>
          </div>
        </div>

        {/* Timeline Urgency */}
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-[#12151A] block mb-2">
            3. Target Delivery Window
          </label>
          <div className="flex flex-col gap-1.5">
            {TIMELINE_OPTIONS.map((t) => {
              const isSelected = selectedTimeline === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setSelectedTimeline(t.id)}
                  className={`p-2.5 rounded-xl border text-left cursor-pointer transition-all flex items-center justify-between ${
                    isSelected
                      ? "border-[#EC5E27] bg-[#FFF3ED]/70 shadow-sm"
                      : "border-[rgba(20,23,26,0.08)] bg-white hover:border-[rgba(20,23,26,0.2)]"
                  }`}
                >
                  <span className={`text-xs font-semibold ${isSelected ? "text-[#EC5E27]" : "text-[#12151A]"}`}>
                    {t.label}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-[#EC5E27] bg-white px-2 py-0.5 rounded border border-[rgba(20,23,26,0.06)]">
                    {t.time}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Contact & Technical Brief */}
      <div className="form-grid">
        <label>
          Full Name <span>*</span>
          <input
            required
            autoComplete="name"
            value={form.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            placeholder="Dr. Jordan Ellis"
          />
        </label>

        <label>
          Work Email <span>*</span>
          <input
            required
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            placeholder="jordan@frontier-ai.com"
          />
        </label>

        <label className="form-full">
          Organization / AI Research Lab
          <input
            autoComplete="organization"
            value={form.company}
            onChange={(e) => handleInputChange("company", e.target.value)}
            placeholder="Autonomous Robotics Group / Foundation Models Team"
          />
        </label>

        <label className="form-full">
          Technical Brief, Acceptance Criteria & Edge Cases <span>*</span>
          <textarea
            required
            rows={3}
            value={form.details}
            onChange={(e) => handleInputChange("details", e.target.value)}
            placeholder="Outline your target sensor setup or modalities, labeling geometry (e.g. 9-DoF cuboids, phoneme timestamps), target environments, and acceptance threshold..."
          />
        </label>
      </div>

      {/* Live Scope Blueprint Summary Strip */}
      <div className="mt-5 p-3.5 rounded-xl bg-[#FFF3ED]/60 border border-[#EC5E27]/20 flex items-center gap-2 text-xs">
        <Sparkles size={16} className="text-[#EC5E27] shrink-0" />
        <span className="text-[#12151A] font-medium">
          Active Scoping Blueprint: <strong>{activeCapability.label}</strong> ({volumeSummary}) · <strong>{activeTimelineObj.time}</strong>
        </span>
      </div>

      {status === "error" && <div className="form-error mt-4">{message}</div>}

      <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <button className="button button-crimson w-full sm:w-auto" type="submit" disabled={status === "sending"}>
          {status === "sending" ? (
            <>
              Registering Specification... <LoaderCircle className="spin" size={17} />
            </>
          ) : (
            <>
              Submit Project Specification <ArrowRight size={17} />
            </>
          )}
        </button>
        <span className="text-xs text-[#8E939D] flex items-center gap-1.5">
          <Shield size={14} className="text-[#EC5E27]" /> ISO 27001 Aligned · 100% Confidential
        </span>
      </div>
    </form>
  );
}
export default ContactForm;
