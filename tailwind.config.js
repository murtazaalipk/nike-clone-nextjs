/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
      screens: {
        'sm': { 'max': "600px" },
        'md': { 'max': "966px" },
        'lg': { 'max': "991px" },
        'xl': { 'max': "1200px" },
        // reverse
        'mdr': { 'min': "966px" },
        'smr': { 'min': "600px" },
      }
    },
  },
  plugins: [],
}
