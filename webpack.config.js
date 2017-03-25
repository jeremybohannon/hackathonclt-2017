var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    path.resolve(__dirname, './src/index.js'),
    path.resolve(__dirname, './src/index.scss')
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'index.js'
  },
  module: {
    rules: [
      { test: /\.scss$/,  use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.js$/,   use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.json$/, use: 'json-loader' }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'public' }
    ]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      },
      template: 'src/index.html'
    })
  ]
};
