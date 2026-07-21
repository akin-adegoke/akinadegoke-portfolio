/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "var(--void)",
        panel: "var(--panel)",
        edge: "var(--edge)",
        chalk: "var(--chalk)",
        dim: "var(--dim)",
        accent: "var(--accent)",
        accentSoft: "var(--accent-soft)",
        signal: "var(--signal)",
      },
      fontFamily: {
        display: ['"Chakra Petch"', "sans-serif"],
        body: ['"Zen Kaku Gothic New"', "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
