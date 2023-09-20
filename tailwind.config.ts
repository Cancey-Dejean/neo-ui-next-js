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
        neoBlack: "#1b1b1b",
        primary: "#1fa57d",
      },
      fontFamily: {
        body: ["TT Commons", "Helvetica", "Arial", "sans-serif"],
        title: ["Quincy", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
