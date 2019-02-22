const antdTheme = require('./src/theme.js')
module.exports = {
  pwa: {
    iconPaths: {
      favicon32: 'favicon.png',
    },
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: antdTheme,
        javascriptEnabled: true,
      },
    },
  },
}
