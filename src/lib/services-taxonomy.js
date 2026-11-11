/**
 * DaQube 8 Core Technical Services Taxonomy
 * Exactly matches DaQube's core service portfolio:
 * 1. Image Data Collection (Visual Data)
 * 2. Video Data Collection (Video & Motion)
 * 3. Speech Data Collection (Audio & Speech)
 * 4. Text Data Collection & Labeling (Language Data)
 * 5. Image & Video Annotation (Annotation)
 * 6. Audio Transcription Services (Speech to Text)
 * 7. ADAS & LiDAR Data Annotation (Autonomous Systems)
 * 8. Off-the-Shelf AI Training Datasets (Pre-Collected Datasets)
 *
 * References: Scale AI, LXT.ai, GTS.ai, Omnysys.com, Alanxa.ai
 */

export const SERVICE_CATEGORIES = [
  {
    id: "image-collection",
    slug: "image-collection",
    aliases: ["image-data-collection", "visual-data"],
    title: "Image Data Collection",
    eyebrow: "01 / VISUAL DATA",
    image: "/images/services_image_collection.webp",
    summary: "Purpose-built image datasets for computer vision, visual recognition, object detection, and intelligent automation across varied environments, lighting, and angles.",
    heroHighlight: "Purpose-Built Visual Ground Truth at Scale",
    accent: "#EC5E27",
    subpages: [
      {
        slug: "retail-shelf",
        title: "Retail Product & Shelf Perception",
        short: "High-density retail shelf captures covering diverse packaging, partial occlusions, reflective packaging, and variable store lighting.",
        eyebrow: "RETAIL & COMMERCE",
        deliverables: [
          "Multi-angle shelf photos with synchronized SKU manifests",
          "Package deformation, foil reflections, and shadow variations",
          "High-resolution 4K/8K images with camera intrinsic calibration",
          "Structured metadata detailing shelf height, distance, and lux level"
        ],
        specifications: {
          resolutions: "12MP, 24MP, 48MP RAW and uncompressed JPEG",
          variations: "Frontal, 45-degree angled, top-down, crowded shelf layouts",
          lighting: "Overhead fluorescent, warm LED, natural window spill, dark shadows",
          compliance: "Clean commercial provenance, store authorization releases"
        },
        workflow: [
          { phase: "SKU Catalog Taxonomy", desc: "Map target product categories, packaging finishes, and planned inventory densities." },
          { phase: "Field Rig Calibration", desc: "Deploy calibrated mobile and handheld camera rigs across regional retail environments." },
          { phase: "Technical QA Screening", desc: "Automated screening for motion blur, optical distortion, clipping, and focal depth." },
          { phase: "Metadata Delivery", desc: "Deliver categorized image sets with verified EXIF metadata and SKU reference tags." }
        ],
        deepDive: "Off-the-shelf catalog photos do not prepare a retail computer vision system for real supermarket conditions: wrinkled snack bags, reflective foil packages, skewed viewing angles, and items hidden behind shelf price tags. DaQube captures in-situ shelf datasets that replicate true operational clutter, training models that maintain 99%+ product recognition accuracy."
      },
      {
        slug: "object-detection",
        title: "Custom Object Detection & Defect Inspection",
        short: "Targeted object capture for manufacturing defects, industrial machinery, agriculture, and robotic pick-and-place systems.",
        eyebrow: "INDUSTRIAL & ROBOTICS",
        deliverables: [
          "Defect variations: surface scratches, cracks, misalignments, solder voids",
          "Multi-illumination capture: coaxial, diffuse, backlight, polarized lighting",
          "Pixel-level optical resolution manifests with micrometer scale calibration",
          "Annotation-ready image packages with pre-screened quality scores"
        ],
        specifications: {
          sensorTypes: "Industrial CMOS area-scan, telecentric lenses, multispectral",
          defectClasses: "Micro-scratches, cosmetic blemishes, structural fissures",
          qualityGate: "100% manual optical inspection against golden reference samples"
        },
        workflow: [
          { phase: "Defect Taxonomy Formulation", desc: "Define explicit morphological boundary criteria for critical and cosmetic defect classes." },
          { phase: "Controlled Studio Capture", desc: "Capture golden units and verified defect samples under controlled lighting angles." },
          { phase: "Annotation Tagging", desc: "Flag defect severity coordinates and contextual part numbers." },
          { phase: "Packaging & Verification", desc: "Export validated image sets ready for training YOLO, Mask R-CNN, and custom vision models." }
        ],
        deepDive: "Automated optical inspection in electronics and automotive manufacturing cannot tolerate false negatives. DaQube designs controlled imaging protocols capturing rare physical defects under specialized industrial lighting, closing the distribution gap between pristine laboratory samples and dirty production lines."
      },
      {
        slug: "cultural-heritage",
        title: "Cultural & Heritage Preservation",
        short: "Multi-spectral drone captures, architectural facade segmentation, stone weathering analysis, and millimeter-accurate digital twin reconstruction for historic cultural monuments.",
        eyebrow: "ARCHITECTURAL PHOTOGRAMMETRY",
        deliverables: [
          "Multi-angle facade photos with calibrated camera intrinsic manifests",
          "Sub-pixel polygonal segmentation and semantic mask overlays",
          "High-resolution 4K/8K uncompressed RAW with drone RTK-GPS tags",
          "Chemical weathering, crack propagation, and erosion depth maps"
        ],
        specifications: {
          resolutions: "100MP Medium Format, 4K Drone Aerial, Polarized Optical",
          variations: "Full daylight, golden hour raking sun, night floodlit illumination",
          compliance: "Archaeological survey clearance, non-invasive capture protocols"
        },
        workflow: [
          { phase: "Photogrammetry Flight Planning", desc: "Define GSD (Ground Sampling Distance) grid and nadir/oblique drone flight corridors." },
          { phase: "Polarized Ground Capture", desc: "Execute cross-polarized ground facade captures eliminating specular stone reflections." },
          { phase: "Automated Optical QA", desc: "Automated screening for focal blur, motion artifacts, and chromatic aberration." },
          { phase: "Semantic Mesh Delivery", desc: "Export classified polygonal facade masks and aligned 3D point cloud assets." }
        ],
        deepDive: "Manual scaffolding and physical inspections fail to detect hairline structural degradation across century-old monuments without disrupting public access. DaQube captures dense, multi-spectral image datasets that train computer vision models to pinpoint mortar degradation, micro-fissures, and stone erosion with millimeter precision."
      },
      {
        slug: "sports-activities",
        title: "Sports & Dynamic Activities",
        short: "High-speed shutter datasets capturing extreme athletic movements, multi-player spatial clustering, ball trajectories, and biomechanical limb keypoints across dynamic sporting arenas.",
        eyebrow: "ATHLETIC KINEMATICS",
        deliverables: [
          "High-framerate 120FPS/240FPS global shutter sequential stills",
          "33-point skeletal pose estimation and joint angle annotations",
          "Multi-player spatial tracking IDs through heavy physical occlusions",
          "Stadium lighting glare and floodlight compensation masks"
        ],
        specifications: {
          cameraHardware: "120FPS Global Shutter, 400mm Telephoto, Synchronized Arrays",
          activityTypes: "Team sports, track and field, gymnastics, racquet sports, combat",
          lighting: "Stadium metal halide, direct noon sun, indoor arena spotlights"
        },
        workflow: [
          { phase: "Motion Protocol Setup", desc: "Calibrate high-speed global shutter rigs around arena boundaries." },
          { phase: "Synchronized Burst Acquisition", desc: "Capture synchronized multi-angle bursts across continuous play sequences." },
          { phase: "Pose Kinematic Labeling", desc: "Annotate 33-point joint coordinates with anatomical occlusion handling." },
          { phase: "Tracking Export", desc: "Deliver COCO Keypoints JSON and YOLOv8-pose formats with velocity vectors." }
        ],
        deepDive: "Standard action recognition models collapse when players collide or move at high velocity. DaQube captures synchronized high-framerate visual datasets that enable computer vision models to accurately estimate skeletal kinematics and ball trajectory even during intense physical scrambles."
      },
      {
        slug: "healthcare-medical",
        title: "Healthcare Data Collection",
        eyebrow: "BIOMEDICAL IMAGING",
        short: "Calibrated medical and dermoscopic photography, microscopy cellular pathology, and surgical instrument tracking datasets acquired under strict HIPAA, BAA, and ISO 27701 protocols.",
        deliverables: [
          "Calibrated dermoscopic lesion photos across all Fitzpatrick skin types (1–6)",
          "Cellular microscopy pathology slices with cell count ground truth",
          "Laparoscopic tool tip position and organ boundary polygonal masks",
          "Full HIPAA Business Associate Agreement (BAA) compliance packages"
        ],
        specifications: {
          modalities: "Polarized Dermatoscope, 4K Endoscope, Brightfield/Fluorescence Microscopy",
          demographics: "Clinically balanced cohorts across age, sex, and ethnic skin tones",
          security: "Air-gapped VDI labeling, PHI de-identification per HIPAA Safe Harbor"
        },
        workflow: [
          { phase: "IRB & Clinical Protocol", desc: "Formulate institutional review board guidelines and informed patient consent manifests." },
          { phase: "Calibrated Acquisition", desc: "Deploy calibrated optical sensors with standardized color calibration targets." },
          { phase: "Double-Blind Expert Annotation", desc: "Credentialed physicians and pathologists annotate diagnostic contours." },
          { phase: "DICOM/FHIR Packaging", desc: "Export de-identified image collections paired with structured medical metadata." }
        ],
        deepDive: "Dermatological AI models frequently misdiagnose malignant lesions on darker skin tones due to severe dataset demographic bias. DaQube provides clinically rigorous, demographically balanced medical image datasets captured under standardized clinical lighting to ensure equitable model performance across diverse populations."
      },
      {
        slug: "surveillance-security",
        title: "Surveillance & Security",
        eyebrow: "PERIMETER & PUBLIC SAFETY",
        short: "Wide-area multi-camera surveillance datasets covering anomalous behaviors, perimeter intrusion, crowd congestion, and unattended object detection in challenging environmental conditions.",
        deliverables: [
          "Multi-camera CCTV feeds with synchronized cross-camera person re-identification",
          "Long-wave infrared (LWIR) thermal human silhouettes and thermal heat maps",
          "Oriented bounding boxes for unattended bags, perimeter breaches, and anomalies",
          "Adverse weather captures (heavy rain, dense fog, snow, low-light night)"
        ],
        specifications: {
          sensors: "FLIR Thermal LWIR, 4K Starlight CCTV, PTZ Dome Cameras",
          scenarios: "Transit terminals, corporate campuses, industrial perimeter fencing",
          lighting: "0.001 lux starlight to midday solar glare with specular reflections"
        },
        workflow: [
          { phase: "Scenario Choreography", desc: "Script realistic intrusion, loitering, and baggage abandonment sequences." },
          { phase: "Multi-Spectrum Recording", desc: "Simultaneously capture synchronized optical RGB and thermal infrared feeds." },
          { phase: "Temporal Track QA", desc: "Assign persistent tracking IDs across intersecting paths and blind spots." },
          { phase: "MOT Export", desc: "Deliver MOTChallenge, YOLOv10, and Pascal VOC XML annotation packages." }
        ],
        deepDive: "Commercial security systems generate thousands of false alarms every week from swaying tree branches, shifting shadows, and headlight reflections. DaQube collects in-situ multi-camera datasets across challenging lighting and weather extremes to train perception models that discern genuine threats with sub-0.1% false alarm rates."
      }
    ]
  },
  {
    id: "video-collection",
    slug: "video-collection",
    aliases: ["video-data-collection", "video-motion"],
    title: "Video Data Collection",
    eyebrow: "02 / VIDEO & MOTION",
    image: "/images/services_video_collection.webp",
    summary: "Context-rich video datasets for action recognition, temporal scene understanding, multi-camera object tracking, and egocentric robotic perception.",
    heroHighlight: "High-Framerate Temporal Ground Truth",
    accent: "#EC5E27",
    subpages: [
      {
        slug: "action-recognition",
        title: "Human Activity & Action Recognition",
        short: "Multi-view sequential video of human actions, athletic movements, gestures, and industrial assembly workflows.",
        eyebrow: "ACTIVITY RECOGNITION",
        deliverables: [
          "Continuous 60 FPS / 120 FPS high-speed video sequences",
          "Multi-camera synchronized viewpoints (frontal, profile, overhead, oblique)",
          "Frame-accurate action boundary timestamps (initiation, peak, termination)",
          "Signed contributor model releases compliant with GDPR and CCPA"
        ],
        specifications: {
          framerates: "24, 30, 60, and 120 FPS uncompressed MP4/ProRes",
          resolutions: "1080p, 4K UHD with synchronized timecode genlock",
          demographics: "Balanced across age, gender, and physical stature"
        },
        workflow: [
          { phase: "Action Protocol Scripting", desc: "Draft structured activity scripts with natural variations in execution speed and body posture." },
          { phase: "Multi-Camera Studio Capture", desc: "Execute multi-angle synchronized recordings in calibrated studio environments." },
          { phase: "Temporal Boundary Marking", desc: "Annotate exact start and completion frames for discrete action phases." },
          { phase: "Quality Validation", desc: "Verify frame drop integrity, audio-video sync, and contributor model release compliance." }
        ],
        deepDive: "Action recognition algorithms fail when temporal boundaries are sloppy or when trained solely on staged slow-motion demonstrations. DaQube captures high-speed video containing natural movement variations, transitional pauses, and complex occlusions, giving models temporal stability."
      },
      {
        slug: "egocentric-capture",
        title: "Egocentric & Wearable First-Person Video",
        short: "First-person perspective datasets captured via smart glasses and head-mounted cameras for augmented reality and robotic imitation learning.",
        eyebrow: "SPATIAL COMPUTING & AR",
        deliverables: [
          "First-person field-of-view videos of daily tasks, tool usage, and assembly",
          "Synchronized 6-DoF head pose and eye-gaze tracking telemetry",
          "Hand-object interaction contact timestamps and grasp type labels",
          "Audio-visual alignment matching spoken commentary to visual focus"
        ],
        specifications: {
          hardware: "Meta Aria glasses, GoPro head mounts, custom binaural camera rigs",
          fov: "110 to 150-degree ultra-wide field of view with distortion maps",
          sensorTelemetry: "IMU gyroscope, accelerometer, eye-tracking gaze vectors"
        },
        workflow: [
          { phase: "Task Scenario Design", desc: "Design realistic multi-step physical manipulation tasks in home, kitchen, and workshop settings." },
          { phase: "First-Person Field Capture", desc: "Record unscripted first-person video with continuous sensor telemetry logging." },
          { phase: "Gaze & Contact Annotation", desc: "Annotate hand gaze coordinates and active object engagement intervals." },
          { phase: "Multi-Modal Export", desc: "Package video frames synchronized with IMU telemetry and bounding polygons." }
        ],
        deepDive: "Spatial computing and humanoid robotics require understanding human attention from the inside out. By recording first-person video with synchronized IMU and gaze telemetry, DaQube provides the ground truth required for multimodal foundation models and AR assistants."
      }
    ]
  },
  {
    id: "speech-collection",
    slug: "speech-collection",
    aliases: ["audio-collection", "speech-data-collection", "audio-speech"],
    title: "Speech Data Collection",
    eyebrow: "03 / AUDIO & SPEECH",
    image: "/images/services_speech_collection.webp",
    summary: "Large-scale multilingual voice corpora, spontaneous conversational speech, and expressive TTS datasets recorded across 1,000+ global locales and acoustic environments.",
    heroHighlight: "1,000+ Locales & Calibrated Acoustics",
    accent: "#EC5E27",
    subpages: [
      {
        slug: "conversational-asr",
        title: "Spontaneous Conversational ASR Corpora",
        short: "Natural, non-scripted multi-speaker voice recordings across varied noise conditions, accents, and hardware profiles.",
        eyebrow: "CONVERSATIONAL ASR",
        deliverables: [
          "Unscripted multi-speaker dialogues with natural interruptions and hesitations",
          "Acoustic diversity across reverberant rooms, vehicular cabins, and public spaces",
          "Multi-mic array recordings (far-field, near-field, telephony 8kHz/16kHz)",
          "Full metadata manifests with speaker acoustic profiles and SNR measurements"
        ],
        specifications: {
          sampleRates: "16kHz, 44.1kHz, 48kHz, 96kHz lossless uncompressed PCM WAV",
          channelConfigs: "Mono, Stereo, 4-Channel & 8-Channel Spatial Mic Arrays",
          languages: "120+ Primary Languages, 1,000+ Regional Dialects & Micro-Accents",
          hardware: "Smartphone mics, smart-speaker arrays, automotive cabin rigs, studio condenser"
        },
        workflow: [
          { phase: "Acoustic Scenario Matrix", desc: "Map target operating environments: quiet rooms, moving vehicles with HVAC noise, cafeterias." },
          { phase: "Participant Sourcing & Consent", desc: "Deploy native speakers from verified global network with explicit biometric consent." },
          { phase: "Audio Signal QA", desc: "Automated screening for clipping, low signal-to-noise ratio, and digital distortion." },
          { phase: "Synchronized Delivery", desc: "Deliver structured WAV assets with synchronized metadata, speaker IDs, and verbatim transcripts." }
        ],
        deepDive: "ASR systems trained solely on clean read speech degrade catastrophically when deployed in real automotive cabins or reverberant rooms. DaQube collects spontaneous dialogues featuring false starts, overlapping conversation, and ambient acoustic clutter, ensuring models bridge the gap between lab benchmarks and field usage."
      },
      {
        slug: "expressive-tts",
        title: "Expressive Neural TTS & Voice Cloning",
        short: "Ultra-high-fidelity voice corpora with phonetic balance, emotional inflections, and prosodic markup for generative neural speech.",
        eyebrow: "SPEECH SYNTHESIS (TTS)",
        deliverables: [
          "Studio-grade 48kHz/96kHz 24-bit lossless recordings in whisper cleanrooms (< -60 dBFS)",
          "Phonetically balanced sentences ensuring full diphone and triphone coverage",
          "Multi-emotional expression sets: neutral, empathetic, urgent, joyful, authoritative",
          "Prosodic annotation marking pitch contours, breathing pauses, and emphasis stress"
        ],
        specifications: {
          noiseFloor: "< -60 dBFS quiet room rating, zero room reflections",
          micRigs: "Neumann U87 / Sennheiser MKH 416 into high-end preamps",
          sampling: "48kHz / 96kHz 24-bit Broadcast Wave Format (BWF)",
          phonetics: "CMU Pronouncing Dictionary, IPA phoneme mappings, explicit prosody markers"
        },
        workflow: [
          { phase: "Voice Talent Casting", desc: "Select professional native voice artists matching target brand personas and timbre." },
          { phase: "Phonetic Corpus Scripting", desc: "Generate phonetically rich text passages ensuring statistical coverage of rare phonemes." },
          { phase: "Supervised Studio Recording", desc: "Real-time acoustic engineering monitoring to eliminate sibilance, plosives, and pitch drift." },
          { phase: "Post-Processing & Manifesting", desc: "Lossless head/tail silence normalization, waveform validation, and frame-accurate alignment." }
        ],
        deepDive: "Next-generation generative voice agents require expressive range that goes far beyond monotonous reading. DaQube designs multi-style TTS recording protocols where voice actors modulate warmth, cadence, and urgency, backed by explicit legal clearance for commercial voice synthesis."
      }
    ]
  },
  {
    id: "text-collection",
    slug: "text-collection",
    aliases: ["ocr", "OCR", "text-data-collection", "language-data"],
    title: "Text Data Collection & Labeling",
    eyebrow: "04 / LANGUAGE DATA",
    image: "/images/services_text_data_collection.webp",
    summary: "Curated domain-specific text corpora, SFT instruction-response pairs, RLHF preference datasets, and multi-turn chain-of-thought demonstrations.",
    heroHighlight: "Frontier Foundation Model Alignment",
    accent: "#EC5E27",
    subpages: [
      {
        slug: "rlhf-preference",
        title: "RLHF, SFT & DPO Preference Alignment",
        short: "Curated multi-turn demonstration datasets and pairwise preference rankings created by verified domain practitioners.",
        eyebrow: "ALIGNMENT & REWARD MODELING",
        deliverables: [
          "Multi-turn instruction-response pairs with verified chain-of-thought rationale",
          "Pairwise comparison rankings (Chosen vs Rejected) with dimensional scorecards",
          "Direct Preference Optimization (DPO) and KTO formatted training matrices",
          "Domain-expert curated prompts across STEM, law, clinical medicine, and code"
        ],
        specifications: {
          modalities: "Text, Code, Structured JSON, Multimodal Prompts",
          annotatorPool: "Tier-4 Domain Specialists (PhDs, MDs, Staff Engineers, JDs)",
          qualityMetric: "Krippendorff's Alpha ≥ 0.88 Inter-Annotator Agreement",
          schemas: "OpenAI JSONL, Anthropic ChatML, HuggingFace Datasets, Parquet"
        },
        workflow: [
          { phase: "Rubric Specification", desc: "Design multi-dimensional rubrics covering helpfulness, factual accuracy, safety, and tone." },
          { phase: "Specialist Drafting", desc: "Credentialed experts draft multi-step verified solutions with explicit reasoning traces." },
          { phase: "Pairwise Preference Ranking", desc: "Blind multi-annotator review ranking 2-5 model candidates per prompt with explicit margin justification." },
          { phase: "Adjudication & Gold Testing", desc: "Senior technical leads resolve borderline splits, injecting continuous gold tasks." }
        ],
        deepDive: "Supervised fine-tuning and reward modeling require authentic human judgment. Rather than relying on uncalibrated crowd raters, DaQube structures preference tuning around strict rubrics executed by credentialed domain specialists, isolating factual grounding, reasoning adherence, and safety boundaries."
      },
      {
        slug: "domain-nlp",
        title: "Domain-Specific Multilingual NLP Corpora",
        short: "Curated parallel text corpora, entity-labeled text datasets, and low-resource language resources across medical, financial, and legal sectors.",
        eyebrow: "MULTILINGUAL NLP",
        deliverables: [
          "Human-verified parallel sentence pairs for neural machine translation and alignment",
          "Named Entity Recognition (NER) labeling specialized domain tokens (drugs, statutes, tickers)",
          "Intent classification and slot-filling dialogue datasets for multilingual agents",
          "Low-resource language corpora collected directly from native speaker communities"
        ],
        specifications: {
          domains: "Bio-pharma, legal compliance, international finance, telecommunications",
          locales: "Over 80 low-resource languages across Africa, Southeast Asia, and indigenous groups",
          formats: "CoNLL-U, BIO/BILOU tagging, HuggingFace Dataset JSONL, TMX translation memories"
        },
        workflow: [
          { phase: "Linguistic Scope Definition", desc: "Identify target language variants, registers (formal vs colloquial), and glossaries." },
          { phase: "Native Speaker Sourcing", desc: "Engage accredited native translators and bilingual domain specialists." },
          { phase: "Entity & Semantic Annotation", desc: "Apply structured entity boundary tags, disambiguating acronyms and slang." },
          { phase: "Linguistic Consistency Audit", desc: "Cross-validate terminology using automated checks against domain dictionaries." }
        ],
        deepDive: "Large language models exhibit severe reasoning degradation and cultural blind spots when deployed in non-English or low-resource locales. DaQube bridges this linguistic divide by sourcing and curating authentic parallel text and entity datasets directly within local speaker communities."
      }
    ]
  },
  {
    id: "annotation",
    slug: "annotation",
    aliases: ["image-video-annotation", "image-annotation", "video-annotation"],
    title: "Image & Video Annotation",
    eyebrow: "05 / ANNOTATION",
    image: "/images/services_annotation.webp",
    summary: "Pixel-accurate visual labeling for object detection, instance segmentation, temporal video tracking, and anatomical keypoint estimation.",
    heroHighlight: "Sub-Pixel Polygon & Keypoint Precision",
    accent: "#EC5E27",
    subpages: [
      {
        slug: "instance-segmentation",
        title: "Sub-Pixel Polygon & Semantic Segmentation",
        short: "High-density polygon masks, instance delineations, and panoptic segmentation adhering strictly to complex object contours.",
        eyebrow: "PIXEL SEGMENTATION",
        deliverables: [
          "Instance and semantic segmentation masks with sub-pixel polygon boundary adherence",
          "Complex boundary delineation: hair, machinery wiring, transparent glass, foil",
          "Hierarchical parent-child part relationships (e.g., vehicle -> tire, door, window)",
          "COCO, Pascal VOC, Darwin JSON, and binary mask PNG exports"
        ],
        specifications: {
          precision: "Sub-pixel coordinate vertex snap (< 2px boundary tolerance)",
          formats: "COCO JSON, YOLO format, Pascal VOC XML, Darwin V2 JSON, Mask PNGs",
          qualityAudit: "Inter-Annotator IoU ≥ 0.92 enforced across all production batches"
        },
        workflow: [
          { phase: "Annotation Taxonomy Definition", desc: "Establish explicit boundary inclusion rules for partial visibility, shadows, and occlusions." },
          { phase: "Polygon Mask Delineation", desc: "Annotators apply tight multi-vertex boundary polygons capturing intricate contours." },
          { phase: "Automated Geometry QA", desc: "Automated scripts detect self-intersecting polygons, slivers, and unlabelled islands." },
          { phase: "Gold-Standard Peer Review", desc: "Senior QA auditors sample 10% of each batch against reference gold ground truth." }
        ],
        deepDive: "Sloppy bounding boxes and loose polygon masks introduce gradient noise that degrades segmentation model accuracy. DaQube's certified annotators apply sub-pixel contour adherence, ensuring perception networks learn razor-sharp object boundaries in cluttered environments."
      },
      {
        slug: "tracking-keypoints",
        title: "Multi-Camera Tracking & Anatomical Keypoints",
        short: "High-framerate keypoint delineation (18 to 33 joints) and persistent cross-camera object tracking through full occlusions.",
        eyebrow: "TEMPORAL TRACKING",
        deliverables: [
          "Persistent tracking IDs across multi-camera overlapping and non-overlapping feeds",
          "Anatomical skeleton keypoint estimation (18-33 joints) with visibility/occlusion flags",
          "Dynamic keyframe interpolation with manual transition verification",
          "Zero tracking ID switches during crossing or temporal sensor dropout"
        ],
        specifications: {
          frameRates: "24, 30, 60, and 120 FPS high-speed video feeds",
          jointTaxonomy: "COCO 17-point, MediaPipe 33-point, custom industrial robot kinematic rigs",
          formats: "MOTChallenge format, COCO Video Keypoints JSON, CSV trajectories"
        },
        workflow: [
          { phase: "Dynamic Keyframe Strategy", desc: "Sample dynamic intervals based on object velocity and deformation rates." },
          { phase: "Keypoint & Boundary Fitting", desc: "Fit joint coordinates and visibility flags across contiguous frames." },
          { phase: "Temporal Continuity Audit", desc: "Review continuous playback to eliminate trajectory jitter and track swaps." },
          { phase: "Final Format Export", desc: "Deliver structured tracking manifests with persistent global IDs." }
        ],
        deepDive: "Temporal consistency is the defining failure mode of video perception models. When bounding boxes jitter frame-to-frame or tracking IDs flip when two pedestrians pass, downstream control software fails. DaQube applies temporal smoothing and multi-camera ID verification across continuous video footage."
      }
    ]
  },
  {
    id: "transcription",
    slug: "transcription",
    aliases: ["speech-to-text", "Speech-to-Text", "audio-transcription"],
    title: "Audio Transcription Services",
    eyebrow: "06 / SPEECH TO TEXT",
    image: "/images/services_transcription.webp",
    summary: "Human-reviewed audio transcription, millisecond-accurate phonetic forced alignment, speaker diarization, and linguistic ground truth for speech AI.",
    heroHighlight: "Sub-10ms Phonetic Alignment & Diarization",
    accent: "#EC5E27",
    subpages: [
      {
        slug: "phonetic-textgrid",
        title: "Sub-10ms Time-Aligned Praat TextGrids",
        short: "Sub-millisecond orthographic and phonetic transcription, forced alignment, and acoustic boundary segmentation for speech models.",
        eyebrow: "PHONETIC GROUND TRUTH",
        deliverables: [
          "Word-level and phoneme-level time-stamped alignments (Praat TextGrid / JSON)",
          "Dual transcription layers: Verbatim (with coughs, laughter, fillers) and Normalized",
          "Speaker diarization identifying turn-taking and cross-speaker speech overlaps",
          "Acoustic event tagging: sirens, background babble, keystrokes, reverberation"
        ],
        specifications: {
          alignmentPrecision: "±10ms boundary accuracy verified by certified acoustic phoneticians",
          transcriptionRules: "Custom orthographic conventions, punctuation rules, and capitalization standards",
          formats: "Praat TextGrid, ELAN EAF, CTM/STM, WebVTT, SRT, JSONL with phonetic IPA tokens"
        },
        workflow: [
          { phase: "First-Pass Transcription", desc: "Native linguists produce exact verbatim text matching acoustic utterances." },
          { phase: "Boundary Segmentation", desc: "Acoustic annotators align start and end timestamps at transition boundaries." },
          { phase: "Diarization & Event Tagging", desc: "Annotate distinct speaker identities and ambient acoustic background events." },
          { phase: "Peer Auditing & Validation", desc: "Senior phoneticians inspect random slices, calculating Word Error Rate (WER)." }
        ],
        deepDive: "Acoustic modeling requires exact alignment between the audio waveform and the phonetic stream. An offset of even 50 milliseconds introduces catastrophic gradient noise during ASR training. DaQube's phoneticians work directly in spectrogram editors to verify acoustic boundaries."
      },
      {
        slug: "clinical-transcription",
        title: "Medical & Financial Domain Transcription",
        short: "High-accuracy transcription of clinical dictations, patient-provider consultations, earnings calls, and legal depositions under strict compliance.",
        eyebrow: "SPECIALIZED TRANSCRIPTION",
        deliverables: [
          "99.5%+ character-level accuracy on complex biomedical, pharmacological, and legal terminology",
          "Full HIPAA Business Associate Agreements (BAA) with air-gapped terminal isolation",
          "De-identification (PHI/PII redaction) with cryptographic replacement tokens",
          "Structured JSON and FHIR-compatible XML clinical summaries"
        ],
        specifications: {
          accuracy: "≥ 99.5% accuracy on domain vocabularies (SNOMED, RxNorm, ICD-10)",
          compliance: "HIPAA BAA, ISO 27001 Certified, ISO 27001, automated PHI redaction",
          turnaround: "24-hour SLA on priority clinical and financial earnings batches"
        },
        workflow: [
          { phase: "Domain Scribe Assignment", desc: "Assign licensed medical transcriptionists or certified legal court reporters." },
          { phase: "Verbatim Dictation Processing", desc: "Transcribe spoken audio with specialized medical and legal terminology verification." },
          { phase: "Automated & Human PHI Scrubbing", desc: "Identify and redact sensitive names, dates, and locations under HIPAA safe harbor." },
          { phase: "Secure Vault Delivery", desc: "Deliver encrypted transcripts directly to customer electronic health record pipelines." }
        ],
        deepDive: "Clinical consultations and corporate earnings calls present extreme acoustic and terminological challenges: rapid medical jargon, medication dosage numbers, and multisyllabic pharmaceutical names. Off-the-shelf automated transcription hallucinates on these critical fields. DaQube's domain scribes ensure 99.5%+ verbatim precision."
      }
    ]
  },
  {
    id: "adas-lidar",
    slug: "adas-lidar",
    aliases: ["adas-lidar-annotation", "autonomous-systems"],
    title: "ADAS & LiDAR Data Annotation",
    eyebrow: "07 / AUTONOMOUS SYSTEMS",
    image: "/images/services_adas.webp",
    summary: "Specialized 3D LiDAR point cloud cuboids, multi-sensor camera-to-LiDAR projection, road polyline delineation, and temporal tracking for autonomous driving.",
    heroHighlight: "Sub-5cm 3D Cuboids & Sensor Fusion",
    accent: "#EC5E27",
    subpages: [
      {
        slug: "3d-cuboids",
        title: "128-Beam 3D Point Cloud Bounding Cuboids",
        short: "Dense 3D point cloud annotation, oriented bounding cuboids with 9 degrees of freedom, velocity vectors, and temporal continuity.",
        eyebrow: "3D SENSOR FUSION",
        deliverables: [
          "Oriented 3D bounding cuboids with 9-degree-of-freedom rotation and velocity vectors",
          "Dense point-cloud semantic segmentation classifying drivable surface, curb, and obstacles",
          "Camera-to-LiDAR projected fusion verifying spatial correspondence between 2D and 3D",
          "Temporal multi-frame point accumulation for tracking through occlusions"
        ],
        specifications: {
          spatialAccuracy: "Sub-5cm bounding box corner alignment in point cloud space",
          sensorTypes: "Velodyne, Ouster, Hesai 64/128-beam LiDAR, FMCW Radar, multi-camera rigs",
          formats: "KITTI, Waymo Open Dataset format, nuScenes format, ROSbag, PCD, LAS, Parquet"
        },
        workflow: [
          { phase: "Sensor Rig Calibration", desc: "Synchronize camera projection matrices with raw LiDAR point frames." },
          { phase: "3D Cuboid Fitting", desc: "Fit oriented 3D bounding boxes around vehicles, pedestrians, and debris." },
          { phase: "Temporal Continuity Linking", desc: "Propagate unique track IDs across contiguous frames, predicting velocity vectors." },
          { phase: "Geometry Validation Checks", desc: "Automated scripts verify box dimensions against physical plausibility baselines." }
        ],
        deepDive: "Autonomous driving perception networks cannot rely on 2D projections alone. Physical AI requires understanding exact 3D spatial extents, object heading, and velocity vectors. DaQube's 3D annotation suite processes raw point clouds and synchronized camera streams, enabling perception teams to detect subtle road obstacles in adverse weather."
      },
      {
        slug: "road-polylines",
        title: "Lane Marking, Road Boundary & Curb Polylines",
        short: "High-definition map vectorization, topological lane connectivity, curb delineation, and road surface attribute annotation.",
        eyebrow: "HD MAP VECTORIZATION",
        deliverables: [
          "Continuous lane-divider polylines classified by type (solid, dashed, double-yellow, botts dots)",
          "Topological graph attributes linking lanes to legal turn directions and merge zones",
          "Curb, guardrail, and road boundary polylines with height elevation markers",
          "OpenDRIVE, Lanelet2, and custom HD map JSON schema exports"
        ],
        specifications: {
          tolerance: "< 3cm lateral deviation in high-density LiDAR coordinate systems",
          attributes: "Line color, material (paint, thermoplastic, raised reflector), state of degradation",
          formats: "OpenDRIVE XML, Lanelet2 OSM, Shapefile, GeoJSON"
        },
        workflow: [
          { phase: "Point Cloud Ground-Plane Extraction", desc: "Segment drivable road surfaces and estimate ground surface normals." },
          { phase: "Polyline Vectorization", desc: "Delineate continuous lane vectors matching physical road markings." },
          { phase: "Topology Graph Assignment", desc: "Assign directional graph connectivity and intersection traversal paths." },
          { phase: "Quality Tolerance Verification", desc: "Verify lateral precision against ground-truth surveying baselines." }
        ],
        deepDive: "Level 4 autonomous driving systems require centimeter-accurate HD maps for localization and lane-keeping control. DaQube vectorizes raw road point clouds into connected topological graphs, giving autonomous vehicles safe navigation paths through complex construction zones and intersections."
      }
    ]
  },
  {
    id: "off-the-shelf",
    slug: "off-the-shelf",
    aliases: ["ots", "OTS", "off-the-shelf-datasets", "pre-collected-datasets"],
    title: "Off-the-Shelf AI Training Datasets",
    eyebrow: "08 / PRE-COLLECTED DATASETS",
    image: "/images/services_ots.webp",
    summary: "Instantly deployable, commercially licensed datasets across speech, vision, document OCR, and autonomous mobility. Accelerate your roadmap without collection lag.",
    heroHighlight: "Commercial-Ready & Legally Indemnified",
    accent: "#EC5E27",
    subpages: [
      {
        slug: "speech-catalog",
        title: "10,000+ Hour Multilingual Speech Catalog",
        short: "Pre-recorded spontaneous voice corpora, conversational dialogues, and multi-speaker audio across 45 world languages ready for immediate ingestion.",
        eyebrow: "SPEECH CATALOG",
        deliverables: [
          "10,000+ hours of spontaneous and conversational speech in 48kHz lossless WAV",
          "Verbatim and normalized transcriptions with sub-10ms Praat TextGrids",
          "Demographically balanced participant pools with signed biometric commercial releases",
          "Immediate transfer via encrypted AWS S3, Google Cloud Storage, or Azure Blob"
        ],
        specifications: {
          licensing: "Perpetual, royalty-free commercial licenses with full derivative-work rights",
          deliveryTime: "Immediate cloud transfer within 24 hours of license execution",
          qualityGuarantee: "Pre-screened against strict QA criteria with included sample test splits"
        },
        workflow: [
          { phase: "Catalog Exploration", desc: "Filter by language, dialect, acoustic scenario, and channel configuration." },
          { phase: "Sample Data Inspection", desc: "Inspect a 50-hour evaluation slice to verify compatibility with your speech pipeline." },
          { phase: "Standard Enterprise Licensing", desc: "Execute standardized commercial licensing with full IP indemnification." },
          { phase: "Instant Cloud Handoff", desc: "Direct encrypted cloud bucket-to-bucket transfer." }
        ],
        deepDive: "When project deadlines do not permit weeks of bespoke collection, DaQube's pre-packaged voice corpora provide instant momentum. Every dataset in our catalog has been ethically collected, rigorously transcribed, and legally cleared for commercial foundation model training."
      },
      {
        slug: "autonomous-catalog",
        title: "Autonomous Driving & ADAS Benchmark Datasets",
        short: "Pre-annotated 3D LiDAR point clouds, 8-camera video streams, and urban driving scenarios covering adverse weather and night driving.",
        eyebrow: "AUTONOMOUS CATALOG",
        deliverables: [
          "500,000+ frames of synchronized 3D LiDAR and multi-camera driving sequences",
          "Adverse weather scenarios: heavy rain, night low-lux, fog, snow, sun glare",
          "Oriented 3D bounding cuboids with velocity vectors and lane polylines",
          "Standardized KITTI, nuScenes, and Waymo format exports"
        ],
        specifications: {
          sensorConfigs: "64-beam & 128-beam LiDAR, 8 high-resolution HDR camera feeds, FMCW Radar",
          coverage: "Urban core, highways, suburban intersections, construction detours",
          provenance: "Full commercial training clearance with de-identified faces and license plates"
        },
        workflow: [
          { phase: "Scenario Selection", desc: "Select specific sensor configurations and target driving conditions." },
          { phase: "Test Slice Evaluation", desc: "Download a representative 1,000-frame sequence to verify coordinate calibration." },
          { phase: "Enterprise Transfer", desc: "Transfer full multi-terabyte dataset directly into your cloud storage." },
          { phase: "Optional Custom Expansion", desc: "Commission targeted custom collection add-ons to expand into niche edge cases." }
        ],
        deepDive: "Training perception models to handle dangerous edge cases—such as night-time rain glare or unexpected road debris—is prohibitively expensive to collect from scratch. DaQube's ready-to-ingest autonomous driving catalog delivers immediate training volume for autonomous vehicle programs."
      }
    ]
  }
];

export function getServiceCategory(slug) {
  if (!slug) return null;
  const s = slug.toLowerCase();
  return SERVICE_CATEGORIES.find(
    (c) => c.slug === s || c.id === s || (c.aliases && c.aliases.map((a) => a.toLowerCase()).includes(s))
  );
}

export function getServiceSubpage(categorySlug, subSlug) {
  const cat = getServiceCategory(categorySlug);
  if (!cat) return null;
  const sub = cat.subpages.find(
    (s) => s.slug === subSlug || s.slug.toLowerCase() === (subSlug && subSlug.toLowerCase())
  );
  return sub ? { ...sub, category: cat } : null;
}
