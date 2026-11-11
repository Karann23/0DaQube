import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  LoaderCircle,
  Shield,
  FileText,
  Lock,
  Sparkles,
  Camera,
  Video,
  Mic,
  Headphones,
  Crosshair,
  Layers,
  Boxes,
  Zap,
  Clock,
  Building2,
  FileCheck2,
  ShieldCheck
} from "lucide-react";

const CAPABILITIES = [
  { id: "image-collection", label: "Image Data Collection", icon: Camera, short: "Visual perception & defect capture" },
  { id: "video-collection", label: "Video Data Collection", icon: Video, short: "60/120 FPS action & egocentric AR" },
  { id: "speech-collection", label: "Speech Data Collection", icon: Mic, short: "120+ languages, 1,000+ locales, multi-mic ASR & TTS" },
  { id: "text-collection", label: "Text Data & Labeling", icon: FileText, short: "Multilingual corpora, table OCR & NLP" },
  { id: "annotation", label: "Image & Video Annotation", icon: Layers, short: "Sub-pixel polygon masks & 3D cuboids" },
  { id: "transcription", label: "Audio Transcription", icon: Headphones, short: "Verbatim speech-to-text & Praat tiers" },
  { id: "adas-lidar", label: "ADAS & LiDAR Annotation", icon: Crosshair, short: "128-beam 3D cuboids & sensor fusion" },
  { id: "off-the-shelf", label: "Off-the-Shelf AI Datasets", icon: Boxes, short: "Pre-collected commercial training sets" }
];

const SCOPE_TIERS = [
  { id: "pilot", label: "Pilot Feasibility", desc: "Under 10k items / 50 hrs", badge: "Trial Benchmark" },
  { id: "production", label: "Production Scale", desc: "10k – 100k items / 50–500 hrs", badge: "Most Popular" },
  { id: "enterprise", label: "Enterprise Tier", desc: "100k+ items / 500+ hrs", badge: "Dedicated Squad" },
  { id: "custom", label: "Custom Pipeline", desc: "Multi-modal ongoing retainer", badge: "Continuous" }
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
  const [selectedTimeline, setSelectedTimeline] = useState("standard");
  const [securityAddons, setSecurityAddons] = useState({
    nda: true,
    airgap: false,
    soc2: true,
    hipaa: false
  });

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

    if (detailsParam) {
      setForm((prev) => ({
        ...prev,
        details: detailsParam + (prev.details ? `\n\n${prev.details}` : "")
      }));
    }
  }, [searchParams]);

  const toggleSecurity = (key) => {
    setSecurityAddons((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleInputChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const activeCapability = CAPABILITIES.find((c) => c.id === selectedService) || CAPABILITIES[0];
  const activeScopeObj = SCOPE_TIERS.find((s) => s.id === selectedScope) || SCOPE_TIERS[1];
  const activeTimelineObj = TIMELINE_OPTIONS.find((t) => t.id === selectedTimeline) || TIMELINE_OPTIONS[1];

  async function submit(e) {
    e.preventDefault();
    setStatus("sending");
    setMessage("");

    // Simulate enterprise receipt
    setTimeout(() => {
      setStatus("success");
      setMessage(
        `Thank you, ${form.name || "Colleague"}! Your project specification for ${activeCapability.label} has been registered. An AI Solutions Architect and Data Workflow Lead will review your acceptance criteria and reach out within 24 hours.`
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
          <div className="flex justify-between">
            <span className="text-[#5F646D]">Configured Capability:</span>
            <span className="font-bold text-[#12151A]">{activeCapability.label}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#5F646D]">Target Scale:</span>
            <span className="font-bold text-[#12151A]">{activeScopeObj.label}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#5F646D]">Timeline Urgency:</span>
            <span className="font-bold text-[#EC5E27]">{activeTimelineObj.time}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#5F646D]">Confidentiality:</span>
            <span className="font-bold text-[#12151A]">
              {securityAddons.nda ? "Pre-Execution NDA Active" : "Standard Confidentiality"}
            </span>
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
          Select your target modality, project scale, and compliance constraints to initiate a structured technical discovery.
        </p>
      </div>

      {/* STEP 1: Interactive Capability Grid (8 Core Services) */}
      <div className="mb-6">
        <label className="text-xs font-bold uppercase tracking-wider text-[#12151A] flex items-center justify-between mb-2">
          <span>1. Select Primary AI Capability</span>
          <span className="text-[10px] font-mono text-[#8E939D] font-normal">Step 1 of 4</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {CAPABILITIES.map((c) => {
            const Icon = c.icon;
            const isSelected = selectedService === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelectedService(c.id)}
                className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "border-[#EC5E27] bg-[#FFF3ED]/70 shadow-sm ring-1 ring-[#EC5E27]/50"
                    : "border-[rgba(20,23,26,0.08)] bg-white hover:border-[rgba(20,23,26,0.25)]"
                }`}
              >
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center mb-1.5 ${
                  isSelected ? "bg-[#EC5E27] text-white" : "bg-[#F1F3F5] text-[#5F646D]"
                }`}>
                  <Icon size={14} />
                </div>
                <div>
                  <span className={`text-[11.5px] font-bold block leading-tight ${
                    isSelected ? "text-[#EC5E27]" : "text-[#12151A]"
                  }`}>
                    {c.label}
                  </span>
                  <span className="text-[10px] text-[#5F646D] line-clamp-1 mt-0.5">
                    {c.short}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* STEP 2: Project Scope & Cadence */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Scope Tier */}
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-[#12151A] block mb-2">
            2. Estimated Dataset Volume
          </label>
          <div className="grid grid-cols-2 gap-1.5">
            {SCOPE_TIERS.map((s) => {
              const isSelected = selectedScope === s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSelectedScope(s.id)}
                  className={`p-2.5 rounded-xl border text-left cursor-pointer transition-all ${
                    isSelected
                      ? "border-[#EC5E27] bg-[#FFF3ED]/70 text-[#EC5E27] shadow-sm font-semibold"
                      : "border-[rgba(20,23,26,0.08)] bg-white text-[#12151A] hover:border-[rgba(20,23,26,0.2)]"
                  }`}
                >
                  <div className="text-xs font-bold leading-tight">{s.label}</div>
                  <div className="text-[10px] text-[#5F646D] mt-0.5">{s.desc}</div>
                </button>
              );
            })}
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

      {/* STEP 3: Enterprise Security & Compliance Add-ons */}
      <div className="mb-6 p-4 rounded-2xl bg-[#F8FAFC] border border-[rgba(20,23,26,0.06)]">
        <label className="text-xs font-bold uppercase tracking-wider text-[#12151A] block mb-2">
          4. Security & Compliance Requirements
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <button
            type="button"
            onClick={() => toggleSecurity("nda")}
            className={`p-2 rounded-lg border text-xs text-left cursor-pointer transition-all flex items-center gap-1.5 ${
              securityAddons.nda
                ? "border-[#EC5E27] bg-[#FFF3ED] text-[#EC5E27] font-bold"
                : "border-[rgba(20,23,26,0.08)] bg-white text-[#5F646D]"
            }`}
          >
            <ShieldCheck size={14} className={securityAddons.nda ? "text-[#EC5E27]" : "text-[#8E939D]"} />
            <span>Mutual NDA</span>
          </button>

          <button
            type="button"
            onClick={() => toggleSecurity("soc2")}
            className={`p-2 rounded-lg border text-xs text-left cursor-pointer transition-all flex items-center gap-1.5 ${
              securityAddons.soc2
                ? "border-[#EC5E27] bg-[#FFF3ED] text-[#EC5E27] font-bold"
                : "border-[rgba(20,23,26,0.08)] bg-white text-[#5F646D]"
            }`}
          >
            <Shield size={14} className={securityAddons.soc2 ? "text-[#EC5E27]" : "text-[#8E939D]"} />
            <span>ISO 27001 Certified</span>
          </button>

          <button
            type="button"
            onClick={() => toggleSecurity("airgap")}
            className={`p-2 rounded-lg border text-xs text-left cursor-pointer transition-all flex items-center gap-1.5 ${
              securityAddons.airgap
                ? "border-[#EC5E27] bg-[#FFF3ED] text-[#EC5E27] font-bold"
                : "border-[rgba(20,23,26,0.08)] bg-white text-[#5F646D]"
            }`}
          >
            <Lock size={14} className={securityAddons.airgap ? "text-[#EC5E27]" : "text-[#8E939D]"} />
            <span>Air-Gapped VDI</span>
          </button>

          <button
            type="button"
            onClick={() => toggleSecurity("hipaa")}
            className={`p-2 rounded-lg border text-xs text-left cursor-pointer transition-all flex items-center gap-1.5 ${
              securityAddons.hipaa
                ? "border-[#EC5E27] bg-[#FFF3ED] text-[#EC5E27] font-bold"
                : "border-[rgba(20,23,26,0.08)] bg-white text-[#5F646D]"
            }`}
          >
            <FileCheck2 size={14} className={securityAddons.hipaa ? "text-[#EC5E27]" : "text-[#8E939D]"} />
            <span>HIPAA / BAA</span>
          </button>
        </div>
      </div>

      {/* STEP 4: Contact & Technical Brief */}
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
      <div className="mt-5 p-3.5 rounded-xl bg-[#FFF3ED]/60 border border-[#EC5E27]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <Sparkles size={16} className="text-[#EC5E27] shrink-0" />
          <span className="text-[#12151A] font-medium">
            Active Scoping Blueprint: <strong>{activeCapability.label}</strong> ({activeScopeObj.label}) · <strong>{activeTimelineObj.time}</strong>
          </span>
        </div>
        <span className="text-[11px] font-mono text-[#5F646D] shrink-0">
          Mutual NDA: {securityAddons.nda ? "Requested" : "Standard"}
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
