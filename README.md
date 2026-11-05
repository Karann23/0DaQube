# DaQube website

DaQube is a React + TypeScript website powered by Vite, React Router and Tailwind CSS.

## Technology

- **React 19** – reusable UI components and pages
- **TypeScript** – typed component and content logic
- **Tailwind CSS 3** – utility-first styling and shared design tokens
- **Vite 6** – local development and production builds
- **React Router** – page navigation
- **Lucide React** – icons

The Tailwind theme is defined in `tailwind.config.js`. The existing visual language and specialist animation styles are retained in `src/index.css` while the component layer is being migrated. This avoids changing the current website's appearance or breaking its custom video/stacking effects. Use Tailwind utilities for new and refactored UI; keep custom CSS for keyframes and effects that are awkward to express as utilities.

## Start the project

```bash
npm install
npm run dev
```

Vite prints the local URL (configured for port `3000`).

## Production build

```bash
npm run build
npm run preview
```

## Where to edit content

| What you want to change | File / folder |
|---|---|
| Homepage modality cards and process steps | `src/lib/home-content.ts` |
| Service pages and service detail copy | `src/lib/content.ts` → `services` |
| Case studies | `src/lib/content.ts` → `caseStudies` |
| Insights / articles | `src/lib/content.ts` → `articles` |
| Brand name, tagline and contact email | `src/lib/home-content.ts` → `siteConfig` |
| Navigation links | `src/components/site-header.tsx` → `navigation` |
| Header logo / wordmark | `src/components/brand.tsx` |
| Homepage sections and layout | `src/pages/HomePage.tsx` |
| Individual pages | `src/pages/` |

## Where to add images and videos

1. Put image files in `public/images/`.
2. Put video files in `public/videos/`.
3. Reference them in code with root-relative paths, for example `/images/team-at-work.webp` or `/videos/annotation-demo.mp4`.
4. For service imagery, update the `image` field in the matching object in `src/lib/content.ts`.
5. For homepage modality cards, update the `image` field in `src/lib/home-content.ts`.

Keep filenames lowercase and descriptive. Prefer WebP/AVIF for website images and compressed MP4/WebM for video. Add meaningful `alt` text for informative images.

## Tailwind brand tokens

Use the shared theme names from `tailwind.config.js`, for example:

```tsx
<div className="bg-daqube-black text-daqube-silver">
  <h2 className="font-display text-daqube-silver-bright">Your heading</h2>
  <button className="bg-daqube-crimson hover:bg-daqube-crimson-hover">
    Get in touch
  </button>
</div>
```

The content files are intentionally separate from page layout so routine copy and image changes do not require editing complex JSX.
