import type { Config } from 'tailwindcss';

/** Mint AMC — enterprise marketing layout (Spectro-inspired rhythm). */
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#2FA878',
          hover: '#268E65',
          subtle: '#EAF6F1',
        },
        secondary: {
          DEFAULT: '#0076CE',
          hover: '#005FA7',
          subtle: '#EBF4FC',
        },
        accent: {
          DEFAULT: '#2FA878',
          hover: '#268E65',
        },
        ink: {
          DEFAULT: '#1B2430',
          muted: '#526170',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#F4F7F9',
        },
        line: '#DCE4EA',
        muted: '#F4F7F9',
        'bg-body': '#FFFFFF',
        'bg-card': '#FFFFFF',
        'border-card': '#DCE4EA',
        'card-header': '#F4F7F9',
        'row-hover': '#EAF6F1',
        'green-healthy': '#2FA878',
        'text-primary': '#1B2430',
        'text-secondary': '#526170',
      },
      borderRadius: {
        DEFAULT: '8px',
        sm: '8px',
        md: '8px',
        lg: '8px',
        xl: '8px',
        '2xl': '8px',
        '3xl': '8px',
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
