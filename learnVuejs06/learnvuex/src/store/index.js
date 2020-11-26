import Vue from 'vue'
import Vuex from 'vuex'

// 类似vue-router，都是在vue中安装插件

// 1.安装vuex
Vue.use(Vuex)



// 2.创建Vuex的实例
const vuex = new Vuex.Store({
  state: {
    counter: 100,
    students: [{
        id: 1,
        name: 'zhangsan',
        age: 18
      },
      {
        id: 2,
        name: 'lisi',
        age: 28
      },
      {
        id: 3,
        name: 'wangwu',
        age: 38
      },
      {
        id: 4,
        name: 'zhaoliu',
        age: 48
      }
    ]
  },
  mutations: {
    add1(state) {
      state.counter++
    },
    cut1(state) {
      state.counter--
    },
    // mutations中的方法包含两部分： 事件的类型：addCount  事件的回调： 方法本身
    addCount(state, count) {
      state.counter += count
    },
    addStudent(state, payload) {
      console.log(payload)
      state.students.push(payload.stu)
    },
    asynAddCount(state,payload) {
      console.log(payload)

      state.counter += payload.count
    },
    asynAddStudent(state,payload) {
      console.log(payload)
      state.students.push(payload.student)
    },
  },
  // 相当与组件中的计算属性
  getters: {
    moreThan20(state) {
      return state.students.filter(s => s.age > 20);
    },
    moreThanFixAge(state) {
      return function (age) {
        return state.students.filter(s => s.age > age);
      }
    }
  },
  // state中的属性只能通过mutation来改
  actions: {
    asynUpdate(context,payload) {
      console.log(payload)
      setTimeout(() => {
        context.commit('asynAddCount',payload)
      },1000)
    },
    asynAddStudent(context,payload) {
      setTimeout(() => {
        context.commit('asynAddStudent',payload)
      },1000)

    }
  },
  modules: {
    a:{
      state:{},
      mutations: {},
      getters: {}
    }
  }
})

// 3.导出创建好Vuex的实例
export default vuex
