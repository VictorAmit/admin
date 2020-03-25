const path = require('path')
const AntDesignThemePlugin = require('antd-theme-webpack-plugin')
const AntDesignThemePluginVariablesToChange = require('./src/components/kit-vendors/antd/themes/variablesToChange.js')
const AntDesignThemePluginOptions = {
  antDir: path.join(__dirname, './node_modules/ant-design-vue'),
  stylesDir: path.join(__dirname, './src/components/kit-vendors/antd/themes'),
  varFile: path.join(__dirname, './src/components/kit-vendors/antd/themes/variables.less'),
  mainLessFile: path.join(__dirname, './src/components/kit-vendors/antd/themes/main.less'),
  themeVariables: AntDesignThemePluginVariablesToChange,
  indexFileName: false,
  generateOnce: false, // generate color.less on each compilation
}

module.exports = {
  publicPath: './',
  pwa: {
    iconPaths: {
      favicon32: './favicon.png',
      favicon16: './favicon.png',
      appleTouchIcon: './favicon.png',
      maskIcon: './favicon.png',
      msTileImage: './favicon.png',
    },
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  configureWebpack: {
    plugins: [
      new AntDesignThemePlugin(AntDesignThemePluginOptions),
    ],
  },
}
