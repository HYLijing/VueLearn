// 如何使用vue router

// 第一步：导入路由对象
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

// 2.定义路由实例
const routes = []

// 3.创建router实例
const router = new VueRouter({
  routes
})

// 4.导出router实例
export default router

