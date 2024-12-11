/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Includes all files in the `app` folder
    './components/**/*.{js,ts,jsx,tsx}', // Includes all files in `components` folder
    './pages/**/*.{js,ts,jsx,tsx}', // For `pages` folder (if used)
    './public/**/*.html', // Optional if you have static HTML files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
