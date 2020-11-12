# 1.什么是Webpack

- 为什么要对代码打包

  - 我们开发使用的语法浏览器不一定能识别，通过webpack打包后，可以转换为大部分浏览器都能识别的语法
  - **模块化开发中，各个模块之间有较强的依赖，在html中引入会比较繁琐，使用webpack打包可以解决各个模块之间的依赖**

- webpack的功能

  - webpack是一个现代的JavaScript应用的静态模块打包工具

- 和grunt/gulp打包工具的对比

  - grunt/gulp功能是通过一系列的task来做文件的转换，图片压缩

  ~~~js
  // gulp的一个task来实现一个js代码从ES6转换为ES5
  const gulp = require('gulp')
  const babel = require('gulp-babel')
  
  gulp.task('js',() => 
           gulp.src('src/*.js')
            .pipe(babel({
      		preset:['es2015']
  		}))
            .pipe(gulp.dest('dist'))
           );
  ~~~

  - webpack更倾向于模块化的打包和管理

  总结：

  - grunt/gulp更加强调的是前端流程的自动化，模块化不是它的核心。
  - webpack更加强调模块化开发管理，而文件压缩合并、预处理等功能，是他附带的功能。

# 2.Webpack的安装

- 全局安装

~~~tex
npm install webpack@3.6.0 -g
~~~

- 局部安装

~~~js
// 实际项目中。都是使用局部安装的webpack。为了适配各个项目自己的版本
// 局部安装就相当于将webpack当做node的一个包来做处理
npm install webpack@3.6.0 --save-dev
~~~

# 3.如何使用webpack

1.基础使用

dist文件夹：用于存放之后打包的文件
src文件夹：用于存放我们写的源文件
main.js：项目的入口文件。具体内容查看下面详情。
mathUtils.js：定义了一些数学工具函数，可以在其他地方引用，并且使用。具体内容查看下面的详情。
index.html：浏览器打开展示的首页html
package.json：通过npm init生成的，npm包管理的文件

使用步骤：

- 找到项目的入口文件：./src/main.js
- 确定项目的出口文件：./dist/bundle.js
- 执行打包命令：

~~~shell
webpack ./src/main.js ./dist/bundle.js
~~~

- 在index.html中导入bundle.js就可以使用

2.使用webpack配置文件和node的npm包管理使用

**项目开发中，使用局部的webpack**

- 初始化当前项目，相当于将当前项目引入npm管理

~~~js
npm init
~~~

- 安装局部webpack

~~~js
npm install webpack@3.6.0 --save-dev
~~~

- webpack的配置文件:webpack.config.js

~~~js
// webpack配置文件中几个核心的东西
// 1.入口和出口
// 2.loader
// 3.plugins
module.exports = {
    // 1.指定webpack打包的入口文件，可以使数组或者对象来指定为多个
    entry: './src/main.js',
    // 2.webpack打包的出口，必须是一个对象，并且必须包含两个属性：path和filename
    output: {
    	path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js',
        // 指定publicPath。以后所有的图片读取路径都会从这个路劲中找，否则会默认找项目的根路径
        publicPath: 'dist/'
	}
}
~~~

- 将webpack命令交给npm来管理。配置package.json文件

~~~json
{
  "name": "loader-webpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
  "author": "",
  "license": "ISC",
}
~~~

- 执行打包命令

~~~js
npm run build
// 这里的打包命令会使用当前项目下的webpack，并且通过制定的入口和出口打包对应的文件
~~~



# 4.Webpack中loader的使用



## 1.CSS文件打包处理

> webpack对不同文件的打包需要对应文件的loader

css-loader的使用：

- 需要在npm仓库包中安装css-loader

~~~js
// 安装时可以指定版本
// --save表示放入到node_modules仓库中。
// -dev表示编译时需要，运行时不需要
npm install css-loader --save-dev

// css样式展示需要依赖style-loader
npm install style-loader --save-dev
~~~

- 在webpack的配置文件中告诉webpack打包css文件类型使用这个loader

~~~js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]	// 依赖顺序从右到左
      }
    ]
  }
}
~~~

## 2.图片的打包处理

- 定义css文件中引入图片

~~~css
body {
    background: url('./imag/test.jpg')
}
~~~

- 引入图片解析的url-loader

~~~js
npm install url-loader --save-dev
~~~

- 修改webpack的配置文件

~~~js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
                // 指定图片的大小，小于：将图片转换为base64流，大于：直接将图片copy到dist文件夹下，并生成新的文件名
              limit: 8192,
                // 指定图片名字的生成规则。dist文件夹下的img文件夹。名称+hash8位+图片的原有后缀
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  }
}
~~~

## 3.将ES6转换为ES6

使用bable-loader

具体使用可以参照官方文档



# 5.webpack集成Vue

## 1.引入Vue的三种方式

- 直接下载vue.js的源码，通过src导入
- 通过CDN方式导入
- 使用node安装Vue

~~~js
// 第一步：通过npm安装vue包
npm install vue --save	// 放在我们当前的node_modules包下，依赖中也有
// 第二步：在项目中导入
import Vue from 'vue'
// 或
const Vue = require('vue')
// 第三步：正常使用
~~~

通过npm引入vue包后，打包文件时注意：

默认情况下，webpack打包时使用的vue是runtime-only版本，我们需要指定vue的版本为：runtime-compiler

在webpack.config.js中文件中添加如下配置：

~~~js
resolve: {
    alias: {
        'vue$':'vue/dist/vue.esm.js'
    }
}
~~~



## 2.Vue代码的精简

### 1.传统vue代码的编写 :

**注意：模板的编写一定要写在vue实例的上面**

~~~html
improt Vue from 'vue'

<template>
	<div>
    	<h1>{{message}}</h1>
		<button @click='func'>按钮</button>
    <div/>    
</template>
    
<div id='app'>
    <App></App>
</div>

<script src=''>
    const App = {
        template: '#templateId',
        data() {
            return {
                message: '你好啊'
            }
        }，
        methods: {
            func() {
                console.log('---')
            }
        }
    }

    new Vue({
        el: '#app',
        components: {
            App
        }
    })    
</script>
~~~

以上代码会将组件的数据填充到id=app的div中。



### 2.使用模块化对代码简写：

app.js

~~~js
exprot default {
	template: `
	<div>
    	<h1>{{message}}</h1>
		<button @click='func'>按钮</button>
    <div/>    
`,
        data() {
            return {
                message: '你好啊'
            }
        }，
        methods: {
            func() {
                console.log('---')
            }
        }
}
~~~

在main.js中直接可以引用：

~~~js
improt App from '../app.js'

new Vue({
    el: '#app',
    template: '<App/>',  //在template中使用组件，会替换绑定的div标签中的数据
    components: {
        App
    }
})
~~~

### 3.使用.vue文件终极编写

实现了代码的分离：

~~~vue
<!-- 模板相关的代码 -->
<template>
  <div>
    <h2>这里是组件的内容</h2>
    <h1>{{message}}</h1>
    <button @click="btnClick">按钮</button>
    <p>{{name}}</p>
  </div>
</template>


<!-- js相关代码 -->
<script>
export default {
  data() {
    return {
      message: "你好啊~~",
      name: "哈哈哈"
    };
  },
  methods: {
    btnClick() {
      console.log("----------");
    }
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
</style>
~~~

引入.vue文件后，需要注意的点：

- 需要引入对.vue文件的处理loader

~~~js
npm install vue-loader vue-template-compiler --save-dev
~~~

- 特别注意：vue的版本，vue-loader版本，vue-template-compiler版本要对应
- 如果vue-loader的版本大于14.0.0，需要在webpack.config.js中配置plugin

~~~js
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  ...
  plugins: [
    new VueLoaderPlugin()
  ]
}
~~~



# 6.webpack中使用plugin

webpack中使用plugin的步骤：

- npm安装对应的plugin
- 在webpack.config.js中配置对应的plugin

~~~js
const Plugin = require('...')

module.exports= {
    ...
    plugins: [
        new Plugin()
    ]
}
~~~

## 1.配置BannerPlugin

BannerPlugin在包含在webpack中,因此不需要npm再安装

配置webpack.config.js文件

~~~js
const webpack = require('webpack')

module.exports= {
    ...
    plugins: [
		new webpack.BannerPlugin('这里写Banner的内容')
    ]
}
~~~

## 2.配置打包html的plugin

- npm安装对应的plugin

  ~~~
  npm install html-webpack-plugin@3.2.0 --save-dev
  ~~~

- 在webpack.config.js中配置

  ~~~js
  const HtmlWebpackPlugin = require('html-webpack-plugin')
  
  module.exports = {
      ... 
       plugins: [
  		new HtmlWebpackPlugin({
              template: 'index.html'  // 会按照这个模板生成index.html。并且会导入统计目录下的bundle.js文件
          })
      ]
  }
  ~~~

- 需要去除webpack.config.js中的publicPath。它指定找静态文件的路径



## 3.js压缩的Plugin

- npm install uglifyjs-webpack-plugin@1.1.1 --save-dev

- 修改webpack.config.js文件，使用插件：

  ~~~js
  const UglilyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
  
  module.exports = {
      ... 
       plugins: [
  		new HtmlWebpackPlugin({
              template: 'index.html',  // 会按照这个模板生成index.html。并且会导入统计目录下的bundle.js文件
          }),
          new UglilyjsWebpackPlugin()
      ]
  }
  ~~~



## 4.搭建本地服务器

`webpack-dev-server`：前端的热加载

步骤：

- npm安装

  ~~~js
  npm install --save-dev webpack-dev-server@2.9.1
  ~~~

- webpack.config.js中配置

  ~~~js
  devServer: {
  	contentBase: './dist',  // 为哪一个文件夹提供本地服务，默认是根文件夹，我们这里要填
  	port: ,   			// 端口号
  	inline: true		// 页面实时刷新
  	historyApiFallback: // 在SPA页面中，依赖HTML5的history模式
  }
  ~~~

- 将webpack-dev-server命令安装到npm中，通过package.json指定使用局部安装

  ~~~json
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "build": "webpack",
        "dev": "webpack-dev-server --open" //可以通过--open指定自动打开链接 
    },
  ~~~

- 以后只需要执行：npm run dev即可启动本地webpack-server服务



## 5.对webpack文件抽离

- 安装webpack-merge

~~~~js
npm i webpack-merge@4.1.5 --save-dev
~~~~

- 使用webpack-merge合并basecofnig.js和prod.js或dev.js

~~~js
const webpackMerge = require('webpack-merge')

module.exports = webpackMerge(baseConfig, {
  devServer: {
    contentBase: './dist',
    inline: true
  }
})
~~~

- 在package.json中指定启动时使用的配置文件





















