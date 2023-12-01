/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        1280: "1280px",
        1128: "1128px",
        768: "768px",
        500: "500px",
      },
      backgroundImage: {
        behindPhoneGradient:
          "radial-gradient(45.87% 50% at 50% 50%, #3763C1 0%, rgba(35, 70, 157, 0.5) 38.39%, rgba(20, 43, 114, 0) 100%)",
      },

      colors: {
        mainClr: "#061121",
        mainTextClr: "#f4f4f4",
        whiteClr: "#fff",
        grayishWhite: "#f7f9fa",
        grayClr: "#7b849b",
        pClr: "#7d7d7d",
        blueClr: "#1199fa",
        greenishBlue: "rgb(32, 188, 164)",
        navbarHoverCompClr: "#0058aa",
      },
    },
  },
  plugins: [],
};
