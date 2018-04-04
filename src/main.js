import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import iView from 'iview'
import Axios from 'axios'
import 'common/stylus/index.styl'
import 'iview/dist/styles/iview.css'
import Cookies from 'js-cookie'
import base from './base'
Vue.use(base)
Vue.use(iView)
Vue.prototype.Cookies = Cookies
Vue.prototype.$axios = Axios
Vue.prototype.HOST = '/api'
Vue.config.productionTip = false
fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
