/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Bebas Neue'", "cursive"],
        body: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        cinema: {
          bg: "#0a0a0f",
          card: "#13131a",
          border: "#1e1e2e",
          accent: "#e63946",
          gold: "#ffd700",
          muted: "#6b7280",
        },
      },
    },
  },
  plugins: [],
};
