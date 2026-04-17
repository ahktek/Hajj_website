import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          300: "#6EE7B7",
          800: "#065F46",
          900: "#064E3B",
        },
        gold: {
          300: "#F3DA7E",
          400: "#E5C100",
          500: "#D4AF37",
          600: "#B5952F",
        },
        "off-white": "#F0F0F0",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
