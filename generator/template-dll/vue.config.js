const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')

const isProduction = ['production', 'prod'].includes(process.env.NODE_ENV)

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: (config) => {
    if (isProduction) {
      config.performance = {}
      new webpack.DllReferencePlugin({
        context: process.cwd(),
        manifest: require('./public/vendor/vendor-manifest.json')
      })
    }
  }
})