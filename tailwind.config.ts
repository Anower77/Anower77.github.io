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
        background: "var(--bg-main)",
        surface: {
          DEFAULT: "var(--bg-surface)",
          subtle: "var(--bg-surface-subtle)",
          muted: "var(--bg-surface-muted)",
          border: "var(--border-main)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          hover: "#1d4ed8",
          muted: "#3b82f6",
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
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
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
        "grid-pattern": "radial-gradient(currentColor 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
