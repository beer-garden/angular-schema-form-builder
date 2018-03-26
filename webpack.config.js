const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    builder: [path.join(__dirname, 'module')],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },
  externals: {
    'jquery': 'jquery',
    'angular': 'angular',
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
