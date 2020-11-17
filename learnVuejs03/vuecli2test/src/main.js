// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { create } from 'domain';

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })


new Vue({
  el: '#app',
  render(createElement) {
    // 接收三个参数
    // 第一个参数：标签   你需要创建一个什么样的标签
    // 第二个参数： 相关数据对象。比如class属性  可以不传
    // 第三个参数： 内容数组
    // return createElement('div',{},['你好啊~~~'])

    // 还可以使用嵌套的方式
    // return createElement('div',{},['你好撒',createElement('button',{},['这是一个按钮'])])

    // 还可以传入一个自定义组件
    return createElement(App)
  },
})