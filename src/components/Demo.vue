<template>
  <div class="">
    <router-link to="/cart" tag="el-button">路由test</router-link>
    <el-button @click=" () => {  this.$router.push('/cart');  } " >
      代码路由跳转
     </el-button >
    <router-link :to="'/cart/' + id" tag="el-button">params</router-link>
    <router-link :to="{ path: '/cart/', query: { id: '2' } }" tag="el-button">
      query
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Demo",
  data() {
    return {
      id: 2,
    };
  },
};
</script>

<style lang="" scoped>
</style>