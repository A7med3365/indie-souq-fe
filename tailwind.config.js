// tailwind.config.js
const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: '#f1592d',
        white: '#ffffff',
        gray1: '#8B8B8B',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
