/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        black: "#201c1c",
        white: "#e3e3e3",
        blue: "#0852c9",
        main: "#201c1c",
        lightgray: "#c9c9c9",
      },
    },
  },
  plugins: [],
}
