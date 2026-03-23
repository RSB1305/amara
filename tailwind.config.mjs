/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        sand:    '#f7f3ec',
        cream:   '#faf8f4',
        parch:   '#ede8df',
        gold:    '#b08840',
        'gold-lt': '#cca85c',
        rust:    '#8c3a1e',
        ink:     '#1a1714',
        muted:   '#6b6258',
        line:    '#d9d1c4',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(4rem,7vw,7rem)',   { lineHeight: '0.96' }],
        'display-lg': ['clamp(2.8rem,4vw,4.5rem)', { lineHeight: '1.05' }],
        'display-md': ['clamp(2rem,3.5vw,3.2rem)', { lineHeight: '1.3'  }],
      },
      letterSpacing: {
        widest2: '0.3em',
        widest3: '0.35em',
      },
    },
  },
  plugins: [],
};
