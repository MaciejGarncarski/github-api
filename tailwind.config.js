module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        user: 'auto 1fr',
        pagination: '1fr auto 1fr',
      },
      gridTemplateRows: {
        user: 'auto repeat(3, 1fr)',
      },
      minHeight: {
        user: '8rem',
        stateMessage: '15rem',
      },
    },
  },
  plugins: [],
};
