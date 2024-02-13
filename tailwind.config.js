/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '10rem', // Adjust padding as per your requirement
        
      },
      
    },
  },
  plugins: [],
}