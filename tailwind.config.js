/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      keyframes: {
        pop: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.8)" }
        }
      },
      animation: {
        pop: "pop 200ms ease-in-out"
      }
    }
  },
  plugins: [],
}

