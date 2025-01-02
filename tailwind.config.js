/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3f0ff',
          100: '#e5dbff',
          200: '#d0bfff',
          300: '#b197fc',
          400: '#9775fa',
          500: '#845ef7',
          600: '#7950f2',
          700: '#7048e8',
          800: '#6741d9',
          900: '#5f3dc4'
        },
        secondary: {
          50: '#fff0f6',
          100: '#ffdeeb',
          200: '#fcc2d7',
          300: '#faa2c1',
          400: '#f783ac',
          500: '#f06595',
          600: '#e64980',
          700: '#d6336c',
          800: '#c2255c',
          900: '#a61e4d'
        },
        accent: {
          50: '#e3fafc',
          100: '#c5f6fa',
          200: '#99e9f2',
          300: '#66d9e8',
          400: '#3bc9db',
          500: '#22b8cf',
          600: '#15aabf',
          700: '#1098ad',
          800: '#0c8599',
          900: '#0b7285'
        }
      }
    },
  },
  plugins: [],
};