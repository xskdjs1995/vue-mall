<template>
  <el-card
    shadow="hover"
    :body-style="{
      background: '#f9f9f9',
      width: '230px',
      height: '290px',
      padding: 0,
    }"
  >
    <!-- <figure> -->
    <img :src="item.imgsrc" class="image" :alt="item.alt" />
    <figcaption class="card-context">
      <div class="title">
        {{ item.title }}
      </div>
      <p class="desc">
        {{ item.desc }}
      </p>
      <p class="price">${{ item.price }}</p>
    </figcaption>
  </el-card>
</template>

<script>
export default {
  name: "item",
  props: {
    item: {
      title: String,
      desc: String,
      imgsrc: String,
      alt: String,
      price: String,
    },
  },
  data() {
    return {};
  },

};
</script>

<style lang="css" scoped>
/* 商品详情部分 +++++++++++++++++++++++++++++ start */

.el-card {
  border: none;
  border-radius: 10px;
}
.image {
  /* display: inline-block; */
  /* width: 100%;
    height: 100%; */
  width: 150px;
  height: 150px;
  margin: 35px auto 0;
}
.title {
  font-size: 14px;
  font-weight: 400;
  margin: 12px auto 0;
}
.desc {
  color: #777;
  line-height: 18px;
  padding: 0 10px;
  margin: 2px 20px 7px;
  font-size: 12px;
  font-weight: 400;
}
.price {
  font-size: 14px;
  font-weight: 400;
  color: #d0021b;
  line-height: 21px;
  /* margin-bottom: 0; */
}
/* 商品详情部分 ++++++++++++++++++++++++++++++ end */
</style>