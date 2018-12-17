const path = require('path')

module.exports = {
  entry: './test/src/index.js',
  watch: true,
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'test/dist')
  }
}
