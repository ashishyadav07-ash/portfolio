import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#F5F2EA",
          light: "#FAF8F3",
          muted: "#EBE6DA",
          dark: "#DFD8C8",
        },
        deepInk: {
          DEFAULT: "#111318",
          section: "#111318",
          surface: "#181A20",
          card: "#21232B",
          border: "#2D3039",
          muted: "#4D4E53",
        },
        cobalt: {
          DEFAULT: "#3155FF",
          light: "#5C73FF",
          dark: "#1E3ECC",
          subtle: "rgba(49, 85, 255, 0.1)",
          glow: "rgba(49, 85, 255, 0.25)",
        },
        coral: {
          DEFAULT: "#FF6B5A",
          light: "#FF8A7C",
          dark: "#E04E3D",
          subtle: "rgba(255, 107, 90, 0.1)",
          glow: "rgba(255, 107, 90, 0.25)",
        },
        amber: {
          DEFAULT: "#F2B84B",
          light: "#FAD078",
          dark: "#D49826",
          subtle: "rgba(242, 184, 75, 0.15)",
        },
        lavender: {
          DEFAULT: "#AAB8FF",
          light: "#CCD5FF",
          dark: "#889BF5",
          subtle: "rgba(170, 184, 255, 0.12)",
        },
        softBlue: {
          DEFAULT: "#F0F3FA",
          surface: "#E9EEF9",
          border: "#D6E0F5",
        },
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "JetBrains Mono", "monospace"],
        editorial: ["var(--font-space-grotesk)", "Inter", "sans-serif"],
      },
      boxShadow: {
        "sm-soft": "0 4px 16px rgba(17, 19, 24, 0.08)",
        "md-soft": "0 10px 30px rgba(17, 19, 24, 0.12)",
        "lg-soft": "0 20px 60px rgba(17, 19, 24, 0.15)",
        "cobalt-glow": "0 12px 35px rgba(49, 85, 255, 0.25)",
        "coral-glow": "0 12px 35px rgba(255, 107, 90, 0.25)",
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.035em",
        normal: "0",
        wide: "0.05em",
        wider: "0.15em",
        widest: "0.25em",
      },
      animation: {
        "spin-slow": "spin 35s linear infinite",
        "float-gentle": "float-gentle 7s ease-in-out infinite",
        "pulse-subtle": "pulse-subtle 4s ease-in-out infinite",
        "shimmer-sweep": "shimmer-sweep 3s ease-in-out infinite",
      },
      keyframes: {
        "float-gentle": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "1" },
        },
        "shimmer-sweep": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
