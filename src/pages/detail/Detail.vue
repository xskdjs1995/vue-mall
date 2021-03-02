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
        <div class="detail-info">
          <div class="price">
            <label class="label-title">价 格:</label>
            <span id="price"> ${{ this.itemData.price }}</span>
            <label for="first-price">定 金:</label>
            <span id="first-price"> ${{ this.itemData.price }}</span>
          </div>
          <div class="sale">
            <label class="label-title">促 销:</label>
            <div id="sale-info">
              <em class="tag">分期免息</em>
              <div class="sale-text">
                银联、花呗、掌上生活）银联、花呗、掌上生活）
              </div>
            </div>
          </div>
        </div>
        <div class="choose-info">选中信息 以及说明</div>

        <div class="bottom-control">
          <el-input-number
            v-model="orderInfo.num"
            size="small"
            :min="1"
            label="描述文字"
          ></el-input-number>
          <el-button type="warning" @click="addCar">添加购物车</el-button>
          <el-button type="danger" @click="buyNow">立即购买</el-button>
        </div>
      </div>
    </section>
    <div class="main-info">
      主要的详细图片等等
    </div>
  </main>
</template>

<script>
export default {
  name: "Detail",
  props: ["item"],
  data() {
    return {
      itemData: {
      },
      orderInfo: {
        num: 1,
      },
    };
  },
  created() {
    console.log(this.$route.query)
    // Vue.set(itemData, key, value)
    this.itemData =  this.$route.query
  },
  updated() {
    console.log(this.classid);
    console.log(this.props)
  },
  methods: {
    addCar(){
      // console.log("");
      alert("添加了购物车")
    },
     buyNow(){
      // console.log("");
      alert("立即购买")
    }
  },
};
</script>

<style lang="css" scoped>
.detail {
  margin: 0 100px;
}
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
.product-slogan-link {
  color: #ca141d;
}
.detail-info {
  background: #f5f5f5;
  padding-top: 14px;
  padding-bottom: 3px;
  margin-top: 10px;
}
.price {
  color: #ca141d;
}
.label-title {
  /* width: 85px; */
  /* /text-indent: 10px; */
  line-height: 30px;
  margin: 0 20px;
  color: #333;
}
#price {
  font-size: 24px;
  margin-right: 30px;
}
.sale {
  display: flex;
  justify-self: flex-start;
}
.tag {
  line-height: 18px;
  height: 18px;
  border: 1px solid #ca141d;
  padding: 0 6px;
  min-width: 24px;
  color: #ca141d;
  text-align: center;
  margin-right: 10px;
  margin-top: 5px;
  font-style: normal;
  font-weight: 400;
}
#sale-info {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 30px;
  margin: 0;
  padding: 0;
}
/* .sale-text{
  align-items: center;
} */

/* 选中信息以及说名 +++++++++++++ */
.choose-info {
  height: 150px;
  margin: 20px 0;
  background-color: burlywood;
}
/* 选中信息以及说明 */

/* 按钮 和数量控制 */
.bottom-control {
  height: 80px;
  margin: 20px 0;
  /* background-color: burlywood; */
}

.el-input-number {
  margin: 0 10px;
}
.el-button {
  width: 114px;
}
/* ========================主要详细信息包括图片等 */
.main-info{
    height: 880px;
  margin: 20px 0;
  background-color: burlywood;
}
/* 右側 =============================================end */
</style>