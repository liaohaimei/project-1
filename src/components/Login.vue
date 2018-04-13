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
            <Button type="primary" @click="login('formInline')">登录</Button>
        </FormItem>
    </Form>
</template>
<script>
import {mapState} from 'vuex'
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
        computed:{
            user(){
                let localStorage = window.localStorage.getItem('isLogin')
                if(localStorage){
                  return JSON.parse(localStorage).data.name
                }
            }
        },
        //进入页面时
        created() {
            if(this.user){
              this.$router.push('/main')  
            }
        },
        methods: {
            login(name){
                let _this = this
                _this.$refs[name].validate((valid) => {
                    if (valid) {
                        let url = _this.HOST + "/member/login"
                        _this.$axios.post(url,_this.formInline)
                        .then(res => {
                            //console.log(res.data)
                            if(res.data.status == 0){
                                _this.$Message.success('登录成功')
                                _this.$store.dispatch({
                                    type: 'switch_dialog',
                                    isLogin:res.data
                                })
                                _this.username=''
                                _this.password=''
                                _this.$router.push('/main')
                            }else{
                                _this.$Message.error('登录失败')
                                _this.username=''
                                _this.password=''

                            }

                        })
                        .catch(error => {
                            console.log(error)
                        })

                       
                    } else {
                        _this.$Message.error('登录失败');
                    }
                })
            }
            
        }
    }
</script>
