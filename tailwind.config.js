/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ldq: {
          orange: '#FF6B00',
          green: '#10B981',
          dark: '#0A0A0B',
          card: '#090909',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'marquee': 'scroll 35s linear infinite',
        'marquee-matches': 'scroll 40s linear infinite',
      },
    },
  },
  plugins: [],
};
