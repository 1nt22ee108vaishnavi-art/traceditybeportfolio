module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#171615',
        graphite: '#242321',
        paper: '#F3EFE7',
        muted: '#B3AEA5',
        cobalt: '#2A4D9C',
        crimson: '#C0392B',
        burnt: '#D35400',
        magenta: '#D81B60',
        gold: '#D4A72C'
      },
      backgroundImage: {
        'paper-grain': "url('/assets/paper-grain.png')"
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
}
