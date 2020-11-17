<template>
  <div id="tab-bar">
    <div class="tab-bar-item">
      <div>
        <img src="../../assets/img/tabbar/home.svg" alt>
      </div>
      <div>首页</div>
    </div>
    <div class="tab-bar-item">
      <div>
        <img src="../../assets/img/tabbar/category.svg" alt>
      </div>
      <div>分类</div>
    </div>
    <div class="tab-bar-item">
      <div>
        <img src="../../assets/img/tabbar/shopcart.svg" alt>
      </div>
      <div>购物车</div>
    </div>
    <div class="tab-bar-item">
      <div>
        <img src="../../assets/img/tabbar/profile.svg" alt>
      </div>
      <div>我的</div>
    </div>
  </div>
</template>

<script>
import TabBarItem from "./TabBarItem";

export default {
  components: {
    TabBarItem
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  watch: {},
  created() {},
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
#tab-bar {
  display: flex;
  background-color: #f6f6f6;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
}

.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>