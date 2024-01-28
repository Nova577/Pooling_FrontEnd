import daisyui from 'daisyui'
import daisyuiThemes from 'daisyui/src/theming/themes'
import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  theme: {
    extend: {
      height: {
        '15': '3.75rem'
      },
      flexGrow: {
        2: '2'
      }
    },
    fontFamily: {
      'playfair': 'Playfair Display',
      'st-song': 'STSong'
    },
  },
  plugins: [
    daisyui,
    nextui({
      layout: {
        spacingUnit: 5
      }
    })
  ],
  daisyui: {
    base: false,
    // styled: false,
    themes: [
      {
        light: {
          ...daisyuiThemes["light"],
        }
      }
    ]
  }
}
