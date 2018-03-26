const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    builder: [path.join(__dirname, 'src', 'builder')],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },
  plugins: [
    /*new webpack.ProvidePlugin({
      'tv4': 'tv4',
      '$': 'jquery',
      'jQuery': 'jquery',
      'window.jQuery': 'jquery',
      'moment': 'moment',
    }),*/
  ],
  resolve: {
    symlinks: false,
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
