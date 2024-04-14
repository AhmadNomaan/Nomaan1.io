/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'c-primary': '#fff3e7', 
        'c-secondary':'#fce07d', 
        'c-complimentary': '#2b6a44', 
        'c-typo': '#201f1d'
      },
      keyframes: {
        pop: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.8)" }
        }
      },
      animation: {
        pop: "pop 3000ms ease-in-out infinite"
      }
    }
  },
  plugins: [],
}

