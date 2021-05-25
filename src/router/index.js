import Vue from 'vue'
import Router from 'vue-router'

import Login from "../views/Login";
import Home from "../views/Home";
import NotFound from "../views/error/NotFound"

import Page0 from '../views/Operate/Page0'
import Home1 from '../views/user/Home1'
import Page1 from '../views/Operate/Page1'
import Page2 from '../views/Operate/Page2'
import Page3 from '../views/Operate/Page3'
import Page4 from '../views/Operate/Page4'

Vue.use(Router);

export default new Router({
  //去掉/#哈希模式->路由模式
  mode:'history',
  routes: [
    {
      //登录页
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      //首页
      path: '/Home',
      name: 'Home',
      component: Home,
      children:[
        {
          //图片首页
          path:'/home1',
          name: 'Home1',
          component: Home1
        },
        {
          //全部图片
          path:'/Page0',
          name: 'Page0',
          component:Page0
        },
        {
          //图片上传
          path:'/upload',
          name: 'Page1',
          component: Page1
        },
        {
          //相册类别
          path: '/type',
          name: 'Page2',
          component: Page2
        },
        {
          //人体识别
          path: '/recognition',
          name: 'Page3',
          component: Page3
        },
        {
          //精彩时刻
          path: '/moment',
          name: 'Page4',
          component: Page4
        },
      ]
    },

    {
      //  回到的首页
      path: '/goMain/:username',
      //重定向
      redirect:'/main/:username'
    },
    {
      path: '*',
      component: NotFound
    },
  ]
})

