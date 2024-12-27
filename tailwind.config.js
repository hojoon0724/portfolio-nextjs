/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        h1: ['6rem', { lineHeight: '1.167', letterSpacing: '-1.5px' }],
        h2: ['3.75rem', { lineHeight: '1.2', letterSpacing: '-0.5px' }],
        h3: ['3rem', { lineHeight: '1.167' }],
        h4: ['2.125rem', { lineHeight: '1.235', letterSpacing: '0.25px' }],
        h5: ['1.5rem', { lineHeight: '1.334' }],
        h6: ['1.25rem', { lineHeight: '1.6', letterSpacing: '0.15px' }],
        subtitle1: ['1.5rem', { lineHeight: '1.75', letterSpacing: '0.15px' }],
        subtitle2: ['0.875rem', { lineHeight: '1.57', letterSpacing: '0.1px' }],
        body1: ['1rem', { lineHeight: '1.5', letterSpacing: '0.5px' }],
        body2: ['0.875rem', { lineHeight: '1.43', letterSpacing: '0.25px' }],
        button: ['0.875rem', { lineHeight: '1.75', letterSpacing: '1.25px' }],
        caption: ['0.75rem', { lineHeight: '1.66', letterSpacing: '0.4px' }],
        overline: ['0.625rem', { lineHeight: '1.66', letterSpacing: '1.5px' }],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
      },
    },
  },
  plugins: [],
};
