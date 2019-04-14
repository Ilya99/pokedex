'use strict'

module.exports = (port = 3000, contentBase = false, open = true, options) => {
  return {
    devServer: Object.assign({
      port,
      open,
      contentBase,
      inline: true,
      hot: true,
      historyApiFallback: true,
      overlay: {
        errors: true,
        warnings: true
      },
      stats: {
        version: false,
        modules: false,
        assets: false,
        hash: false
      }
    }, options)
  }
}
