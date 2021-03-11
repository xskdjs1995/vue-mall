<template>
  <div class="cart">
    <div class="cart-header">
      <div class="order-header">
        <div class="order-header-left">
          <img
            src="https://res.vmallres.com/pimages//sale/2019-01/AF2GXbxrWmRqvyNfYzCl.png"
            alt="华为商城"
          />
          <span>我的购物车</span>
        </div>
        <div class="order-header-right">
          <el-steps :space="200" :active="2" finish-status="success">
            <el-step title="我的购物车"></el-step>
            <el-step title="核对订单信息"></el-step>
            <el-step title="成功提交订单"></el-step>
          </el-steps>
        </div>
      </div>
    </div>
    <div class="order-main">
      <div class="main-title">
        <div class="grid-item">
          <el-checkbox
            :indeterminate="isIndeterminate"
            v-model="checkAll"
            @change="handleCheckAllChange"
            >全选</el-checkbox
          >
        </div>
        <div class="grid-item">商品</div>
        <div class="grid-item">单价</div>
        <div class="grid-item">数量</div>
        <div class="grid-item">小计</div>
        <div class="grid-item">操作</div>
      </div>
      <div class="main-items">
        <el-checkbox-group
          v-model="checkedItems"
          @change="handleCheckedCitiesChange"
        >
          <div class="main-item" v-for="item in orderInfos" :key="item.id">
            <div class="grid-item">
              <el-checkbox :label="item.id">1</el-checkbox>
            </div>
            <div class="grid-item">
              <img :src="item.imgsrc" :alt="item.alt" />
              <span> {{ item.title }}</span>
            </div>
            <div class="grid-item">{{ item.price }}</div>
            <div class="grid-item">{{ item.num }}</div>
            <div class="grid-item">
              {{ item.num * item.price }}
            </div>
            <div class="grid-item">操作</div>
          </div>
        </el-checkbox-group>
      </div>
      <div class="main-bottom">
        <div class="grid-item">
          <el-checkbox
            :indeterminate="isIndeterminate"
            v-model="checkAll"
            @change="handleCheckAllChange"
            >全选</el-checkbox
          >
        </div>
        <div class="bottom-right">
          <div class="bottom-right-price">
            <span>12</span>
            <p>1221</p>
          </div>
          <div class="bottom-right-button">
            <el-button type="primary" @click="submitOrder(checkedItems)"
              >结算</el-button
            >
          </div>
        </div>
      </div>
    </div>

    <!-- 购物车商品id为{{idfromroute}}------this.$route.params.id
    购物车商品id为{{id}}------from props
    {{this.$route.query.id}} -->
  </div>
</template>

<script>
import { request } from "@/network/axios";
export default {
  name: "Cart",
  props: ["id"],
  data() {
    return {
      userId: 200001,
      // idfromroute:this.$route.params.id
      checkAll: false,
      checkedItems: [],
      isIndeterminate: true,
      orderInfos: [
        {
          id: "820000200104258216",
          imgsrc:
            "https://res0.vmallres.com/pimages//product/6941487207756/428_428_A6A30621B8088CBBAF2D831A44CA9E945FEB6E9B64A1E201mp.png",
          alt:
            "UAWEI FreeBuds 4i 真无线耳机（陶瓷白）主动降噪 通【订机（陶瓷白）主动降噪 通话降噪 环境音透传 10小时连续播放 快充长续航 纯净音质",
          price: "499",
          title: "亚瑟士 第十代跑步机 ",
          num: 1,
        },
      ],
    };
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedItems = val ? this.orderInfos : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      console.log(value);
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.orderInfos.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.orderInfos.length;
    },
    submitOrder(checkedItems) {
      // TODO
      // 计算价格
      // 调取付款接口
      // 付款结束 调取api查询订单状态
      console.log(checkedItems);
      alert("付款等收货吧");
    },
    async getInitOrderInfo(userId) {
      let orderinfor = await request({
        url: "http://localhost:80/orders",
        params: { userId },
      });
      console.log(orderinfor.data)
      return orderinfor.data[0];

    },
  },
  // computed: {
  //   orderInfo() {
  //     return this.$route.query;
  //   },
  // },
 async  created() {
    // TODO
    let a = await this.getInitOrderInfo(this.userId)
    console.log(a);
    this.orderInfos = a.orderInfoList;
    // console.log(this.getInitOrderInfo(this.userId)[0].orderInfoList);
    // console.log(this.orderInfos)
    console.log(this.$route.query);
  },
};
</script>

<style lang="css" >
.cart {
  background-color: #f5f5f5;
  min-width: 1200px;
}
.cart-header {
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
}
.order-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 50px;
  padding: 10px 0;
}
.order-header-left {
  /* background-color: rgb(186, 216, 14); */
  display: flex;
  align-items: center;
}
.order-header-left img {
  height: 40px;
  width: 120px;
  /* display: block; */
}
.order-header-left span {
  margin-left: 26px;
  font-size: 22px;
  line-height: 36px;
}
.order-header-right {
  width: 450px;
}
/* *****************组件 */
.el-step__title {
  font-size: 12px;
  line-height: 20px;
}
.el-step__icon {
  /* 解决组件中的错位  */
  display: flex;

  width: 20px;
  height: 20px;
}
.is-process {
  color: #d1d1d1 !important;
  border-color: #d1d1d1 !important;
}
.el-step__line {
  top: 10px;
}

/* ************************************* */
.order-main {
  background-color: #f5f5f5;
}
.main-title {
  width: 1200px;
  height: 40px;
  margin: 10px auto;
  background-color: #fff;

  display: grid;
  align-items: center;
  /* grid-template-columns: repeat(6, 2fr); */
  grid-template-columns: 1fr 3fr 1fr 1fr 1fr 1fr;
}
.main-items {
  width: 1200px;
  margin: 10px auto;
  background-color: #fff;
}
.grid-item {
  /* border: blue solid 2px; */
  text-align: left;
  color: #a4a4a4;
  font-size: 12px;
  line-height: 40px;
  padding-left: 40px;
  display: flex;
  align-items: center;
}
.main-item {
  width: 100%;
  height: 128px;
  margin: 10px auto;
  background-color: #fff;

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 3fr 1fr 1fr 1fr 1fr;
}
.grid-item img {
  width: 100px;
  height: 100px;
}

/* ==================================== */
.main-bottom {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.bottom-right {
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
}
</style>