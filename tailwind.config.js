/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'anta': ['"Anta", sans-serif'],
      'poppins': ['"Poppins", sans-serif']
    },
    extend: {
      backgroundImage: {
        'gb': "url('/public/bg-final.png')",
      }
    },
  },
  plugins: [],
}