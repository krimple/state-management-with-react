/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
      "./index.html",
      "./src/**/*.{html,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
        fontFamily: ['Inter var', ...defaultTheme.fontFamily.sans]
    }
  },
  plugins: [],
}

