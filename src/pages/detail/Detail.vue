<template>
  <div class="detail">
    <el-button @click="handleStore">直接触发mutation</el-button>
    <el-button @click="handlebyaction">通过action触发mutation</el-button>
    <div>{{this.$store.getters.getfullName}}</div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {};
  },
  methods: {
    handleStore() {
      console.log("点击按钮直接在触发mutation");
      this.$store.commit("test", 1);

      console.log("对象风格提交");
      this.$store.commit({
        type: "test",
        payload: 1,
      });
    },
    handlebyaction(){
      console.log("点击按钮通过dispatch -> action  ->  commit ->  mutation");
      this.$store.dispatch('testAction',{name:'shu'})
    }
  },
};
</script>

<style lang="css" scoped>
</style>