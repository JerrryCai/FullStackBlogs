/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-100': '#658864',
        'primary-200': '#B7B78A',
        'primary-300': '#fdf6fd',
        'accent-100': '#bc6c25',
        'accent-200': '#ecd79b',
        'text-100': '#292524',
        'text-200': '#78716c',
        'bg-100': '#DDDDDD',
        'text-main': '#EEEEEE',
        'bg-300': '#d1d1d1',
      },
      height: {
        'nav-screen': 'calc(100vh - 90px)',
      },
    },
  },
  plugins: [],
};
