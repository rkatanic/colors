/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "hsl(0, 0%, 8%)",
        gray: {
          50: "hsl(0, 0%, 98%)",
          100: "hsl(0, 0%, 96%)",
          200: "hsl(0, 0%, 90%)",
          300: "hsl(0, 0%, 84%)",
          400: "hsl(0, 0%, 65%)",
          500: "hsl(0, 0%, 46%)",
          600: "hsl(0, 0%, 34%)",
          700: "hsl(0, 0%, 26%)",
          800: "hsl(0, 0%, 16%)",
          900: "hsl(0, 0%, 10%)",
        },
      },
    },
  },
  plugins: [],
};
