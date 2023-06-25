/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F9F9F9",
        primary: {
          DEFAULT: "#69B99D",
          light: "#CCF4E6",
          dark: "#0F241D",
        },
        gray: {
          DEFAULT: "#767676",
          light: "#E4E4E4",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        title: ["Poppins", "sans-serif"],
        quote: ["Georgia", "serif"],
      },
      container: {
        padding: "1rem",
        screens: {
          xl: "1120px",
          "2xl": "1120px",
        },
      },
    },
  },
  plugins: [],
};
