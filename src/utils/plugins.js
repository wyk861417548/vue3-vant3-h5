
import Vant from 'vant';
import 'vant/lib/index.css';
import { Lazyload } from 'vant';//图片懒加载
import Vconsole from 'vconsole'

export default function install(app){
  app.use(Vant);
  
  //Vconsole导致  A plugin must either be a function or an object with an "install" function.
  if (process.env.NODE_ENV == 'dev') {
    let vConsole = new Vconsole()
    app.use(vConsole)
  }
  
  app.use(Lazyload, {
    lazyComponent: true,
    error: require('@/assets/images/lazy/error.png'),
    loading: require('@/assets/images/lazy/default.png'),
    preLoad: 1,
    attempt: 1,
  });
}