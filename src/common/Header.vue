<template>
    <div class="header">
          <div @click="gotoHome">首页</div>
          <div class="header-right" @click="handlelogin">
            <el-avatar
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
            ></el-avatar>
          </div>
        </div>
</template>

<script>
export default {
  name: 'Header',
  data() { 
    return {

    }
  },methods: {
    gotoHome(){
      this.$router.push('/home'); 
    },
    handlelogin() {
      console.log("点击了头像");
    },
  },
 }
</script>

<style lang="css" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-right {
  height: 40px;
}
</style>