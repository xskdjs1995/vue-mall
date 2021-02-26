<template>
  <main class="detail">
    <!-- 详情的导航部分 ===============start -->
    <!-- 数据应该由路由传递过循环出来 TODO -->
    <nav class="detail-nav">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </nav>
    <!-- 详情的导航部分 ===============end -->
    <!-- 主要内容 -->
    <section class="item-info">
      <!-- 左侧商品图片  ==============start -->
      <!-- TODO 只有圖片沒有邏輯 -->
      <div class="left">
        <img :src="itemData.imgsrc" :alt="itemData.alt" />
        <div class="left-bottom">
          <ul class="ul-list">
            <li>
              <img
                class="small-img"
                :src="itemData.imgsrc"
                alt="itemData.alt"
              />
            </li>
            <li>
              <img
                class="small-img"
                :src="itemData.imgsrc"
                alt="itemData.alt"
              />
            </li>
            <li>
              <img
                class="small-img"
                :src="itemData.imgsrc"
                alt="itemData.alt"
              />
            </li>
            <li>
              <img
                class="small-img"
                :src="itemData.imgsrc"
                alt="itemData.alt"
              />
            </li>
          </ul>
        </div>
      </div>
      <!-- 左侧商品图片  ==============end -->
      <div class="right">
        <div class="product-meta">
          <h1>{{ itemData.title }}</h1>
        </div>
        <div class="product-slogan" style="display: block">
        
          <span class="product-slogan-link"
            >【新品预订享优先发货】① 预订优惠50元 ② 享3期免息 ③
            晒单前2000名赠定制保护套</span
          >
        </div>
        <div class="detail-info"></div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "Detail",
  props: ["item"],
  data() {
    return {
      itemData: {
        title:
          "【订金预订】HUAWEI FreeBuds 4i 真无线耳机（陶瓷白）主动降噪 通话降噪 环境音透传 10小时连续播放 快充长续航 纯净音质",
        desc: "String",
        imgsrc:
          "https://res.vmallres.com/pimages//product/6941487207756/800_800_A6A30621B8088CBBAF2D831A44CA9E945FEB6E9B64A1E201mp.png",
        alt:
          "https://res.vmallres.com/pimages//product/6941487207756/800_800_A6A30621B8088CBBAF2D831A44CA9E945FEB6E9B64A1E201mp.png",
        price: 122,
        id: 1233456676,
        classId: "",
      },
    };
  },
  updated() {
    console.log(this.classid);
  },
  methods: {},
};
</script>

<style lang="css" scoped>
.detail-nav {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 30px;
  margin-left: 50px;
}
/* ============================左侧img  start */
.item-info {
  display: flex;
  justify-content: flex-start;
}
.left img {
  width: 450px;
  height: 450px;
  background-color: blanchedalmond;
}
.small-img {
  width: 60px !important;
  height: 60px !important;
  margin-right: 10px;
}
.ul-list {
  display: flex;
  justify-content: center;
}
/* 左侧img===========================================end */
/* 右側 =============================================start */
.right {
  min-width: 600px;
  margin-left: 30px;
  text-align: left;
}
.product-meta h1 {
  font-size: 21px;
  overflow: hidden;
  margin-bottom: 10px;
  text-align: left;
  font-weight: 400;
}
.product-slogan-link{
  color:#ca141d
}
/* 右側 =============================================end */
</style>