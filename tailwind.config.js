module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
    extend: {
      colors: {
        primary: '#68AAFF',
        dark: '#4A4A4A',
        accent: '#FFB86B',
        secondary: '#F5F7FA',
        success: '#4ADE80',
        warning: '#FFD166',
        info: '#7FBCFF',
        pink: '#FF6B9A',
        purple: '#A78BFA',
      },
      fontFamily: {
        sans: ['Sora', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}; 