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
        text:'#67C8FF',
        buttonCol:'#0085FF',
        
      }
    }
  },
  plugins: [],
}

//#02182b - bg
//#02182b - gray
//#ffffff - text white