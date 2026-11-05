/**
 * DaQube Tailwind theme.
 * Keep brand tokens here so colours, typography and spacing stay consistent.
 */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  // Existing page-specific styles are preserved during the migration.
  // Tailwind utilities are available without changing browser defaults globally.
  corePlugins: { preflight: false },
  theme: {
    extend: {
      colors: {
        daqube: {
          black: '#FDFDF1',            // User's requested background: #FDFDF1
          surface: '#F5F5E4',
          card: '#FFFFFF',
          elevated: '#FFFFFF',
          silver: '#2D3139',           // Readable charcoal body text
          'silver-bright': '#12151A',   // Deep dark charcoal heading text
          muted: '#5F646D',
          orange: '#EC5E27',           // User's requested HEX: #EC5E27
          yellow: '#EC5E27',
          'yellow-hover': '#FF733E',
          crimson: '#EC5E27',          // Mapped to #EC5E27 across all pages
          'crimson-hover': '#FF733E',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'Arial', 'sans-serif'],
        display: ['Manrope', 'DM Sans', 'sans-serif'],
      },
      maxWidth: {
        content: '1160px',
      },
      boxShadow: {
        crimson: '0 4px 18px rgba(236, 94, 39, 0.35)',
        yellow: '0 4px 18px rgba(236, 94, 39, 0.35)',
        orange: '0 4px 18px rgba(236, 94, 39, 0.35)',
      },
    },
  },
  plugins: [],
};
