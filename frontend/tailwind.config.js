/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        panel:"rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"
      },
      colors:{
        primary: "#0067FF",
        secondary:"#FEB60D",
        heading:"#181A1E",
        text:"#4E545F",
        bg:"#EAEDFE"
      }
    },
  },
  plugins: [],
}