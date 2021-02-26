<template>
  <div class="">
    <!-- 父子组件之间传值的方法 -->
    <div class="fragment">
      <div>这是父组件 
        来自子组件的{{datafromfather}}
      </div>
      <children foo='我是通过prop传递的' @event="getParent"></children>
       <div>计算属性: "{{ add }}"</div>
     
    </div>
    <!-- 路由跳转的相关方法 -->
    <div class="other">
        <router-link to="/cart" tag="el-button">路由test</router-link>
        <el-button @click=" () => {  this.$router.push('/cart');  } " >
          代码路由跳转
          </el-button >
        <router-link :to="'/cart/' + id" tag="el-button">params</router-link>
        <router-link :to="{ path: '/cart/', query: { id: '2' } }" tag="el-button">
          query
        </router-link>
    </div>

     <el-button @click="handleStore">直接触发mutation</el-button>
    <el-button @click="handlebyaction">通过action触发mutation</el-button>
    <div>{{this.$store.getters.getfullName}}</div>
  </div>
</template>

<script>
import Children from './Children'
export default {
  name: "Demo",
  data() {
    return {
      id: 2,
      num:6,
      datafromfather:'222'
    };
  },
  computed:{
    add:function () {
       const num = this.num

       return num*num
    }
  },
  components:{
    Children
  },
  methods: {
    getParent:function(e){
      console.log(e)
      this.num = this.num +1
      this.datafromfather = e+this.num;
    },handleStore() {
      console.log("点击按钮直接在触发mutation");
      this.$store.commit("test", 1);

      console.log("对象风格提交");
      this.$store.commit({
        type: "test",
        payload: 1,
      });
    },
    handlebyaction(){
      console.log("点击按钮通过dispatch -> action  ->  commit ->  mutation");
      this.$store.dispatch('testAction',{name:'shu'})
    }
  },
};
</script>

<style lang="css" scoped>
.fragment{
  display: flex;
  justify-content:space-between;
  align-items: center;
  height:500px;
  background-color: rgb(190, 180, 180);
}

</style>