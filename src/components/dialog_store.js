export default {
    state:{
    	isLogin:'',
        show:false,
        id:''
    },
    getters:{
        not_show(state){//这里的state对应着上面这个state
            return !state.show;
        }
    },
    mutations:{
        switch_dialog(state,val){//这里的state对应着上面这个state
            state.show = state.show?false:true
            //你还可以在这里执行其他的操作改变state
            state.isLogin = JSON.stringify(val.isLogin)
            //本地存存储登录信息
            try{
                window.localStorage.setItem('isLogin',state.isLogin)
            }catch(oException){
                if(oException.name == 'QuotaExceededError'){
                    console.log('已经超出本地存储限定大小！')
                    // 可进行超出限定大小之后的操作，如下面可以先清除记录，再次保存
                    localStorage.clear()
                    localStorage.setItem(key,value)
                }     
            }
            //console.log(val.isLogin)

        },
        userlist_dialog(state,val){
            state.id = val.parm
        }
    },
    actions:{
        switch_dialog(context,parm){//这里的context和我们使用的$store拥有相同的对象和方法
            // console.log(this.state.show)
             console.log(arguments)

            context.commit('switch_dialog',parm)
            //你还可以在这里触发其他的mutations方法
        },
        userlist_dialog(context,parm){

            context.commit('userlist_dialog',parm)
        }
    }
}