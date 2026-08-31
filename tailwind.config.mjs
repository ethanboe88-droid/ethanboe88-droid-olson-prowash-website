import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Brand palette
        ink: {
          DEFAULT: '#0a0a0a',
          soft: '#101012',
          raised: '#141417',
          line: 'rgba(255,255,255,0.08)',
        },
        electric: {
          DEFAULT: '#3b9fd4',
          50: '#eef8fd',
          100: '#d7eefb',
          200: '#b0ddf6',
          300: '#7cc5ee',
          400: '#3b9fd4',
          500: '#2b86bb',
          600: '#236b98',
          700: '#20567b',
          800: '#204966',
          900: '#1f3e57',
        },
        silver: {
          DEFAULT: '#c0c0c0',
          muted: '#9a9a9e',
          dim: '#6b6b70',
        },
      },
      fontFamily: {
        display: ['"Sora"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      maxWidth: {
        content: '1200px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(59,159,212,0.35), 0 18px 50px -12px rgba(59,159,212,0.55)',
        'glow-sm': '0 0 0 1px rgba(59,159,212,0.3), 0 8px 24px -8px rgba(59,159,212,0.45)',
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 30px 60px -30px rgba(0,0,0,0.9)',
      },
      backgroundImage: {
        'brand-gradient':
          'linear-gradient(120deg, #3b9fd4 0%, #7cc5ee 35%, #ffffff 55%, #7cc5ee 72%, #3b9fd4 100%)',
        'radial-fade':
          'radial-gradient(60% 60% at 50% 0%, rgba(59,159,212,0.22) 0%, rgba(10,10,10,0) 70%)',
      },
      keyframes: {
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0.6' },
          '100%': { transform: 'scale(2.4)', opacity: '0' },
        },
      },
      animation: {
        'gradient-pan': 'gradient-pan 8s ease infinite',
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2.5s infinite',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.16,1,0.3,1) infinite',
      },
    },
  },
  plugins: [typography],
};
