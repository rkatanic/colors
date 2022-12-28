/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "hsl(214, 8%, 8%)",
        gray: {
          50: "hsl(214, 8%, 98%)",
          100: "hsl(214, 8%, 96%)",
          200: "hsl(214, 8%, 90%)",
          300: "hsl(214, 8%, 84%)",
          400: "hsl(214, 8%, 65%)",
          500: "hsl(214, 8%, 46%)",
          600: "hsl(214, 8%, 34%)",
          700: "hsl(214, 8%, 26%)",
          800: "hsl(214, 8%, 18%)",
          900: "hsl(214, 8%, 11%)",
        },
      },
    },
  },
  plugins: [],
};
