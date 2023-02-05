/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#b9f257",

          "secondary": "#baf7a0",

          "accent": "#1035a3",

          "neutral": "#181726",

          "base-100": "#293142",

          "info": "#84A4F5",

          "success": "#66EAD9",

          "warning": "#EF922E",

          "error": "#E23532",
        },
      },
    ],
  },
  plugins: [
    require("daisyui"),
  ],
}
