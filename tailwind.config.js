/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      mainBGClr: "#061121",
      mainTextClr: "#f4f4f4",
      secondaryTextClr: "#fff",
      blue: "#1199fa",
      greenishBlue: "rgb(32, 188, 164)",
    },
    extend: {},
  },
  plugins: [],
};
