<template>
  <nav class="nav">
    <div class="left">
      <div class="logo" index="/home">
        <img
          src="https://res.vmallres.com/pimages//common/config/logo/SXppnESYv4K11DBxDFc2.png"
          alt="华为商城"
        />
      </div>
      <div class="nav-menu">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          router
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="/detail">详细</el-menu-item>
          <el-menu-item index="/cart">购物车</el-menu-item>
          <el-menu-item index="/homesss">未定</el-menu-item>
          <el-menu-item> </el-menu-item>
        </el-menu>
      </div>
    </div>
    <div class="right">
      <el-input
        placeholder="请输入内容"
        v-model="searchKey"
        class="inputsearch"
      >
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavSearch",
  data() {
    return {
      visible: false,
      activeIndex: "1",
      searchKey: "",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="css" scoped>
nav {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
}
.left {
  display: flex;
  justify-content: flex-start;
}
nav .logo {
  margin-left: 10px;
  display: flex;
  align-items: center;
}
nav .logo img {
  max-height: 30px;
}
.right {
  display: flex;
  align-items: center;
  margin-right: 20px;
}
.inputsearch {
  min-width: 400px;
}
.inputsearch input {
  border-radius: 30px;  
}
</style>