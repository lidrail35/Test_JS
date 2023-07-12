const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devServer: {
    watchFiles: path.resolve(__dirname, 'src'),
    open: true,
    hot: true,
    port: 9000,
  },
  entry: path.resolve(__dirname, 'src', 'main.js'),
  output: {
    clean: true,
    filename: '[name].[contenthash:8].js',
    path: path.resolve(__dirname, 'dist'),
    //assetModuleFilename: path.join('assets/img', '[name].[contenthash:8][ext]'),
    //assetModuleFilename: path.join('assets/fonts', '[name].[contenthash:8][ext]'),
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
        generator: {
          filename: path.join('assets', 'img', '[name].[contenthash:4][ext]'),
        },
      },
      {
        test: /\.svg$/,
        type: 'asset', // 'asset/resource'
        generator: {
          filename: path.join('assets', 'icons', '[name].[contenthash:4][ext]'),
        },
        parser: {
          dataUrlCondition: {
              maxSize: 8192 // limit 8 kb
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: path.join('assets', 'fonts', '[name].[contenthash:4][ext]'),
        },
      },
    ],
  },
  
};