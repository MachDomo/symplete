var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: [ './client/src/app.js' ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/client/public/dist')
  },
  devtool: 'source-map',
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
        include: [path.join(__dirname, '/client/src'],
        loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
      }
    ]
  },
};
