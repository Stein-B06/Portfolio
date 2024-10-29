import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./layouts/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        // Bakgrunns og tekstfarger for light-mode
        light: {
          primary: "#E9EDC9",
          secondary: "#CCD5AE",
          accent: "#365314",
          textPrimary: "#010C04",
          textSecondary: "#022E0D",
        },
        // Bakgrunns og tekstfarger for dark-mode
        dark: {
          primary: "#08020C",
          secondary: "#3A015C",
          accent: "#365314",
          ekstra: "#099D69",
          textPrimary: "#F7F7F7",
          textSecondary: "#DEEEE0",
        },
      },
      fontFamily: {
        body: ["Poppins", "sans-serif"], // For brødtekst
        header: ["oswald", "sans-serif"], // For overskrifter
        code: ["Fira Code", "monospace"], // Kode eller aksenter
      },
      boxShadow: {
        neon: "0 0 10px #099D69, 0 0 10px #099D69, 0 0 3px #099D69",
      },
    },
  },
  plugins: [],
};
export default config;
