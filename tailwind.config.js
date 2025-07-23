/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Blue - replace with your brand color
        secondary: '#10B981', // Green - replace with your secondary color
        accent: '#000000', // COMPANY ACCENT COLOR PLACEHOLDER
        highlight: '#000000', // COMPANY HIGHLIGHT COLOR PLACEHOLDER
        background: '#ffffff', // White
        text: '#333333', // Dark gray for regular text
        footer: {
          bg: '#1E40AF', // Same as primary
          text: '#ffffff', // White
          hover: '#10B981', // Same as secondary
        }
      },
    },
  },
  plugins: [],
}; 