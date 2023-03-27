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
          dark: '#339e95',
          DEFAULT: '#49c5b6',
          light: '#6fd1c2',
          lightest: '#99ded1',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
