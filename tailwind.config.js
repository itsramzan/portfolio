/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#6b2cd5",
          accent: "#0e1729",
          secondary: "#8493a7",
          "base-100": "#f5f8fb", // white
          info: "#ffc39e",
          success: "#98dcd4",
          warning: "#fddeaa",
          error: "#ffb9b0",
        },
      },
      {
        dark: {
          primary: "#16bef5",
          accent: "#e2e8f0", // white
          secondary: "#8493a7",
          "base-100": "#0a1525",
          info: "#30b8a9",
          success: "#006af7",
          warning: "#ff863c",
          error: "#ff7260",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/line-clamp"), require("daisyui")],
};
