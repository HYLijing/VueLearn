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





# 4.CSS文件打包处理

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

# 5.图片的打包处理

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

# 6.将ES6转换为ES6

使用bable-loader

具体使用可以参照官方文档



































