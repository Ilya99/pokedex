const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = (paths, root, options) => {
  return new CleanWebpackPlugin(paths, Object.assign({
    root
  }, options))
}
