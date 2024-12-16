/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}"
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        darkRed: '#BC0000',     // Rojo oscuro
        lightRed: '#d63b3c',    // Rojo claro
        lightGray: '#f1f1f1',   // Gris claro
        pureWhite: '#FFFFFF',   // Blanco
        darkBlue: '#014E60',    // Azul oscuro
      },
    },
  },
  plugins: [],
}

