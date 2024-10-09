/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Adding your custom colors using CSS variables
      colors: {
        main: 'var(--main-color)', // CSS variable for main color
        text: 'var(--text-color, white)', // CSS variable with fallback to white
        second: 'var(--second-bg-color, #131313)', // CSS variable with fallback
        bg: 'var(--bg-color, #080808)', // CSS variable with fallback
      },
      // Adding custom keyframes for animations
      keyframes: {
        slideRight: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideTop: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'Serif'], // or any other font
      },
      // Adding animation utility classes
      animation: {
        'slide-right': 'slideRight 1s ease forwards',
        'slide-top': 'slideTop 1s ease forwards',
        'slide-left': 'slideLeft 1s ease forwards',
      },
    },
  },
  plugins: [],
};
