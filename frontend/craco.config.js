// craco.config.js
const CracoAlias = require('craco-alias');

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
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: '.',
        tsConfigPath: './tsconfig.extend.json',
      },
    },
  ],
};
