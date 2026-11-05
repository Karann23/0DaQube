# DaQube Website — Master Manual Editing Guide

This guide explains how to manually add, edit, or remove any text, image, video, link, or page across the entire DaQube website.

---

## 1. The Core Rule for Media (Photos & Videos)

All media assets are stored inside the `public/` directory:
- **Images / Icons / Logos:** Save files in `public/images/` (e.g. `public/images/my-photo.jpg` or `public/images/logos/new-logo.svg`)
- **Videos:** Save files in `public/videos/` (e.g. `public/videos/my-video.mp4`)

### How to Reference Media in Code
Always use a root-relative path starting with `/`:
```javascript
image: "/images/my-photo.jpg"
video: "/videos/my-video.mp4"
```
*(You can also use external URLs like `https://images.unsplash.com/...` or `https://videos.pexels.com/...`)*

---

## 2. Directory & File Reference Map

| What You Want to Change | File to Edit |
| :--- | :--- |
| **Site Name, Tagline & Email** | `src/lib/home-content.js` |
| **Header Nav Links & Dropdowns** | `src/components/site-header.jsx` |
| **Header / Footer Logos** | `src/components/brand.jsx` & `public/images/logos/` |
| **Footer Links, Columns & Legal** | `src/components/site-footer.jsx` |
| **Homepage Content & Cards** | `src/lib/home-content.js` & `src/pages/HomePage.jsx` |
| **Homepage 3D Video & Hero Text** | `src/components/synaptic-hero.jsx` |
| **Service Categories, Subpages & Sub-Subpages** | `src/lib/services-taxonomy.js` & `src/lib/content.js` |
| **Case Studies (List & Details)** | `src/lib/content.js` (`caseStudies` array) |
| **Insights & Blog Articles** | `src/lib/content.js` (`articles` array) |
| **Contact Form & Scoping Tool** | `src/components/contact-form.jsx` |
| **Company & About Pages** | `src/pages/AboutPage.jsx`, `AboutCompanyPage.jsx`, `AboutCareersPage.jsx` |
| **Global Network Pages** | `src/pages/NetworkPage.jsx`, `NetworkContributorsPage.jsx`, etc. |
| **Quality & Security Pages** | `src/pages/QualityPage.jsx`, `QualitySecurityPage.jsx`, etc. |
| **Global Brand Colors & Styles** | `tailwind.config.js` & `src/index.css` |

---

## 3. Header, Logo & Footer

### A. Navigation Bar & Dropdowns (`src/components/site-header.jsx`)
- **Main Top Menu Labels:** Search for `<span>Services</span>`, `<span>Network</span>`, `<span>Case Studies</span>`, `<span>Quality & Trust</span>`, `<span>About Us</span>`.
- **Top CTA Button ("Discuss Project"):** Look around line 705:
  ```jsx
  <Link to="/contact" className="site-header-cta">
    <span>Discuss Project</span>
    <ArrowUpRight size={14} />
  </Link>
  ```
- **Mega Dropdown Menus:** Search for `{/* 1. SERVICES */}` or `{activeDropdown === "services" && (` to add or modify items inside the dropdown menus.

### B. Logo (`src/components/brand.jsx`)
- Loads official SVG files from `public/images/logos/daqube-mark.svg` and `public/images/logos/daqube-logo.svg`.
- Replace those SVG files in `public/images/logos/` to change the logo site-wide.

### C. Footer (`src/components/site-footer.jsx`)
- **Contact Email & Badges (Lines 17–25):** Displays email (`siteConfig.contactEmail`) and certifications (`SOC 2`, `ISO 27001`, `HIPAA`).
- **Footer Link Columns (Lines 29–65):** Edit or add links:
  ```jsx
  <Link to="/your-url">Your Custom Label</Link>
  ```
- **Copyright & Bottom Links (Lines 68–75):** Privacy Policy and Terms of Service links.

---

## 4. Homepage Content (`src/lib/home-content.js`)

Open `src/lib/home-content.js` to edit the core text without touching JSX code:

### Site Title & Email:
```javascript
export const siteConfig = {
    name: "DaQube",
    tagline: "The Data Behind Intelligence.",
    contactEmail: "partnerships@daqube.ai",
};
```

### Modality Cards (Image & Text):
```javascript
export const homeModalityCards = [
    {
        number: "01 / VISUAL DATA",
        title: "See the details.",
        description: "Images, video frames, object labels and scene understanding.",
        image: "/images/your-card-photo.jpg", // Photo file in public/images/
    },
    ...
];
```

### Process Steps:
Edit `homeProcessSteps` array for step numbers, titles, and descriptions.

### Hero Video & Headline:
Open `src/components/synaptic-hero.jsx`:
- Edit the headline text "The data behind intelligence."
- Replace video source `/videos/synaptic-hands.mp4` with any custom video.

---

## 5. Services Architecture (Categories, Subpages & Sub-Subpages)

Services are dynamically generated through `src/lib/services-taxonomy.js` and `src/lib/content.js`.

### URL Structure:
1. **Hub:** `/services` -> `src/pages/ServicesPage.jsx`
2. **Category Subpage:** `/services/:categorySlug` -> `src/pages/ServiceCategoryPage.jsx`
3. **Detail Sub-Subpage:** `/services/:categorySlug/:subSlug` -> `src/pages/ServiceSubSubPage.jsx`

### Editing a Service Category (`src/lib/services-taxonomy.js`):
Find `export const SERVICE_CATEGORIES = [...]`:
```javascript
{
  id: "image-collection",
  slug: "image-collection",
  title: "Image Data Collection",
  eyebrow: "01 / VISUAL DATA",
  image: "/images/services_image_collection.png",  // Category photo
  summary: "Purpose-built image datasets for computer vision...",
  heroHighlight: "Purpose-Built Visual Ground Truth at Scale",
  accent: "#EC5E27",
  ...
}
```

### Adding or Editing a Sub-Subpage:
Inside any category object, edit the `subpages: [...]` array:
```javascript
subpages: [
  {
    slug: "retail-shelf",                        // URL: /services/image-collection/retail-shelf
    title: "Retail Product & Shelf Perception",
    short: "High-density retail shelf captures covering diverse packaging...",
    eyebrow: "RETAIL & COMMERCE",
    image: "/images/retail-shelf.jpg",           // Photo for this subpage
    deliverables: [
      "Multi-angle shelf photos with synchronized SKU manifests",
      "High-resolution 4K/8K images with camera intrinsic calibration"
    ],
    specifications: {
      resolutions: "12MP, 24MP, 48MP RAW and uncompressed JPEG",
      lighting: "Overhead fluorescent, warm LED, natural window spill"
    },
    workflow: [
      { phase: "Taxonomy", desc: "Map target product categories..." },
      { phase: "Field Rig", desc: "Deploy calibrated camera rigs..." }
    ],
    deepDive: "Full detailed write-up describing the technical capability..."
  },
  // To add a new sub-subpage, simply copy-paste a new block here!
]
```

### Adding Video to a Service (`src/lib/content.js`):
In `export const services = [...]`:
```javascript
{
  slug: "image-collection",
  image: "/images/services_image_collection.png",
  video: "/videos/my-service-video.mp4", // Video in public/videos/
  ...
}
```

---

## 6. Case Studies (`src/lib/content.js`)

All case studies are managed in `src/lib/content.js` under `export const caseStudies = [...]` (line ~506).

### How to Add a New Case Study:
Add an entry to `caseStudies`:
```javascript
{
    slug: "autonomous-drone-inspection",             // Generates /case-studies/autonomous-drone-inspection
    title: "High-Resolution Drone Inspection for Infrastructure",
    industry: "Robotics & Infrastructure",
    type: "Production Case Study",
    image: "/images/drone-case-study.jpg",           // Photo in public/images/
    imageAlt: "Drone inspecting wind turbine blade",
    summary: "Generating 250,000 sub-millimeter surface defect annotations across 80 wind farms.",
    challenge: "Extreme variable lighting, motion blur from high winds, and high altitude reflection...",
    approach: [
        "Step 1: Automated blur-filtering on raw sensor feeds.",
        "Step 2: Sub-pixel polygonal segmentation of hairline cracks.",
    ],
    workflow: [
        "Raw Feed Ingestion",
        "Georeferenced Alignment",
        "Polygonal Annotation",
        "Quality Gate Verification"
    ],
    deliverables: [
        "250,000 validated defect polygons with COCO-format JSON",
        "Per-blade severity classification reports"
    ],
    note: "Delivered under air-gapped ISO 27001 cleanroom protocols."
}
```
*The website automatically creates both the card on `/case-studies` and the full detail page at `/case-studies/autonomous-drone-inspection`.*

---

## 7. Insights & Blog Articles (`src/lib/content.js`)

Articles are managed in `src/lib/content.js` under `export const articles = [...]` (line ~500).

### How to Add or Edit an Article:
```javascript
{
    slug: "scaling-multimodal-data",                 // Generates /insights/scaling-multimodal-data
    title: "How to Scale Multimodal AI Datasets",
    category: "DATA STRATEGY",
    readTime: "5 min read",
    date: "November 2026",
    excerpt: "A short preview summary shown on cards.",
    image: "/images/insights/multimodal-cover.jpg",  // Photo in public/images/
    imageAlt: "Multimodal sensor diagram",
    intro: "Opening paragraph introducing the topic...",
    sections: [
        {
            heading: "1. Synchronizing Time and Modality Streams",
            paragraphs: [
                "Detailed paragraph explaining timestamp synchronization...",
                "Second paragraph explaining drift tolerances..."
            ]
        },
        {
            heading: "2. Structuring Cross-Modal Schemas",
            paragraphs: [
                "Paragraph describing JSON and Parquet export schemas..."
            ]
        }
    ],
    takeaway: "Key summary sentence displayed in a highlighted callout box."
}
```

---

## 8. Dedicated Company, Network & Quality Pages

Static copy and assets for individual pages:

- **About & Leadership:**
  - Overview: `src/pages/AboutPage.jsx`
  - Leadership & History: `src/pages/AboutCompanyPage.jsx`
  - Careers & Culture: `src/pages/AboutCareersPage.jsx`
- **Global Network:**
  - Overview: `src/pages/NetworkPage.jsx`
  - 1,000+ Locales Workforce: `src/pages/NetworkContributorsPage.jsx`
  - Tier-4 Domain Specialists: `src/pages/NetworkDomainExpertsPage.jsx`
  - Ethical AI Standards: `src/pages/NetworkEthicsPage.jsx`
- **Quality & Trust:**
  - Overview: `src/pages/QualityPage.jsx`
  - Enterprise Security & VDI: `src/pages/QualitySecurityPage.jsx`
  - Calibration QA Framework: `src/pages/QualityCalibrationPage.jsx`
- **Contact & Scoping:**
  - Page: `src/pages/ContactPage.jsx`
  - Interactive Scoper Component: `src/components/contact-form.jsx`
- **Industries:**
  - `src/pages/IndustriesPage.jsx`

---

## 9. Testing & Live Preview

When editing files:
1. Start the server (double-click `start-website.bat` or run `npm run dev` in your project folder).
2. Open `http://localhost:3000`.
3. Vite uses **Hot Module Replacement (HMR)**: edits save and display in your browser instantly without needing manual page refreshes.
