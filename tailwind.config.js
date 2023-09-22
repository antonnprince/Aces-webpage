/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './js/*.js'],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },

    extend: {
      colors:{
        textCol:'#67C8FF',
        buttonCol:'#0179ED',
        btnText:'#070912',
      },
      backgroundImage:{
        'custom': "url('/images/bag.png')",
      }
    },
  },
  plugins: [],
}

//#02182b - bg
//#02182b - gray
//#ffffff - text white