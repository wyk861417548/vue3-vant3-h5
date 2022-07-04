import {createRouter,createWebHashHistory} from 'vue-router'

const router = createRouter({
  // hash模式：createWebHashHistory，history模式：createWebHistory
  history:createWebHashHistory(),
  routes:[
    
    // 栗子
    {path: '/',component: () => import(/* webpackChunkName: "about" */ '@/views/example/tab/index.vue')},
    {path: '/index',component: () => import(/* webpackChunkName: "about" */ '@/views/index.vue')},
    {path: '/Scroll',component: () => import(/* webpackChunkName: "about" */ '@/views/example/Scroll.vue'),meta: {title:"滚动页面",keepAlive:true}},
    {path: '/ScrollDetail',component: () => import(/* webpackChunkName: "about" */ '@/views/example/ScrollDetail.vue'),meta:{title:"滚动详情",isBack:true}},
    {path: '/v-lazy',component: () => import(/* webpackChunkName: "about" */ '@/views/example/v-lazy.vue')},
    {path: '/vant-scroll',component: () => import(/* webpackChunkName: "about" */ '@/views/example/vant-scroll.vue'),meta: {title:"滚动页面",keepAlive:true}},
    // {path: '/swiper',component: () => import(/* webpackChunkName: "about" */ '@/views/example/swiper.vue')}
  ]
})

export default router;