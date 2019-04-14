module.exports = () => {
  return {
    test: /\.(js|jsx)$/,
    exclude: /(node_modules|bower_components)/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: [
            ['env', {'modules': false, 'loose': true}],
            'react',
            'stage-0'
          ],
          plugins: [
            'transform-runtime'
          ]
        }
      }
    ]
  }
}
