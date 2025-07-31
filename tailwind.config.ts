import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        glow: {
          "0%": {
            backgroundPosition: "0% 0%",
          },
          "25%": {
            backgroundPosition: "100% 0%",
          },
          "50%": {
            backgroundPosition: "100% 100%",
          },
          "75%": {
            backgroundPosition: "0% 100%",
          },
          "100%": {
            backgroundPosition: "0% 0%",
          },
        },
      },
      animation: {
        glow: "glow 6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
