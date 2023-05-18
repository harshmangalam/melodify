/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors:{
        "bright-accent":"#1ed760",
        "subdude":"#a7a7a7"
      },
      backgroundColor:{
        "base":"#121212",
        "tinted-base":"hsla(0,0%,100%,.07)"
      }
    },
  },
  plugins: [],
};
