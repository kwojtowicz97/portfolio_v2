/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: { fontFamily: { fs: ['"Font Awesome 6 Free"'] } },
    plugins: [require('tailwind-scrollbar-hide')],
  },
}
