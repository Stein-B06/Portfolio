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
          primary: "#F1F7ED",
          secondary: "#243E36",
          accent: "#7CA982",
        },
        // Bakgrunns og tekstfarger for dark-mode
        dark: {
          primary: "#243E36",
          secondary: "#F1F7ED",
          accent: "#7CA982",
        },
      },
      fontFamily: {
        body: ["Roboto", "sans-serif"], // For brødtekst
        header: ["Oswald", "sans-serif"], // For overskrifter
      },
      boxShadow: {
        neon: "0 0 10px #099D69, 0 0 10px #099D69, 0 0 3px #099D69",
      },
    },
  },
  plugins: [],
};
export default config;
