<template>
  <div class="Itemlist">
    <!-- 可以添加其他布局 slot扩展 -->
    <item @click.native="toDetailPage(item)" v-for="item in itemList" :key="item.title" :item="item" > </item>
  </div>
</template>e

<script>
import item from "@/components/itemlist/item";
export default {
  name: "Itemlist",
  components: { item },
  data() {
    return {
      itemList: [{}],
    };
  },
 methods: {
   toDetailPage(item){
     console.log(item);
    this.$router.push({ path: 'detail', query:{...item}})
   }
 },
  created() {
    // 数据在home页面dispatch  然后在

    /**
     * 1数据在home页面dispatch  
     * 2 action axios 处理并 commit  
     *      axios返回的数据是由headers status data 组成的
     * 3 mutation 修改数据
     * 4 页面通过 watch 监视数据的变化 
     */
    // this.$store.dispatch("getItemListAction", this.payload);
    this.itemList = this.$store.state.itemList
  },
  // TODO 记录  当store中使用响应式的方式修改数据 可以直接在created中获得数据
  // 否则用下面的watch的方式监听数据
  //  watch: {
  //   '$store.state.itemList': function () {
  //     this.itemList = this.$store.state.itemList
  //   }
  // }
 
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

</style>