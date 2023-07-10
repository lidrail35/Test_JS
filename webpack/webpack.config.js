const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


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
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Test webpack',
      // filename: 'main.html'
    }),
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  
};