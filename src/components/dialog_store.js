export default {
    state:{
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
            state.id = val.parm
            console.log(state.id)

        }
    },
    actions:{
        switch_dialog(context,parm){//这里的context和我们使用的$store拥有相同的对象和方法
            console.log(this.state.show)
            console.log(arguments)

            context.commit('switch_dialog',parm)
            //你还可以在这里触发其他的mutations方法
        },
    }
}