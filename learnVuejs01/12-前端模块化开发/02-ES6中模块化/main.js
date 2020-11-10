// 在main.js中使用aaa.js导出的变量或方法

// 1.ES6中导入的方式
// import { name,age,height } from "./aaa.js";

// 如果想一次性的导入一个js中的所有变量和方法
import * as info from './aaa.js';

// 能够拿到aaa.js中定义的这些变量
console.log("这里是main.js中的：",info.name,info.age,info.height)


// import {test,Person} from './aaa' 必须要写成aaa.js
import {test,Person} from './aaa.js'

test("main.js中调用");

let person = new Person("zhangsan",18)
person.eat();

// 导入default的导出的方法
import myFun from './aaa.js'  // 注意：这里不需要使用{}。使用{}表示实际定义好的
myFun();


// import myCar from "./aaa.js" 
// let car = new myCar("奔驰",100)
// car.run()