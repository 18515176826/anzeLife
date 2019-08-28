import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/anze/login'
import Enroll from '@/anze/enroll'
import HomePage from '@/anze/homePage'
import postMessage from '@/anze/post-message'
import selectContent from '@/anze/select-content'
import myMge from '@/anze/myMge'
import releaseForm from '@/anze/childCom/releaseForm'

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
    {
      path:'/anze/selectContent',
      name: 'selectContent',
      component: selectContent
    },
    {
      path:'/anze/myMge',
      name: 'myMge',
      component: myMge
    },
    {
      path:'/anze/releaseForm',
      name: 'releaseForm',
      component: releaseForm
    },
  ]
})
