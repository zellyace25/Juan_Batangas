/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: 'Poppins, sans-serif',
        lexend: 'Lexend, sans-serif'
      },
      backgroundColor:{
        primary: '#F5F5F5'
      },
      dropShadow:{
        textShadow: '0px 6.82121px 0px rgba(0, 0, 0, 0.25)'
      }
    },  
  },
  plugins: [],
}