const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const common = require('./webpack.common.js')
const devServer = require('./components/dev-server')

module.exports = merge([
  common,
  devServer(3000, path.resolve(__dirname, '../dist')),
  {
    devtool: 'eval-source-map',
    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.EnvironmentPlugin({
        BABEL_ENV: 'development',
        NODE_ENV: 'development'
      }),
      new webpack.DefinePlugin({
        PRODUCTION: JSON.stringify(false)
      })
    ]
  }
])
