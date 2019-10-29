// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'//引入router
import store from "./store";
import axios from 'axios';
import App from './App';
import '../static/common.css';
Vue.config.productionTip = false
Vue.prototype.$axios =axios;
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//简写版：router
  store,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
