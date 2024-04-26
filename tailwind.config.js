/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryTitle: '#153448',
        primaryContent: '#3C5B6F',
        primarySubContent: '#948979',
        primaryBg: '#DFD0B8',
      }
    },
  },
  plugins: [],
}

