import React, { useState, useEffect, useRef, useMemo } from "react";
import "./ServicesHeroMarquee.css";
export const DEFAULT_HERO_CARDS = [
    {
        id: "card-1",
        title: "Retail Product Detection & Recognition",
        category: "Retail Computer Vision",
        image: "/services-motion/Annotation_motion.jpg",
        heightClass: "height-tall",
    },
    {
        id: "card-2",
        title: "Facial Expression & Emotion Annotation",
        category: "Facial Analysis",
        image: "/services-motion/Annotation_motion2.jpg",
        heightClass: "height-compact",
    },
    {
        id: "card-3",
        title: "Voice Recording & Speech Collection",
        category: "Speech Data Collection",
        image: "/services-motion/Audio_motion.jpg",
        heightClass: "height-tall",
    },
    {
        id: "card-4",
        title: "Human Detection & Activity Monitoring",
        category: "Human Activity Recognition",
        image: "/services-motion/Image_motion.jpg",
        heightClass: "height-tall",
    },
    {
        id: "card-5",
        title: "Facial Landmark & Expression Annotation",
        category: "Facial Keypoint Annotation",
        image: "/services-motion/Image_motion2.jpg",
        heightClass: "height-medium",
    },
    {
        id: "card-6",
        title: "Multi-Species Image Dataset Collection",
        category: "Animal & Wildlife Data",
        image: "/services-motion/Image_motion3.jpg",
        heightClass: "height-wide",
    },
    {
        id: "card-7",
        title: "Document Structure & Layout Annotation",
        category: "Document AI",
        image: "/services-motion/Text_motion.png",
        heightClass: "height-compact",
    },
    {
        id: "card-8",
        title: "Shipping Label & OCR Data Annotation",
        category: "OCR & Document Processing",
        image: "/services-motion/Text_motion2.png",
        heightClass: "height-medium",
    },
    {
        id: "card-9",
        title: "Voice Message & Audio Data Collection",
        category: "Voice Data Collection",
        image: "/services-motion/Audio_motion.jpg",
        heightClass: "height-tall",
    },
    {
        id: "card-10",
        title: "Speech Transcription & Audio Analysis",
        category: "Speech-to-Text",
        image: "/services-motion/Transcription_motion.jpg",
        heightClass: "height-medium",
    },
    {
        id: "card-11",
        title: "Object Detection & Visual Data Labeling",
        category: "Computer Vision Annotation",
        image: "/services-motion/Annotation_motion.jpg",
        heightClass: "height-tall",
    },
    {
        id: "card-12",
        title: "Virtual Reality & Human Spatial Tracking",
        category: "Spatial AI",
        image: "/services-motion/VR_motion.jpg",
        heightClass: "height-wide",
    },
    {
        id: "card-13",
        title: "Augmented Reality & Scene Understanding",
        category: "AR & Spatial Computing",
        image: "/services-motion/VR_motion2.jpg",
        heightClass: "height-compact",
    },
    {
        id: "card-14",
        title: "Industrial Visual Inspection & Recognition",
        category: "Industrial AI",
        image: "/services-motion/VR_motion3.jpg",
        heightClass: "height-medium",
    },
];
// Target duration for a card to travel from center to edge (8.5s for brisk cinematic speed)
const DURATION_MS = 8500;
export function ServicesHeroMarquee({ cards = DEFAULT_HERO_CARDS, headlineTop = "Every signal has a purpose.", headlineHighlight = "Every dataset has a story.", eyebrow = "· COLLECTION · ANNOTATION · INTELLIGENCE ·", bottomHeading = "Real-world data.", bottomHighlight = "Ready for AI.", bottomDescription = "Explore how visual, audio and language data move through a deliberate collection and review workflow. Every project is scoped to its own requirements.", }) {
    const stageRef = useRef(null);
    const [stageWidth, setStageWidth] = useState(1400);
    const [time, setTime] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [failedImages, setFailedImages] = useState({});
    // Split cards into Left stream and Right stream
    const { leftStream, rightStream } = useMemo(() => {
        const half = Math.ceil(cards.length / 2);
        return {
            leftStream: cards.slice(0, half),
            rightStream: cards.slice(half),
        };
    }, [cards]);
    // Keep track of container width for responsive positioning
    useEffect(() => {
        const updateWidth = () => {
            if (stageRef.current) {
                setStageWidth(stageRef.current.clientWidth);
            }
        };
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);
    // 60FPS RAF Animation Engine with gentle hover-slow
    useEffect(() => {
        let animationFrameId;
        let lastTimestamp = performance.now();
        const loop = (currentTimestamp) => {
            const dt = currentTimestamp - lastTimestamp;
            lastTimestamp = currentTimestamp;
            // When hovered, reduce speed by 80% so cards can be hovered/viewed
            const speedMultiplier = isHovered ? 0.2 : 1.0;
            setTime((prevTime) => prevTime + dt * speedMultiplier);
            animationFrameId = requestAnimationFrame(loop);
        };
        animationFrameId = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isHovered]);
    const handleImageError = (uniqueKey) => {
        setFailedImages((prev) => ({ ...prev, [uniqueKey]: true }));
    };
    const halfWidth = stageWidth / 2;
    const travelDistance = halfWidth + 140;
    // Render a stream card computed from progress p in [0, 1)
    const renderCard = (card, idx, direction, total) => {
        const uniqueKey = `${card.id}-${direction}`;
        const offset = idx / total;
        const progress = ((time / DURATION_MS + offset) % 1 + 1) % 1;
        // 1. Distance accelerates outward as cards approach viewer
        const dist = Math.pow(progress, 1.25) * travelDistance;
        const x = direction === "left" ? -dist : dist;
        // 2. Zoom: cards grow substantially from center (0.52) to edge (1.42)
        const scale = 0.52 + Math.pow(progress, 1.15) * 0.9;
        // 3. Opacity: fade in gently from center (no abrupt popping), fade out at extreme edge
        let opacity = 1;
        if (progress < 0.1) {
            opacity = (progress / 0.1) * 0.7;
        }
        else if (progress > 0.88) {
            opacity = 1 - ((progress - 0.88) / 0.12) * 0.6;
        }
        // 4. Z-Index: outer cards overlap in front of inner cards
        const zIndex = Math.floor(progress * 25) + 1;
        const isFailed = failedImages[uniqueKey];
        return (<div key={uniqueKey} className={`marquee-dynamic-card ${card.heightClass}`} style={{
                transform: `translate3d(calc(-50% + ${x}px), -50%, 0) scale(${scale})`,
                opacity,
                zIndex,
            }} title={card.title}>
        {isFailed ? (<div style={{
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(135deg, #161a23 0%, #0d0f14 100%)",
                }}/>) : (<img src={card.image} alt={card.title} className="marquee-card-image" loading="lazy" onError={() => handleImageError(uniqueKey)}/>)}

        {/* Dark Vignette Scrim */}
        <div className="marquee-card-scrim"/>

        {/* Top Badge: glowing red dot + title */}
        <div className="marquee-card-topbar">
          <span className="marquee-card-dot"/>
          <span className="marquee-card-title">{card.title}</span>
        </div>

        {/* Bottom Category */}
        <div className="marquee-card-category">{card.category}</div>
      </div>);
    };
    return (<section className="hero-marquee-section" aria-label="Services Showcase">
      {/* 1. TOP CENTERED TYPOGRAPHY */}
      <div className="hero-marquee-top">
        <h1 className="hero-marquee-headline-1">{headlineTop}</h1>
        <div className="hero-marquee-headline-2">{headlineHighlight}</div>
      </div>

      {/* 2. DIVERGING 3D ZOOMING MARQUEE STAGE */}
      <div ref={stageRef} className="hero-marquee-stage" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        {/* Left Stream: Emerging from center and zooming leftwards */}
        {leftStream.map((card, idx) => renderCard(card, idx, "left", leftStream.length))}

        {/* Right Stream: Emerging from center and zooming rightwards */}
        {rightStream.map((card, idx) => renderCard(card, idx, "right", rightStream.length))}
      </div>

      {/* 3. BOTTOM CENTERED TYPOGRAPHY */}
      <div className="hero-marquee-bottom">
        <span className="hero-marquee-eyebrow">{eyebrow}</span>
        <h2 className="hero-marquee-bottom-heading">
          {bottomHeading} <span>{bottomHighlight}</span>
        </h2>
        {bottomDescription && (<p className="hero-marquee-bottom-desc">{bottomDescription}</p>)}
      </div>
    </section>);
}
