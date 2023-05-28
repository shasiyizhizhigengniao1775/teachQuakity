/*
 * @Description: 
 * @Autor: 夏晓雪
 * @Date: 2023-04-09 17:16:47
 * @LastEditors: 夏晓雪
 * @LastEditTime: 2023-04-14 19:38:06
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//饿了么组件，全局引入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, { size: 'medium', zIndex: 3000 });
//公共样式
import './assets/css/global.scss';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
