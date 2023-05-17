/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundColor:{
        "base":"#121212",
        "tinted-base":"hsla(0,0%,100%,.07)"
      }
    },
  },
  plugins: [],
};
