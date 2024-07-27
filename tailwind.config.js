/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#1B3252',
        secondary: '#E0D9CF',
      },
      height: {
        '60vh': '60vh',
        '40vh': '40vh',
        '85': '85%',
      },
    },
  },
  plugins: [],
}
