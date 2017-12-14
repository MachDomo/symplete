const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: [ './client/src/app.js' ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/client/public/dist')
  },
  devtool: 'sourcemap',
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [path.join(__dirname, '/client/src')],
        loader: 'babel-loader',
        query: {
          presets: ['env']
        }
      },
      {
        test: /\.css$/,
        include: [path.join(__dirname, '/client/src')],
        loader: 'style-loader!css-loader'
      },
      { test: /\.html$/, loader: 'raw-loader' }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Symplete Challenge',
    template: './client/index.html',
    inject: 'body',
    hash: true
  })]
};
