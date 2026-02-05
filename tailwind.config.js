/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        earth: {
          50: '#f5f3f0',
          100: '#e8e3dc',
          200: '#d4c9ba',
          300: '#c0ae98',
          400: '#a38968',
          500: '#8b7355',
          600: '#6f5c45',
          700: '#5a4a38',
          800: '#493d2f',
          900: '#3d3428',
        },
        moss: {
          50: '#f3f6f3',
          100: '#e3ebe3',
          200: '#c7d7c7',
          300: '#a3bea3',
          400: '#739973',
          500: '#557d55',
          600: '#426342',
          700: '#364f36',
          800: '#2d402d',
          900: '#263526',
        },
        sage: {
          50: '#f6f7f4',
          100: '#e9ece3',
          200: '#d4dac8',
          300: '#b5c0a3',
          400: '#92a17a',
          500: '#78875f',
          600: '#5e6c4a',
          700: '#4a553c',
          800: '#3e4633',
          900: '#353c2d',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['Instrument Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
