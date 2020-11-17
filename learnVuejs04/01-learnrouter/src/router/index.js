import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

// 路由懒加载的三种方式：
// // 第一种：结合Vue的异步组件和Webpack的代码分析.
// const Home = resolve => {require.ensure(['../components/Home.vue'],() => {
//   resolve(require('../components/Home.vue'))
// })}

// 第二种：AMD写法
  // const About = resolve => require(['../components/About.vue'],resolve);

// 第三种：ES6写法
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const Profile = () => import('../components/Profile')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // component: Home
    redirect: '/home' // 重定向
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '主页'
    },
    children: [
      {
        path: '',
        redirect: '/home/news'
      },
      {
        path: 'news',       // 这里是不能写 / 的
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    }
  },
  {
    path: '/user/:userId',    // 动态路由：这种path和Component的动态匹配关系，我们称之为动态路由(也是路由传递数据的一种方式)。
    component: User,
    meta: {
      title: '用户'
    }
  },
  {
    path: '/profile/:id',
    component: Profile,
    meta: {
      title: '档案'
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})


// 一个路由跳转到下一个路由的过程中，执行到的方法
router.beforeEach((to,from,next) => {
  next()    // next()方法是路由跳转的核心，没有它，路由就不会再跳转

  document.title = to.matched[0].meta.title
  
})

router.afterEach((to,from) => {
  // console.log(to)
  // console.log(from)
})


export default router