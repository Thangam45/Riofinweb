/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Inter", "sans"],
      },
      colors: {
        mygreen: '#00ff00',
        countertext:'#514F6E',
        myblue:'#170f49',
        blue1:'#0F0FC9',
        slidevlue:'#3d5ffd',
      },
    },
  },
  plugins: [],
}
