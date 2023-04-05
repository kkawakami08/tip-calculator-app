/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryCyan: "hsl(var(--primary-cyan))",

        darkCyan: "hsl(var(--dark-cyan))",
        darkGrayishCyan: "hsl(var(--dark-grayish-cyan))",
        grayishCyan: "hsl(var(--grayish-cyan))",
        lightGrayishCyan: "hsl(var(--light-grayish-cyan))",
        veryLightGrayishCyan: "hsl(var(--very-light-grayish-cyan))",
      },
      fontFamily: {
        sans: ["Space Mono", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
