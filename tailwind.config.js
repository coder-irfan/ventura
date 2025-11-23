/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colors: {
          midnight: "#081035",
          forest: "#6DA975",
          sunrise: "#FFA700",
          mist: "#ECEDF4",
          mint: "#E4F6E7",
          cloud: "#F5F6F9",
          slate: "#747893",
          sand: "#FFEAC2",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        vazir: ["Vazirmatn", "sans-serif"],
        estedad: ["Estedad", "sans-serif"],
        lora: ["Lora", "sans-serif"],
      },
      fontSize: {
        h1: "clamp(0.7rem, 0.9706rem + 3.7059vw, 2.5rem)",
        h2: "clamp(1.1rem, 3vw, 2.3rem)",
        h3: "clamp(1.1rem, 2vw, 1.3rem)",
        h4: "clamp(1.2rem, 2vw, 1.2rem)",
        description: "clamp(0.85rem, 2vw, 1.2rem)",
      },
      backgroundImage: {
        "tips-bg": "url('/images/tips-bg.webp')",
      },
    },
  },
  plugins: [],
};
