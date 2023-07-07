/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        "primary": "##EBB24E",
        "secondary": "#f000b8",
        "accent": "#1dcdbc",
        "neutral": "#2b3440",
        "base-100": "#ffffff",
        "info": "#e5e7eb",
        "success": "#36d399",
        "warning": "#fde047",
        "error": "#f87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

