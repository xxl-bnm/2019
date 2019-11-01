// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from "./store";
import axios from 'axios';
import App from './App';
import '../static/common.css';
Vue.config.productionTip = false
Vue.prototype.$axios =axios;
Vue.use(ElementUI);
//axios.defaults.headers.common['Authentication-Token'] = window.localStorage.getItem("tokename");
      // 添加请求拦截器// 在发送请求之前做些什么，配置请求头
    //   axios.interceptors.request.use(function (config) {
    //     let token = window.localStorage.getItem("tokename")
    //     if(token){
    //          config.headers.common['Authorization'] = token;
    //          return config;
    //     }
    // }, function (error) {
    //     // 对请求错误做些什么
    //     return Promise.reject(error);
    // });

    // 添加响应拦截器,在响应之前做些事情// 对响应数据后做点什么(返回对应接口的数据)一般对状态码做操作
    // axios.interceptors.response.use(function (response) {
    //     if(response.status == 401){
    //         //跳转login
    //     }else{
    //         console.log('success')
    //     }
    //     return response;
    // }, function (error) {
    //     // 对响应错误做点什么
    //     return Promise.reject(error);
    // });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//简写版：router
  store,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
