import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#09090B",
        surface: {
          DEFAULT: "#111114",
          subtle: "#18181B",
          muted: "#202024",
          border: "#27272A",
        },
        accent: {
          DEFAULT: "#3B82F6",
          hover: "#2563EB",
          muted: "#1D4ED8",
          glow: "rgba(59, 130, 246, 0.15)",
        },
        violet: {
          accent: "#8B5CF6",
          glow: "rgba(139, 92, 246, 0.15)",
        },
        emerald: {
          accent: "#10B981",
          glow: "rgba(16, 185, 129, 0.15)",
        },
        text: {
          primary: "#FAFAFA",
          secondary: "#A1A1AA",
          muted: "#71717A",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "JetBrains Mono", "Fira Code", "monospace"],
      },
      keyframes: {
        pulseSlow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        dataStream: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateX(100%)", opacity: "0" },
        },
      },
      animation: {
        "pulse-slow": "pulseSlow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "data-stream": "dataStream 2s linear infinite",
      },
      backgroundImage: {
        "grid-pattern": "radial-gradient(#27272a 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
