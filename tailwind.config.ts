import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "1" }
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(42px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(42px) rotate(-360deg)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseLine: "pulseLine 2.6s ease-in-out infinite",
        ticker: "ticker 18s linear infinite",
        orbit: "orbit 14s linear infinite"
      }
    }
  },
  plugins: []
} satisfies Config;
