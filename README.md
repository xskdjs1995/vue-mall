# vue-mall
### 启动的话使用npm run start 
会先启动 json-server 然后再启动 项目
concurrently 这个npm包没有写到packagejson 如果报错 全局安装这个包
npm install -g concurrently

作为学习vue的练手小项目demo

首先先使用 json-server 和mockjs模拟api数据
vue + router + vuex + element 实现一个商城的简易版 主要样式参照华为商城

============================================== 临时笔记

自定义组件绑定原生事件 使用.native修饰  如
@click.native="toDetailPage()"
https://blog.csdn.net/Amanda_wmy/article/details/83857624

-----------------
导航守卫中可以添加 跳转时回到顶部的操作
router.afterEach(() => {
  window.scrollTo(0,0);
})
------------------

store 的数据在刷新的时候会消失导致页面没有数据显示空白的情况
使用 sessionStorage.setItem("键名",值)  保存到浏览器本地 ( 或者localStorage ) 

1 可以在根组件写一次   或者每个组件都写更灵活 适用于路由跳转后刷新的情况
首先 使用 window.addEvenListener("beforeunload",()=>{
    先清除数据避免数据缓存问题
    监听浏览器的刷新 在将要刷新的时候将数据 存到本地缓存 
})
然后在组件的created 生命周期中将数据取出来
先判断数据是否存在  IF sessionStorage.getItem("XXX") foo = JSON.parse(sessionStorage.getItem())


1、localStorage.setItem(key,value)  保存数据

2、localStorage.getItem(key)           获取数据

3、localStorage.removeItem(key)    删除数据

4、localStorage.clear();                    删除全部数据

https://blog.csdn.net/lanseguhui/article/details/109636940
-------------------
监听store数据变化
异步请求数据 如果mutations如果没用响应式的数据改变不会触发渲染
watch: {
    '$store.state.name': function () {
      //将数据传递给组件data
    }
  }
-------------
 // 深拷贝数据
       let nodelist =  JSON.parse(JSON.stringify(e))
      //   let[lastnode,...rest]=nodelist.reverse()
      //   this.$router.push({ path: `/detail/${lastnode}` });
      //   console.log(rest);

-------------
