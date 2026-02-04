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
        // Pure black for depth, off-white for text
        background: "#050505",
        foreground: "#ededed",
        // A subtle indigo/purple tint for your "Future Tech" vibe (Quantum/AI projects)
        accent: "#6366f1",
        "card-bg": "#0a0a0a",
        "border-dim": "#ffffff1a",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, #202020 1px, transparent 1px), linear-gradient(to bottom, #202020 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
