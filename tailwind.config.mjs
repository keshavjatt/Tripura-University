/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f2e8cf", // White
        foreground: "#0F9D58", // Dark Green
        themeGreen: "#bc4749", // Light Green
        themeBrown: "#6a994e", // Reused Dark Green
        themeGold: "#a7c957", // Darker Gold with a Greenish Tone
        themeBeige: "#f2e8cf", // White Accent
      },
    },
  },
  plugins: [],
};
