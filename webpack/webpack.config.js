const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'main.js'),
  output: {
    clean: true,
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};