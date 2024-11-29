/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        alice: ['"Alice"', "serif"], // Add the Alice font
      },
    },
  },
  plugins: [],
}

