import Vue from 'vue'
import VueRouter from 'vue-router'


//懒加载组件
 const Home = () => import('@/pages/home/Home')
 const Cart = () => import('@/pages/cart/Cart')
 const Detail = () => import('@/pages/detail/Detail')
 const Demo = ()=>import('components/demo/Demo')
 const Goods = ()=>import('@/pages/goods/Goods')
 const Login = ()=>import('@/pages/login/Login')
 
// 1.安装插件
Vue.use(VueRouter)

// 2.创建router
const routes = [
  {
    path: '',
    redirect: '/login'
  },
  // {
  //   path: '',
  //   redirect: '/home'
  // },
  {
    path: '/login',
    component: Login,
    meta:[1,2,3]
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart/:id',
    component: Cart,
    props: true
  },
  {
    path: '/cart',
    component: Cart,
    props: true
  },
  {
    path: '/detail',
    component: Detail,
    props: true
  },
  {
    path: '/detail/:classid',
    component: Detail,
    props: true
  },{
    path: '/demo',
    component: Demo,
    props: true
  },{
    path: '/goods',
    component: Goods,
    props: true
  }

  //   {
//     path: '/category',
//     component: Category
//   },
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
router.beforeEach((to, from, next)=>{
  console.log(to);
  console.log(from);
  next();
})
// 路由守卫相当于拦截器
router.afterEach(() => {

  window.scrollTo(0,0);
})

export default router