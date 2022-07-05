module.exports = {
  presets: [['@babel/preset-react'], ['@babel/preset-env', { modules: false }]],
  plugins: [
    // [
    //   'ramda',
    //   {
    //     useES: true,
    //   },
    // ],
    ['@babel/plugin-transform-react-jsx'],
    ['@babel/plugin-transform-runtime', { regenerator: true }],
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-syntax-dynamic-import',
  ],
  env: {
    test: {
      plugins: ['@babel/plugin-transform-modules-commonjs'],
    },
  },
};
