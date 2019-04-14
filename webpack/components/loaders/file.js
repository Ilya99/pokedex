module.exports = (test = /\.(png|jpg|gif|svg|ttf|eot|woff|woff2|otf)$/, name = '[hash].[ext]', options) => {
  return {
    test,
    use: [
      {
        loader: 'file-loader',
        options: Object.assign({
          name
        }, options)
      }
    ]
  }
}
