/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        black: "#201c1c",
        white: "#e3e3e3",
        blue: "#0852c9",
        main: "#048004",
      },
    },
  },
  plugins: [],
}
