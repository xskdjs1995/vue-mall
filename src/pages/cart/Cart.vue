<template>
  <div class="cart">
    购物车商品id为{{idfromroute}}------this.$route.params.id
    购物车商品id为{{id}}------from props
    {{this.$route.query.id}}
  </div>
</template>

<script>
export default {
  name: 'Cart',
  props:['id'],
  data() { 
    return {
      idfromroute:this.$route.params.id
    }
  },
  created:function(){
    // console.log(id);
  }
 }
</script>

<style lang="css" scoped>
  .cart{

  }
</style>