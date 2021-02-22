<template>
  <div class="myContainer">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>  <router-view></router-view></el-main>
    </el-container>
  </div>
</template>

<script>
import Header from "./Header";


export default {
  name: "Container",
  data() {
    return {};
  },
  components: {
    Header,
    // Home,
    // Cart
  },
};
</script>

<style lang="css" scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  min-height: 100%;
  padding: 0;
}
</style>