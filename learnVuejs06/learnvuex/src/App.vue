<template>
  <div id="app">
    <h2>------------------actions相关的内容--------------</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="asynUpdateCounter">异步修改counter</button>
    <h2>{{$store.getters.moreThanFixAge(30)}}</h2>
    <button @click="asynAddStudent">添加学生</button>


    <h2>------------------state相关的内容--------------</h2>
    <h2>这里是APP组件的内容</h2>
    <h2>{{$store.state.counter}}</h2>

    <!-- <h3>{{$store.state.students}}</h3> -->

    <h3>下面是年龄大于20的学生</h3>
    <!-- <h3>{{}}</h3> -->
    <h3>{{$store.getters.moreThan20}}</h3>

    <h4>自己定义的年纪</h4>
    <h4>{{$store.getters.moreThanFixAge(30)}}</h4>

    <!-- <button @click="counter++">+</button>
    <button @click="counter--">-</button>-->

    <!-- vue强调不要直接修改vuex中的state变量，而是通过mutation来改变，利于我们追踪
      变量的修改和调试
    -->
    <!-- <button @click="$store.state.counter++">+</button>
    <button @click="$store.state.counter--">-</button>-->

    <button @click="increment">+</button>
    <button @click="decrement">-</button>

    <button @click="incrementCount(5)">+5</button>
    <button @click="incrementCount(10)">+10</button>

    <!-- 新增一个学生 -->
    <button @click="addStudent">新增学生</button>

    <!-- 通过V-bind来向子组件传递数据。如果不加v-bind的话，会将其当做字符串 -->
    <!-- <hello-vuex :counter="counter"></hello-vuex> -->
    <hello-vuex></hello-vuex>
  </div>
</template>



<script>
import HelloVuex from "./components/HelloVuex";

export default {
  name: "App",
  // data() {
  //   return {
  //     message: "Hello",
  //     counter: 0
  //   };
  // },
  components: {
    HelloVuex
  },
  methods: {
    increment() {
      // 通过commit方式提交一个方法:
      // 提交的包含payload。包括方法的方法名和方法的回调
      this.$store.commit("add1");
    },
    decrement() {
      this.$store.commit("cut1");
    },
    incrementCount(count) {
      // mutations中的方法主要分为：时间类型和回调函数
      this.$store.commit("addCount", count);
    },
    // addStudent() {
    //   const stu = { id: 5, name: "zhaobenshan", age: 68 };
    //   this.$store.commit("addStudent", stu);
    // }
    // 因为mutations中的方法都是包括字符串的事件类型和回调函数的。因此在传递参数时可以封装成对象.
    // 封装在payload中的一个对象
    addStudent() {
      const stu = { id: 5, name: "zhaobenshan", age: 68 };
      this.$store.commit({
        type: "addStudent",
        stu
      });
    },
    asynUpdateCounter() {
      this.$store.dispatch("asynUpdate", {count:100});
    },
    asynAddStudent() {
      this.$store.dispatch({
        type: 'asynAddStudent',
        student: {id: 8, name: "zhangxueyou", age: 58}
      })
    }
  }
  // computed: {
  //   moreThan20() {
  //     return this.$store.state.students.filter(s => s.age > 20);
  //   }
  // }
};
</script>

<style>
</style>
