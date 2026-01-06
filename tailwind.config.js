module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Futura', 'ui-sans-serif', 'system-ui', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        16: 'repeat(16, minmax(0, 1fr))',

        // Complex site-specific column configuration
        footer: '200px minmax(900px, 1fr) 100px',
      },
    },
  },
  darkMode: 'class',
  // corePlugins: {
  //   aspectRatio: false,
  // },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
    require('flowbite/plugin'),
    // require('@tailwindcss/aspect-ratio'),
  ],
}
