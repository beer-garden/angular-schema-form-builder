const path = require('path');

module.exports = {
  mode: 'production',

  entry: {
    'builder': [path.join(__dirname, 'module')],
    'builder.min': [path.join(__dirname, 'module')],
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    library: '[name]',
    libraryTarget: 'umd',
  },

  externals: {
    'angular': 'angular',
    'jquery': 'jquery',
    'lodash': 'lodash',
  },

  resolve: {
    symlinks: false,
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules'),
    ],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: ['babel-loader'],
      },
    ],
  },
};
