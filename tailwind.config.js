const plugin = require('tailwindcss/plugin');
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    }
    ,

    extend: {
      fontFamily: {
        myriadpro: ['Myriad Pro'],
        myriadprobold: ['Myriad Pro Bold'],
        myriadprosemi: ['Myriad Pro Semi Bold']
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      }
    },
    variants: {
      animation: ["motion-safe"]
    },

    colors: {
      transparent: 'transparent',
      'primary': {
        100: '#8567a3',
        200: '#7b599d',
        300: '#724e97',
        400: '#67418f',
        500: '#63388f',
        600: '#5f318f',
        700: '#542485',
        800: '#4a187d',
        900: '#3a0076',
      },
      'pinka': {
        900: '#ff5b9a',
        500: '#ec4899',
        400: '#f472b6',
        600: '#db277',
        800: '#9d174d',
      },
      'brown':
      {
        900: '#81bcf9',
      },


      'yellowlight': {
        900: '#F1EB9C'
      },
      'yellow': {
        900: '#fbaf07'
      },

      'darklemon': {
        900: '#79bd12'
      },

      'Red': {
        900: '#eb6169',
      },



      'lavender': {
        900: '#bdb2ff',
      },

      'Violet':
      {
        900: '#c463c7'
      },

      'green': {
        800: '#6bbd63',
        900: '#3db84e'
      },
      'white': '#ffffff',
      'black': '#000000',
      'pink':
      {
        900: '#b53d4b',
        700: '#c4585e',
        500: '#f47027',
      },
      'blue': {
        900: '#3a72cc',
        800: '#3a72cc',
        500: '#3b228c',


      },
      'red': {
        500: '#ef444',
      },

      'lime': {
        400: '#a3e635',
        500: '#84cc16',
        600: '#65a30d',
        700: '7bbe18',
      },


      'Fuchsia': {
        500: "#d946ef",
        800: "#86198f",
        600: "#c026d3",
        900: "#701a75",
        700: "#a21caf",
      }
    },

    fontSize: {
      'xxs': '.7rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      '1rem': '1rem',
      'base': '1.5rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    backgroundPosition: {
      'footerbg': 'center 52px'
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
