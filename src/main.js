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
import store from './store'
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
	store,//使用store
	render: h => h(App),
	//监听路由检查登录
	watch:{
		//"$route" : 'checkLogin'
	},
	//进入页面时
	created() {
	 this.checkLogin();
	},
	methods:{
		checkLogin(){
		    let _this = this
		    let url = _this.HOST + "/member/check"
		        _this.$axios.post(url).then(res => {
		        if(res.data.status == 0){
		        	
		        }else{
		        	this.$router.push('/login') //跳转用户登录
		        }
		    }).catch(error => {
		        console.log(error)
		    })

		}
	}
})
