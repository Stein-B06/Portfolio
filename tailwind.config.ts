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
        neon: {
          green: "#39FF14", // Neon grønn
          "green-light": "#57FF45", // Lysere neon grønn
          pink: "#FF1493", // Neon rosa
          "pink-light": "#FF69B4", // Lysere neon rosa
          blue: "#00E6E6", // Neon blå
          "blue-light": "#33FFFF", // Lysere neon blå
          purple: "#9D00FF", // Neon lilla
          "purple-light": "#B266FF", // Lysere neon lilla
        },
        // Definer farger for light-mode
        light: {
          primary: "#E9EDC9", // Light mode primary color
          secondary: "#CCD5AE", // Light mode secondary color
          tertiary: "#D4A373", // Light mode tertiary color
          textPrimary: "#111827", // Light mode text color
          textSecondary: "#6B7280", // Light mode secondary text color
        },
        // Definer farger for dark-mode
        dark: {
          primary: "#1F2937", // Dark mode primary color
          secondary: "#374151", // Dark mode secondary color
          tertiary: "#4B5563", // Dark mode tertiary color
          textPrimary: "#F9FAFB", // Dark mode text color
          textSecondary: "#9CA3AF", // Dark mode secondary text color
        },
      },
      fontFamily: {
        body: ["Poppins", "sans-serif"], // For brødtekst
        header: ["Playfair Display", "serif"], // For overskrifter
        code: ["Fira Code", "monospace"], // Kode eller aksenter
      },
      boxShadow: {
        neon: "0 0 10px #0ff, 0 0 10px #0ff, 0 0 3px #0ff",
      },
    },
  },
  plugins: [],
};
export default config;
