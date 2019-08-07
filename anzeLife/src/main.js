// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import axios from 'axios'
import 'vant/lib/index.css';
import './lib/js/restSice.js'
import './lib/css/reset.css'
import './lib/iconfont/iconfont.css'



Vue.use(Vant)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.Qs = require('qs');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
