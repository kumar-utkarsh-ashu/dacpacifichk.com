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
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: {
          DEFAULT: "#0B2545",
          dark: "#07192F",
          light: "#134074",
        },
        crimson: {
          DEFAULT: "#D90429",
          hover: "#B30322",
          light: "#FDF0F2",
        },
        slate: {
          marine: "#134074",
          soft: "#EEF4F8",
          muted: "#64748B",
        },
        surface: {
          light: "#F8F9FA",
          card: "#FFFFFF",
          border: "#E2E8F0",
        },
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
