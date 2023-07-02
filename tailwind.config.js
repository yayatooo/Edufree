/** @type {import('tailwindcss/types').Config} */
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        mobile: '350px',
        tablet: '640px',
        laptop: '1024px',
        desktop: '1480px',
      },
      backgroundColor: {
        'white-primary': '#FFFFFF',
        'blue-primary': '#1C1E53',
        'black-primary': '#282938',
        'yellow-primary': '#FCD980',
        'gray-primary': '#F4F6FC',
        'blue-card': '#2405F2',
      },
      colors: {
        'white-primary': '#FFFFFF',
        'blue-primary': '#1C1E53',
        'black-primary': '#282938',
        'yellow-primary': '#FCD980',
        'gray-primary': '#F4F6FC',
        'blue-card': '#2405F2',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

module.exports = config;
