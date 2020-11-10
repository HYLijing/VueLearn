// 这个是webpack的配置文件：具体可以见官网：https://www.webpackjs.com/concepts/

// 这个是从node中的path包中引入
const path = require("path")

module.exports = {
  // 指定打包的入口
  // 入口可以使字符串/数组/对象,我们这里只有一个，所以用字符串就可以
  entry: './src/main.js',

  // 指定打包的出口
  // 出口必须是一个对象，并且必须包含两个重要属性，path和filename。
  // path是通过node中的path包中拿到的
  output: {
    path: path.resolve(__dirname, "dist"), // 通过node中的path包功能，可以取到这个绝对路径
    filename: 'bundle.js'
  }
}