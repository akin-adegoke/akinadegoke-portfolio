/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        surface: "var(--surface)",
        edge: "var(--border)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        accentSoft: "var(--accent-soft)",
      },
      fontFamily: {
        display: ['"Fraunces"', "serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
