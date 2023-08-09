/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },

    extend: {
      colors:{
        darkBlue:'#02182b',
        darkGray:'#02182b',
      },
    },
  },
  plugins: [],
}

//#02182b - bg
//#02182b - gray
//#ffffff - text white