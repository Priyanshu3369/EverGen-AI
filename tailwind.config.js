/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors from the original CSS
        'custom-1': '#040409',
        'custom-2': '#F87060',
        'custom-3': '#FFBE4E',
        'custom-4': '#FFD2CD',
        'custom-5': '#E8E8E8',
        'custom-6': '#8c8c8c',
        'custom-7': '#FF6453',
        'custom-8': '#3E3E3E',
        'custom-9': '#171720',
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'zen-tokyo-zoo': ['"Zen Tokyo Zoo"', 'system-ui'],
        'sofia': ['Sofia', 'cursive'],
        'raleway': ['Raleway', 'sans-serif'],
        'system': ['-apple-system', 'BlinkMacSystemFont', "'Segoe UI'", 'Roboto', 'Oxygen-Sans', 'Ubuntu', 'Cantarell', "'Helvetica Neue'", 'sans-serif'],
      },
      fontSize: {
        'small': '18px',
        'medium': '30px',
        'large': '54px',
        'x-large': '70px',
        'xx-large': '100px',
        'xxx-large': '150px',
        'super': '300px',
      },
      spacing: {
        '20': '0.44rem',
        '30': '0.67rem',
        '40': '1rem',
        '50': '1.5rem',
        '60': '2.25rem',
        '70': '3.38rem',
        '80': '5.06rem',
      },
      boxShadow: {
        'natural': '6px 6px 9px rgba(0, 0, 0, 0.2)',
        'deep': '12px 12px 50px rgba(0, 0, 0, 0.4)',
        'sharp': '6px 6px 0px rgba(0, 0, 0, 0.2)',
      },
      maxWidth: {
        'content': '620px',
        'wide': '1000px',
      },
    },
  },
  plugins: [],
}

