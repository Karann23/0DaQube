const image = (id, w = 1500) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;
export const services = [
    {
        slug: "image-collection",
        title: "Image Data Collection",
        short: "Purpose-built image datasets for computer vision, visual recognition, object detection and intelligent automation.",
        eyebrow: "01 / VISUAL DATA",
        image: "/images/services_image_collection.png",
        imageAlt: "Real-world image data collection for computer vision and AI training",
        video: "https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_25fps.mp4",
        intro: "Give your computer vision models the visual information they need to understand the real world. DaQube provides structured image data collection services designed around your model requirements, target categories and operational environments. From everyday objects and retail products to industrial equipment, road environments and complex real-world scenes, we collect representative image datasets that capture meaningful variations in lighting, perspective, background, distance and surroundings. Our collection workflows deliver organized, consistent and model-ready visual data, supported by metadata, defined capture guidelines and quality checks.",
        useCases: [
            "Retail product recognition and visual search",
            "Object detection and image classification",
            "Manufacturing inspection and defect detection",
            "Autonomous driving and traffic scene understanding",
            "Robotics and smart environment perception",
            "Document and scene recognition",
            "Agricultural and environmental monitoring",
            "Facial attribute and human activity research, subject to consent and applicable safeguards"
        ],
        deliverables: [
            "Custom image datasets in agreed formats and resolutions",
            "Structured folders and consistent file naming",
            "Image metadata and capture attributes",
            "Coverage across lighting, angles, backgrounds and environments",
            "Duplicate, blur and image-quality screening",
            "Dataset manifests and collection documentation",
            "Optional annotation-ready image packages"
        ],
        process: [
            {
                title: "Requirement Discovery",
                text: "Define target categories, image volumes, specifications, source requirements and collection objectives."
            },
            {
                title: "Collection Planning",
                text: "Establish capture guidelines, device requirements, environments and visual variations required for representative datasets."
            },
            {
                title: "Image Acquisition",
                text: "Collect or curate images according to approved specifications, category definitions and project requirements."
            },
            {
                title: "Quality Screening",
                text: "Review image clarity, relevance, duplicates, missing viewpoints and category coverage against agreed quality criteria."
            },
            {
                title: "Dataset Delivery",
                text: "Organize and deliver validated image assets with associated metadata, documentation and optional annotation-ready structures."
            }
        ],
        benefits: [
            "Real-world visual diversity across different environments and conditions",
            "Consistent image collection standards and documentation",
            "Better dataset coverage for computer vision applications",
            "Organized and scalable image acquisition workflows",
            "Seamless transition into image annotation and quality assurance"
        ],
        related: ["annotation", "video-collection", "document-ocr"]
    },
    {
        slug: "video-collection",
        title: "Video Data Collection",
        short: "Context-rich video datasets for action recognition, scene understanding, object tracking and temporal AI applications.",
        eyebrow: "02 / VIDEO & MOTION",
        image: "/images/services_video_collection.png",
        imageAlt: "Video data acquisition for computer vision and AI model training",
        video: "https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_25fps.mp4",
        intro: "AI systems that understand movement, activities and changing environments need more than individual images. They need video data that captures actions, interactions and events over time. DaQube provides video data collection services designed to support video understanding, action recognition, object tracking and intelligent visual systems. We structure video acquisition around specific scenarios, recording conditions, camera perspectives, activity types and environmental variations. Each collection is organized with relevant metadata and quality checks to support downstream annotation and model development.",
        useCases: [
            "Human activity and action recognition",
            "Autonomous driving and traffic monitoring",
            "Retail customer-flow and operational analysis",
            "Industrial safety and workplace activity monitoring",
            "Sports movement and performance analysis",
            "Robotics and embodied AI applications",
            "Object tracking and event detection",
            "Video surveillance analytics, subject to privacy requirements"
        ],
        deliverables: [
            "Raw and processed video files",
            "Standardized video formats and resolutions",
            "Scenario and activity metadata",
            "Timestamped video segments",
            "Frame extraction and sampling manifests",
            "Camera and recording-condition information",
            "Optional video captions and annotations",
            "Quality-reviewed video datasets"
        ],
        process: [
            {
                title: "Scenario Definition",
                text: "Identify the actions, activities, events, environments and recording scenarios required for the target AI application."
            },
            {
                title: "Capture Planning",
                text: "Define camera positions, clip duration, resolution, frame rate and recording conditions to ensure representative coverage."
            },
            {
                title: "Video Acquisition",
                text: "Record or source relevant footage based on the approved collection specification and project requirements."
            },
            {
                title: "Technical Validation",
                text: "Check frame rate, resolution, duration, file integrity, relevance, duplicates and scenario coverage."
            },
            {
                title: "Dataset Preparation",
                text: "Segment, organize and prepare video files with relevant metadata for annotation, model training and evaluation."
            }
        ],
        benefits: [
            "Temporal information for action and event recognition",
            "Diverse real-world activities and recording scenarios",
            "Structured video metadata and clip organization",
            "Consistent recording specifications and quality checks",
            "Easier integration with video annotation workflows"
        ],
        related: ["image-collection", "annotation", "multimodal-data"]
    },
    {
        slug: "audio-collection",
        title: "Speech Data Collection",
        short: "Multilingual speech, voice and conversational datasets for speech recognition, voice assistants and conversational AI.",
        eyebrow: "03 / AUDIO & SPEECH",
        image: "/images/services_speech_collection.png",
        imageAlt: "Speech and voice data recording setup for multilingual AI training",
        video: "https://videos.pexels.com/video-files/7580551/7580551-hd_1920_1080_25fps.mp4",
        intro: "Building reliable speech recognition and voice-based AI systems requires exposure to different languages, accents, pronunciations and speaking environments. DaQube provides speech data collection services designed to support automatic speech recognition (ASR), conversational AI, voice assistants and speech-processing applications. Our collection approach can incorporate regional languages, speaker diversity, natural conversations, scripted recordings and different acoustic environments. Each project follows defined recording specifications, participant requirements and consent procedures to produce structured speech datasets for AI development.",
        useCases: [
            "Automatic Speech Recognition (ASR)",
            "Voice assistants and conversational AI",
            "Multilingual voice recognition",
            "Regional language and accent recognition",
            "Wake-word and voice-command detection",
            "Call-center speech analytics",
            "Speech-to-text model training",
            "Acoustic event and sound classification"
        ],
        deliverables: [
            "Recorded speech and voice datasets",
            "Multilingual and regional language recordings",
            "Speaker and session metadata using approved fields",
            "Audio files in WAV, FLAC or other agreed formats",
            "Recording-condition metadata",
            "Prompt and script documentation",
            "Optional transcripts and timestamps",
            "Audio quality assessment reports"
        ],
        process: [
            {
                title: "Language Planning",
                text: "Define languages, dialects, accents, speaker diversity, recording locations and participant requirements."
            },
            {
                title: "Recording Design",
                text: "Prepare scripts, prompts, recording instructions, microphone specifications and consent requirements."
            },
            {
                title: "Speech Acquisition",
                text: "Collect speech samples through approved recording workflows across the required speakers, languages and environments."
            },
            {
                title: "Audio Validation",
                text: "Check background noise, clipping, silence, duration, pronunciation, file integrity and recording quality."
            },
            {
                title: "Dataset Preparation",
                text: "Organize audio files with relevant speaker, language, session and recording-condition metadata for downstream AI workflows."
            }
        ],
        benefits: [
            "Greater language, dialect and accent diversity",
            "Better representation of real-world speech patterns",
            "Consistent audio recording specifications",
            "Structured speaker and session metadata",
            "Integration with transcription and speech annotation workflows"
        ],
        related: ["transcription", "text-collection", "multimodal-data"]
    },
    {
        slug: "OCR",
        title: "Text Data Collection & Labeling",
        short: "Structured and labeled text datasets for natural language processing, large language models and intelligent language applications.",
        eyebrow: "04 / LANGUAGE DATA",
        image: "/images/services_text_data_collection.png",
        imageAlt: "Structured text data preparation and annotation for natural language processing",
        intro: "Language models and natural language processing systems depend on diverse, accurately structured text data. DaQube provides text data collection and labeling services to help organizations develop datasets for language understanding, classification, information extraction and conversational AI. We support the preparation of structured text records, language-specific datasets and human-reviewed annotations based on project-defined guidelines. From categorizing customer feedback to identifying entities and classifying conversational intent, our workflows transform unstructured language into structured training data for machine learning applications.",
        useCases: [
            "Natural Language Processing (NLP)",
            "Large Language Model (LLM) training and fine-tuning",
            "Sentiment and emotion classification",
            "Named Entity Recognition (NER)",
            "Intent and topic classification",
            "Text categorization and document classification",
            "Search relevance and semantic matching",
            "Question-answering and conversational datasets",
            "Language identification and text normalization"
        ],
        deliverables: [
            "Structured text datasets in CSV, JSONL or agreed formats",
            "Text classification labels",
            "Named entity annotations",
            "Sentiment and intent labels",
            "Language and category metadata",
            "Annotation guidelines and label definitions",
            "Duplicate and formatting checks",
            "Quality-reviewed records and validation reports"
        ],
        process: [
            {
                title: "Define Data Requirements",
                text: "Identify text sources, languages, categories, inclusion criteria and the target natural language processing tasks."
            },
            {
                title: "Design Annotation Schemas",
                text: "Establish label categories, entity boundaries, classification rules and representative examples for consistent text labeling."
            },
            {
                title: "Collect and Prepare Text",
                text: "Gather, normalize, clean and structure text records according to the approved dataset specifications."
            },
            {
                title: "Annotate and Validate",
                text: "Apply classification and entity labels with human review, consistency checks and resolution of ambiguous examples."
            },
            {
                title: "Export Datasets",
                text: "Deliver structured text records with documentation, metadata and agreed quality validation reports."
            }
        ],
        benefits: [
            "Structured and organized language datasets",
            "Consistent text annotation standards",
            "Human-reviewed text classification and entity labels",
            "Support for multilingual data requirements",
            "Training-ready datasets for NLP and language models"
        ],
        related: ["transcription", "document-ocr", "ai-evaluation"]
    },
    {
        slug: "annotation",
        title: "Image & Video Annotation",
        short: "Accurate image and video labeling for object detection, segmentation, tracking and computer vision model training.",
        eyebrow: "05 / ANNOTATION",
        image: "/images/services_annotation.png",
        imageAlt: "Image annotation interface showing object detection and computer vision labeling",
        intro: "High-quality computer vision models require more than large volumes of visual data. They need accurately labeled examples that help algorithms identify objects, understand scenes and recognize patterns. DaQube provides image and video annotation services that transform raw visual assets into structured, machine-readable training datasets. Our annotation workflows are built around project-specific taxonomies, labeling instructions, edge-case definitions and quality review processes. Whether your application requires bounding boxes, segmentation masks, keypoints or object tracking, we organize annotation around your model's requirements.",
        useCases: [
            "Object detection and localization",
            "Image classification and attribute tagging",
            "Semantic and instance segmentation",
            "Autonomous driving perception",
            "Medical image annotation, subject to applicable expertise and compliance requirements",
            "Retail product recognition",
            "Human pose and keypoint estimation",
            "Video object tracking",
            "Scene understanding and visual inspection"
        ],
        deliverables: [
            "Annotated images and video frames",
            "Bounding boxes, polygons and segmentation masks",
            "Structured annotation files",
            "COCO, YOLO, Pascal VOC or agreed export formats",
            "Annotation guidelines and class definitions",
            "Reviewer feedback and issue logs",
            "Quality assurance summaries",
            "Dataset statistics and class distributions"
        ],
        process: [
            {
                title: "Define the Annotation Schema",
                text: "Establish object classes, attributes, geometry requirements, labeling rules and edge-case definitions for the target application."
            },
            {
                title: "Pilot Annotation",
                text: "Annotate an initial sample, compare labeling interpretations and refine guidelines before scaling production."
            },
            {
                title: "Production Labeling",
                text: "Execute image and video annotation in structured batches using approved schemas and project-specific instructions."
            },
            {
                title: "Quality Assurance",
                text: "Review labels for completeness, accuracy, geometry, classification consistency and adherence to annotation guidelines."
            },
            {
                title: "Final Delivery",
                text: "Export validated annotations in the requested formats with documentation, quality reports and dataset statistics."
            }
        ],
        benefits: [
            "Consistent labeling standards across datasets",
            "Detailed object-level information for computer vision",
            "Human-led quality review and validation",
            "Flexible annotation formats and schemas",
            "Scalable visual data preparation for AI training"
        ],
        related: ["image-collection", "video-collection", "ai-evaluation"]
    },
    {
        slug: "Speech-to-Text",
        title: "Audio Transcription Services",
        short: "Human-reviewed audio transcription and speech-to-text datasets for language models, search and conversational AI.",
        eyebrow: "06 / SPEECH TO TEXT",
        image: "/images/services_transcription.png",
        imageAlt: "Audio transcription and speech-to-text processing on a computer",
        intro: "Audio transcription transforms spoken language into structured, searchable text that can be used across business applications and AI development workflows. DaQube provides audio transcription services designed to convert recorded conversations, interviews, meetings, podcasts and other audio content into structured text. Our workflows can follow verbatim or clean-read transcription conventions, include timestamps and speaker identification, and support multilingual audio according to project requirements. We also support specialized transcription preparation for automatic speech recognition (ASR) training, speech analytics and conversational AI development.",
        useCases: [
            "Interview and meeting transcription",
            "Podcast and webinar transcription",
            "Call-center and customer-support transcription",
            "Multilingual speech-to-text datasets",
            "Subtitle and caption preparation",
            "Automatic Speech Recognition (ASR) training and evaluation",
            "Speaker identification and diarization",
            "Speech analytics and conversation analysis",
            "Audio-to-text conversion for searchable content"
        ],
        deliverables: [
            "Human-reviewed transcripts",
            "Verbatim and clean-read transcription",
            "Speaker labels and diarization",
            "Word-level or segment-level timestamps",
            "Punctuation and formatting",
            "Non-speech event labels where required",
            "SRT, VTT, TXT, DOCX or JSON outputs",
            "Optional translation and subtitle files"
        ],
        process: [
            {
                title: "Audio Assessment",
                text: "Review recording quality, language, speaker count and transcription requirements before beginning the transcription workflow."
            },
            {
                title: "Guideline Development",
                text: "Establish transcription conventions, speaker identification rules, timestamp requirements and formatting specifications."
            },
            {
                title: "Transcription",
                text: "Convert recorded speech into structured text using the approved language, formatting and transcription conventions."
            },
            {
                title: "Human Review",
                text: "Review unclear words, speaker changes, overlapping conversations, punctuation and transcription inconsistencies."
            },
            {
                title: "Final Delivery",
                text: "Export validated transcripts in the agreed formats with timestamps, speaker labels and supporting documentation."
            }
        ],
        benefits: [
            "Readable and structured audio transcripts",
            "Multilingual transcription support",
            "Speaker-level information and timestamps",
            "Consistent transcription conventions",
            "Useful outputs for speech AI and NLP workflows"
        ],
        related: ["audio-collection", "text-collection", "ai-evaluation"]
    },
    {
        slug: "adas-lidar",
        title: "ADAS & LiDAR Data Annotation",
        short: "Specialized 2D, 3D and sensor-fusion annotation for autonomous driving, ADAS and intelligent mobility systems.",
        eyebrow: "07 / AUTONOMOUS SYSTEMS",
        image: "/images/services_adas.png",
        imageAlt: "3D LiDAR point cloud visualization for autonomous driving and ADAS annotation",
        intro: "Advanced Driver Assistance Systems (ADAS) and autonomous driving technologies depend on accurate perception of the surrounding environment. These systems process information from cameras, LiDAR and other sensors to identify vehicles, pedestrians, road boundaries, traffic signs and changing road conditions. DaQube provides ADAS and LiDAR data annotation services to help transform raw sensor data into structured datasets for autonomous driving research, perception systems and machine learning applications. Our workflows support 2D image annotation, 3D point cloud labeling, object tracking and sensor-fusion annotation, following project-specific taxonomies and quality requirements.",
        useCases: [
            "Autonomous vehicle perception",
            "Advanced Driver Assistance Systems (ADAS) development and validation",
            "3D object detection and localization",
            "Road-user and pedestrian detection",
            "Traffic sign and traffic signal recognition",
            "Lane and road boundary detection",
            "LiDAR point cloud segmentation",
            "Multi-object tracking",
            "Sensor fusion and scene understanding",
            "Driving scenario classification"
        ],
        deliverables: [
            "Annotated LiDAR point clouds",
            "2D and 3D bounding box labels",
            "Semantic and instance segmentation outputs",
            "Object tracking IDs and trajectory information",
            "Camera and sensor alignment metadata where provided",
            "Road-scene and object classification labels",
            "Structured annotation files",
            "Annotation guidelines and quality review reports"
        ],
        process: [
            {
                title: "Sensor and Task Assessment",
                text: "Identify available camera, LiDAR and other sensor data, annotation requirements and target perception tasks."
            },
            {
                title: "Class and Schema Definition",
                text: "Establish object categories, 3D geometry rules, attributes, occlusion definitions and tracking conventions."
            },
            {
                title: "Annotation Execution",
                text: "Label 2D images, 3D point clouds and sequential driving scenes according to approved project specifications."
            },
            {
                title: "Technical Validation",
                text: "Review geometry, class consistency, object coverage, tracking continuity and sensor alignment against agreed quality criteria."
            },
            {
                title: "Dataset Delivery",
                text: "Export validated annotations with documentation, structured metadata and agreed dataset formats."
            }
        ],
        benefits: [
            "Structured 3D perception data for autonomous systems",
            "Consistent object classification and localization",
            "Support for complex road and driving scenarios",
            "Multi-sensor annotation workflows",
            "Better-prepared datasets for autonomous driving development"
        ],
        related: ["annotation", "video-collection", "image-collection"]
    },
    {
        slug: "OTS",
        title: "Off-the-Shelf AI Training Datasets",
        short: "Pre-collected and structured datasets across images, video, audio, speech and text for machine learning and AI development.",
        eyebrow: "08 / PRE-COLLECTED DATASETS",
        image: "/images/services_ots.png",
        imageAlt: "Structured AI training datasets for machine learning and multimodal model development",
        intro: "Building an AI model from scratch often requires significant time and resources to collect, organize and prepare training data. Off-the-Shelf (OTS) datasets offer a practical starting point by providing access to previously collected data that can be evaluated for specific machine learning requirements. DaQube's OTS dataset offering is designed to help organizations explore structured data across visual, audio, speech and text categories. Dataset selection can be based on data type, category, language, metadata, annotation availability and intended application. Each dataset should be evaluated against its documentation, provenance, permitted usage and licensing conditions before deployment.",
        useCases: [
            "Machine learning model training",
            "AI model fine-tuning",
            "Computer vision development",
            "Natural Language Processing (NLP)",
            "Speech recognition systems",
            "Multimodal AI development",
            "AI benchmarking and evaluation",
            "Research and prototype development",
            "Industry-specific machine learning applications"
        ],
        deliverables: [
            "Dataset descriptions and specifications",
            "Available data samples for evaluation, where permitted",
            "Structured image, video, audio or text files",
            "Annotation and metadata documentation",
            "Dataset size and category information",
            "Data provenance and licensing information",
            "Known limitations and collection details",
            "Optional dataset customization and additional labeling"
        ],
        process: [
            {
                title: "Requirement Identification",
                text: "Understand the target model, application, data modality, dataset size and technical requirements."
            },
            {
                title: "Dataset Discovery",
                text: "Identify potentially relevant datasets based on category, coverage, language, annotations and technical specifications."
            },
            {
                title: "Documentation and Review",
                text: "Evaluate available samples, metadata, provenance, licensing conditions and suitability for the intended application."
            },
            {
                title: "Dataset Preparation",
                text: "Organize and validate the selected dataset against agreed requirements, formats and quality criteria."
            },
            {
                title: "Delivery and Support",
                text: "Provide the dataset with relevant documentation and optional annotation, customization and data preparation services."
            }
        ],
        benefits: [
            "Faster access to existing AI training data",
            "Reduced initial data collection effort",
            "Multiple data modalities and dataset categories",
            "Documented dataset specifications and metadata",
            "Flexible options for customization and annotation"
        ],
        related: ["image-collection", "video-collection", "audio-collection", "annotation"]
    }
];

export function getServiceBySlug(slug) {
  if (!slug) return null;
  const s = slug.toLowerCase().replace(/[-_]/g, "");
  return services.find((item) => {
    const itemSlug = item.slug.toLowerCase().replace(/[-_]/g, "");
    if (itemSlug === s) return true;
    if (item.aliases && item.aliases.some((a) => a.toLowerCase().replace(/[-_]/g, "") === s)) return true;
    if (s === "speechdatacollection" && (itemSlug === "audiocollection" || itemSlug === "speechcollection")) return true;
    if (s === "audiotranscriptionservices" && (itemSlug === "speechtotext" || itemSlug === "transcription")) return true;
    if (s === "textdatacollectionlabeling" && (itemSlug === "ocr" || itemSlug === "textcollection")) return true;
    if (s === "offtheshelfaitrainingdatasets" && (itemSlug === "ots" || itemSlug === "offtheshelf")) return true;
    if (s === "imagevideoannotation" && itemSlug === "annotation") return true;
    return false;
  });
}
export const articles = [
    { slug: "why-data-coverage-matters", title: "Why Data Coverage Matters More Than Dataset Size", category: "DATA STRATEGY", readTime: "5 min read", date: "October 2026", excerpt: "A large dataset can still leave a model unprepared for the conditions it will meet. Coverage starts with the task, not the file count.", image: image("photo-1518770660439-4636190af475"), imageAlt: "Close-up of technology components", intro: "Dataset size is easy to count. Coverage is harder—and often more useful to reason about. A model can see millions of examples and still struggle when lighting changes, a phrase is spoken with an unfamiliar accent, or a document arrives in a layout it has rarely encountered.", sections: [{ heading: "Start with the operating environment", paragraphs: ["Before collecting data, list the situations the system is expected to handle: environments, devices, user groups, languages, object types, background conditions and known edge cases. This becomes a coverage map rather than a vague request for more examples.", "The map should reflect actual product use. A retail vision model may need shelves with different packaging and occlusion. A speech system may need variation in speaking rate, room acoustics and regional vocabulary. The right dimensions depend on the task."] }, { heading: "Measure gaps, not just totals", paragraphs: ["Track how examples are distributed across the dimensions that matter. A dataset with balanced class counts can still be unbalanced by lighting, geography or recording conditions. A simple coverage matrix often reveals missing combinations before training begins.", "Do not create every possible combination blindly. Prioritize by likely frequency, impact of failure, risk and the cost of collecting representative examples. Document the rationale so the plan can evolve with the product."] }, { heading: "Connect collection to evaluation", paragraphs: ["Coverage planning should inform both the training set and the evaluation set. Keep evaluation examples that test meaningful variations, and avoid letting near-duplicates leak across splits. Where appropriate, use separate collection windows or source groups to test generalization.", "Finally, review errors after model evaluation. Repeated failure patterns can indicate a missing slice, ambiguous label definition or a mismatch between the data and the deployment environment."] }], takeaway: "Build a coverage plan before scaling collection. The goal is not simply more data—it is evidence that the dataset represents the task the model must perform." },
    { slug: "annotation-guidelines-that-scale", title: "How to Write Annotation Guidelines That Scale", category: "ANNOTATION", readTime: "6 min read", date: "October 2026", excerpt: "Consistent labels come from shared decisions. Strong guidelines make the easy cases quick and the difficult cases predictable.", image: image("photo-1535378620166-273708d44e4c"), imageAlt: "Digital interface showing technical analysis", intro: "Annotation guidelines are the operating manual for a dataset. When definitions are vague, two careful annotators can make different choices and both believe they are right. A scalable guideline reduces that ambiguity before it becomes expensive to correct.", sections: [{ heading: "Define labels operationally", paragraphs: ["A label name alone is not a definition. Explain what qualifies, what does not, how to treat partial visibility and which label wins when categories overlap. Use observable criteria rather than assumptions about intent.", "For visual tasks, specify geometry rules, occlusion handling, minimum visibility and whether truncated objects should be labeled. For text tasks, specify boundary rules, nested entities and how to handle misspellings or mixed-language spans."] }, { heading: "Use examples and counterexamples", paragraphs: ["Include clear positives, clear negatives and borderline cases. Counterexamples are especially valuable because they show where a label should stop. Keep examples close to the decision rule they illustrate.", "Create a short decision tree for frequent ambiguities. If an annotator must repeatedly ask a project lead the same question, the guideline likely needs another example or a clearer rule."] }, { heading: "Calibrate before production", paragraphs: ["Run a pilot batch and compare annotations. Review disagreement patterns, update the guideline and repeat until the team can apply the rules consistently enough for the project's acceptance criteria.", "During production, track recurring questions and changes. Version the guideline, record the date a rule changed and decide whether earlier batches need re-review. This keeps the dataset coherent as the project grows."] }], takeaway: "A scalable guideline is specific, example-rich, versioned and tested on real edge cases before production work accelerates." },
    { slug: "building-a-useful-speech-dataset", title: "Building a Useful Speech Dataset Across Languages and Environments", category: "AUDIO & SPEECH", readTime: "5 min read", date: "September 2026", excerpt: "Language coverage is more than a list of locales. Recording conditions, prompts and transcript conventions shape how useful speech data becomes.", image: image("photo-1590602847861-f357a9332bbc"), imageAlt: "Audio recording microphone and headphones", intro: "Speech data quality depends on the relationship between what was said, how it was recorded and how it is represented. A useful collection plan makes those factors explicit instead of treating every audio file as interchangeable.", sections: [{ heading: "Plan language and speaker variation", paragraphs: ["Define the target languages and locales, then decide which variation matters for the intended product: regional vocabulary, speaking rate, conversational versus read speech, or domain-specific terminology. Collect only attributes that are justified by the task and appropriate to handle.", "Prompts should cover the vocabulary and interactions expected in deployment without forcing every speaker into an unnatural style. If spontaneous speech matters, scripted reading alone will not represent the full task."] }, { heading: "Control recording quality", paragraphs: ["Specify formats, sample rates, duration, clipping limits, acceptable background noise and file naming. Recording instructions should be easy to follow on the devices participants actually use.", "A quality check should distinguish technical problems from useful real-world variation. Noise that makes speech unintelligible may be a defect; ordinary room acoustics may be an important part of the target environment."] }, { heading: "Keep audio and transcripts aligned", paragraphs: ["Decide whether transcripts are verbatim or normalized, how to mark disfluencies, how to label speakers and whether timestamps are required. These conventions influence both training and evaluation.", "Review a sample early. Clear examples of difficult words, overlapping speech and non-speech sounds reduce disagreement and make later batches easier to compare."] }], takeaway: "A useful speech dataset is deliberately varied, technically documented and paired with transcript conventions that match the model's intended job." },
    { slug: "human-feedback-for-language-models", title: "What Makes Human Feedback Useful for Language Model Evaluation?", category: "AI EVALUATION", readTime: "6 min read", date: "September 2026", excerpt: "Preference labels are only as useful as the question, rubric and context that produced them.", image: image("photo-1553877522-43269d4ea984"), imageAlt: "People collaborating around a table", intro: "Human feedback can help teams compare model outputs and identify shortcomings, but a preference label without a clear criterion is difficult to interpret. Evaluation becomes more useful when the task, rubric and context are explicit.", sections: [{ heading: "Separate the dimensions", paragraphs: ["A response may be helpful but factually weak, safe but incomplete, or concise but poorly aligned with the instruction. If evaluators are asked to choose the 'best' answer without guidance, they may weigh these dimensions differently.", "Define the dimensions relevant to the product and decide whether they should be scored separately or combined. Include examples of severe errors and explain when a small style preference should not outweigh a substantive issue."] }, { heading: "Make comparisons fair", paragraphs: ["For pairwise ranking, present candidates with the same prompt and relevant context. Randomize order where appropriate and provide an option for ties or neither response meeting the bar, if that reflects the task.", "Calibration examples help reviewers learn the rubric. Track disagreement and investigate whether it reflects unclear instructions, missing context or genuine ambiguity rather than assuming every difference is annotator error."] }, { heading: "Turn scores into action", paragraphs: ["Summaries should go beyond an average score. Group errors by type, severity and scenario, then connect those patterns to potential improvements in prompts, training data, policy or evaluation coverage.", "Keep a record of the rubric version and evaluation conditions. This makes later comparisons more meaningful and helps teams distinguish model changes from changes in how the evaluation was conducted."] }], takeaway: "Human feedback is strongest when the evaluation question is precise, reviewers are calibrated and results lead to a documented next step." }
];
export const caseStudies = [
    {
        slug: "autonomous-lidar-sensor-fusion",
        title: "3D LiDAR & Multi-Camera Sensor Fusion for Level 4 Autonomous Mobility",
        industry: "Autonomous Vehicles & Robotics",
        type: "Production Case Study",
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=85",
        imageAlt: "Autonomous vehicle equipped with LiDAR sensors and cameras",
        summary: "Generating 1.2M sub-5cm oriented 3D bounding cuboids and dense point-cloud semantic segmentation synchronized with 8-camera video streams.",
        challenge: "Dynamic occlusion during heavy urban traffic, rain-induced laser backscatter, and temporal tracking ID swaps when vehicles cross intersections. The perception pipeline required ground truth capable of training multi-modal sensor fusion networks with sub-5cm corner alignment tolerances.",
        approach: [
            "Extrinsic camera-to-LiDAR calibration verification using automated projection matrix scripts.",
            "Oriented 3D cuboid fitting with 9-degree-of-freedom rotation and continuous velocity vector calculation.",
            "Temporal track-ID linking across 120-frame continuous sequences through full vehicle occlusions.",
            "Double-blind peer review with automated collision-box geometry plausibility filters."
        ],
        workflow: [
            "Sensor Stream Synchronization & Ingestion",
            "3D Ground-Plane Estimation & Point Normalization",
            "Cuboid Delineation & Temporal Link Tracking",
            "Multi-Camera Sensor Projection Audit",
            "KITTI / Waymo Open Dataset Format Delivery"
        ],
        deliverables: [
            "1,200,000 calibrated 3D bounding cuboids with velocity vectors",
            "Dense point-cloud semantic segmentation masks (ground, curb, obstacles)",
            "Topologically verified polyline road marking vectors",
            "Validation reports certifying Inter-Annotator Agreement IoU ≥ 0.93"
        ],
        note: "Delivered under air-gapped ISO 27001 cleanroom protocols with encrypted AWS S3 transfer."
    },
    {
        slug: "frontier-llm-alignment",
        title: "Supervised Fine-Tuning & Direct Preference Optimization (DPO) for a 70B Frontier LLM",
        industry: "Generative AI & Foundation Models",
        type: "Production Case Study",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85",
        imageAlt: "Neural network representation of artificial intelligence alignment",
        summary: "Curating 85,000 verified multi-turn expert reasoning demonstrations and pairwise preference scorecards across STEM, medicine, and software architecture.",
        challenge: "Web pre-training corpora saturation and generic crowd raters producing superficial, sycophantic responses. The foundation model team needed rigorous chain-of-thought demonstrations authored by verified domain specialists (PhDs, MDs, Staff Engineers) with strict factual attribution.",
        approach: [
            "Assembled a Tier-4 network of 450 verified domain specialists across 22 disciplines.",
            "Authored multi-dimensional scoring rubrics covering instruction adherence, reasoning validity, conciseness, and safety neutrality.",
            "Generated pairwise chosen-vs-rejected completion trajectories with explicit margin rationale.",
            "Continuous gold-task calibration preventing rater drift and enforcing Krippendorff’s Alpha ≥ 0.89."
        ],
        workflow: [
            "Domain Rubric Specification & Taxonomy Design",
            "Credentialed Specialist Response Drafting",
            "Blind Multi-Rater Pairwise Ranking & Scoring",
            "Lead Adjudication & Citation Attribution Check",
            "HuggingFace Datasets & Parquet Export"
        ],
        deliverables: [
            "85,000 multi-turn instruction-response demonstration pairs",
            "160,000 pairwise preference comparisons formatted for DPO/KTO training",
            "Comprehensive failure-mode taxonomy categorizing model hallucinations",
            "Clean IP provenance documentation and zero training data contamination guarantee"
        ],
        note: "All prompts insulated from public web scrape to preserve closed-circuit evaluation integrity."
    },
    {
        slug: "clinical-diagnostic-ocr",
        title: "Cell-Accurate Tabular OCR & Ground Truth for Clinical Diagnostics",
        industry: "Healthcare & Biomedical NLP",
        type: "Production Case Study",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
        imageAlt: "Medical diagnosis and clinical laboratory records analysis",
        summary: "Extracting complex nested tables, spanning headers, and handwritten physician notes from 500,000 clinical records under strict HIPAA compliance.",
        challenge: "Standard off-the-shelf OCR engines failed to parse multi-page medical test panels with irregular grid layouts, skewed mobile photos, and handwritten clinical margin notes, introducing dangerous numeric hallucinations in lab values.",
        approach: [
            "Executed full HIPAA Business Associate Agreements (BAA) with air-gapped VDI isolation.",
            "Engineered reading-order directed acyclic graphs linking test parameter labels to numeric values and reference units.",
            "Double-blind multi-pass transcription of critical numerical and diagnostic fields achieving 99.9% character-level accuracy.",
            "Standardized outputs into FHIR-compliant structured JSON schema with pixel polygon coordinates."
        ],
        workflow: [
            "HIPAA Compliance & De-Identification Protocol",
            "Document Layout & Table Cell Segmentation",
            "Hierarchical Key-Value Linkage & Directed Graph Mapping",
            "Double-Blind Numeric Value Verification",
            "FHIR JSON & ALTO XML Handoff"
        ],
        deliverables: [
            "500,000 annotated clinical records with cell-level polygon ground truth",
            "Hierarchical key-value linkages for complex lab test panels",
            "Handwritten clinical note transcription with explicit uncertainty flags",
            "Full HIPAA audit logs and cryptographic data purge verification certificates"
        ],
        note: "Processed entirely within air-gapped, ISO 27001 Certified compliant computing enclaves."
    },
    {
        slug: "multilingual-speech-pipeline",
        title: "Planning a Multilingual Speech Collection Pipeline Across 140 Micro-Dialects",
        industry: "Speech & Acoustic Intelligence",
        type: "Production Case Study",
        image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=85",
        imageAlt: "Studio microphone for speech recording",
        summary: "Capturing 15,000 hours of spontaneous in-cabin and ambient voice corpora across 140 regional dialects with sub-10ms Praat phonetic alignment.",
        challenge: "Voice assistants frequently fail outside standardized broadcast accents, exhibiting catastrophic word error rate (WER) spikes in real-world reverberant environments, moving vehicles, and noisy public spaces.",
        approach: [
            "Deployed native acoustic collectors across 140 regional micro-locales with signed biometric consent.",
            "Calibrated multi-microphone array rigs capturing synchronized near-field and far-field 48kHz 24-bit WAV audio.",
            "Designed spontaneous conversational prompt matrices eliciting natural hesitation, interruptions, and overlapping speech.",
            "Trained phonetic transcribers using Praat TextGrid for frame-accurate word and phoneme boundary alignment."
        ],
        workflow: [
            "Linguistic Locale Quota & Hardware Rig Configuration",
            "In-Field Consented Voice Capture & SNR Screening",
            "Verbatim Orthographic & Phonetic Transcription",
            "Speaker Diarization & Non-Speech Acoustic Tagging",
            "Synchronized BWF WAV & JSONL Delivery"
        ],
        deliverables: [
            "15,000 hours of spontaneous conversational audio in 48kHz 24-bit uncompressed WAV",
            "Sub-10ms word-level and phoneme-level time-stamped Praat TextGrid alignments",
            "Multi-speaker diarization manifests with calibrated SNR decibel metrics",
            "100% GDPR, CCPA, and Illinois BIPA compliant explicit opt-in model releases"
        ],
        note: "Recorded across verified ambient conditions including moving automotive cabins and noisy cafeterias."
    },
    {
        slug: "retail-shelf-vision",
        title: "60 FPS Visual Tracking & Hand-Object Recognition Pipeline for Automated Retail",
        industry: "Retail & Computer Vision",
        type: "Production Case Study",
        image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=1200&q=85",
        imageAlt: "Retail store shelves with organized products and vision tracking",
        summary: "Annotating 800,000 high-speed video frames with sub-pixel polygon masks, 21-point hand skeleton keypoints, and persistent customer re-identification.",
        challenge: "Cashierless checkout systems must resolve rapid hand-object interactions, product grab-and-replace events, and severe customer occlusion across multiple ceiling-mounted camera feeds without tracking ID swaps.",
        approach: [
            "Established dynamic keyframe sampling algorithms focusing rater attention on interaction transition points.",
            "Labeled 21 anatomical hand keypoints and pixel-tight item boundary polygons.",
            "Propagated persistent track IDs across multi-camera overlapping and non-overlapping viewpoints.",
            "Audited frame-to-frame boundary jitter to ensure temporal consistency for video control models."
        ],
        workflow: [
            "Multi-Camera Rig Ingestion & Perspective Synchronization",
            "Temporal Keyframe Sampling & Dynamic Interpolation",
            "Hand Keypoint & Object Polygon Mask Delineation",
            "Cross-Camera Persistent Re-ID Continuity Audit",
            "COCO Video & Darwin JSON Schema Export"
        ],
        deliverables: [
            "800,000 temporal video frames annotated with pixel-tight instance masks",
            "Persistent tracking trajectories with zero ID switches during multi-shopper occlusions",
            "Hand-object contact event timestamp metadata (start, pick, return)",
            "Automated IoU quality validation scorecards"
        ],
        note: "Tested on complex retail packaging variations including reflective foils and transparent plastics."
    },
    {
        slug: "adversarial-red-teaming",
        title: "Multi-Turn Adversarial Red Teaming & Harm Auditing for Autonomous Agents",
        industry: "AI Safety & Offensive Security",
        type: "Production Case Study",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=85",
        imageAlt: "Cyber security matrix representing offensive AI testing",
        summary: "Executing 5,000 adversarial jailbreak trajectories, indirect prompt injection probes, and tool-use privilege escalation audits on frontier agentic systems.",
        challenge: "Autonomous foundation agents with tool access (APIs, databases, web browsers) introduce severe privilege escalation surfaces: indirect prompt injection via ingested PDFs, multilingual encoded jailbreaks, and recursive policy overrides.",
        approach: [
            "Formed an offensive testing squad of ethical hackers, forensic linguists, and offensive security researchers.",
            "Constructed adversarial exploit trees mapped directly to the MITRE ATLAS and OWASP Top 10 for LLMs matrices.",
            "Synthesized successful high-yield manual jailbreaks into automated boundary perturbation suites.",
            "Authored balanced refusal demonstration pairs that decline hazardous payloads neutrally without false-refusal drift."
        ],
        workflow: [
            "Agent Threat Modeling & Tool Interface Attack Surface Mapping",
            "Manual Multi-Turn Offensive Testing & Bypass Discovery",
            "Adversarial Payload Mutation & Boundary Stressing",
            "Safety Refusal Dataset Synthesis (Chosen Defense Trajectories)",
            "MITRE ATLAS Mapped Vulnerability Matrix & Executive Audit Report"
        ],
        deliverables: [
            "5,000 multi-turn exploit trajectories with full step-by-step jailbreak logs",
            "Comprehensive vulnerability matrix with severity scoring (CVSS mapped)",
            "Safety alignment fine-tuning dataset containing neutral refusals",
            "Remediation guidance report for prompt guardrails and tool authorization policies"
        ],
        note: "Conducted under strict NDA and clean-room security protocols prior to model public release."
    }
];
