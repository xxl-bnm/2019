import Vue from 'vue'
import Router from 'vue-router'//引入router对象
import HelloWorld from '@/components/HelloWorld'
import Index from '../view/index'

Vue.use(Router)
//暴露路由规则
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    }
  ]
})

