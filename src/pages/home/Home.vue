<template>
  <div class="">
    <!-- 主页的上半部分 导航 & 检索   start -->
    <div>导航组件</div>
    <!-- 主页的上半部分 导航 & 检索  end -->
    <!-- 主页的下半部分 目录   start -->
    <section>
      <div>轮播组件</div>
      <div>category组件</div>
    </section>
    <!-- 主页的下半部分 目录 category   end -->




  <router-link to="/cart" tag="el-button">路由test</router-link> 
  <el-button @click="()=>{this.$router.push('/cart')}">代码路由跳转</el-button>
   <router-link :to="'/cart/'+id" tag="el-button">params</router-link> 
     <router-link :to="{path:'/cart/' , query: { id: '2' }}" tag="el-button">query</router-link> 
    <!-- <span>首页!!</span>
    <el-button @click="visible = true">Button</el-button>id
    <el-dialog :visible.sync="visible" title="Hello world">
      <p>Try Element</p>
    </el-dialog> -->
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      id:1,
      visible: false,
    };
  },
};
</script>

<style lang="" scoped>
</style>