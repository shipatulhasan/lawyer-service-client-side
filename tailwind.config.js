/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'khaki': '#8C7156',
      },
      fontFamily: {
        'Bellefair': ['Bellefair', 'serif'],
      }
    },
   
  },
  plugins: [],
}
