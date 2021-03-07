<template>
  <div class="cart">
    <div class="header">
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
          <div class="main-item" v-for="item in items" :key="item">
            <div class="grid-item">
              <el-checkbox :label="item">{{ item }}</el-checkbox>
            </div>
            <div class="grid-item">商品</div>
            <div class="grid-item">单价</div>
            <div class="grid-item">数量</div>
            <div class="grid-item">小计</div>
            <div class="grid-item">操作</div>
          </div>
        </el-checkbox-group>
      </div>
    </div>

    <!-- 购物车商品id为{{idfromroute}}------this.$route.params.id
    购物车商品id为{{id}}------from props
    {{this.$route.query.id}} -->
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: ["id"],
  data() {
    return {
      // idfromroute:this.$route.params.id
      checkAll: false,
      checkedItems: ["上海", "北京"],
      items: ["上海", "北京", "广州", "深圳"],
      isIndeterminate: true,
    };
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedItems = val ? this.items : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      console.log(value);
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.items.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.items.length;
    },
  },
  created() {},
};
</script>

<style lang="css" >
.cart {
  min-width: 1200px;
}
.header {
  width: 1200px;
  margin: 0 auto;
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
</style>