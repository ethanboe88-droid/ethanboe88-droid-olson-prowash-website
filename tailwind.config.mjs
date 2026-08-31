import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0a0a0a',
          1: '#0e0f11',
          2: '#141518',
          3: '#1c1e22',
        },
        jet: {
          DEFAULT: '#3b9fd4',
          hi: '#8fd0f0',
          deep: '#1f6f9e',
        },
        chrome: '#c0c4cc',
        hairline: 'rgba(192,196,204,0.14)',
        text: {
          DEFAULT: '#f4f6f8',
          dim: '#aab1bb',
          mute: '#767d87',
        },
        ok: '#4bd0a0',
        warn: '#f0b354',
        danger: '#f0616b',
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      maxWidth: { content: '1200px' },
      letterSpacing: { eyebrow: '0.22em' },
      borderRadius: { '4xl': '1.75rem' },
      boxShadow: {
        jet: '0 0 0 1px rgba(59,159,212,0.4), 0 20px 50px -16px rgba(59,159,212,0.5)',
        'jet-sm': '0 0 0 1px rgba(59,159,212,0.35), 0 10px 26px -10px rgba(59,159,212,0.45)',
        bezel:
          '0 1px 0 0 rgba(255,255,255,0.05) inset, 0 0 0 1px rgba(192,196,204,0.16), 0 40px 80px -40px rgba(0,0,0,0.95)',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.16,1,0.3,1)',
        in: 'cubic-bezier(0.7,0,0.84,0)',
      },
      keyframes: {
        'jet-pan': {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        drift: {
          '0%,100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-14px,0)' },
        },
        sheen: { '100%': { transform: 'translateX(120%)' } },
      },
      animation: {
        'jet-pan': 'jet-pan 9s ease-in-out infinite',
        drift: 'drift 7s ease-in-out infinite',
        sheen: 'sheen 2.4s ease-out',
      },
    },
  },
  plugins: [typography],
};
