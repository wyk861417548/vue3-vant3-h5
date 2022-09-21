import {createRouter,createWebHashHistory} from 'vue-router'

const router = createRouter({
  // hash模式：createWebHashHistory，history模式：createWebHistory
  history:createWebHashHistory(),
  routes: [
    // 栗子
    {path: '/',component: () => import('@/views/example/tab/index.vue')},
    {path: '/example/index',component: () => import('@/views/example/index.vue')},
    {path: '/example/list',component: () => import('@/views/example/list/list.vue'),meta: {title:"滚动页面-切换",keepAlive:true}},
    {path: '/example/Scroll',component: () => import('@/views/example/list/Scroll.vue'),meta: {title:"滚动页面-单一",keepAlive:true}},
    {path: '/example/list/detail',component: () => import('@/views/example/list/detail.vue'),meta:{title:"滚动详情",isBack:true}},
    {path: '/example/v-lazy',component: () => import('@/views/example/v-lazy.vue')},
    {path: '/example/swiper',component: () => import('@/views/example/swiper.vue')}
  ]
})

// 全局路由守卫
router.beforeEach((to,path,next)=>{
  if(document.querySelector("#Y_loading")){
    document.body.removeChild(document.querySelector("#Y_loading"));
  }
  document.title = to.meta.title?to.meta.title:"模板"
  next();
})


export default router;