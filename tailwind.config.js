module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navBar:
        {
          50: '#eaf7ea',
          100: '#FEFBF3',
          200: '#b6c8ba',
          300: '#9ab19f',
          400: '#7e9a85',
          500: '#65816b',
          600: '#4d6452',
          700: '#36473b',
          800: '#333545',
          900: '#001106',
        }, 
        border:
        {
          50: '#fff8e5',
          100: '#fdeab9',
          200: '#fddc89',
          300: '#fdce59',
          400: '#fdc131',
          500: '#e4a721',
          600: '#b18218',
          700: '#7e5c0f',
          800: '#4c3707',
          900: '#1a1200',
        }
      }
    },
  },
  plugins: [],
}
// Smart swatch