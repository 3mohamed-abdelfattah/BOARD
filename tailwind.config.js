/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBackgroundColor: "#2D1E6B",
        secondaryBackgroundColor: "#DD00B8",
      },
      screens: {
        '2xl': '1536px',
        'xl': '1280px',
        'lg': '1024px',
        'md': '768px',
        'sm': '640px',
        'vsm': '400px',
      },
    },
  },
  plugins: [],
}