/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
      'signature':["Nova Square", "Great vibes"],
      'social':["Poppins'", "sans-serif"],
      'name' :["Antonio", "sans-serif"]
    },
    Shadow: {
      'pythonbor': ["0 35px 60px -15px yellow-400", " 0 45px 65px blue-400"],
    }
      
       
  },
    
  },
  plugins: [],
}

