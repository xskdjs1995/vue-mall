<template>
  <div class="goods">
    <!-- search 条件表单   start-->
    <div class="search">
      <!-- 详情的导航部分 ===============start -->
      <!-- 数据应该由路由传递过循环出来 TODO -->
      <nav class="detail-nav">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="navItem in navInfoList" :key="navItem">{{
            navItem
          }}</el-breadcrumb-item>

          <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
        </el-breadcrumb>
      </nav>
      <!-- 详情的导航部分 ===============end -->
      <div class="search-info">
        <div class="category-box">
          <div class="p-title">分类：</div>
          <div class="p-title">{{ classId }}</div>
        </div>
        <div class="category-box">
          <div class="p-title">分类：</div>
          <div class="p-title">{{ classId }}</div>
        </div>
        <div class="category-box">
          <div class="p-title">分类：</div>
          <div class="p-title">{{ classId }}</div>
        </div>
        <div class="category-box">
          <div class="p-title">分类：</div>
          <div class="p-title">{{ classId }}</div>
        </div>
        <div class="category-box">
          <div class="p-title">分类：</div>
          <div class="p-title">{{ classId }}</div>
        </div>
      </div>
    </div>
    <!-- search 条件表单   end-->

    <section class="Itemlist">
      <Item
        @click.native="toDetailPage(item)"
        v-for="item in itemListByClass"
        :key="item.title"
        :item="item"
      >
      </Item>
    </section>
  </div>
</template>

<script>
import Item from "@/components/itemlist/item";

export default {
  name: "Goods",
  components: { Item },
  data() {
    return {
      itemList: [],
      classId: "手机",
      navInfoList: [],
    };
  },
  methods: {
    toDetailPage(item) {
      console.log(item);
      this.$router.push({ path: "detail", query: { ...item } });
    },
  },
  computed: {
    //   TODO 筛选类型 应该是路由传递classid 为空返回所有
    itemListByClass: function () {
      return typeof this.classId == "undefined"
        ? this.itemList
        : this.itemList.filter((e) => e.classId === this.classId);
    },
  },

  created() {
    this.classId = this.$route.query.classId;
    this.navInfoList = this.$route.query.navInfoList;
    console.log(this.classId);

    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("itemList")) {
      // this.itemList = sessionStorage.getItem("itemList")
      this.itemList.splice(
        0,
        this.itemList.length,
        ...JSON.parse(sessionStorage.getItem("itemList"))
      );
      //  sessionStorage.removeItem("itemList");
      // this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
    } else {
      this.itemList = this.$store.state.itemList;
    }

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.removeItem("itemList");
      sessionStorage.setItem("itemList", JSON.stringify(this.itemList));
    });
  },
};
</script>

<style lang="css" scoped>
.goods {
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

/* .search {

} */
.detail-nav {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin: 10px 0;
}

/* ************************* */
.search-info {
  background: #fff;
  margin: 15px auto;
}
.category-box {
  display: flex;
  justify-content: flex-start;
  width: 1200px;
  /* margin: 10px auto; */

  border-bottom: 1px solid #eaeaea;
}
.p-title {
  text-align: left;
  width: 106px;
  color: #666;
  line-height: 35px;
  font-size: 12px;
  padding: 0 10px;
}
/* ************************* */

.Itemlist {
  width: 1236px;

  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 230px);
  grid-gap: 12px;
  padding-top: 20px;

  max-width: 1200px;
  background-color: #fff;
}
</style>