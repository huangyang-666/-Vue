import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from './router'

import axios from 'axios'
Vue.prototype.axios = axios;

import Vuex from 'vuex'

import store from "./store";

//路由跳转前
router.beforeEach((to, from, next) => {
  let isLogin = sessionStorage.getItem('isLogin');

  //注销
  if (to.path === '/logout'){
    sessionStorage.clear();
    next({path:'/login'});
  }else if (to.path === '/login'){
    if (isLogin != null){
      next({path:'/main'})
    }
  }else if (isLogin == null){
    next({path:'/login'})
  }

  next();
})

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(ElementUI);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
