<template>
  <div class="tab-bar-item" @click="routerClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <!-- <div :class="{active:isActive}">
      <slot name="item-text"></slot>
    </div>-->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<!--
  注意：
    1.在给标签设定样式时，可以使用两种方式；
        第一种：通过class选择器，在Css中设定演示
        第二种：直接在标签上写上style样式
  -->


<script>
export default {
  components: {},
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "green"
    }
  },
  data() {
    return {
      // isActive: true
    };
  },
  computed: {
    isActive() {
      // indexOf包含的意思：包含他就返回1  不包含返回-1
      return this.$route.path.indexOf(this.path) !== -1;
    },

    activeStyle() {
      return this.isActive ? {color: this.activeColor}:{} ;
    }
  },
  watch: {},
  methods: {
    routerClick() {
      // console.log(this.path);
      this.$router.replace(this.path);
    }
  },
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

.active {
  color: red;
}
</style>