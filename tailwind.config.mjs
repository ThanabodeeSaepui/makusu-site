/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#9dbf27",
        secondary: "#22953f",
        accent: "",
        neutral: "",
        "base-100": "",
        info: "#007cc6",
        success: "#00bc5a",
        warning: "#aa7900",
        error: "#ff668c",
      },
    },
  },
  daisyui: {
    themes: [
      {
        theme: {
          "primary": "#9dbf27",
          "secondary": "#22953f",
          "accent": "#38bdf8",
          "neutral": "#9ca3af",
          "base-100": "#1f2937",
          "info": "#22d3ee",
          "success": "#2d9a00",
          "warning": "#f59e0b",
          "error": "#e11d48",
        },
      },
    ],
  },
  plugins: [daisyui],
};
