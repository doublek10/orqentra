import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: { extend: { colors: { ink: { DEFAULT: "#05070f", 800: "#0a0f1f", 700: "#111830" }, electric: "#3b82f6", violet: "#8b5cf6", orbit: "#22d3ee" },
    fontFamily: { sans: ["var(--font-sans)", "system-ui", "sans-serif"] } } },
  plugins: [],
};
export default config;
