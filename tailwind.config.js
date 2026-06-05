/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FAF6EE", // Royal Rajasthani Cream Background
        secondary: "#FFFFFF", // White cards and content panels
        accent: "#7A1E30", // Deep Maroon/Burgundy
        accentGold: "#C5A880", // Rajasthani Sand Gold / Decorative gold
        accentGoldDark: "#B49365",
        darkMaroon: "#3D050E", // Header topbar and footer background
        textDark: "#2B1B1E", // Dark reading color
        textMuted: "#6E5D60", // Soft grey-brown for secondary text
        muted: "#8A797C",
      },
      fontFamily: {
        sans: ["Poppins", "Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        cinzel: ["Cinzel", "serif"],
      },
    },
  },
  plugins: [],
}
