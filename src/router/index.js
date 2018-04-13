import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Login from 'components/Login'
import Investigation from 'components/investigation/Investigation'
import TestMusic from 'components/testmusic/TestMusic'
import TestMovie from 'components/testmovie/TestMovie'
import UserGroup from 'components/user/UserGroup'
import UserList from 'components/user/UserList'
import Cookies from 'js-cookie'
import store from '@/store/index'
Vue.use(Router)
const routes = [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      meta:{requireAuth: true },
      component: Main,
      children: [//子路由
        //{ path: '', redirect: 'Investigation' },//默认
        { path: 'investigation',name: 'investigation', component: Investigation, meta:{requireAuth: true } },//
        { path: 'testMusic',name: 'testMusic', component: TestMusic, meta:{requireAuth: true } },//
        { path: 'testMovie',name: 'testMovie', component: TestMovie, meta:{requireAuth: true } },//
        { path: 'usergroup',name: 'usergroup', component: UserGroup, meta:{requireAuth: true } },//
        { path: 'userlist',name: 'userlist', component: UserList, meta:{requireAuth: true } },//

      ]
    }
  ]


const router = new Router({
  routes
})

router.beforeEach((to,from,next) => {
let localStorage = window.localStorage.getItem('isLogin')
let isLogin = false
if(localStorage){
  isLogin = JSON.parse(localStorage).status===0 ? true : false
}
  let logined_in = false
  if(!logined_in && to.meta.requireAuth){
    if(isLogin){
      next()
    }else{
      next('/login')
    }
  }else{
    next()
  }
})


export default router
