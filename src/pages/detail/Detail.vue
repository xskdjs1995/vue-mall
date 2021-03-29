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
          <el-button type="warning" @click="addCar(itemData, orderInfo)"
            >添加购物车</el-button
          >
          <el-button type="danger" @click="buyNow">立即购买</el-button>
        </div>
      </div>
    </section>
    <div class="main-info">主要的详细图片等等</div>
  </main>
</template>

<script>
import { request } from "@/network/axios";
export default {
  name: "Detail",
  props: ["item"],
  data() {
    return {
      itemData: {},
      orderInfo: {
        num: 1,
      },
    };
  },
  created() {
    console.log(this.$route.query);
    // Vue.set(itemData, key, value)
    this.itemData = this.$route.query;
  },
  updated() {
    // console.log(this.classid);
    // console.log(this.props);
  },
  methods: {
    async addCar(itemData, orderInfo) {
      // console.log("");
      alert("添加了购物车");
      let userId = 200001;

      //1 api 查询订单数据 (userId 为条件)
      // 应该交给后台数据处理数据信息前台 提交用户id 和添加商品的id
      //2 如果有且api返回的数据不包括该条 id 将路由传递的数据 merge到 数组中
      //3 如果没有则直接将数据push
      // 调取api insert 订单表
      let orderResponse;
      try {
        // 模拟查询用户 userId为100001的数据
        orderResponse = await request({
          url: "/orders",
          params: {
            userId,
          },
        });
      } catch (error) {
        console.log(
          "订单数据请求失败,联系970654226@qq.com 或尝试在项目目录下执行",
          "npm run jsonserve"
        );
        console.log(error.message);
      }
      //
      console.log(orderInfo);
      console.log(orderResponse, orderResponse.data.length);
      //  当该用户没有过订单的时候
      if (orderResponse.data.length === 0) {
        console.log(itemData);
        // insert;
        let insertRes = await request({
          method: "post",
          url: "/orders",
          data: {
            // id: 100003,
            userId,
            orderInfoList: [
              {
                id: itemData.id,
                imgsrc: itemData.imgsrc,
                alt: itemData.alt,
                price: itemData.price,
                title: itemData.title,
                num: orderInfo.num,
              },
            ],
          },
        });
        console.log(insertRes);
        // else 用户有过订单
        // 而且商品id 和本商品id相同的情况 只更新数量或类型 本次只有数量
      } else if (
        orderResponse.data[0].orderInfoList.filter((e) => e.id === itemData.id)
          .length !== 0
      ) {
        let currentData = orderResponse.data[0].orderInfoList.filter(
          (e) => e.id === itemData.id
        )[0];
        let orderInfoList = orderResponse.data[0].orderInfoList.map((e) => {
          if (e.id !== itemData.id) {
            return e;
          } else {
            return {
              id: itemData.id,
              imgsrc: itemData.imgsrc,
              alt: itemData.alt,
              price: itemData.price,
              title: itemData.title,
              num: orderInfo.num + currentData.num,
            };
          }
        });
        console.log("进入到更新数字部分", currentData);
        let updateNumRes = await request({
          method: "patch",
          url: `/orders/${orderResponse.data[0].id}`,
          data: {
            // id: 100003,
            userId,
            orderInfoList,
          },
        });
        console.log(updateNumRes);
      } else {
        // else 用户有过订单
        // 但是不是本商品 直接更新orderInfoList push一条新数据
        let updateRes = await request({
          method: "patch",
          url: `/orders/${orderResponse.data[0].id}`,
          data: {
            // id: 100003,
            userId,
            orderInfoList: [
              ...orderResponse.data[0].orderInfoList,
              {
                id: itemData.id,
                imgsrc: itemData.imgsrc,
                alt: itemData.alt,
                price: itemData.price,
                title: itemData.title,
                num: orderInfo.num,
              },
            ],
          },
        });
        console.log(updateRes.data);
      }

      // let a = response.data[0].orderInfoList.filter(
      //   (orderInfo) => orderInfo.id === itemData.id
      // );
      // if (a.length === 0) {
      //   console.log("todo");
      // } else {
      //   // update
      //   alert("更新了order");
      // }

      // 跳转到购物车

      // this.$router.push({
      //   path: "cart",
      //   query: { itemData, orderInfo },
      // });
    },
    buyNow() {
      // console.log("");
      alert("立即购买");
    
    },
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
  /* background-color: blanchedalmond; */
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
.main-info {
  height: 880px;
  margin: 20px 0;
  background-color: burlywood;
}
/* 右側 =============================================end */
</style>