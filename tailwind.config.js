import daisyui from 'daisyui'
import daisyuiThemes from 'daisyui/src/theming/themes'
import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '15': '3.75rem'
      },
    },
    fontFamily: {
      'playfair': 'Playfair Display',
      'st-song': 'STSong'
    }
  },
  plugins: [daisyui, nextui()],
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
