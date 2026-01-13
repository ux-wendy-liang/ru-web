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
        'cream': '#F5F3EE', // Background color from Webflow
        'accent-teal': '#5B9B8E', // Accent color for buttons
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
