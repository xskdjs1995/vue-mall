<template>
  <div class="">
    <button @click="handeclick">123123</button>
    <!-- 父子组件之间传值的方法 -->
    <div class="fragment">
      <div>这是父组件 来自子组件的{{ datafromfather }}</div>
      <el-checkbox
        :indeterminate="isIndeterminate"
        v-model="checkAll"
        @change="handleCheckAllChange"
        >全选</el-checkbox
      >
      <el-checkbox-group
        v-model="checkedCities"
        @change="handleCheckedCitiesChange"
      >
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{
          city
        }}</el-checkbox>
      </el-checkbox-group>
      <children foo="我是通过prop传递的" @event="getParent"></children>
      <div>计算属性: "{{ add }}"</div>
    </div>
    <!-- 路由跳转的相关方法 -->
    <div class="other">
      <router-link to="/cart" tag="el-button">路由test</router-link>
      <el-button
        @click="
          () => {
            this.$router.push('/cart');
          }
        "
      >
        代码路由跳转
      </el-button>
      <router-link :to="'/cart/' + id" tag="el-button">params</router-link>
      <router-link :to="{ path: '/cart/', query: { id: '2' } }" tag="el-button">
        query
      </router-link>
    </div>

    <el-button @click="handleStore">直接触发mutation</el-button>
    <el-button @click="handlebyaction">通过action触发mutation</el-button>
    <div>{{ this.$store.getters.getfullName }}</div>
  </div>
</template>

<script>
import Children from "./Children";
const cityOptions = ["上海", "北京", "广州", "深圳"];
export default {
  name: "Demo",
  data() {
    return {
      result:[],
      smallSon:{},
      tree: [
        {
          id: 1,
          name: "parent",
          children: [
            {
              id:2,
              name: "child",
              children: [{
                id:3,
                name:"grandson",
                children:[],
                leaf:true
              }],
            },
          ],
        },
        {
          id:4,
          name:'妈',
          children:[
            {
              id:5,
              name:'child2',
              children:[],
              leaf:true
            }
          ]
        }
      ],
      id: 2,
      num: 6,
      datafromfather: "222",

      checkAll: false,
      checkedCities: ["上海", "北京"],
      cities: cityOptions,
      isIndeterminate: true,
    };
  },
  computed: {
    add: function () {
      const num = this.num;

      return num * num;
    },
  },
  components: {
    Children,
  },
  methods: {

    getLeaf(data){
      console.log(data)
      data.forEach(element => {
        if (element.children.length===0) {
          console.log(element.children)
          this.result.push(element.name)
        } else {
          this.getLeaf(element.children)
        }
      });
    },
    addpath(data , parent){
      console.log(data)
      data.forEach(element => {
        // let path =parent ? parent.concat(element.name):element.name
        let path=[]
        if (parent) {
          path = [...parent,element.name]
        }else{
          path = [element.name]
        }
       
        element.path = path
        if (element.children.length!==0) {
          console.log(element.children)
          this.addpath(element.children,path)
        }
      });
    },

    getSmallson(data){
      if (data.children.length===0) {
        this.smallSon = data
      } else {
        this.getSmallson(data.children[0])
      }
    },

    handeclick(){
      console.log(this.tree)
      this.getLeaf(this.tree)
      console.log(this.result)
      this.getSmallson(this.tree[0])
      console.log(this.smallSon);
      console.log(this.addpath(this.tree,null))
       console.log(this.tree)
    },


    getParent: function (e) {
      console.log(e);
      this.num = this.num + 1;
      this.datafromfather = e + this.num;
    },
    handleStore() {
      console.log("点击按钮直接在触发mutation");
      this.$store.commit("test", 1);

      console.log("对象风格提交");
      this.$store.commit({
        type: "test",
        payload: 1,
      });
    },
    handlebyaction() {
      console.log("点击按钮通过dispatch -> action  ->  commit ->  mutation");
      this.$store.dispatch("testAction", { name: "shu" });
    },
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
  },
};
</script>

<style lang="css" scoped>
.fragment {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 500px;
  background-color: rgb(190, 180, 180);
}
</style>