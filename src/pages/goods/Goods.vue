<template>
  <div class="goods">
    <!-- search 条件表单   start-->
    <div class="search"></div>
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
      itemList: [{}],
    };
  },
  methods: {
    toDetailPage(item) {
      console.log(item);
      this.$router.push({ path: "detail", query: { ...item } });
    },
  },
  computed: {
    itemListByClass: function () {
      return this.itemList.filter((e) => e.classId === "b");
    },
  },

  created() {
    //在页面加载时读取sessionStorage里的状态信息
    console.log(sessionStorage.getItem("store"));
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
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
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