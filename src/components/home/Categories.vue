<template>
  <div class="categories">
    <el-cascader-panel
      :options="categoryList"
      popper-class="pop-class"
      :popper-append-to-body="false"
      @change="pickName"
    >
    </el-cascader-panel>
  </div>
</template>

<script>
export default {
  name: "Categories",
  props: ["categoryList", "list"],
  data() {
    return {
      classid:1
    };
  },
  watch:{
    categoryList(newdata,old){
      // TODO:  监视数据的变化回调函数
      console.log("new:",newdata);
      console.log('old:',old)
    }
  },
  mounted() {
    console.log("目录的生命周期");
    console.log(this.categoryList);
    console.log(this.list);
  },
  updated() {
    console.log(this.categoryList);
  },
  methods: {
    pickName(e) {
      //TODO:只有在命名路由可以这样不用传递路径只需要传递name 和params
      // this.$router.push({
      //   path: "/detail",
      //   params: {
      //     classid: 1,
      //   },
      // });
      const classid = e.pop()
      console.log(classid)
      this.$router.push({path: `/detail/${classid}`})
      // this.$router.push({path:'detail',params: { userId: '123' }})
      console.log("+++:", e);
    },
  },
};
</script>

<style lang="css" >
.categories .el-cascader-menu__wrap {
  height: 440px;
  max-height: 440px;
}
.el-cascader-panel {
  background-color: #fff;
}
.in-active-path {
  color: crimson !important;
}
.is-active {
  color: crimson !important;
}
.el-cascader-node {
  padding-top: 5px;
}
.el-cascader-node__label {
  text-align: start;
}
/* .pop-class{
   background-color: blue !important;
 } */
</style>