

import Vue from 'vue'

import Router from 'vue-router'//引入router对象

import HelloWorld from '@/components/HelloWorld'


import Login from '../view/Login'
import Users from '../view/Users'


import AddUsers from '../view/AddUsers'
import SearchUsers from '../view/SearchUsers'

import Oder from '../view/Oder'
import OderSearch from '../view/OderSearch'



Vue.use(Router)
//暴露路由规则
export default new Router({
  routes: [
    {
      path: '/HelloWord',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        //商品分类列表
        {
          path: '/prolist',
          name: 'Prolist',
          component: () => import('../view/Prolist')
        },
        //商品信息
        {
          path: '/prolists',
          name: 'Prolists',
          component: () => import('../view/Prolists')
        },
        //添加分类
        {
          path: '/procat',
          name: 'Procat',
          component: () => import('../view/Procat')
        },
        //添加商品
        {
          path: '/addprolist',
          name: 'AddProlist',
          component: () => import('../view/AddProlist')
        },
        //搜索
        {
          path: '/search',
          name: 'Searchpro',
          component: () => import('../view/Searchpro')
        },
        {
          path: '/searchs',
          name: 'Searchpros',
          component: () => import('../view/Searchpros')
        },


        {
          path: '/Users',
          name: 'Users',
          component: Users,
        },

        {
          path: '/AddUsers',
          name: 'AddUsers',
          component: AddUsers
        },
        {
          path: '/SearchUsers',
          name: 'SearchUsers',
          component: SearchUsers
        },

        {
          path: '/Oder',
          name: 'Oder',
          component: Oder
        },
        {
          path: '/OderSearch',
          name: 'OderSearch',
          component: OderSearch
        }


      ]

    },
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})

