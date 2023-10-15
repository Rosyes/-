const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  //不打包map文件
  productionSourceMap: false,
  // 关闭语法校验工具
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()
        ],
      }),
      Components({
        resolvers: [ElementPlusResolver()
        ],
      }),

    ],
  },

})
