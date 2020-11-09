// var flag = true

// if (flag) {
//   console.log("aaa这里的flag为true")
// }

// 使用匿名函数来解决全局变量的问题
// (function () {
//   var flag = true

//   if (flag) {
//     console.log("aaa这里的flag为true")
//   }
// })()



// 使用模块化思维
var ModuleA = (function () {
  var obj = {}
  obj.flag = true

  console.log("A这里的flag为true")

  return obj
})()