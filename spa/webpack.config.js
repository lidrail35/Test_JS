const path = require('path');

const mode = process.env.NODE_ENV || 'development';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
  mode,
  target,
  devtool,
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: '[name].js',
  //   assetModuleFilename: 'assets/[name][ext]'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Test webpack',
      // filename: 'main.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
/*    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src', 'assets/'), to: 'assets/' },
        // { from: path.resolve(__dirname, 'src', 'assets/sounds'), to: 'assets/sounds' }
      ],
    }),*/
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(woff|eot|ttf)$/i,
        type: 'asset/resource',
        generator: {
          filename: './assets/font/[name][ext]',
        },
      },
    ],
  },
};