/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsxx}",
  ],
  theme: {
    extend: {
      light: {
        primary: '#757575',
        secondary: '#A445ED',
        background: '#ffffff',
        text: '#2D2D2D',
      },
      dark: {
        primary: '#757575',
        secondary: '#A445ED',
        background: '#050505',
        text: '#FFFFFF',
      },
    },
  },
  plugins: [],
}

