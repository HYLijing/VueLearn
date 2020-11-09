1.vscode中快速生成html模板： 	!+tab



2.npm安装时，显示

~~~gas
npm ERR! The operation was rejected by your operating system.
npm ERR! It's possible that the file was already in use (by a text editor or antivirus),
npm ERR! or that you lack permissions to access it.
npm ERR!
npm ERR! If you believe this might be a permissions issue, please double-check the
npm ERR! permissions of the file and its containing directories, or try running
npm ERR! the command again as root/Administrator.
~~~

![image-20201019155132523](C:\Users\YUANHAIYANG\AppData\Roaming\Typora\typora-user-images\image-20201019155132523.png)

**问题原因**

npm 版本高

**解决方式**

删除 package-lock.json 文件
执行 npm install --no-optional 成功



3，vscode中如何创建代码模板



4，vscode中快捷键

- 快速整理代码：Shift + Alt + F
- 删除一行：ctrl+shift+k
- 复制一行：shift+alt+↓
- 快速打开pluging：Ctrl+shift+x



组件化开发总结

# 1.什么是组件化

- 我们将一个完整的页面分成很多个组件。
- 每个组件都用于实现页面的一个功能块。
- 而每一个组件又可以进行细分。

# 2.如何定义一个组件

~~~js
// 1.获取创建组件的构造器
const consturct = Vue.extend({
    template: `
	组件的代码
`，
})

// 2.将组件构造器注册到Vue实例中
Vue.componet('cpn',consturctr);	// 第一个参数：自定义组件的标签	// 第二个参数：组件的构造器

// 3.在我们Vue管理的实例中使用组件
~~~



# 3.全局组件和局部组件的区分

使用Vue.compent()注册的组件就是全局组件

在我们组件实例中注册的组件就是局部组件，局部组件只能在当前注册组件的实例中使用

~~~js
// 局部组件的注册
const app = new Vue({
    el: '#app',
    components: {
        cpn: {
            template: `` 
        }
    }
})

~~~



# 4.父组件和子组件



# 5.注册组件的语法糖和模板分离

- 使用语法糖和模板分离创建组件

~~~html
<!--1.创建组件的模板 -->
<template id="tempalteId">
	<div>
        <h2>
            这里是组件的内容
        </h2>
    </div>
</template>
~~~

~~~js
// 2.使用语法糖和模板
const app = new Vue({
    el:'#app',
    components: {
        cpn: {
            template: '#templateId'
        }
    }
})
~~~



# 6.组件中的数据存放

通过data属性来存放，但是组件中的data必须是一个函数，通过return方法返回变量

为什么组件中的data必须是一个函数：利用了函数创建出的对象都是新的对象，从而使组件中的变量互相隔离。



# 7.父子组件的通信

1），子组件访问父组件的方式：通过props属性。通过v-bind方式来完成

~~~javascript
// 步骤
// 1.在子组件props属性中定义一个变量用来和父组件做绑定。props属性里的变量都是用来接收父组件传递来数据

// 2.在调用标签的时候，通过v-bind将子组件props中的变量和父组件中的变量进行绑定

// 3.在子组件的template中就直接可以通过msutcach语法拿到props的变量值也就是父组件的变量值
~~~

~~~html
<body>
  <template id="templateId">
    <div>
      <h1>{{parentMessage}}</h1>	<!--第三步：模板中直接取props中的变量值就是父组件绑定的值-->
    </div>
  </template>
  <div id='app'>
    <cpn :parent-message="message"></cpn>	<!-- 第二步：调用自定义组件时，通过v-bind将子组件中的props属性中的变量和父组件中的变量做绑定 -->
  </div>
  <script src='../js/vue.js'></script>
  <script>
    const app = new Vue({
      el: '#app',
      data: {
        message: '你好啊！'
      },
      components: {
        cpn: {
          template: '#templateId',
          props: ['parentMessage']		// 第一步：在子组件的props属性中定义一个变量来专门的接收父组件的变量值
        }
      }
    })
  </script>
</body>

~~~

2），父组件访问子组件：通过emit自定义事件来完成

~~~html
<body>
  <template id="templateId">
      <!--第一步：定义子组件模板时，需要通过点击事件或者其他方法来调用emit方法-->
    <div>
      <button @click="useEmit">点击按钮</button>  
    </div>
  </template>
  <div id='app'>
    <cpn @toparent="getChild"></cpn>    <!--第三步：使用子组件时，需要v-on监听子组件发射的自定义事件-->
    {{getchildMessage}}
  </div>
  <script src='../js/vue.js'></script>
  <script>
    const app = new Vue({
      el: '#app',
      data: {
        message: '你好啊！',
        getchildMessage: ''
      },
      methods: {
        getChildMessages(childMessage) {   //第四步：通过监听到的事件来完成赋值给子组件的变量
          console.log("监听子组件的方法", childMessage)
          this.getchildMessage = childMessage
        }
      },
      components: {
        cpn: {
          template: '#templateId',
          methods: {
            useEmit() {     // 第二部：实现点击事件，发射向上的自定义事件
              this.emit("toparent",this.childMessage)
            },
            data() {
              return {
                childMessage: '子组件的变量'
              }
            }
          }
        }
      }
    })
  </script>
</body>
~~~

3），父子组件的直接访问

- 父组件直接获取子组件的信息
  - $children方式
  - $refs方式     基本上都是使用这种方式 

~~~js
// 通过$children拿到的是所有的自定义组件属性：得到的是一个数组
// $refs可以拿到指定的组件的属性： 得到的是一个对象
~~~

- 子组件访问父组件的信息(很少)
  - $parent



# 8.插槽slot使用

1)，slot的目的：为了让我们的组件更有拓展性，可以根据调用方想要的设定而设定

2)，slot的使用

3)，具名插槽

目的：可以指定插槽展示的规则，而不是所有的插槽都是按照统一的样式展示

~~~html
<!--模板定义：-->
<template>
	<div>
        <slot name="test"></slot>
    </div>
</template>

<!--模板调用：-->
<cpn slot="test"><cpn>  <!--这里需要指明使用哪个slot-->
~~~

4)，作用域插槽：

目的：数据使用的是子组件的数据，但是样式需要父组件来确认。如下例：

~~~html
<!--
子组件中包括一组数据:pLanguages: ['JavaScript', 'Python', 'Swift', 'Go', 'C++']
    需要在多个界面进行展示：
    某些界面是以水平方向一一展示的，
    某些界面是以列表形式展示的，
    某些界面直接展示一个数组

步骤： 
1.创建模板，并将子模板中的数据通过v-bind绑定到一个变量上
2.调用自定义模板时，需要通过template标签配置slot-scopt来将绑定的变量值赋值到slot-scope上
3.通过slot-scope的属性值获取到子模板的值

注意：需要配合template模板一起使用
-->

<body>
  <template id="templateId1">
    <!-- 默认展示 -->
    <div>
      <slot :data="pLanguages">		<!--第一步：将子模板的变量通过v-bind绑定到data上-->
        <ul v-for="item in pLanguages">
          <li>{{item}}</li>
        </ul>
      </slot>
    </div>
  </template>
  <div id='app'>
    <!-- 默认展示 -->
    <cpn></cpn>
    <!-- 想要自定义展示 -->  
    <cpn>
       <!--第二步：通过template标签和slot-scope属性来将绑定的data赋给getSlotProps的一个属性-->
      <template slot-scope="getSlotProps">
          <!--第三步：从getSlotProps中拿出data属性，也就是子组件中的变量值-->
        <span v-for="item in getSlotProps.data"> - {{item}} - </span>
      </template>
    </cpn>
  </div>
  <script src='../js/vue.js'></script>
  <script>
    const app = new Vue({
      el: '#app',
      data: {
        message: '你好啊！'
      },
      components: {
        cpn: {
          template: '#templateId1',
          data() {
            return {
              pLanguages: ['JavaScript', 'Python', 'Swift', 'Go', 'C++']
            }
          }
        }
      }
    })
  </script>
</body>
~~~



# 9.模块化开发

1.为什么需要模块化

- 传统的js开发的问题

  - 全局变量命名冲突问题
  - js导入顺序问题
  - 代码难以维护的问题

- 解决方式

  - 使用匿名函数可以将全局变量转换为局部变量，可以解决变量冲突问题，但是不能实现变量复用

  ~~~js
  // 通过闭包的方式解决变量冲突
  (function() {
      var flag = true;
  })()
  ~~~

  - 使用模块化思维

  ~~~js
  var ModuleX = (function() {
      // 1.在方法中定义一个对象，用来装配需要复用的变量
      var obj = {}
      
      obj.flag = true
  })()
  
  // 可以直接通过如下使用
  console.log(ModuleX.flag)
  ~~~

  - 这里依然对导入的js的顺序有非常强的依赖



2.模块化的两个核心：导入和导出

> 模块化的规范和标准很多：CommonJs，AMD，CMD，ES6的Modules
>
> node对这些规范都有相应的实现，webpack也是基于CommonJs的模块规范标准

- CommonJs的导入导出规范

~~~js
// 导出
module.exports = {
    flag = true;
    test : test;
    Person: Person
    
}

test() {
    console.log("test")
}

class Person{
}

// 也可以使用ES6的对象增强语法
module.exports = {
	flag: true;
    test(abc) {
        console.log(abc)
    }
    Person
}

// 导入
let {flag,test,Person} = require("..XX.js")
~~~

- ES6导入导出规范

~~~js
// 使用export导出 使用import导入
// 第一种：单个导出
export flag = true

export test() {}

export class Person{}

// 第二种：对象方式导出
export {flag,test,Person}

// 第三种：default方式的导出
// 作用就是不定义方法名，让调用者自己可以自定义方法名
// 注意：一个js问题件中只能有一个default导出
export default function() {
   console.log("test~~~~")
}

// 导入
import * as info from '..XX.js'

import {flag} from '..XX.js'

// 导入default，不需要{}
import myFunction from '..XX.js'
~~~





