### 一.Vue CLI的使用

#### 1.1Vue Cli是什么？

Vue Cli是构建vue项目的脚手架工具，帮助我们快速的配置webpack相关配置的工具

- CLI是Command-Line Interface, 翻译为命令行界面, 但是俗称脚手架.
- Vue CLI是一个官方发布 vue.js 项目脚手架
- 使用 vue-cli 可以快速搭建Vue开发环境以及对应的webpack配置.

#### 1.2 Vue Cli的使用

基本需求：

- Vue Cli的基本环境是Node

- Webpack工具

使用步骤：

- 安装Vue Cli

  ~~~js
  npm install -g @Vue/cli
  
  // 上面是安装Vue的最高版本，如果想安装vue cli2.X版本。
  npm intall -g @vue/cli-init    //初始化init安装
  ~~~

- Vue CLI2初始化项目

  ~~~js
  vue init webpack my-project
  ~~~

- Vue CLI3初始化项目

  ~~~js
  vue create my-project
  ~~~

#### 1.3区分Runtime Compiler和Runtime Only

**template --> ast --> render --> vDom --> 真实的Dom --> 页面**

- ast：抽象语法树
- vDom：虚拟Dom

**runtime-only**

> - 我们在使用 runtime-only 的时候，需要借助 webpack的loader工具，将 `.vue` 文件编译为JavaScript，因为是在编译阶段做的，所以它只包含运行时的 Vue.js 代码，所以代码体积会更轻量。
> - 在将 `.vue` 文件编译为 JavaScript文件的过程中会将组件中的 template 模版编译为 `render` 函数，所以我们得到的是 `render` 函数的版本。所以运行的时候是不带编译的，编译是在离线的时候做的
> - template 会通过 `vue-template-compiler` 转换为 render 函数

**runtime-compiler**

> - 因为在Vue中，最终渲染都是通过 render函数，如果写 template 属性，则会编译为 render 函数，那么这个编译过程会发生在运行时，所以需要带有编译器的版本
> - 编译过程会对性能有一定的损耗

**结论**

**runtime-only：** 将template在打包的时候，就已经编译为 render函数

**runtime-compiler：** 在运行的时候，才去编译 template

**结果：** 发布生产的时候，runtime-only 构建的项目代码体积更小，运行速度更快



#### 1.4render函数的使用

~~~js
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
    // 第一种方式
    // return createElement('div',{},['你好啊~~~'])

    // 还可以使用嵌套的方式
    // 第二种方式
    // return createElement('div',{},['你好撒',createElement('button',{},['这是一个按钮'])])

    // 还可以传入一个自定义组件
    // 第三种方式
    return createElement(App)
  },
~~~

### 二，使用Vue Cli4创建项目

vue create 项目名称

Vue Cli4创建项目，管理webpack配置的三种方式

- 启动配置服务器：vue ui
- 创建vue.config.js文件，修改相关配置



#### 2.1单页面富应用

1. 浏览器提供了修改url的路径但是不刷新页面的方法：

location.hash='aaaa'

可以修改浏览器的url，但是页面未做刷新

​	2.在Html5中提供了另外的修改方式：

history.pushState({},'','url路径')

​	3.Html5中的replaceState方式

history.replaceState({},'','rrr')

​	4.Html5中的go(1)：向前进一步，go(-1)向后退一步

**前端可以配置url的映射关系，来做到单一页面的数据变动。达到前端路由的规则，前端提供了Vue Router的方式做路由的映射处理**

#### 2.2Vue Router的安装和使用

> vue-router是基于路由和组件的
> 路由用于设定访问路径, 将路径和组件映射起来.
> 在vue-router的单页面应用中, 页面的路径的改变就是组件的切换.组件切换的本质就是数据的切换





















