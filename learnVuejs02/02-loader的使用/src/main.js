import {add} from './mathUtils'

// 静态资源引用
require('../css/normal.css')
// 不需要使用的实例，引入时可以不用变量来接收
require('../css/special.less')

let total = add(100,200)

console.log(total)


document.writeln('<div>Hello World</div>')