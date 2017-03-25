var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  entry: [
    path.resolve(__dirname, './src/scripts/index.js'),
    path.resolve(__dirname, './src/styles/main.sass')
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'index.js'
  },
  module: {
    rules: [
      { test: /\.css$/,  use: ['style-loader', 'css-loader'] },
      { test: /\.(scss|sass)$/, use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      { test: /\.js$/,   use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.json$/, use: 'json-loader' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: 'file-loader' }
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
    }),
    new ExtractTextPlugin('main.css')
  ]
};
