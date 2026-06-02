/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Pretendard', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#101014',
        paper: '#f7f3ec',
        muted: '#68635d',
        line: '#ded6ca',
        accent: '#7c3aed',
        cyan: '#06b6d4',
      },
      boxShadow: {
        soft: '0 24px 80px rgba(16, 16, 20, 0.10)',
      },
    },
  },
  plugins: [],
};
