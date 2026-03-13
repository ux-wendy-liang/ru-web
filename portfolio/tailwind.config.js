/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F2FCE2', // Wendy's theme color (green)
        'accent-teal': '#5B9B8E', // Accent color for buttons
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
      },
      animation: {
        'tooltip-bounce': 'tooltip-bounce 2s ease-in-out infinite',
      },
      keyframes: {
        'tooltip-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}
