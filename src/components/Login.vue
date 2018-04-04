<template>
    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem prop="username">
            <Input type="text" v-model="formInline.username" placeholder="用户名">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="密码">
                <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
        </FormItem>
    </Form>
</template>
<script>
    export default {
        data () {
            return {
                logining: false,
                formInline: {
                    username: '',
                    password: ''
                },
                ruleInline: {
                    username: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    ]
                }
            }
        },
        mounted(){
           this.checkLogin() //
        },
        methods: {
            handleSubmit(name) {
                let _this = this
                _this.$refs[name].validate((valid) => {
                    if (valid) {
                        _this.logining = true
                        let url = _this.HOST + "/member/login"
                        _this.$axios.post(url,_this.formInline)
                        .then(res => {
                        _this.logining = false
                            if(res.data.status !== 0){
                                _this.$Message.error('登录失败')
                                _this.Cookies.set('isLogin', false)
                            }else{
                                if(_this.$route.query.redirect) {
                                    _this.$router.push(_this.$route.query.redirect);
                                } else {
                                    _this.Cookies.set('isLogin', true)
                                    _this.$Message.success('登录成功')
                                    _this.$router.push('/main') //跳转用户中心页
                                }
                                

                            }

                        })
                        .catch(error => {
                            console.log(error)
                        })

                       
                    } else {
                        _this.Cookies.set('isLogin', false)
                        this.$Message.error('登录失败');
                    }
                })
            },
            checkLogin(){
                let _this = this
                let url = _this.HOST + "/member/check"
                    _this.$axios.post(url).then(res => {
                    if(res.data.status == 0){
                    this.$router.push('/main') //跳转用户登录
                    }
                }).catch(error => {
                    console.log(error)
                })

            }
        }
    }
</script>
