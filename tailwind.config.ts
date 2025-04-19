import type { Config } from 'tailwindcss';
const { heroui } = require("@heroui/react");
import svgToDataUri from "mini-svg-data-uri";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // ensure full coverage
    "./src/styles/**/*.css",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        floatSlow: "floatSlow 4s ease-in-out infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        hover_primary: "var(--hover-primary)",
        light_primary: "var(--light-primary)",
        light_gray: "var(--light-gray)",
        dark_gray: "var(--dark-gray)",
        text_gray: "var(--text-gray)",
        zinc: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
        },
      },
      fontFamily: {
        afacad: ["var(--font-afacad)"],
      },
      spacing: {
        "4.5": "4.5rem",
        "15": "3.3rem",
      },
      zIndex: {
        "-1": "-1",
        "-2": "-2",
        "-3": "-3",
      },
    },
  },
  darkMode: "class",
  safelist: ["container", "container-queries"],
  plugins: [
    require("@tailwindcss/container-queries"),
    heroui(),
    function ({ addBase, theme }) {
      const colors = flattenColorPalette(theme("colors"));
      const newVars = Object.fromEntries(
        Object.entries(colors).map(([key, val]) => [`--${key}`, val])
      );

      addBase({
        ":root": newVars,
      });
    },
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-dot-thick": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme("backgroundColor")),
          type: "color",
        }
      );
    },
  ],
};

export default config;
