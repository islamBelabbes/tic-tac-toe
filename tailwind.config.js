/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5A1E76",
        secondary: "#2B0040",
        g12: "#E2BE00",
        g11: "#BCDBF9",
        g10: "#48D2FE",
      },
    },
  },
  plugins: [],
};
