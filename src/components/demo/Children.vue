<template>
  <div class="children">
    <div>我是子组件 这是来自父组件的数据 : {{ this.foo }}</div>

    <button
      @click="
        () => {
          this.$emit('event', this.ora);
        }
      "
    >
      点击通过emit 自定义事件发给爸爸
    </button>
  </div>
</template>

<script>
export default {
  name: "Children",
  props: ["foo"],
  data() {
    return {
      ora: "我是父组件的数据",
    };
  },
};
</script>

<style lang="css" scoped>
.children {
  width: 300px;
  height: 400px;
  background-color: rgb(58, 191, 224);
}
</style>