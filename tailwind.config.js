/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("@tailwindcss/line-clamp")],
  daisyui: {
    themes: ["cmyk", "dracula"],
  },
  safelist: [
    "swiper",
    "swiper-slide",
    "swiper-slide-active",
    "swiper-pagination",
    "swiper-pagination-bullet",
    "swiper-pagination-bullet-active",
  ],
};
