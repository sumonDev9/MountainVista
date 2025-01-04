/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#111111',
        secondary: '#706F6F',
        bgbton: '#F9A51A',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

