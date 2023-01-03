const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/** @type {import('webpack').Configuration} */

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
    // publicPath: path.resolve(__dirname, 'dist')
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
}
