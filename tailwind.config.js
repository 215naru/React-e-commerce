/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-gray':'#eaeaea',
        'custom-red':'#ff5151',
      },
      backgroundImage:{
        'hero': "url('/hero_bg.png')",
      },
    },
  },
  plugins: [],
}