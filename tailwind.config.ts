import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        major: "var(--major)",
        minor: "var(--minor)",
        cyan:"var(--cyan)",
        pink:"var(--pink)"
      },
      fontFamily:{
        Vincendo:"/public/fonts/Vincendo.ttf"
      }
    },
  },
  plugins: [],
} satisfies Config;
