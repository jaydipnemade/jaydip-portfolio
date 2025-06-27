/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "slide-in": "slide-in 0.4s ease-out",
        "fade-in": "fade-in 0.4s ease-in-out",
      },
      keyframes: {
        "slide-in": {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      keyframes: {
        decayBounce: {
          "0%": { transform: "translateY(0)" },
          "10%": { transform: "translateY(-25%)" },
          "20%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(-20%)" },
          "40%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15%)" },
          "60%": { transform: "translateY(0)" },
          "70%": { transform: "translateY(-10%)" },
          "80%": { transform: "translateY(0)" },
          "90%": { transform: "translateY(-5%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        decayBounce: "decayBounce 3s ease-out forwards",
      },
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
