import {
  add
} from './mathUtils'

// 静态资源引用
require('../css/normal.css')
// 不需要使用的实例，引入时可以不用变量来接收
require('../css/special.less')

let total = add(100, 200)

console.log(total)


// document.writeln('<div>Hello World</div>')


// const {Vue} = require("vue")

import Vue from 'vue'

// import App from './template'
import App from '../vue/template.vue'


const app = new Vue({
  el: '#app',
  template: '<App></App>' ,   // 这里使用了template就会将原来的div标签做了替换
  components: {
    App
  },
  data: {
    message: '这是message中的数据'
  }
})