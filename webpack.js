const path = require('path');
const webpack = require('webpack');

module.exports = {
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
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      sourceMap: true
    }),
  ],
};
