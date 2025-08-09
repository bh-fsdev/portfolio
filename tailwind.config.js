/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-black': '4px 4px 0 0 #000',
        'custom-black-sm': '2px 2px 0 0 #000',
        'custom-black-dark': '4px 4px 0 0 #fff',
        'custom-black-dark-sm': '2px 2px 0 0 #fff',
      },
    },
  },
  darkMode: 'class',
}
