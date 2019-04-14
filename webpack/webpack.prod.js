const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const common = require('./webpack.common.js')
const clean = require('./components/plugins/clean')

module.exports = merge(common, {
  plugins: [
    clean(['dist'], path.resolve(__dirname, '../')),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HashedModuleIdsPlugin({
      hashFunction: 'sha256',
      hashDigest: 'hex',
      hashDigestLength: 20
    }),
    new webpack.EnvironmentPlugin({
      BABEL_ENV: 'production',
      NODE_ENV: 'production'
    }),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      children: true,
      async: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'src',
      filename: 'commons.js',
      minChunks: 2
    }),
    new UglifyJSPlugin({
      test: /\.(js|jsx?)$/,
      uglifyOptions: {
        ecma: 8,
        compress: {
          drop_console: true
        },
        output: {
          beautify: false
        }
      }
    })
  ]
})
