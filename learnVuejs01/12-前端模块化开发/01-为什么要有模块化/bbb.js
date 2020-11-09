// 第一种
// var flag = false
// console.log("B这里的flag为false")

// 第二种：使用闭包解决全局变量混淆
// (function () {
//   var flag = false
//   console.log("B这里的flag为false")
// })()

// 第三种：使用模块化思想
var ModuleB = (function () {

  // 第一步：定义个对象，用来包装所有的全局变量
  var obj = {}

  // 第二部：在对象内部添加对象或者方法
  obj.flag = false

  console.log("B这里的flag为false")

  // 第三部：将obj返回。这样的话在main.js中就可以通过moduleA来拿到flag变量
  return obj;
})()


// commonJs代码导入导出规范
// module.exports = {
//   // 1.导出一个变量
//   flag: true,

//   // 2.导出一个函数
//   test(num1,num2) {
//     return num1 + num2 
//   },

//   // 3.导出一个对象
//   demo(a,b) {
//     return a+b
//   }
// }


// // commonjs的引入功能
// let {flag,test,demo} = require("./bbb.js")