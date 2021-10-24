// craco.config.js
module.exports = {
  babel: {
    // react-router-dom lazy loading
    presets: ['@babel/preset-react'],
    plugins: ['@babel/plugin-syntax-dynamic-import'],
  },
  style: {
    postcss: {
      // tailwind css
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
};
