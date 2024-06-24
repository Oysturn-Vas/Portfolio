/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px"
        // => @media (min-width: 1536px) { ... }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"]
      },
      colors: {
        pearl: {
          DEFAULT: "#eae0c8",
          100: "#3f3318",
          200: "#7e6630",
          300: "#ba994a",
          400: "#d2bc89",
          500: "#eae0c8",
          600: "#eee6d3",
          700: "#f2ecde",
          800: "#f7f2e9",
          900: "#fbf9f4"
        },
        seashell: {
          DEFAULT: "#fff5ee",
          100: "#632900",
          200: "#c65200",
          300: "#ff832a",
          400: "#ffbc8d",
          500: "#fff5ee",
          600: "#fff8f3",
          700: "#fffaf6",
          800: "#fffbf9",
          900: "#fffdfc"
        },
        royalBlue: {
          DEFAULT: "#4169e1",
          100: "#081232",
          200: "#102565",
          300: "#183797",
          400: "#1f4ac9",
          500: "#4169e1",
          600: "#6787e7",
          700: "#8da5ed",
          800: "#b3c3f3",
          900: "#d9e1f9"
        },
        outerSpace: {
          DEFAULT: "#41464a",
          100: "#0d0e0f",
          200: "#1a1c1d",
          300: "#272a2c",
          400: "#34373a",
          500: "#41464a",
          600: "#646b70",
          700: "#899096",
          800: "#b0b5b9",
          900: "#d8dadc"
        },
        richBlack: {
          DEFAULT: "#010b13",
          100: "#000204",
          200: "#000408",
          300: "#01070c",
          400: "#010910",
          500: "#010b13",
          600: "#064070",
          700: "#0b76cd",
          800: "#45a6f5",
          900: "#a2d2fa"
        }
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite"
      }
    }
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })]
};
