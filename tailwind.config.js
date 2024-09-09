/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

    },
    boxShadow:{
      'custom-bar':'0 1px 3px rgba(231, 219, 219, 0.566), 0 1px 2px rgba(229, 224, 224, 0.562);'
    }
  },
  plugins: [],
}

