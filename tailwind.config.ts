import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: { colors: { brand:{500:"#1e40af",600:"#1e3a8a",800:"#0b1531"} }, boxShadow:{card:"0 12px 24px -12px rgba(0,0,0,0.15)"} } },
  plugins: [],
} satisfies Config;
