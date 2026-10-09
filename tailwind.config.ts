import type { Config } from 'tailwindcss';

/** Mint AMC — enterprise marketing layout (Spectro-inspired rhythm). */
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
          muted: '#F4F6F5',
        },
        line: '#E2E8E4',
        muted: '#F4F6F5',
        'bg-body': '#FFFFFF',
        'bg-card': '#FFFFFF',
        'border-card': '#E2E8E4',
        'card-header': '#F4F6F5',
        'row-hover': '#F4F6F5',
        'green-healthy': '#1C5338',
        'text-primary': '#2C3135',
        'text-secondary': '#5C6166',
      },
      borderRadius: {
        DEFAULT: '6px',
        sm: '6px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '20px',
      },
      fontFamily: {
        sans: ['var(--font-open-sans)', 'system-ui', 'sans-serif'],
      },
      maxWidth: { layout: '1280px', prose: '720px' },
      boxShadow: {
        card: '0 2px 16px rgba(44, 49, 53, 0.06)',
        'card-hover': '0 12px 40px rgba(44, 49, 53, 0.12)',
        header: '0 1px 0 rgba(44, 49, 53, 0.06)',
      },
    },
  },
  plugins: [],
};

export default config;
