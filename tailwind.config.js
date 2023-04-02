/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: {
          dark: '#512991',
          DEFAULT: '#9254de',
          light: '#b37feb',
          lightest: '#f9f0ff',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
