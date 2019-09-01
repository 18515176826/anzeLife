import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/anze/login'
import Enroll from '@/anze/enroll'
import HomePage from '@/anze/homePage'
import postMessage from '@/anze/post-message'
import selectContent from '@/anze/select-content'
import myMge from '@/anze/myMge'
import releaseForm from '@/anze/childCom/releaseForm'
import editionContains from '@/anze/childCom/edition-contains'
import contentDetails from '@/anze/childCom/content-details'
import IRelease from '@/anze/childCom/I-release'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta: {keepAlive: false}
    },
    {
      path: '/anze/Enroll',
      name: 'enroll',
      component: Enroll,
      meta: {keepAlive: false}
    },
    {
      path: '/anze/homePage',
      name: 'homePage',
      component: HomePage,
      meta: {keepAlive: false}
    },
    {
      path:'/anze/postMessage',
      name: 'postMessage',
      component: postMessage,
      meta: {keepAlive: false}
    },
    {
      path:'/anze/selectContent',
      name: 'selectContent',
      component: selectContent,
      meta: {keepAlive: false}
    },
    {
      path:'/anze/myMge',
      name: 'myMge',
      component: myMge,
      meta: {keepAlive: false}
    },
    {
      path:'/anze/releaseForm',
      name: 'releaseForm',
      component: releaseForm,
      meta: {keepAlive: false}
    },
    {
      path:'/anze/editionContains',
      name: 'editionContains',
      component: editionContains,
      meta: {keepAlive: false}
    },
    {
      path:'/anze/contentDetails',
      name: 'contentDetails',
      component: contentDetails,
      meta: {}
    },
    {
      path:'/anze/IRelease',
      name: 'IRelease',
      component: IRelease,
      meta: {}
    },
  ]
})
