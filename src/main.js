import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import api from "@/utils/api.js";//公共api
import config from "@/utils/config.js";//公共方法
import GlobalComponents from "@/static/js/index.js";//  全局公共组件注册
import plugins from "@/utils/plugins.js";// 各种插件引入
import 'lib-flexible/flexible'

const app = createApp(App)
app.config.globalProperties.$api = api;
app.config.globalProperties.$config = config;

/** 
 * 页面跳转  
 *    如果设置data-url 使用路由地址跳转 （this.$route.query接受参数，地址栏上可见参数）
 *     params 是可以
 * */
app.config.globalProperties.$skip = (e,params)=>{
  var dataset = e.target.dataset;
  var url = dataset.url;
  if(!url)return;
  router.push({path:url,query:params?params:''});
}

app.use(GlobalComponents);
app.use(plugins);
app.use(router);
app.mount("#app");

