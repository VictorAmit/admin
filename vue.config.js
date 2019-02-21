const antdTheme = require('./src/theme.js')
module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: antdTheme,
        javascriptEnabled: true
      }
    }
  }
}