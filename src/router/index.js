import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Login from 'components/Login'
import Investigation from 'components/investigation/Investigation'
import TestMusic from 'components/testmusic/TestMusic'
import TestMovie from 'components/testmovie/TestMovie'
import Usergroup from 'components/user/usergroup'
import Cookies from 'js-cookie'
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
        { path: 'usergroup',name: 'usergroup', component: Usergroup, meta:{requireAuth: true } },//

      ]
    }
  ]


const router = new Router({
  routes
})


router.beforeEach((to,from,next) => {

  let isLogin = Cookies.get('isLogin')=='true' ? true : false
  let logined_in = false
  if(!logined_in && to.meta.requireAuth){
    console.log(isLogin)
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
