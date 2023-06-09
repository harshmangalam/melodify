/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors:{
        "green-base":"#1ed760",
        "subdude":"#a7a7a7",
        "essential-subdude":"#727272",
        "essential-negative":"#e91429",
        negative:"#f15e6c",
        "bright-accent":"#117a37",
        "essential-bright-accent":"#169b45",
        "green-base-highlight":"#1fdf64",
      },
      backgroundColor:{
        "base":"#121212",
        "tinted-base":"hsla(0,0%,100%,.07)",
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
