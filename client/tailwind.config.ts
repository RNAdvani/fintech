import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ngenx: {
          "100": "#22C55E", // Green
          "200": "#0C0A09", // Dark Brown
          "300": "#1C1917", // Black-Brown
          "400": "#F2F2F2", // Light Gray
        },
        primary: {
          "100": "#22C55E", // Use ngenx 100 as primary 100
          "200": "#0C0A09", // Use ngenx 200 as primary 200
          "300": "#1C1917", // Use ngenx 300 as primary 300
          "400": "#F2F2F2", // Use ngenx 400 as primary 400
          DEFAULT: "#22C55E", // Default primary set to ngenx 100
        },
        secondary: {
          "100": "#0C0A09", // Use ngenx 200 as secondary 100
          "200": "#22C55E", // Use ngenx 100 as secondary 200
          "300": "#F2F2F2", // Use ngenx 400 as secondary 300
          "400": "#1C1917", // Use ngenx 300 as secondary 400
          DEFAULT: "#0C0A09", // Default secondary set to ngenx 200
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;