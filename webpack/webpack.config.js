const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  devServer: {
    watchFiles: path.join(__dirname, 'src'),
    open: true,
    hot: true,
    port: 9000,
  },
  entry: path.join(__dirname, 'src', 'main.js'),
  output: {
    clean: true,
    filename: '[name].[contenthash:8].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Test webpack',
    // filename: 'main.html'
  })],
};