const path = require("path");
module.exports = {
  publicPath:'./',

  outputDir:'build',

  // 本地跨域配置
  devServer: {
    // 配置跨域代理
    proxy: {
      "api/": {//将http://baidui.com"映射为/api
        target: "http://192.168.0.246:8253/",//需要代理的baserurl，目标地址
        changeOrigin: true, //本地会虚拟一个服务端接收你的请求并代你发送该请求
        pathRewrite: {
          "^/api": "" //重写路径，比如将api/aa/bb重写为aa/bb
        },
        logLevel: "debug"//可以在终端打印日志
      }
    },
  },

  lintOnSave:false,

  productionSourceMap:process.env.NODE_ENV==='production'?false:true,

  // 配置全局通用自定义less变量
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "./src/assets/less/common.less")]
    }
  }
}