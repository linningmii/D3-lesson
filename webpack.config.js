const HtmlWebpackPlugin = require('html-webpack-plugin'),
  path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'bundle.js?[hash]',
    path: path.resolve(__dirname, './dist')
  },
  module: {},
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html')
    })
  ]
};