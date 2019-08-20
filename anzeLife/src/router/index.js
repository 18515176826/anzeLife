import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/anze/login'
import Enroll from '@/anze/enroll'
import HomePage from '@/anze/homePage'
import postMessage from '@/anze/post-message'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/anze/Enroll',
      name: 'enroll',
      component: Enroll
    },
    {
      path: '/anze/homePage',
      name: 'homePage',
      component: HomePage,
    },
    {
      path:'/anze/postMessage',
      name: 'postMessage',
      component: postMessage
    },
  ]
})
