<template>
  <div class="Itemlist">
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
      <img :src="itemList[0].imgsrc" class="image" :alt="itemList[0].alt" />
      <figcaption class="card-context">
        <div class="title">
          {{ itemList[0].title }}
        </div>
        <p class="desc">
          {{ itemList[0].desc }}
        </p>
        <p class="price">${{ itemList[0].price }}</p>
      </figcaption>

      <!-- <div style="padding: 14px">
          <span>{{ itemList[0].title }}</span>
          <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time>
            <el-button type="text" class="button">操作按钮</el-button>
          </div>
        </div> -->
      <!-- </figure> -->
    </el-card>

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
      <img :src="itemList[0].imgsrc" class="image" :alt="itemList[0].alt" />
      <figcaption class="card-context">
        <div class="title">
          {{ itemList[0].title }}
        </div>
        <p class="desc">
          {{ itemList[0].desc }}
        </p>
        <p class="price">${{ itemList[0].price }}</p>
      </figcaption>

      <!-- <div style="padding: 14px">
          <span>{{ itemList[0].title }}</span>
          <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time>
            <el-button type="text" class="button">操作按钮</el-button>
          </div>
        </div> -->
      <!-- </figure> -->
    </el-card>
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
      <img :src="itemList[0].imgsrc" class="image" :alt="itemList[0].alt" />
      <figcaption class="card-context">
        <div class="title">
          {{ itemList[0].title }}
        </div>
        <p class="desc">
          {{ itemList[0].desc }}
        </p>
        <p class="price">${{ itemList[0].price }}</p>
      </figcaption>

      <!-- <div style="padding: 14px">
          <span>{{ itemList[0].title }}</span>
          <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time>
            <el-button type="text" class="button">操作按钮</el-button>
          </div>
        </div> -->
      <!-- </figure> -->
    </el-card>
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
      <img :src="itemList[0].imgsrc" class="image" :alt="itemList[0].alt" />
      <figcaption class="card-context">
        <div class="title">
          {{ itemList[0].title }}
        </div>
        <p class="desc">
          {{ itemList[0].desc }}
        </p>
        <p class="price">${{ itemList[0].price }}</p>
      </figcaption>

      <!-- <div style="padding: 14px">
          <span>{{ itemList[0].title }}</span>
          <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time>
            <el-button type="text" class="button">操作按钮</el-button>
          </div>
        </div> -->
      <!-- </figure> -->
    </el-card>
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
      <img :src="itemList[0].imgsrc" class="image" :alt="itemList[0].alt" />
      <figcaption class="card-context">
        <div class="title">
          {{ itemList[0].title }}
        </div>
        <p class="desc">
          {{ itemList[0].desc }}
        </p>
        <p class="price">${{ itemList[0].price }}</p>
      </figcaption>

      <!-- <div style="padding: 14px">
          <span>{{ itemList[0].title }}</span>
          <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time>
            <el-button type="text" class="button">操作按钮</el-button>
          </div>
        </div> -->
      <!-- </figure> -->
    </el-card>
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
      <img :src="itemList[0].imgsrc" class="image" :alt="itemList[0].alt" />
      <figcaption class="card-context">
        <div class="title">
          {{ itemList[0].title }}
        </div>
        <p class="desc">
          {{ itemList[0].desc }}
        </p>
        <p class="price">${{ itemList[0].price }}</p>
      </figcaption>

      <!-- <div style="padding: 14px">
          <span>{{ itemList[0].title }}</span>
          <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time>
            <el-button type="text" class="button">操作按钮</el-button>
          </div>
        </div> -->
      <!-- </figure> -->
    </el-card>

  </div>
</template>

<script>
export default {
  name: "Itemlist",
  data() {
    return {
      itemList: [
        {
          title: "HUAWEI FreeBuds 4i 真无线耳机",
          desc: "预订享50元优惠  ",
          imgsrc:
            "https://res0.vmallres.com/pimages//product/6941487207756/428_428_A6A30621B8088CBBAF2D831A44CA9E945FEB6E9B64A1E201mp.png",
          alt:
            "【订金预订】HUAWEI FreeBuds 4i 真无线耳机（陶瓷白）主动降噪 通话降噪 环境音透传 10小时连续播放 快充长续航 纯净音质",
          price: "499",
        },
      ],
      currentDate: new Date(),
    };
  },
};
</script>

<style lang="css" scoped>
/* 商品列表部分 +++++++++++++++++++++++++++++start */
.Itemlist {
  width: 1180px;
  
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 230px);
  grid-gap: 12px;
  padding-top: 20px;
  
  max-width: 1200px;
  background-color: #fff;
}

/* 商品列表部分 +++++++++++++++++++++++++++++end */

/* 商品详情部分 +++++++++++++++++++++++++++++ start */
/* .card-context {
} */
.el-card{
  border:none;
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