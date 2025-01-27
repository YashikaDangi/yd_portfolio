import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "slide-right": "slideRight 0.5s ease-out",
      },
      keyframes: {
        slideRight: {
          "0%": {
            transform: "translateX(-100%)",
            // opacity: 0,
          },
          "100%": {
            transform: "translateX(0)",
            // opacity: 1,
          },
        },
      },
    },
  },

  plugins: [],
} satisfies Config;
