<template>
  <div id="app">
    <!-- <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>-->

    <!-- 默认生成的是a标签。使用tag可以指定生成的标签 -->
    <!-- <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>-->

    <!-- 选中的标签都会有class="router-link-exact-active router-link-active"class属性。
    可以通过class属性给标签设定样式 
    
    linkActiveClass: 也可以修改默认的class值
    -->
    <!-- <router-link to="/home" >首页</router-link>
    <router-link to="/about">关于</router-link>-->

    <!-- 通过代码实现跳转.这里实际就是通过改变浏览器的url地址 -->
    <!-- <button @click="toHome">首页</button>
    <button @click="toAbout">关于</button>-->

    <router-link to="/home" tag="button">主页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
    <router-link v-bind:to="'/user/'+userId" tag="button">用户</router-link>
    <!-- <router-link :to="{
        path: '/profile/' + 123,
        query: {
          name: 'zhangsan',
          age: 18
        }
    }">档案</router-link>-->
    <button @click="profileClick" class="active">档案</button>

    <keep-alive exclude="Profile">
      <router-view></router-view>
    </keep-alive>


    <!-- 注释 -->
    <!-- 动态路由的绑定过程中可以取到绑定的内容 -->
    <!-- 通过JS代码实现路由的切换，并且传递参数 -->

    <h1>{{getUserId}}</h1>

    <!-- 通过$route能拿到当前路由传递的参数 -->
    <h1>{{$route.params.id}}</h1>
    <h1>{{$route.query.name}}</h1>
    <h1>{{$route.query.age}}</h1>
    <h1>{{$route.query.height}}</h1>

    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      userId: "lisi",
      id: 111
    };
  },
  computed: {
    getUserId() {
      return this.$route.params.userId;
    }
  },
  methods: {
    // $router拿到的就是我们VueRouter对象，因此可以通过操作它来改变路由的映射关系。
    // $route对象是当前切换的路由对象，可以通过当前正在切换的路由对象拿到请求相关的数据，例如：params，query等
    toHome() {
      // this.$router.push('/home')
      this.$router.replace("/home");
      // history.pushState({},'','/home')
    },
    toAbout() {
      // this.$router.push('/about')
      this.$router.replace("/about");
      // history.pushState({},'','/about')
    },
    profileClick() {
      // this.$router.push('/profile/'+this.id)
      this.$router.push({
        path: "/profile/" + this.id,
        query: { name: "Kobe", age: 44, height: 198 }
      });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* .router-link-active {
  color: red;
} */
.active {
  color: red;
}
</style>
