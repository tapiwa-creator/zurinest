/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // 👈 This tells Tailwind to look at your React components
  ],
  theme: {
    extend: {
      colors: {
        'tsiga-dark': '#2D2424',
        'tsiga-gold': '#A67C52',
      },
    },
  },
  plugins: [],
}