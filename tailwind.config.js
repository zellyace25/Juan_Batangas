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
        textShadow: '0px 6.82121px 0px rgba(0, 0, 0, 0.25)',
        boxShadow: '0px 3.16287px 3.16287px rgba(178, 10, 10)',
        mapShadow: '0px 4px 0px rgba(131, 6, 01)',
        mapContainer: '0px 3px 4px rgba(73,73,73,0.75)'
      }
    },  
  },
  plugins: [],
}