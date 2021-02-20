<template>
  <div class="">
    <!-- 主页的上半部分 导航 & 检索   start -->
    <NavSearch></NavSearch>
    <!-- 主页的上半部分 导航 & 检索  end -->
    <!-- 主页的下半部分 目录   start -->
    <section>
      <div class="mainBottom">
        <el-carousel height="550px">
          <el-carousel-item v-for="item in items" :key="item">
            <!-- <h3>{{ item }}</h3> -->
            <img :src="item" :alt="item" />
          </el-carousel-item>
        </el-carousel>

        <div class="category">
          <Categories :categoryList="this.$store.state.categories" :list="list"></Categories>
          </div>
        <Demo></Demo>
        <button @click="test">获得数据</button>
      </div>
    </section>
    <!-- 主页的下半部分 目录 category   end -->

    <!-- <span>首页!!</span>
    <el-button @click="visible = true">Button</el-button>id
    <el-dialog :visible.sync="visible" title="Hello world">
      <p>Try Element</p>
    </el-dialog> -->
  </div>
</template>

<script>
import Demo from "@/components/Demo";
import NavSearch from "@/components/home/NavSearch";
import Categories from "@/components/home/Categories";
export default {
  name: "Home",
  components: {
    Demo,
    NavSearch,
    Categories,
  },
  data() {
    return {

      list:[2],
      // categories:this.$store.state.categories,
      items: [
        "https://res.vmallres.com/pimages//pages/picImages/71845031631613054817.jpg",
        "https://res.vmallres.com/pimages//pages/picImages/14559524631612595541.jpg",
        "https://res.vmallres.com/pimages//pages/picImages/96472221631612227469.jpg",
        "https://res.vmallres.com/pimages//pages/picImages/88453627531612635488.jpg",
      ],
    };
  },
  methods: {
    test() {
      console.log(111);
      console.log(this.$store.state.categories);
    },
  },
  created() {
    this.$store.dispatch("getCategoriesAction", 1);
  },
};
</script>

<style lang="css" >
.mainBottom {
  position: relative;
}

.el-carousel__arrow {
  height: 60px;
  width: 60px;
}
.el-carousel__arrow--left {
  left: 300px;
}
.category {
  position: absolute;
  top: 30px;
  left: 30px;
  min-width: 210px;
  min-height: 440px;

  z-index: 2;
  /* background-color: black; */
}
/* 为啥在组件里不起作用 在调用组件的地方使用可以起效  start*/
/* 作用域 */
.inputsearch input {
  border-radius: 30px;
}
/* ================================================  end*/
</style>