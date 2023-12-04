/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        // Custom Font Family
        'mono': 'var(--font-mono)',
        'lato': 'var(--font-lato)',
      },
      zIndex: {
        // Custom Z index value
        'tooltip': 10,
        'fixed': 100,
        'modal': 1000,
      },
      // Initial value for width height and spacing
      width: {
        'initial': 'initial',
      },
      height: {
        'initial': 'initial',
      },
      spacing: {
        'initial': 'initial',
      }
    },
    colors: {
      // Custom colors according to css variables value
      'c-first': 'hsl(var(--first-color) / <alpha-value>)',
      'c-first-alt': 'hsl(var(--first-color-alt) / <alpha-value>)',
      'c-title': 'hsl(var(--title-color) / <alpha-value>)',
      'c-prime': 'hsl(var(--prime-color) / <alpha-value>)',
      'c-prime-dark': 'hsl(var(prime-color-dark) / <alpha-value>',
      'c-body': 'hsl(var(body-color) / <alpha-value>)',
      'c-container': 'hsl(var(container-color) / <alpha-value>)',
      'c-white': 'var(--white)',
      'c-black': 'var(--black)',
    },
    screens: {
      // Custom Breakpoints
      'xm': {'max':'320px'},
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1024px',
      'xxl': '1250px',
    }
  },
  plugins: [
    plugin(function({ addUtilities }){
      addUtilities ({
        // Responsive Typography
        '.fs-biggest': {fontSize:'clamp(2.25rem, 8vw, 5rem)'},
        '.fs-heading': {fontSize: '1.575rem', '@screen xm': {fontSize: '1.5rem'}, '@screen sm': {fontSize: '2rem'}},
        '.fs-xxl': {fontSize: '1.25rem', '@screen xm': {fontSize: '1.125rem'}, '@screen sm': {fontSize: '1.375rem'}},
        '.fs-xl': {fontSize: '1.125rem', '@screen xm': {fontSize: '1rem'}, '@screen sm': {fontSize: '1.25rem'}},
        '.fs-lg': {fontSize: '1rem', '@screen xm': {fontSize: '0.875rem'}, '@screen sm': {fontSize: '1.125rem'}},
        '.fs-md': {fontSize: '0.875rem', '@screen xm': {fontSize: '0.8125rem'}, '@screen sm': {fontSize: '1rem'}},
        '.fs-sm': {fontSize: '0.8125rem', '@screen xm': {fontSize: '0.75rem'}, '@screen sm': {fontSize: '0.875rem'}},
        '.fs-xm': {fontSize: '0.75rem', '@screen xm': {fontSize: '0.65rem'}, '@screen sm': {fontSize: '0.8125rem'}},
        '.fs-xxm': {fontSize: '0.65rem', '@screen xm': {fontSize: '0.5rem'}, '@screen sm': {fontSize: '0.75rem'}},
        // Responsive Header Height
        '.h-header': {height: 'var(--header-height)', '@screen md': {height: 'calc(var(--header-height) + 1.5rem)'}}
      })
    }),
    plugin(function({ addVariant }){
      addVariant ('dynamic-style', '.dynamic-style&')
    })
  ],
}
