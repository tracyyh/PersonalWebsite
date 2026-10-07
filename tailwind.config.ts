import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Sometype Mono", "monospace"],
        kefir: ["Kefir", "sans-serif"],
        gaegu: ["Gaegu", "cursive"],
      },
      colors: {
        beige: "#EDE6DC",
        green: "#495541",
        pink: "#773A25",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
