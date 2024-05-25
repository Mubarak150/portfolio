/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        Rajdhani: ['Rajdhani', 'sans-serif'],
        teachers: ["Teachers", 'sans-serif'],
      },
      colors: {
        wheat: 'rgb(243, 228, 201)',
        primary: '#47484b',
        black: '#000000',
        greenLight: '#64f4ab',
        dark2: '#2d2e32',
        grayDark: '#81888f',
        grayLight: '#cccccc',
        grayExtraLight: '#e8e8e8',
        blueLight: '#edf1fc',
        yellow: '#ffc827',
        orange: '#ffae29',
        white: '#ffffff',
        whitish: "#e8e8e8",
        aqua: '#1bafc1',
        dark: '#25262a',
        darker: '#2d3034',
        darkest: '#3d3d3d',
        almostBlack: '#434343',
        transparent: 'rgba(0, 0, 0, 0)',
        transparentLight: 'rgba(0, 0, 0, 0.45)',
        transparentDark: 'rgba(0, 0, 0, 0.5)',
        transparentDarker: 'rgba(0, 0, 0, 0.7)',
        transparentDarkest: 'rgba(0, 0, 0, 0.9)',
        transparentWhite: 'rgba(255, 255, 255, 0.98)',
      },
    },
  },
  plugins: [],
}
