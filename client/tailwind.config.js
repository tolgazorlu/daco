/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    animation: {
      'congrats': 'wiggle 0.3s linear infinite',
    },
    keyframes: {
      wiggle: {
        '0%': { transform: 'translate(1px, 1px) rotate(0deg)' },
        '10%': { transform: 'translate(-1px, -2px) rotate(-1deg)' },
        '20%': { transform: 'translate(-3px, 0px) rotate(1deg)' },
        '30%': { transform: 'translate(3px, 2px) rotate(0deg)' },
        '40%': { transform: 'translate(1px, -1px) rotate(1deg)' },
        '50%': { transform: 'translate(-1px, 2px) rotate(-1deg)' },
        '60%': { transform: 'translate(-3px, 1px) rotate(0deg)' },
        '70%': { transform: 'translate(3px, 1px) rotate(-1deg)' },
        '80%': { transform: 'translate(-1px, -1px) rotate(1deg)' },
        '90%': { transform: 'translate(1px, 2px) rotate(0deg)' },
        '100%': { transform: 'translate(1px, -2px) rotate(-1deg)' },
      }
    },
    fontFamily: {
      poppins: "Poppins",
      aubette: "Aubette",
    },
  },
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
    ],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
