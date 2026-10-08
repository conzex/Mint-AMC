import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'tech-blue': '#0076CE',
        'tech-blue-hover': '#005FA3',
        'mint-green': '#3EB489',
        'mint-light': '#EBF9F3',
        'dark-navy': '#102A43',
        'slate-text': '#52606D',
        'cool-white': '#F5F7FA',
        'border-gray': '#D9E2EC',
      },
      borderRadius: {
        DEFAULT: '2px',
        sm: '2px',
        md: '4px',
        lg: '6px',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Helvetica Neue"',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      maxWidth: {
        layout: '1440px',
      },
    },
  },
  plugins: [],
};

export default config;
