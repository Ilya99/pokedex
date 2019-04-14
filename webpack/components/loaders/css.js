module.exports = ExtractTextPlugin => {
  return {
    test: /\.css/,
    use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    }))
  }
}
