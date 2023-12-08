import daisyui from 'daisyui'
import daisyuiThemes from 'daisyui/src/theming/themes'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'playfair': 'Playfair Display',
      'st-song': 'STSong'
    }
  },
  plugins: [daisyui],
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

