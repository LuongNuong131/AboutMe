/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FAFAFA",
        surface: "#FFFFFF",
        border: "#F3F4F6",
        muted: "#6B7280",
        dark: "#111827",
      },
      fontFamily: {
        /* Phân bổ rõ ràng font tiêu đề và font body */
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
        display: ['"Syne"', "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        blob: "blob 10s infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(40px, -60px) scale(1.1)" },
          "66%": { transform: "translate(-30px, 30px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
