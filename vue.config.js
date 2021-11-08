const path = require('path')
const sourceMap = process.env.NODE_ENV != 'production'
module.exports = {
  outputDir: 'dist-ui',
  configureWebpack: {
    resolve: {
      // 别名
      alias: {
        '@': path.resolve(__dirname, './src'),
        assets: path.resolve(__dirname, './src/assets'),
        components: path.resolve(__dirname, './src/components'),
        config: path.resolve(__dirname, './src/config'),
        utils: path.resolve(__dirname, './src/utils')
      }
    },
    devtool: 'inline-source-map'
  },
  productionSourceMap: sourceMap
}
