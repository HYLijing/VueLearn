<template>
  <div>
    <h2>这里是HelloVuex中的组件内容</h2>
    <!-- <h2>{{counter}}</h2> -->
    <!-- <h2>{{$store.state.counter}}</h2> -->

    <!-- <h3>{{$store.state.students}}</h3> -->

    <!-- <h3>子组件中展示年纪大于20的</h3> -->
    <!-- <h3>{{$store.getters.moreThan20}}</h3> -->

    <!-- <h4>自己定义的年纪</h4> -->
    <!-- <h4>{{$store.getters.moreThanFixAge(40)}}</h4> -->
    <h2>{{message}}</h2>
  </div>
</template>

<script>
import axios from "axios";

export default {
  // props: {
  //   counter: Number
  // },
  data() {
    return {
      message: "Hello"
    };
  },
  computed: {},
  methods: {},

  //监控data中的数据变化
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    console.log("created开始执行~~~");
    // axios.post('http://192.168.56.1:9080/MHC/common/queryMsgClass')
    // .then(res => {
    //   console.log("执行成功~~~")
    //   console.log(res)
    //   this.message = res

    // }).catch(err => {
    //   console.log(err)
    // })

    axios({
      url: 'http://192.168.56.1:9080/MHC/common/queryMsgClass',
      method: 'post'
    }).then(result => {
      console.log(result)
    }).catch(err => {
      console.log(err)
    })

  },

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