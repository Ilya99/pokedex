module.exports = ExtractTextPlugin => {
  return {
    test: /\.styl/,
    use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        },
        {
          loader: 'stylus-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    }))
  }
}
