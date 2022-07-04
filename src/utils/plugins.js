
import Vant from 'vant';
import 'vant/lib/index.css';
import { Lazyload } from 'vant';//图片懒加载
import Vconsole from 'vconsole'

// v-lazy 单独配置 自定义加载以及错误图片
// computed:{
//   LazyloadImg(){
//     return (img)=>{
//       return {
//         src: img,
//         error: require('@/assets/images/health.png'),
//         loading: require('@/assets/images/health.png'),
//       }
//     }
//   }
// },

export default function install(app){
  app.use(Vant);
  
  //Vconsole导致  A plugin must either be a function or an object with an "install" function.
  if (process.env.NODE_ENV == 'dev') {
    let vConsole = new Vconsole()
    app.use(vConsole)
  }
  
  app.use(Lazyload, {
    lazyComponent: true,
    error: require('@/static/images/lazy/error.png'),
    loading: require('@/static/images/lazy/default.png'),
    preLoad: 1,
    attempt: 1,
  });
}