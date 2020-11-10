// var name = 'aaa';
// var age = '18';

// var flag = true

// if (flag) {
//   console.log("aaa中的为人为：", name, age)
// }


//使用ES6中的导入和导出方法

// 第一个：变量的导出
export let name = 'aaa'
export let age = 18
export let height = 188

// 上面的导出等同于下面
// let name = 'aaa'
// let age = 18
// let height = 188
// export {name,age,height}


// 第二个：方法或对象的导出
export function test(content) {
  console.log("这是aaa中的test方法", content)
}

export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(this.name + "这个人在吃饭")
  }
}


// 上面的导出和下面等同
// function test(content) {
//   console.log("这是aaa中的test方法", content)
// }

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   eat() {
//     console.log(this.name + "这个人在吃饭")
//   }
// }

// export {test,Person}

// 第三个：export default的使用.针对某个功能可以使用这种方式
// 注意：export default在同一个模块中，不允许同时存在多个。
export default function () {
  console.log("export default...")
}


// 如果是多个default的话就会报错：Uncaught SyntaxError: Duplicate export of 'default'
// export default class Car {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price
//   }
//   run() {
//     console.log("this car is running");
//   }
// }