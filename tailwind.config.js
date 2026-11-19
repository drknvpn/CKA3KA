/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        coal: '#1E1A17',
        oak: '#2B2520',
        cream: '#F3EBDD',
        beige: '#C9BBA6',
        gold: '#D6A85C',
        terra: '#B46A4A',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
