import Vue from 'vue'
import VueRouter from 'vue-router'

// 定义vuerouter
Vue.use(VueRouter)

// 构造router
const Home = () => import('../components/home/Home')
const Categroy = () => import('../components/categroy/Categroy')
const Shopcart = () => import('../components/shopcart/Shopcart')
const Profile = () => import('../components/profile/Profile')


const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/categroy',
    component: Categroy
  },
  {
    path: '/shopcart',
    component: Shopcart
  },
  {
    path: '/profile',
    component: Profile
  }
]


const router = new VueRouter({
  routes,
  mode: 'history'
})


export default router
