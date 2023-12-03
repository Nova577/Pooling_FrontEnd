import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'playfair': 'Playfair Display'
    }
  },
  plugins: [daisyui],
  daisyui: {
    base: false,
    // styled: false,
    themes: ['light']
  }
}

