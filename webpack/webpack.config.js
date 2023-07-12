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
    assetModuleFilename: path.join('assets/img', '[name].[contenthash:8][ext]'),
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
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        type: 'asset', // 'asset/resource'
        generator: {
          filename: path.join('icons', '[name].[contenthash][ext]'),
        },
        parser: {
          dataUrlCondition: {
              maxSize: 8192 // limit 8 kb
          }
      }
      },
    ],
  },
  
};