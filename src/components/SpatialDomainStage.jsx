import { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Car,
  ShoppingBag,
  HeartPulse,
  Bot,
  Shield,
  Orbit,
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  Camera,
  Activity,
  Shirt,
  Glasses,
  Trees,
  Landmark,
  Waves,
  Users2,
  Mic,
  MessageSquare,
  FileText,
  Boxes,
  Layers,
  Crosshair,
  Headphones
} from "lucide-react";
import "./SpatialDomainStage.css";

// ============================================================================
// SERVICE DOMAIN REGISTRY
// Inspired by GTS.ai classifications, ordered by market project demand / trend,
// with concise, human-friendly 1-2 lines and use cases inspired by LXT.ai.
// STRICTLY IMAGE-ONLY (No video player or stream options).
// ============================================================================

export const SERVICE_DOMAINS_MAP = {
  // 1. IMAGE DATA COLLECTION (All 17 GTS.ai Categories Ranked by Market Demand)
  "image-collection": [
    {
      id: "automotive-data",
      badge: "Automotive Perception",
      title: "Automotive Data Collection",
      icon: Car,
      summary: "High-resolution road and street photos captured across varied traffic conditions, weather patterns, and camera angles.",
      photoUrl: "/images/Solutions/Image Collection/ADAS_card.jpg",
      photoLabel: "Surround-View Automotive Road Array",
      useCases: [
        "Pedestrian detection and crosswalk safety monitoring",
        "Lane line, curb, and drivable road boundary recognition",
        "Traffic sign, signal, and lane arrow classification",
        "Adverse weather and low-light night driving perception"
      ]
    },
    {
      id: "healthcare-data",
      badge: "Clinical Diagnostic",
      title: "Healthcare Data Collection",
      icon: HeartPulse,
      summary: "Standardized medical and clinical photography collected across diverse demographics under controlled clinical lighting.",
      photoUrl: "/images/Solutions/Image Collection/Heathcare_card.jpg",
      photoLabel: "Standardized Clinical Diagnostic Capture",
      useCases: [
        "Skin lesion and dermatology classification",
        "Surgical tool and organ contour tracking",
        "Cellular pathology and microscopy slice scans",
        "Wound healing and recovery progress monitoring"
      ]
    },
    {
      id: "human-interactions-expressions",
      badge: "Human Biometrics",
      title: "Human Interactions & Expressions",
      icon: Users2,
      summary: "Diverse facial photos and human emotional expressions captured across global ethnicities, age groups, and illumination levels.",
      photoUrl: "/images/Solutions/Image Collection/Human Interactions & Expressions_card.jpg",
      photoLabel: "Demographic Facial & Expression Bank",
      useCases: [
        "Facial recognition and biometric identity verification",
        "Anti-spoofing and liveness detection models",
        "Eye gaze, pupil dilation, and attention tracking",
        "Emotion and micro-expression classification"
      ]
    },
    {
      id: "retail-food",
      badge: "Retail Perception",
      title: "Retail & Food Dataset Collection",
      icon: ShoppingBag,
      summary: "Real-world supermarket shelf and packaged grocery photos covering thousands of items with natural lighting and package variations.",
      photoUrl: "/images/Solutions/Image Collection/Retail & Food Dataset Collection_card.jpg",
      photoLabel: "Supermarket Shelf SKU Manifest",
      useCases: [
        "Automated retail checkout and visual item search",
        "Shelf inventory and out-of-stock item alerts",
        "Planogram compliance and brand shelf share tracking",
        "Damaged packaging and dented barcode detection"
      ]
    },
    {
      id: "surveillance-security",
      badge: "Security & Defense",
      title: "Surveillance & Security",
      icon: Shield,
      summary: "Wide-area security camera and thermal infrared photos for automated facility monitoring, safety alerts, and perimeter defense.",
      photoUrl: "/images/Solutions/Image Collection/Surveillance & Security_card.png",
      photoLabel: "Perimeter Security Camera Array",
      useCases: [
        "Perimeter intrusion and unauthorized access alerts",
        "Crowd density and queue monitoring in public transit",
        "Unattended baggage and abandoned object alerts",
        "Nighttime thermal infrared perimeter surveillance"
      ]
    },
    {
      id: "document-dataset",
      badge: "Document Intelligence",
      title: "Document Dataset Collection",
      icon: FileText,
      summary: "Scanned and photographed business documents, invoices, receipts, and multilingual forms for optical character recognition.",
      photoUrl: "/images/Solutions/Image Collection/Document Dataset Collection_card.png",
      photoLabel: "Financial Invoices & Forms Capture",
      useCases: [
        "Automated invoice, receipt, and tax form parsing",
        "Multilingual handwriting and cursive digit recognition",
        "Identity card and passport document verification",
        "Complex table and key-value pair extraction"
      ]
    },
    {
      id: "object-specific-scenarios",
      badge: "Industrial & Robotics",
      title: "Object & Specific Scenarios Collections",
      icon: Boxes,
      summary: "Multi-angle photos of physical objects, industrial machinery parts, and varied indoor and outdoor operational environments.",
      photoUrl: "/images/Solutions/Image Collection/Object & Specific Scenarios Collections_card.jpg",
      photoLabel: "Industrial Component & Tool Inspection",
      useCases: [
        "Manufacturing surface defect and scratch inspection",
        "Robotic pick-and-place part localization",
        "Household and office object categorization",
        "Warehouse package and pallet tracking"
      ]
    },
    {
      id: "human-body-anatomy",
      badge: "Human Kinematics",
      title: "Human Body & Anatomy",
      icon: Activity,
      summary: "Full-body posture, hand gesture, and anatomical photos captured across diverse body types for kinematic pose estimation.",
      photoUrl: "/images/Solutions/Image Collection/Human Body & Anatomy_card.jpg",
      photoLabel: "Full-Body Kinematic Pose Dataset",
      useCases: [
        "33-point skeletal joint and pose estimation",
        "Hand gesture and finger tracking for UI control",
        "Ergonomic posture analysis and workplace safety",
        "Physical therapy and gait rehabilitation tracking"
      ]
    },
    {
      id: "sports-activities",
      badge: "Athletic Dynamics",
      title: "Sports & Activities",
      icon: Activity,
      summary: "High-speed action photos capturing athlete movements, equipment trajectories, and live game situations across sporting arenas.",
      photoUrl: "/images/Solutions/Image Collection/Sports & Activities_card.webp",
      photoLabel: "Athletic Arena & Sprint Capture",
      useCases: [
        "Player tracking and movement analytics",
        "Automated referee line-call assistance",
        "Athlete technique and form evaluation",
        "Sports broadcast highlight generation"
      ]
    },
    {
      id: "fashion-apparel",
      badge: "Fashion & Apparel",
      title: "Fashion & Apparel",
      icon: Shirt,
      summary: "Multi-angle clothing and apparel photos capturing different fabrics, fits, and draping across diverse model body types.",
      photoUrl: "/images/Solutions/Image Collection/Fashion & Apparel_card.jpg",
      photoLabel: "Studio Fashion & Fabric Catalog",
      useCases: [
        "Virtual fitting room and try-on applications",
        "E-commerce visual product search and matching",
        "Fabric texture, pattern, and color classification",
        "Personalized outfit styling recommendations"
      ]
    },
    {
      id: "virtual-reality-environments",
      badge: "Spatial Computing",
      title: "Virtual Reality (VR) Environments",
      icon: Glasses,
      summary: "First-person perspective photos and 360-degree panoramic room captures built for spatial headsets and smart glasses.",
      photoUrl: "/images/Solutions/Image Collection/Virtual Reality (VR) Environments_card.avif",
      photoLabel: "360-Degree Panoramic Room Capture",
      useCases: [
        "First-person smart glasses user perspective models",
        "3D room depth mapping and surface meshing",
        "Virtual object placement and natural occlusion",
        "Hand-to-object spatial interaction tracking"
      ]
    },
    {
      id: "environmental-urban",
      badge: "Smart Cities",
      title: "Environmental & Urban Collections",
      icon: Landmark,
      summary: "High-resolution photos of city streets, urban architecture, traffic intersections, and public transit infrastructure.",
      photoUrl: "/images/Solutions/Image Collection/Environmental & Urban Collections_card.jpg",
      photoLabel: "Smart City Infrastructure Capture",
      useCases: [
        "Urban infrastructure and road quality inspection",
        "Street furniture and sign inventory mapping",
        "Pedestrian walkway accessibility surveys",
        "Smart city traffic flow and parking management"
      ]
    },
    {
      id: "environmental-conservation",
      badge: "Environmental Vision",
      title: "Environmental Conservation",
      icon: Trees,
      summary: "Remote camera-trap photos and drone forestry captures monitoring wildlife habitats, flora, and natural ecosystems.",
      photoUrl: "/images/Solutions/Image Collection/Environmental Conservation_card.jpg",
      photoLabel: "Forest Canopy & Camera-Trap Capture",
      useCases: [
        "Wild animal species identification in camera traps",
        "Forest canopy health and deforestation tracking",
        "Wildfire smoke and flame early warning systems",
        "Crop health and agricultural pest detection"
      ]
    },
    {
      id: "space-astronomy",
      badge: "Orbital & Satellite",
      title: "Space & Astronomy",
      icon: Orbit,
      summary: "High-resolution satellite imagery and telescopic astronomy photos for orbital monitoring and earth observation.",
      photoUrl: "/images/Solutions/Image Collection/Space & Astronomy_card.jpg",
      photoLabel: "Multispectral Satellite Earth Observation",
      useCases: [
        "Maritime port traffic and vessel tracking",
        "Agricultural crop yield and soil moisture analysis",
        "Natural disaster storm and flood damage assessment",
        "Astronomical star cluster and orbital object tracking"
      ]
    },
    {
      id: "underwater-exploration",
      badge: "Marine Exploration",
      title: "Underwater Exploration",
      icon: Waves,
      summary: "High-clarity underwater photos of marine ecosystems, subsea energy pipelines, and submerged equipment.",
      photoUrl: "/images/Solutions/Image Collection/Underwater Exploration_card.jpg",
      photoLabel: "Subsea Pipeline & Marine Biology Capture",
      useCases: [
        "Subsea oil and gas pipeline crack inspection",
        "Coral reef health and marine species tracking",
        "Underwater autonomous vehicle obstacle avoidance",
        "Aquaculture offshore cage and fish monitoring"
      ]
    },
    {
      id: "cultural-heritage-preservation",
      badge: "Cultural Heritage",
      title: "Cultural & Heritage Preservation",
      icon: Landmark,
      summary: "Detailed multi-angle photos and photogrammetry of historic architecture, ancient monuments, and museum antiquities.",
      photoUrl: "/images/Solutions/Image Collection/Cultural & Heritage Preservation_card.avif",
      photoLabel: "Historic Monument Facade Photogrammetry",
      useCases: [
        "Millimeter-accurate 3D digital twin preservation",
        "Stone surface weathering and micro-crack detection",
        "Museum artifact cataloging and interactive exhibits",
        "Historical restoration planning and condition surveys"
      ]
    },
    {
      id: "art-creativity",
      badge: "Creative Media",
      title: "Art & Creativity",
      icon: Sparkles,
      summary: "Ultra-high-resolution digitizations of fine art paintings, classical sculptures, graphic illustrations, and creative media.",
      photoUrl: "/images/Solutions/Image Collection/Art & Creativity_card.jpg",
      photoLabel: "Fine Art Painting & Brushwork Scan",
      useCases: [
        "Generative AI style and texture reference training",
        "Fine art attribution and brushstroke analysis",
        "Copyright identification and artwork similarity search",
        "Virtual gallery and museum digital archive curation"
      ]
    }
  ],

  // 2. VIDEO DATA COLLECTION (10 Categories Ranked by Market Demand)
  "video-collection": [
    {
      id: "driving-traffic",
      badge: "Automotive Traffic",
      title: "Autonomous Driving & Traffic Video",
      icon: Car,
      summary: "Synchronized multi-camera driving video capturing dynamic traffic, pedestrian crossings, and rapid maneuvers.",
      photoUrl: "/images/Solutions/video collection/ADAS_card.jpg",
      photoLabel: "Multi-Camera Automotive Frame",
      useCases: [
        "Highway lane changes and overtaking maneuvers",
        "Pedestrian crossing intent and cyclist prediction",
        "Adverse weather driving in rain, fog, and glare",
        "Complex city intersection traffic navigation"
      ]
    },
    {
      id: "human-action",
      badge: "Action Recognition",
      title: "Human Action & Motion Recognition",
      icon: Activity,
      summary: "Multi-angle video recordings of people performing everyday tasks, athletic movements, and workplace routines.",
      photoUrl: "/images/Solutions/video collection/Human Action & Motion Recognition_card.jpg",
      photoLabel: "Action Recognition Sequence",
      useCases: [
        "Workout and sports movement tracking",
        "Ergonomic workplace safety analysis",
        "Elderly fall detection and emergency alerts",
        "Smart home gesture controls"
      ]
    },
    {
      id: "cctv-surveillance",
      badge: "CCTV Surveillance",
      title: "CCTV & Security Surveillance Video",
      icon: Shield,
      summary: "Continuous video feeds from stationary and moving cameras monitoring commercial and industrial facilities.",
      photoUrl: "/images/Solutions/video collection/CCTV & Security Surveillance Video_card.jpg",
      photoLabel: "Surveillance Monitor Frame",
      useCases: [
        "Perimeter breach and unauthorized access detection",
        "Crowd congestion and flow tracking",
        "Suspicious loitering alerts",
        "Cross-camera person re-identification"
      ]
    },
    {
      id: "egocentric-video",
      badge: "First-Person POV",
      title: "First-Person Egocentric Video",
      icon: Glasses,
      summary: "Wearable camera video capturing the wearer's exact field of view and real-time hand-object interactions.",
      photoUrl: "/images/Solutions/video collection/First-Person Egocentric Video_card.jpg",
      photoLabel: "Smart Glasses Field of View",
      useCases: [
        "Smart glasses visual AI assistants",
        "Step-by-step equipment assembly instructions",
        "Cooking and kitchen recipe guidance",
        "Virtual reality training simulations"
      ]
    },
    {
      id: "retail-interaction-video",
      badge: "Retail Dynamics",
      title: "Retail & Shopper Interaction Video",
      icon: ShoppingBag,
      summary: "In-store video recordings capturing customer browsing, product pickups, and self-checkout actions.",
      photoUrl: "/images/Solutions/video collection/Retail & Shopper Interaction Video_card.jpg",
      photoLabel: "In-Store Shopper Interaction Frame",
      useCases: [
        "Autonomous grab-and-go store tracking",
        "Customer dwell time and heat-mapping",
        "Shelf replenishment and shrinkage detection",
        "Interactive digital kiosk customer engagement"
      ]
    },
    {
      id: "robotics-teleop",
      badge: "Robotic Teleoperation",
      title: "Robotics & Teleoperation Video",
      icon: Bot,
      summary: "Synchronized video recorded during robotic arm manipulation, sorting, and automated material handling.",
      photoUrl: "/images/Solutions/video collection/Robotics & Teleoperation Video_card.jpg",
      photoLabel: "Robotic Gripper Frame",
      useCases: [
        "Robotic pick-and-place training",
        "Assembly line task automation",
        "Human-robot collaborative safety zones",
        "Defective unit automated sorting"
      ]
    },
    {
      id: "medical-surgical-video",
      badge: "Surgical Procedures",
      title: "Medical & Surgical Video",
      icon: HeartPulse,
      summary: "High-definition endoscopic and operating room video recordings documenting surgical procedures and anatomical anatomy.",
      photoUrl: "/images/Solutions/video collection/Medical & Surgical Video_card.avif",
      photoLabel: "Laparoscopic Surgical Procedure Frame",
      useCases: [
        "Surgical instrument tracking and phase detection",
        "Anatomical boundary identification",
        "Post-operative video review and training",
        "Robotic surgery assistance models"
      ]
    },
    {
      id: "sports-motion-video",
      badge: "Athletic Motion",
      title: "Sports & Athletic Motion Video",
      icon: Activity,
      summary: "High-framerate 120 FPS video capturing player agility, ball aerodynamics, and competitive team maneuvers.",
      photoUrl: "/images/Solutions/video collection/Sports & Athletic Motion Video_card.jpg",
      photoLabel: "High-Framerate Arena Play Sequence",
      useCases: [
        "Tactical game formation analysis",
        "Automated referee decision validation",
        "Player workload and fatigue estimation",
        "Broadcast instant replay clipping"
      ]
    },
    {
      id: "drone-aerial-video",
      badge: "Aerial Infrastructure",
      title: "Drone & Aerial Infrastructure Video",
      icon: Orbit,
      summary: "Corridor and perimeter drone footage surveying power grids, bridges, railway corridors, and civil infrastructure.",
      photoUrl: "/images/Solutions/video collection/Drone & Aerial Infrastructure Video_card.jpg",
      photoLabel: "Infrastructure Aerial Survey Capture",
      useCases: [
        "High-voltage power line asset inspection",
        "Highway and bridge concrete crack monitoring",
        "Solar farm photovoltaic panel anomaly alerts",
        "Agricultural crop acreage survey flyovers"
      ]
    }
  ],

  // 3. SPEECH DATA COLLECTION (8 Categories Ranked by Market Demand)
  "speech-collection": [
    {
      id: "conversational-dialogue",
      badge: "Conversational ASR",
      title: "Spontaneous Conversational Speech",
      icon: MessageSquare,
      summary: "Natural, unscripted discussions between multiple native speakers with realistic interruptions and colloquial expressions.",
      photoUrl: "/images/Solutions/Audio Collection/Spontaneous Conversational Speech_card.webp",
      photoLabel: "Multi-Speaker Conversational Acoustic Room",
      useCases: [
        "Virtual assistant dialogue handling",
        "Customer support call center automation",
        "Meeting note-taking and summarization AI",
        "Spontaneous speech-to-text models"
      ]
    },
    {
      id: "multilingual-dialects",
      badge: "Multilingual Dialects",
      title: "Multilingual & Multi-Dialect Speech",
      icon: Users2,
      summary: "Voice recordings from native speakers covering hundreds of languages, accents, and underrepresented regional dialects.",
      photoUrl: "/images/Solutions/Audio Collection/Multilingual & Multi-Dialect Speech.webp",
      photoLabel: "Global Linguistic Field Recording Array",
      useCases: [
        "Global voice recognition deployment",
        "Regional accent and dialect adaptation",
        "Voice AI fairness and inclusivity testing",
        "Low-resource language voice translation"
      ]
    },
    {
      id: "call-center-telephony",
      badge: "Telephony Audio",
      title: "Call Center & Telephony Audio",
      icon: Headphones,
      summary: "Dual-channel 8kHz and 16kHz voice recordings captured from actual telephony lines with authentic background room noise.",
      photoUrl: "/images/Solutions/Audio Collection/Call Center & Telephony Audio_card.jpg",
      photoLabel: "Telephony Acoustic & Audio Desk",
      useCases: [
        "Automated customer service phone routing",
        "Call sentiment and frustration detection",
        "Agent compliance and script verification",
        "Telephony audio noise reduction algorithms"
      ]
    },
    {
      id: "prompted-utterances",
      badge: "Prompted Commands",
      title: "Scripted & Prompted Voice Commands",
      icon: Mic,
      summary: "Standardized voice commands recorded in quiet and noisy environments to train wake-word triggers and short utterances.",
      photoUrl: "/images/Solutions/Audio Collection/Scripted & Prompted Voice Commands_card.jpg",
      photoLabel: "Acoustic Studio Wake-Word Calibration",
      useCases: [
        "Smart speaker wake-word detection",
        "In-car infotainment voice controls",
        "Smart home device automation",
        "Hands-free industrial equipment control"
      ]
    },
    {
      id: "farfield-arrays",
      badge: "Far-Field Acoustics",
      title: "Noise-Resistant Far-Field Audio",
      icon: Bot,
      summary: "Voice audio captured across distances using multi-microphone hardware arrays in reverberant and noisy rooms.",
      photoUrl: "/images/Solutions/Audio Collection/Noise-Resistant Far-Field Audio_card.webp",
      photoLabel: "Multi-Microphone Array Test Chamber",
      useCases: [
        "Living room voice commands across background TV noise",
        "Conference room microphone beamforming",
        "Automotive voice pickup at highway speeds",
        "Industrial factory voice intercom clarity"
      ]
    },
    {
      id: "expressive-tts",
      badge: "Expressive Neural TTS",
      title: "Expressive Neural TTS Voice Sets",
      icon: Sparkles,
      summary: "Studio-grade 48kHz audio recorded by professional voice talent conveying varied emotions, paces, and speaking styles.",
      photoUrl: "/images/Solutions/Audio Collection/Expressive Neural TTS Voice Sets_card.jpg",
      photoLabel: "Studio 48kHz Phonetic Recording Booth",
      useCases: [
        "Realistic synthetic brand voice agents",
        "Audiobook and podcast neural narration",
        "Educational and language-learning apps",
        "Expressive video game character voices"
      ]
    },
    {
      id: "demographic-voice",
      badge: "Diverse Demographics",
      title: "Children & Elderly Voice Corpora",
      icon: Users2,
      summary: "Acoustic voice recordings capturing younger children and older adults to overcome pitch and articulation variance.",
      photoUrl: "/images/Solutions/Audio Collection/Children & Elderly Voice Corpora_card.webp",
      photoLabel: "Multi-Generational Acoustic Manifest",
      useCases: [
        "Kids voice games and reading assistants",
        "Elderly healthcare voice interfaces",
        "Speech therapy assessment models",
        "Pediatric acoustic model benchmarking"
      ]
    },
    {
      id: "medical-dictation-audio",
      badge: "Clinical Dictation",
      title: "Medical & Clinical Dictation Audio",
      icon: HeartPulse,
      summary: "Doctor dictation and clinical consultations recorded under strict privacy standards with complex medical vocabulary.",
      photoUrl: "/images/Solutions/Audio Collection/Medical & Clinical Dictation Audio_card.webp",
      photoLabel: "Clinical Medical Dictation Suite",
      useCases: [
        "Automated clinical EHR chart transcription",
        "Radiology and pathology voice reporting",
        "Telemedicine physician-patient notes",
        "Medical terminology pronunciation recognition"
      ]
    }
  ],

  // 4. TEXT DATA COLLECTION & LABELING (8 Categories Ranked by Market Demand)
  "text-collection": [
    {
      id: "document-datasets-ocr",
      badge: "Document OCR",
      title: "Document Dataset Collection & OCR",
      icon: FileText,
      summary: "Scanned and digital receipts, bills, invoices, and bank records with ground-truth text and table boundaries.",
      photoUrl: "/images/Solutions/Text Collection/Document Dataset Collection & OCR_card.jpg",
      photoLabel: "Scanned Commercial Invoice Corpus",
      useCases: [
        "Automated accounts payable data entry",
        "Receipt and expense reimbursement processing",
        "Tax document audit and reconciliation",
        "Key-value pair extraction from complex forms"
      ]
    },
    {
      id: "multilingual-corpora",
      badge: "Multilingual Corpora",
      title: "Multilingual NLP Corpora",
      icon: Users2,
      summary: "Diverse text collections spanning dozens of languages and regional dialects for natural language processing.",
      photoUrl: "/images/Solutions/Text Collection/Multilingual NLP Corpora_card.jpg",
      photoLabel: "Multilingual Parallel Text Corpus",
      useCases: [
        "Machine translation model training",
        "Multilingual web search and indexing",
        "Cross-language semantic document search",
        "Low-resource language NLP preservation"
      ]
    },
    {
      id: "conversational-ai-logs",
      badge: "Chatbot & Dialogue",
      title: "Conversational AI & Chatbot Logs",
      icon: MessageSquare,
      summary: "Curated multi-turn customer dialogues and support chat logs labeled for user intent, sentiment, and resolution.",
      photoUrl: "/images/Solutions/Text Collection/Conversational AI & Chatbot Logs_card.jpg",
      photoLabel: "Multi-Turn Customer Interaction Transcript",
      useCases: [
        "AI customer support chatbot fine-tuning",
        "User intent and entity extraction",
        "Customer frustration detection",
        "Automated FAQ answer generation"
      ]
    },
    {
      id: "domain-technical-corpora",
      badge: "Technical Corpora",
      title: "Domain-Specific Technical Corpora",
      icon: Boxes,
      summary: "Specialized text corpora covering finance, law, engineering, and medical literature for high-accuracy domain AI models.",
      photoUrl: "/images/Solutions/Text Collection/Domain-Specific Technical Corpora_card.jpg",
      photoLabel: "Legal & Regulatory Text Archive",
      useCases: [
        "Legal contract analysis and clause extraction",
        "Financial report and earnings call summarization",
        "Scientific literature question-answering",
        "Regulatory compliance monitoring"
      ]
    },
    {
      id: "ocr-handwritten-text",
      badge: "Handwritten OCR",
      title: "OCR & Handwritten Text Datasets",
      icon: FileText,
      summary: "High-variation handwritten notes, doctor prescriptions, historical manuscripts, and forms with character ground truth.",
      photoUrl: "/images/Solutions/Text Collection/OCR & Handwritten Text Datasets_card.avif",
      photoLabel: "Handwritten Form & Manuscript Capture",
      useCases: [
        "Doctor prescription digitizing",
        "Historical census and archives indexing",
        "Handwritten survey response parsing",
        "Postal address and zip-code sorting"
      ]
    },
    {
      id: "sentiment-social-text",
      badge: "Sentiment & Moderation",
      title: "Social Media & Sentiment Datasets",
      icon: Sparkles,
      summary: "User reviews, social comments, and forums tagged for positive/negative sentiment, toxic language, and brand affinity.",
      photoUrl: "/images/Solutions/Text Collection/Social Media & Sentiment Datasets_card.jpg",
      photoLabel: "Product Review & Sentiment Feed",
      useCases: [
        "E-commerce product sentiment analysis",
        "Automated content moderation and safety filters",
        "Brand reputation and crisis tracking",
        "Customer feedback topic clustering"
      ]
    },
    {
      id: "code-programming-corpora",
      badge: "Code & Syntax",
      title: "Code & Programming Language Corpora",
      icon: Bot,
      summary: "Curated open-source and synthetic code repositories with syntax annotations, unit tests, and problem descriptions.",
      photoUrl: "/images/Solutions/Text Collection/Code & Programming Language Corpora_card.jpg",
      photoLabel: "Multi-Language Source Code Manifest",
      useCases: [
        "AI code completion and copilot training",
        "Automated bug fixing and code refactoring",
        "Natural language to SQL query generation",
        "API documentation extraction"
      ]
    },
  ],

  // 5. IMAGE & VIDEO ANNOTATION
  "annotation": [
    {
      id: "bounding-boxes-polygons",
      badge: "Bounding Boxes",
      title: "2D & 3D Bounding Boxes",
      icon: Crosshair,
      summary: "Precise rectangular and oriented bounding boxes around target objects across retail, automotive, and industrial imagery.",
      photoUrl: "/images/Solutions/Annotation/2D & 3D Bounding Boxes_card.jpg",
      photoLabel: "Multi-Class Bounding Box Coordinates",
      useCases: [
        "Autonomous driving vehicle and pedestrian detection",
        "Retail shelf product recognition",
        "Security camera intruder tagging",
        "Drone asset tracking"
      ]
    },
    {
      id: "polygonal-segmentation",
      badge: "Polygonal Masks",
      title: "Polygonal & Semantic Segmentation",
      icon: Layers,
      summary: "Pixel-accurate polygonal masks tracing complex natural contours of roads, buildings, medical lesions, and vegetation.",
      photoUrl: "/images/Solutions/Annotation/Polygonal & Semantic Segmentation_card.jpg",
      photoLabel: "Pixel-Level Polygonal Semantic Mask",
      useCases: [
        "Autonomous vehicle drivable road space detection",
        "Medical tumor and lesion boundary segmentation",
        "Satellite land cover and vegetation classification",
        "Robotic foreground/background object separation"
      ]
    },
    {
      id: "video-tracking-ids",
      badge: "Video Object Tracking",
      title: "Video Tracking & Multi-Object IDs",
      icon: Activity,
      summary: "Persistent tracking IDs assigned to moving pedestrians, vehicles, and objects across continuous video sequences.",
      photoUrl: "/images/Solutions/Annotation/Video Tracking & Multi-Object IDs_card.webp",
      photoLabel: "Continuous Temporal Object Trajectory",
      useCases: [
        "Highway vehicle speed and trajectory analysis",
        "Cross-camera retail shopper tracking",
        "Sports broadcast player movement tracking",
        "Public transit crowd flow monitoring"
      ]
    },
    {
      id: "keypoint-pose",
      badge: "Keypoint Kinematics",
      title: "Keypoint & Skeletal Pose Estimation",
      icon: Users2,
      summary: "Anatomical landmark coordinates marking eyes, noses, limb joints, and fingers for human motion and fitness models.",
      photoUrl: "/images/Solutions/Annotation/Keypoint & Skeletal Pose Estimation_card.jpg",
      photoLabel: "33-Point Skeletal Keypoint Mapping",
      useCases: [
        "Fitness app exercise repetition and form counting",
        "Driver drowsiness and eye-closure monitoring",
        "Hand gesture recognition for smart glasses",
        "Physical therapy range-of-motion assessments"
      ]
    },
    {
      id: "polyline-splines",
      badge: "Polyline Vectors",
      title: "Polyline & Spline Annotation",
      icon: Car,
      summary: "Accurate polyline vectors tracing highway lane dividers, road curbs, painted lines, and overhead utility cables.",
      photoUrl: "/images/Solutions/Annotation/Polyline & Spline Annotation_card.jpg",
      photoLabel: "Highway Lane Divider Polyline Vectors",
      useCases: [
        "ADAS lane departure warning systems",
        "Automated lane centering and steering assist",
        "Railway rail and track boundary inspection",
        "Utility line and power grid corridor mapping"
      ]
    },
    {
      id: "panoptic-segmentation",
      badge: "Panoptic Segmentation",
      title: "Panoptic Scene Segmentation",
      icon: Boxes,
      summary: "Unified labeling that simultaneously assigns unique instance IDs to distinct objects and category labels to backgrounds.",
      photoUrl: "/images/Solutions/Annotation/Panoptic Scene Segmentation_caard.jpg",
      photoLabel: "Unified Panoptic Scene Ground Truth",
      useCases: [
        "Comprehensive city scene understanding",
        "Robotics indoor navigation and room mapping",
        "Virtual and augmented reality spatial meshing",
        "Aerial landscape semantic classification"
      ]
    },
    {
      id: "cuboid-3d-boxes",
      badge: "3D Spatial Cuboids",
      title: "3D Cuboid & Spatial Bounding",
      icon: Crosshair,
      summary: "3D bounding boxes with depth, orientation, yaw, pitch, and roll coordinates annotated on 2D images and sensor feeds.",
      photoUrl: "/images/Solutions/Annotation/3D Cuboid & Spatial Bounding_card.jpg",
      photoLabel: "Oriented 3D Spatial Cuboids",
      useCases: [
        "Vehicle distance and orientation estimation",
        "Robotic warehouse pallet dimensions",
        "Automated parking spot spatial availability",
        "Autonomous mobile robot obstacle avoidance"
      ]
    },
    {
      id: "ocr-text-annotation",
      badge: "OCR Word Polygons",
      title: "OCR & Document Text Annotation",
      icon: FileText,
      summary: "Tight word-level and line-level bounding polygons paired with character-accurate transcriptions of text in images.",
      photoUrl: "/images/Solutions/Annotation/OCR & Document Text Annotation_card.jpg",
      photoLabel: "Word Bounding Polygons & OCR Ground Truth",
      useCases: [
        "Street sign and storefront name reading",
        "License plate automatic number recognition",
        "Printed packaging text and nutrition labels",
        "Book and magazine page digitization"
      ]
    }
  ],

  // 6. AUDIO TRANSCRIPTION SERVICES (8 Categories Ranked by Market Demand)
  "transcription": [
    {
      id: "clean-verbatim",
      badge: "Clean & Strict Verbatim",
      title: "Clean Verbatim & Strict Verbatim",
      icon: Headphones,
      summary: "Accurate written transcripts of informal spoken discussions, podcasts, and meetings across varied speaking styles.",
      photoUrl: "/images/Solutions/Speech Transcription/Clean Verbatim & Strict Verbatim_card.webp",
      photoLabel: "Audio Waveform & Transcription Deck",
      useCases: [
        "Executive meeting summary and action items",
        "Podcast captioning and web search indexing",
        "Customer research interview analysis",
        "Automated voice note transcription"
      ]
    },
    {
      id: "timestamps-diarization",
      badge: "Speaker Diarization",
      title: "Speaker Diarization & Word Timestamps",
      icon: Mic,
      summary: "Transcripts labeled with exact word-level timecodes and unique speaker identifiers throughout multi-person recordings.",
      photoUrl: "/images/Solutions/Speech Transcription/Speaker Diarization & Word Timestamps_card.jpg",
      photoLabel: "Speaker Diarization Timeline",
      useCases: [
        "Conference call speaker attribution",
        "Courtroom and legal depositions",
        "Broadcast media subtitling and captions",
        "Media editing and soundbite clipping"
      ]
    },
    {
      id: "multilingual-transcription",
      badge: "Multilingual Transcription",
      title: "Multilingual Audio Transcription",
      icon: Users2,
      summary: "Audio transcription and synchronized translation across 100+ global languages, regional dialects, and accents.",
      photoUrl: "/images/Solutions/Speech Transcription/",
      photoLabel: "Global Multilingual Audio Console",
      useCases: [
        "International broadcast subtitle translation",
        "Global market research interview transcripts",
        "Multilingual corporate training videos",
        "Cross-border customer support call auditing"
      ]
    },
    {
      id: "medical-transcription",
      badge: "Medical Transcription",
      title: "Medical & Clinical Transcription",
      icon: HeartPulse,
      summary: "Specialized clinical transcription converting physician dictation and patient consults into formatted medical records.",
      photoUrl: "/images/Solutions/Speech Transcription/",
      photoLabel: "Clinical Patient Record Dictation",
      useCases: [
        "Electronic health record (EHR) chart notes",
        "Radiology, pathology, and diagnostic reports",
        "Clinical trial patient interview records",
        "Telemedicine patient encounter transcripts"
      ]
    },
    {
      id: "legal-courtroom-transcription",
      badge: "Legal Transcription",
      title: "Legal & Courtroom Transcription",
      icon: Shield,
      summary: "Strict, verbatim legal transcription of witness depositions, court hearings, arbitrations, and recorded evidence.",
      photoUrl: "/images/Solutions/Speech Transcription/",
      photoLabel: "Official Legal Court Proceeding Record",
      useCases: [
        "Sworn deposition transcripts with page-line stamps",
        "Arbitration hearing and court record archives",
        "Police interview and 911 dispatch transcription",
        "Patent dispute and corporate litigation support"
      ]
    },
    {
      id: "media-subtitling",
      badge: "Broadcast Subtitling",
      title: "Media Subtitling & Closed Captions",
      icon: Sparkles,
      summary: "Time-aligned broadcast closed captions and multilingual subtitles formatted for streaming platforms in SRT, VTT, and SCC.",
      photoUrl: "/images/Solutions/Speech Transcription/",
      photoLabel: "Broadcast Subtitle & Closed Caption Suite",
      useCases: [
        "Streaming entertainment and film subtitling",
        "Broadcast TV FCC-compliant closed captions",
        "Social video short-form captions",
        "Educational course and lecture accessibility"
      ]
    },
    {
      id: "call-center-qa-transcription",
      badge: "Call Center QA",
      title: "Call Center Quality Transcription",
      icon: Headphones,
      summary: "Customer support call transcripts tagged for agent compliance, resolution status, customer sentiment, and intent.",
      photoUrl: "/images/Solutions/Speech Transcription/",
      photoLabel: "Customer Support Audio QA Dashboard",
      useCases: [
        "100% automated call QA scoring and audit",
        "Regulatory compliance script verification",
        "Churn risk and customer dispute identification",
        "Agent training and coaching feedback loops"
      ]
    },
    {
      id: "phonetic-alignment",
      badge: "Phonetic Alignment",
      title: "Phonetic & Pronunciation Alignment",
      icon: Bot,
      summary: "Sub-10 millisecond phonetic phone-level and word-level alignments designed to train speech synthesizer models.",
      photoUrl: "/images/Solutions/Speech Transcription/",
      photoLabel: "Phonetic Praat TextGrid Alignment",
      useCases: [
        "Acoustic speech recognition model training",
        "Neural text-to-speech phoneme duration models",
        "Pronunciation evaluation in language learning",
        "Automated karaoke and vocal lyric tracking"
      ]
    }
  ],

  // 7. ADAS & LIDAR DATA ANNOTATION (7 Categories Ranked by Market Demand)
  "adas-lidar": [
    {
      id: "lidar-3d-pointclouds",
      badge: "3D LiDAR Cuboids",
      title: "3D LiDAR Point Cloud Cuboids",
      icon: Crosshair,
      summary: "3D bounding boxes enclosing vehicles, pedestrians, cyclists, and obstacles with 9 degrees-of-freedom orientation.",
      photoUrl: "/images/Solutions/Speech Transcription/",
      photoLabel: "3D LiDAR Point Cloud Cuboid Array",
      useCases: [
        "Autonomous driving vehicle and pedestrian detection",
        "Velocity vector and yaw heading estimation",
        "Distance measurement to surrounding traffic",
        "Blind spot obstacle spatial localization"
      ]
    },
    {
      id: "sensor-fusion-camera-lidar",
      badge: "Camera + LiDAR Fusion",
      title: "Camera + LiDAR Sensor Fusion",
      icon: Bot,
      summary: "Synchronized cross-modal annotation projecting 3D LiDAR point clouds directly onto calibrated 2D camera images.",
      photoUrl: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=85",
      photoLabel: "Camera + LiDAR Calibrated Fusion Projection",
      useCases: [
        "Redundant perception across adverse weather",
        "Nighttime pedestrian optical + spatial detection",
        "Accurate depth estimation for camera systems",
        "Multi-modal autonomous vehicle path planning"
      ]
    },
    {
      id: "semantic-lidar-segmentation",
      badge: "3D Semantic LiDAR",
      title: "3D LiDAR Semantic Segmentation",
      icon: Layers,
      summary: "Point-by-point spatial classification labeling every return as road surface, sidewalk, building, vegetation, or sky.",
      photoUrl: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=85",
      photoLabel: "Point-Wise 3D Semantic Classification",
      useCases: [
        "Drivable road corridor identification",
        "Curb and sidewalk accessibility mapping",
        "Overhanging tree branch collision prevention",
        "3D urban digital twin construction"
      ]
    },
    {
      id: "lane-markings-drivable",
      badge: "Lane & Drivable Space",
      title: "Lane Marking & Drivable Space",
      icon: Car,
      summary: "Dense vector polylines identifying solid and dashed lane markings, crosswalks, bike lanes, and construction barriers.",
      photoUrl: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=85",
      photoLabel: "Lane Polyline & Drivable Space Layer",
      useCases: [
        "Highway lane keeping and lane centering",
        "Complex city intersection turns and merges",
        "Work-zone and temporary cone lane navigation",
        "High-definition mapping for self-driving fleets"
      ]
    },
    {
      id: "radar-ultrasonic-data",
      badge: "Radar & Ultrasonic",
      title: "Radar & Ultrasonic Point Annotation",
      icon: Orbit,
      summary: "Sparse radar point clouds and ultrasonic distance reflections labeled for relative target speed, range, and azimuth.",
      photoUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85",
      photoLabel: "Automotive Radar Doppler Velocity Plot",
      useCases: [
        "Adaptive cruise control forward collision warning",
        "Low-visibility fog and heavy snow obstacle detection",
        "Automated valet parking ultrasonic guidance",
        "Blind spot radar cross-traffic alerts"
      ]
    },
    {
      id: "hd-maps-feature-extraction",
      badge: "HD Map Extraction",
      title: "HD Map Feature Extraction",
      icon: Landmark,
      summary: "Survey-grade extraction of traffic light heads, road signs, utility poles, stop lines, and speed limit markings.",
      photoUrl: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=85",
      photoLabel: "High-Definition Map Road Furniture Layer",
      useCases: [
        "Autonomous vehicle localization against HD maps",
        "Traffic light status association to travel lanes",
        "Speed limit and road regulation compliance",
        "Municipal infrastructure digital asset inventories"
      ]
    },
    {
      id: "trajectory-prediction",
      badge: "Trajectory Prediction",
      title: "Ego-Motion & Trajectory Prediction",
      icon: Activity,
      summary: "Continuous vehicle ego-motion and surrounding actor future trajectories annotated over 3 to 5 second horizons.",
      photoUrl: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=85",
      photoLabel: "Surrounding Actor Future Trajectory Vectors",
      useCases: [
        "Pedestrian street crossing behavior prediction",
        "Vehicle cut-in and lane change intent models",
        "Emergency collision avoidance braking",
        "Safe motion planning in dense urban traffic"
      ]
    }
  ],

  // 8. OFF-THE-SHELF AI TRAINING DATASETS (7 Categories Ranked by Market Demand)
  "off-the-shelf": [
    {
      id: "ots-facial-diversity",
      badge: "Biometric Face Bank",
      title: "Biometric Facial & Demographic Banks",
      icon: Users2,
      summary: "Pre-collected, fully consent-cleared face datasets spanning balanced ages, ethnicities, and facial expressions.",
      photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
      photoLabel: "Pre-Cleared Biometric Face Bank",
      useCases: [
        "Instant biometric verification model training",
        "Facial model fairness and demographic bias audits",
        "Liveness and spoof attack vulnerability testing",
        "Global biometric identity benchmark validation"
      ]
    },
    {
      id: "ots-speech-libraries",
      badge: "Multilingual Speech Bank",
      title: "Multi-Dialect Speech Audio Libraries",
      icon: Mic,
      summary: "Ready-to-use audio collections featuring over 10,000+ hours of multi-speaker speech across dozens of languages.",
      photoUrl: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=85",
      photoLabel: "Pre-Collected Multilingual Speech Library",
      useCases: [
        "Rapid ASR foundation model fine-tuning",
        "Voice assistant wake-word development",
        "Accent-adaptive speech recognition benchmarks",
        "Text-to-speech synthetic voice training sets"
      ]
    },
    {
      id: "ots-adas-driving",
      badge: "ADAS Driving Benchmark",
      title: "ADAS Driving Video Benchmarks",
      icon: Car,
      summary: "Over 500,000 annotated driving video frames recorded across highways, city avenues, and adverse weather conditions.",
      photoUrl: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=85",
      photoLabel: "Pre-Annotated Road Perception Library",
      useCases: [
        "Immediate ADAS model baseline benchmarking",
        "Rare edge-case driving scenario validation",
        "Traffic sign and signal detection training",
        "Autonomous vehicle perception safety validation"
      ]
    },
    {
      id: "ots-retail-sku",
      badge: "Retail SKU Catalog",
      title: "Retail & E-Commerce SKU Datasets",
      icon: ShoppingBag,
      summary: "100,000+ packaged goods and supermarket items photographed from multiple angles with standard UPC manifests.",
      photoUrl: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1200&q=85",
      photoLabel: "E-Commerce Packaged Product SKU Bank",
      useCases: [
        "Automated checkout visual item identification",
        "E-commerce product visual search engines",
        "Shelf inventory scanning and gap detection",
        "Counterfeit and packaging alteration detection"
      ]
    },
    {
      id: "ots-scanned-ocr",
      badge: "Scanned Document Library",
      title: "Multilingual Scanned Document Datasets",
      icon: FileText,
      summary: "Thousands of de-identified receipts, invoices, bills of lading, and official forms annotated with key-value pairs.",
      photoUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=85",
      photoLabel: "Commercial Scanned Document Library",
      useCases: [
        "Document OCR pipeline pretraining",
        "Invoice and expense automation benchmarking",
        "Multilingual form layout analysis",
        "Handwriting recognition evaluation"
      ]
    },
    {
      id: "ots-medical-imaging",
      badge: "Clinical Image Archive",
      title: "De-Identified Healthcare Image Banks",
      icon: HeartPulse,
      summary: "Fully HIPAA de-identified dermoscopy, chest X-ray, and pathology images with expert clinician ground truth labels.",
      photoUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85",
      photoLabel: "Clinical Diagnostic Medical Image Archive",
      useCases: [
        "Medical computer vision algorithm benchmarking",
        "Dermatology lesion diagnostic training",
        "Radiology anomaly screening model development",
        "Clinical AI regulatory validation datasets"
      ]
    },
    {
      id: "ots-nlp-dialogue",
      badge: "Conversational Archive",
      title: "Conversational Dialogue Corpora",
      icon: MessageSquare,
      summary: "Curated multi-turn dialogues across customer support, technical assistance, and general knowledge interactions.",
      photoUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
      photoLabel: "Customer Interaction Dialogue Archive",
      useCases: [
        "Conversational AI agent pretraining",
        "Customer service intent classification",
        "Chatbot tone and response style alignment",
        "Question-answering system evaluation"
      ]
    }
  ]
};

// Aliases for matching slugs like "audio-collection" -> "speech-collection"
const ALIASES = {
  "audio-collection": "speech-collection",
  "text-data-collection": "text-collection",
  "data-annotation": "annotation",
  "image-annotation": "annotation",
  "video-annotation": "annotation"
};

export function SpatialDomainStage({ serviceSlug = "image-collection", serviceTitle = "Image Data Collection" }) {
  const resolvedSlug = ALIASES[serviceSlug] || serviceSlug;
  const domainList = SERVICE_DOMAINS_MAP[resolvedSlug] || SERVICE_DOMAINS_MAP["image-collection"];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const activeDomain = domainList[currentIndex] || domainList[0];
  const cardRef = useRef(null);
  const canvasRef = useRef(null);
  const ribbonRef = useRef(null);

  // Reset index when service slug changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [serviceSlug]);

  // Background floating 3D particle nodes animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const onResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener("resize", onResize);

    const particles = Array.from({ length: 24 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1.2
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(236, 94, 39, ${0.12 * (1 - dist / 140)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Nodes
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(236, 94, 39, 0.35)";
        ctx.fill();
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // 3D Gyro Tilt Calculation on Mouse Move
  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: -(y / (rect.height / 2)) * 6,
      y: (x / (rect.width / 2)) * 8
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  const selectDomain = (index) => {
    setCurrentIndex(index);
  };

  const nextDomain = () => {
    selectDomain((currentIndex + 1) % domainList.length);
  };

  const prevDomain = () => {
    selectDomain((currentIndex - 1 + domainList.length) % domainList.length);
  };

  return (
    <div className="spatial-stage-wrapper">
      {/* Background 3D Geometric Mesh */}
      <canvas ref={canvasRef} className="spatial-stage-canvas" />

      {/* Header bar above ribbon with category count & fast arrows */}
      <div className="spatial-ribbon-bar">
        <div className="spatial-ribbon-meta">
          <span className="spatial-count-tag font-mono">
            TARGET DOMAINS
          </span>
          <span className="text-xs text-[#5F646D] hidden sm:inline">
            Specialized ground-truth datasets for frontier AI
          </span>
        </div>
        <div className="spatial-ribbon-controls">
          <button
            type="button"
            onClick={prevDomain}
            className="spatial-mini-btn"
            aria-label="Previous category"
            title="Previous Category"
          >
            <ArrowLeft size={14} />
          </button>
          <button
            type="button"
            onClick={nextDomain}
            className="spatial-mini-btn"
            aria-label="Next category"
            title="Next Category"
          >
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Domain Navigation Ribbon (1-Click Pill Selector across all categories) */}
      <nav ref={ribbonRef} className="spatial-nav-ribbon" aria-label="Target Domains">
        {domainList.map((domain, index) => {
          const Icon = domain.icon;
          const isActive = index === currentIndex;
          return (
            <button
              key={domain.id}
              onClick={() => selectDomain(index)}
              className={`spatial-nav-pill ${isActive ? "active" : ""}`}
              aria-selected={isActive}
            >
              <Icon size={15} />
              <span>{domain.title}</span>
            </button>
          );
        })}
      </nav>

      {/* 3D Depth Card Stage */}
      <div className="spatial-deck-container">
        <article
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="spatial-card-3d"
          style={{
            transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(10px)`
          }}
        >
          <div className="spatial-card-grid">
            
            {/* LEFT COLUMN: Dedicated High-Resolution Image Preview (Image Only) */}
            <div className="spatial-media-col">
              <div className="spatial-media-frame">
                <img
                  src={activeDomain.photoUrl}
                  alt={activeDomain.title}
                  className="spatial-media-img"
                  loading="lazy"
                />

                <div className="spatial-media-badge">
                  <Camera size={13} className="text-[#EC5E27]" />
                  <span>Verified Dataset Sample</span>
                </div>
              </div>

              <div className="spatial-media-footer">
                <span className="font-mono truncate text-xs text-[#CBD5E1]">
                  {activeDomain.photoLabel}
                </span>
                <span className="text-[10px] font-mono font-bold text-[#EC5E27] uppercase tracking-wider bg-[#221714] px-2 py-0.5 rounded border border-[#EC5E27]/30">
                  Ground Truth
                </span>
              </div>
            </div>

            {/* RIGHT COLUMN: Concise & Necessary Info Only (LXT Style) */}
            <div className="spatial-info-col">
              <div className="spatial-info-eyebrow">
                <Sparkles size={14} />
                <span>{activeDomain.badge}</span>
              </div>

              <h3 className="spatial-info-title">
                {activeDomain.title}
              </h3>

              <p className="spatial-info-summary">
                {activeDomain.summary}
              </p>

              {/* Real-World Use Cases (3-4 Concise Bullets) */}
              <div className="spatial-highlights-list">
                {activeDomain.useCases && activeDomain.useCases.map((item, idx) => (
                  <div key={idx} className="spatial-highlight-item">
                    <span className="spatial-highlight-bullet" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Navigation Controls + Scope CTA */}
              <div className="spatial-actions-row">
                <div className="spatial-nav-arrows">
                  <button
                    type="button"
                    onClick={prevDomain}
                    className="spatial-arrow-btn"
                    aria-label="Previous category"
                    title="Previous"
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={nextDomain}
                    className="spatial-arrow-btn"
                    aria-label="Next category"
                    title="Next"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>

                <Link
                  to={`/contact?service=${encodeURIComponent(serviceTitle)}&category=${encodeURIComponent(activeDomain.title)}`}
                  className="spatial-cta-btn"
                >
                  <span>Scope This Dataset</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>

          </div>
        </article>
      </div>
    </div>
  );
}

// ============================================================================
// SERVICE-SPECIFIC CASE STUDIES COMPONENT WITH 3D HOVER CARDS
// ============================================================================

export const SERVICE_CASE_STUDIES_MAP = {
  "image-collection": [
    {
      id: "autonomous-perception",
      title: "Autonomous Driving Road Perception",
      client: "Tier-1 Autonomous OEM",
      highlight: "500,000 multi-weather road images delivered across 4 continents with zero false positive boundary drift.",
      stats: [
        { label: "Delivered Units", value: "500k+" },
        { label: "Acceptance Rate", value: "99.94%" },
        { label: "Turnaround", value: "6 Weeks" }
      ],
      link: "/case-studies/autonomous-perception"
    },
    {
      id: "retail-sku-inventory",
      title: "High-Density Supermarket Shelf Perception",
      client: "Global Retail Analytics Group",
      highlight: "In-situ camera captures across 12,000 retail SKUs covering foil reflection and severe package crumpling.",
      stats: [
        { label: "SKU Diversity", value: "12,000" },
        { label: "Recognition F1", value: "0.992" },
        { label: "Coverage", value: "15 Cities" }
      ],
      link: "/case-studies/retail-shelf-perception"
    },
    {
      id: "clinical-derm-screening",
      title: "Demographically Balanced Clinical Dermatology",
      client: "Medical Diagnostics Foundation",
      highlight: "Standardized medical photography across Fitzpatrick skin types I-VI with triple-blind clinician review.",
      stats: [
        { label: "Clinical Cohorts", value: "6 Types" },
        { label: "Inter-Rater α", value: "0.94" },
        { label: "HIPAA Clearance", value: "100%" }
      ],
      link: "/case-studies/multimodal-medical-qa"
    }
  ],
  "video-collection": [
    {
      id: "action-recognition-benchmark",
      title: "High-Framerate 120 FPS Human Activity Recognition",
      client: "Augmented Reality Hardware Pioneer",
      highlight: "Synchronized multi-camera studio recordings of athletic movements and fine-motor hand gestures.",
      stats: [
        { label: "Framerate", value: "120 FPS" },
        { label: "Activity Classes", value: "180+" },
        { label: "Temporal Accuracy", value: "±8ms" }
      ],
      link: "/case-studies/autonomous-perception"
    },
    {
      id: "smart-city-traffic",
      title: "Continuous 4K Urban Intersection Video",
      client: "Metropolitan Transit Authority",
      highlight: "Multi-angle traffic surveillance feeds capturing vehicle maneuvers, jaywalking, and near-miss incidents.",
      stats: [
        { label: "Video Duration", value: "2,400 Hrs" },
        { label: "Intersection Nodes", value: "48" },
        { label: "Detection Recall", value: "99.4%" }
      ],
      link: "/case-studies/autonomous-perception"
    }
  ],
  "speech-collection": [
    {
      id: "global-accent-asr",
      title: "1,000-Locale Conversational ASR Corpora",
      client: "Leading Voice Assistant Developer",
      highlight: "Spontaneous conversational multi-speaker audio recorded across 45 countries with authentic dialect variation.",
      stats: [
        { label: "Audio Hours", value: "15,000h" },
        { label: "Distinct Speakers", value: "8,500+" },
        { label: "Acoustic SNR", value: "32 dB" }
      ],
      link: "/case-studies/multilingual-llm-eval"
    }
  ],
  "text-collection": [
    {
      id: "low-resource-nlp",
      title: "Multilingual Parallel NLP Translation Corpora",
      client: "Global Search Engine",
      highlight: "Human-verified translation pairs across 32 low-resource languages with culturally nuanced terminology.",
      stats: [
        { label: "Sentence Pairs", value: "4.2M" },
        { label: "Languages", value: "32" },
        { label: "BLEU Boost", value: "+8.4" }
      ],
      link: "/case-studies/multilingual-llm-eval"
    }
  ],
  "annotation": [
    {
      id: "subpixel-polygonal-segmentation",
      title: "Sub-Pixel Polygonal Segmentation at Scale",
      client: "Autonomous Robotics Unicorn",
      highlight: "Over 1.2 million images segmented with sub-pixel contour accuracy and 99.8% first-pass acceptance rate.",
      stats: [
        { label: "Annotated Masks", value: "1.2M+" },
        { label: "Boundary IOU", value: "96.4%" },
        { label: "Throughput", value: "25k / Wk" }
      ],
      link: "/case-studies/autonomous-perception"
    }
  ],
  "transcription": [
    {
      id: "subsecond-praat-transcription",
      title: "Sub-10ms Time-Aligned Audio Transcription",
      client: "Enterprise Speech Foundation",
      highlight: "Strict verbatim multi-speaker transcription with Praat phonetic TextGrid alignments and speaker diarization.",
      stats: [
        { label: "Transcribed Hours", value: "5,000h" },
        { label: "Word Error Rate", value: "< 1.2%" },
        { label: "Alignment Error", value: "< 10ms" }
      ],
      link: "/case-studies/multilingual-llm-eval"
    }
  ],
  "adas-lidar": [
    {
      id: "lidar-camera-fusion",
      title: "3D LiDAR Point Cloud & Camera Sensor Fusion",
      client: "Autonomous Trucking Pioneer",
      highlight: "Calibrated 3D cuboid tracking across dense highway point clouds with synchronized camera boundary validation.",
      stats: [
        { label: "3D Cuboids", value: "850,000" },
        { label: "Angular Precision", value: "±0.5°" },
        { label: "Sensor Modalities", value: "4-LiDAR" }
      ],
      link: "/case-studies/autonomous-perception"
    }
  ],
  "off-the-shelf": [
    {
      id: "biometric-commercial-deployment",
      title: "Pre-Cleared Biometric Face Bank Deployment",
      client: "Fintech Security Leader",
      highlight: "Immediate deployment of 50,000 diverse facial identities with complete commercial model training releases.",
      stats: [
        { label: "Identities", value: "50,000" },
        { label: "Ethnic Balance", value: "Global" },
        { label: "Legal Provenance", value: "100%" }
      ],
      link: "/case-studies/multimodal-medical-qa"
    }
  ]
};

export function ServiceCaseStudiesSection({ serviceSlug = "image-collection", serviceTitle = "Image Data Collection" }) {
  const resolvedSlug = ALIASES[serviceSlug] || serviceSlug;
  const studies = SERVICE_CASE_STUDIES_MAP[resolvedSlug] || SERVICE_CASE_STUDIES_MAP["image-collection"];

  return (
    <section className="service-case-studies-section">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="eyebrow">EMPIRICAL BENCHMARKS & CASE STUDIES</span>
            <h2 className="font-display text-2xl md:text-4xl font-extrabold text-[#12151A] tracking-tight mt-1">
              Proven Deployments in {serviceTitle}
            </h2>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#EC5E27] hover:underline mt-2 md:mt-0"
          >
            <span>View All Engineering Case Studies</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studies.map((study) => (
            <article key={study.id} className="case-study-3d-card group">
              <div className="case-study-card-inner">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-[#EC5E27] bg-[#FFF2ED] px-2 py-0.5 rounded">
                    {study.client}
                  </span>
                  <ArrowUpRight size={16} className="text-[#8E939D] group-hover:text-[#EC5E27] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                <h3 className="font-display text-lg font-bold text-[#12151A] mb-2 leading-snug group-hover:text-[#EC5E27] transition-colors">
                  {study.title}
                </h3>

                <p className="text-xs text-[#5F646D] leading-relaxed mb-6">
                  {study.highlight}
                </p>

                <div className="case-study-stats-grid">
                  {study.stats.map((st, i) => (
                    <div key={i} className="stat-pill">
                      <span className="stat-value">{st.value}</span>
                      <span className="stat-label">{st.label}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-3 border-t border-[#F1F3F5] flex items-center justify-between">
                  <Link
                    to={study.link}
                    className="text-xs font-bold text-[#12151A] group-hover:text-[#EC5E27] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Read Full Methodology</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SpatialDomainStage;
