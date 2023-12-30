// tailwind.config.js
const { nextui } = require('@nextui-org/react');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    // './node_modules/flowbite/**/*.js',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        orange: '#f1592d',
        white: '#ffffff',
        gray1: '#8B8B8B',
        gray2: '#4b4b4b',
        gray3: '#9a9a9a',
        footerBg: '#2d2d2d',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
  //plugins: [nextui(), require('flowbite/plugin')],
};
