/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '4xl': '0 50px 100px -20px rgba(0, 0, 0, 0.5)', // Custom shadow size
      },
    },
  },
  plugins: [],
}
