/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        pool: {
          950: '#063349',
          900: '#0a4560',
          800: '#0e5b7a',
          700: '#12749a',
          600: '#1790bb',
          500: '#22ade0',
          400: '#5cc9ec',
          300: '#93dcf2',
          200: '#c3edf7',
          100: '#eaf9fc',
        },
        splash: {
          500: '#ff6b4a',
          400: '#ff8c6b',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'water-gradient': 'radial-gradient(circle at 20% 20%, #1790bb 0%, #0a4560 55%, #063349 100%)',
      },
    },
  },
  plugins: [],
};
