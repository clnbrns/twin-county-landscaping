/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          // From the live TCOS logo + site:
          //   olive/lime leaves + lettering, dark forest trunk, cream page background.
          green: '#8FAB3A',          // primary olive — logo light leaves & "TWIN COUNTY" text
          'green-dark': '#556B22',   // logo trunk / dark leaves — for headings & deep accents
          'green-accent': '#A4BD4A', // hover lift on olive
          'green-tint': '#EAEFD2',   // soft olive wash for chips / cards
          cream: '#F5EDD6',          // page background — matches live site
          bg: '#FBF7E8',             // slightly lighter cream for primary surfaces
          ink: '#1A1A1A',
          muted: '#4A4A4A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
};
