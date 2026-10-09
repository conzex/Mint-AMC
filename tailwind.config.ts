import type { Config } from 'tailwindcss';

/** Mint AMC design tokens — Forest Mint, Metallic Gold, Deep Slate. */
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1C5338',
          hover: '#154A2F',
          subtle: '#EBF2EE',
        },
        accent: {
          DEFAULT: '#C5A059',
          hover: '#A88648',
        },
        ink: {
          DEFAULT: '#2C3135',
          muted: '#5C6166',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#EBF2EE',
        },
        line: '#D4DBD7',
        'forest-mint': '#1C5338',
        'forest-mint-hover': '#154A2F',
        'metallic-gold': '#C5A059',
        'metallic-gold-hover': '#A88648',
        'deep-slate': '#2C3135',
        'light-sage': '#EBF2EE',
        muted: '#EBF2EE',
        'bg-body': '#FFFFFF',
        'bg-card': '#FFFFFF',
        'border-card': '#D4DBD7',
        'card-header': '#EBF2EE',
        'row-hover': '#EBF2EE',
        'green-healthy': '#1C5338',
        'text-primary': '#2C3135',
        'text-secondary': '#5C6166',
      },
      borderRadius: { DEFAULT: '2px', sm: '2px', md: '4px', lg: '6px' },
      fontFamily: {
        sans: ['var(--font-open-sans)', 'system-ui', 'sans-serif'],
      },
      maxWidth: { layout: '1440px' },
      boxShadow: {
        card: '0 1px 2px rgba(44, 49, 53, 0.06)',
        header: '0 1px 0 rgba(44, 49, 53, 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
