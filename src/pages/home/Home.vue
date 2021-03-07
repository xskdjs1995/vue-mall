<template>
  <div class="">
    <!-- 主页的上半部分 导航 & 检索   start -->
    <NavSearch />
    <!-- 主页的上半部分 导航 & 检索  end -->
    <!-- 主页的下半部分 目录   start -->
    <section>
      <div class="mainBottom">
        <!-- 轮播图   start -->
        <el-carousel height="550px" >
          <el-carousel-item v-for="item in items" :key="item">
            <img :src="item" :alt="item" />
          </el-carousel-item>
        </el-carousel>
        <!-- 轮播图   end -->
        <!-- 商品级联目录导航  start -->
        <div class="category">
          <Categories
            :categoryList="this.$store.state.categories"
            :list="list"
          ></Categories>
          <!-- 商品级联目录导航  end -->
        </div>
      </div>
    </section>
    <!-- 主页的下半部分 目录 category   end -->
    <main class="itemlist">
      
      <Itemlist :dataList="this.$store.state.itemList"></Itemlist>
      <!-- <Itemlist></Itemlist> -->
    </main>

    <!-- 下面是练习的例子 -->
    <!-- <div>
          <button @click="test">获得数据</button>
        </div> -->
  </div>
</template>

<script>
// import Demo from "@/components/demo/Demo";
import Itemlist from "@/components/itemlist/itemlist";
import NavSearch from "@/components/home/NavSearch";
import Categories from "@/components/home/Categories";
export default {
  name: "Home",
  components: {
    // Demo,
    Itemlist,
    NavSearch,
    Categories,
  },
  data() {
    return {
      list: [2],
      // categories:this.$store.state.categories,
      items: [
        "https://res.vmallres.com/pimages//pages/picImages/71845031631613054817.jpg",
        "https://res.vmallres.com/pimages//pages/picImages/14559524631612595541.jpg",
        "https://res.vmallres.com/pimages//pages/picImages/96472221631612227469.jpg",
        "https://res.vmallres.com/pimages//pages/picImages/88453627531612635488.jpg",
      ],
      payload:'home页面的值 来自dispatch'
    };
  },
  methods: {
    test() {
      console.log(111);
      console.log(this.$store.state.categories);
    },
  },
  created() {
    // 分发请求 到action
    this.$store.dispatch("getCategoriesAction", 1);
    this.$store.dispatch("getItemListAction",this.payload)
  },
  updated() {
    console.log(this.$store.state.itemList)
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

/* 商品列表部分的css  —— +++++++++++++++++++++++++=  start */
.itemlist {
  display: flex;
  justify-content: center;
}

/* 商品列表部分的css  —— +++++++++++++++++++++++++=  end */

/* 为啥在组件里不起作用 在调用组件的地方使用可以起效  start*/
/* 原因就是作用域 */
.inputsearch input {
  border-radius: 30px;
}
/* ================================================  end*/
</style>