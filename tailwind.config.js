/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { Overpass: ["Overpass", "sans-serif"] },
    },
    colors: {  
      primary: "hsl(25, 97%, 53%)",
      White: "hsl(0, 0%, 100%)",
      Light_Grey: " hsl(217, 12%, 63%) ",
      Medium_Grey: "hsl(216, 12%, 54%)",
      Dark_Blue: " hsl(213, 19%, 18%) ",
      Very_Dark_Blue: "hsl(216, 12%, 8%)",
    },
  },
  plugins: [],
};
