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
  //监听属性 类似于data概念。计算属性
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