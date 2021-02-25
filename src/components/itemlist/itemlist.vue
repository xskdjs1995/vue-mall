<template>
  <div class="Itemlist">
    <!-- 可以添加其他布局 slot扩展 -->
    <item v-for="item in itemList" :key="item.title" :item="item"> </item>
  </div>
</template>

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
    // this.itemList = this.$store.state.itemList
  },
   watch: {
    '$store.state.itemList': function () {
      this.itemList = this.$store.state.itemList
    }
  }
 
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