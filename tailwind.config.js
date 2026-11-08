/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: "#0D1530", // midnight navy, used for the hero and footer
        dusk: "#1A2557",
        moon: "#E7EBF8", // text on night
        haze: "#A9B2D1", // muted text on night
        lamp: "#F4B860", // streetlamp amber, the one warm accent
        paper: "#F5F7FB", // cool paper background for content
        ink: "#151B36", // text on paper
        slate: "#566080", // muted text on paper
        line: "#DCE1EE", // hairlines on paper
        signal: "#3345C9", // links on paper
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
