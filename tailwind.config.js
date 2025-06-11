/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'roo-orange': '#E04B1A',
        'roo-orange-dark': '#B83D15',
        'roo-orange-light': '#F5F5F5',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'bold': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};