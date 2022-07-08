module.exports = {
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      {
        pragma: 'createElement',
        pragmaFrag: 'createFragment',
        throwIfNamespace: false, // defaults to true
      },
    ],
  ],
  env: {
    cjs: {
      plugins: ['@babel/plugin-transform-modules-commonjs'],
    },
    test: {
      plugins: ['@babel/plugin-transform-modules-commonjs'],
    },
  },
};
