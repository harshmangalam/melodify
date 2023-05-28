/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors:{
        "bright-accent":"#1ed760",
        "subdude":"#a7a7a7",
        "essential-subdude":"#727272"
      },
      backgroundColor:{
        "base":"#121212",
        "tinted-base":"hsla(0,0%,100%,.07)",
        "green-base":"#1ed760",
        "green-base-highlight":"#1fdf64",
      }
    },
  },
  plugins: [],
};
