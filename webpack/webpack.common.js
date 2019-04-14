const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const babel = require('./components/loaders/babel')
const css = require('./components/loaders/css')
const stylus = require('./components/loaders/stylus')
const file = require('./components/loaders/file')

module.exports = {
  entry: path.resolve(__dirname, '../src/main.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      components: path.resolve(__dirname, '../src/components'),
      global: path.resolve(__dirname, '../global')
    }
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../global/template.html'),
      baseHref: '/',
      title: 'Test'
    })
  ],
  module: {
    rules: [
      babel(),
      css(ExtractTextPlugin),
      stylus(ExtractTextPlugin),
      file(/\.(png|jpg|gif|svg)$/, 'images/[hash].[ext]'),
      file(/\.(mp4)$/, 'video/[hash].[ext]'),
      file(/\.(ttf|eot|woff|woff2|otf)$/, 'fonts/[name].[ext]')
    ]
  }
}
