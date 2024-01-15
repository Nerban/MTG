/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({


    ".card-flip-transform":{
      transform: "rotateY(180deg)",
      "transition-duration": "1s"
    },

    ".card-flip-battle":{
      transform: "rotateY(180deg) rotateZ(90deg)",
      "transition-duration": "1s"
    },
    ".card-unflip":{
      "transform": "rotateY(0deg) rotateZ(0deg)",
      "transition-duration": "1s"
    }
   ,
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.amber,
      blue: colors.blue,
      slate: colors.stone,
      fuchsia: colors.fuchsia,
      pink:colors.pink,
      red:colors.red,
      rose:colors.rose,
    },
    extend: {
      aspectRatio: {
        'card': '63.5 / 88.9',
        'art-box': '59 / 45',
        'text-box': '59 / 24'
      },
      backgroundImage: {
        'radial-gradient-yellow': 'radial-gradient(circle, rgba(201,85,0,0.9) 3%, rgba(255,173,0,0.4) 30%, rgba(255,255,255,0) 65%);',
        'radial-gradient-blue':'radial-gradient(circle, rgba(0,10,130,1) 0%, rgba(0,32,136,0.8) 2%, rgba(0,43,133,0.6) 15%, rgba(0,69,143,0.3) 30%, rgba(255,255,255,0) 65%);',
      },

    },
  },
  plugins: [Myclass],
  content: [
    // Example content paths...
    './dist/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,njk,html}',
  ],
}

