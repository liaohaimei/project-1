<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-logo{
        width: 100%; text-align: center; padding: 10px 0;
    }
    .layout-logo img{ max-width: 98%; }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
    .sidebar-nav{ background-color: #495060; width: 100%; color:#fff; }
    .sidebar-nav>ul li{ padding: 14px 24px; position: relative; }
</style>
<template>
    <div class="layout">
        <Layout>
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
                <div class="layout-logo"><img :src="logoimg"/></div>

                <div class="sidebar-nav">
                    <ul>
                        <li><Icon type="ios-navigate"></Icon><span>预警</span>
                            <ul>
                                <li>电话预警</li>
                                <li>通缉令/银行预警</li>
                            </ul>
                        </li>
                        <li><Icon type="ios-navigate"></Icon><span>案件协查</span>
                            <ul>
                                <router-link tag="li" class="ivu-menu-item" active-class="ivu-menu-item-active ivu-menu-item-selected" name="4-1" :to="{name:'investigation'}">案件协查</router-link>
                                <router-link tag="li" class="ivu-menu-item" active-class="ivu-menu-item-active ivu-menu-item-selected" name="4-2" :to="{name:'testMusic'}">Music</router-link>
                                <router-link tag="li" class="ivu-menu-item" active-class="ivu-menu-item-active ivu-menu-item-selected" name="4-2" :to="{name:'testMovie'}">Movie</router-link>
                            </ul>
                        </li>
                    </ul>
                </div>
                <Menu active-name="4-1" theme="dark" width="auto" :class="menuitemClasses"  :open-names="['4']">
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            <span>预警</span>
                        </template>
                        <MenuItem name="1-1">电话预警</MenuItem>
                        <MenuItem name="1-2">通缉令/银行预警</MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-keypad"></Icon>
                            <span>查询</span>
                        </template>
                        <MenuItem name="2-1">话单查询</MenuItem>
                        <MenuItem name="2-2">APK查询</MenuItem>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-analytics"></Icon>
                            <span>窝点</span>
                        </template>
                        <MenuItem name="3-1">窝点分布</MenuItem>
                        <MenuItem name="3-2">窝点话单查询</MenuItem>
                    </Submenu>
                    <Submenu name="4">
                        <template slot="title">
                            <Icon type="ios-analytics"></Icon>
                            <span>案件协查</span>
                        </template>
                        <router-link tag="li" class="ivu-menu-item" active-class="ivu-menu-item-active ivu-menu-item-selected" name="4-1" :to="{name:'investigation'}">案件协查</router-link>
                        <router-link tag="li" class="ivu-menu-item" active-class="ivu-menu-item-active ivu-menu-item-selected" name="4-2" :to="{name:'testMusic'}">Music</router-link>
                        <router-link tag="li" class="ivu-menu-item" active-class="ivu-menu-item-active ivu-menu-item-selected" name="4-2" :to="{name:'testMovie'}">Movie</router-link>
                    </Submenu>
                    <Submenu name="5">
                        <template slot="title">
                            <Icon type="ios-analytics"></Icon>
                            <span>管理</span>
                        </template>
                        <MenuItem name="5-1">用户管理</MenuItem>
                        <MenuItem name="5-2">通缉令预警管理</MenuItem>
                        <MenuItem name="5-3">短信管理</MenuItem>
                        <MenuItem name="5-4">用户配置</MenuItem>
                    </Submenu>
                </Menu>
            </Sider>
            <Layout>
                <Header :style="{padding: 0}" class="layout-header-bar">
                    <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '13px 20px 0'}" type="navicon-round" size="24"></Icon>
                    <Avatar icon="person" />
                    <Dropdown>
                            <a href="javascript:void(0)">
                                {{username}}
                                <Icon type="arrow-down-b"></Icon>
                            </a>
                            <DropdownMenu slot="list">
                                <DropdownItem @click.native="loginOut">退出登录</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                </Header>
                <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
                    <router-view></router-view>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script>
import logoimg from 'common/image/logo.png'
    export default {
        data () {
            return {
                isCollapsed: false,
                //logoimg:require('../common/image/logo.png')
                logoimg:logoimg,
                username:false
            }
        },
        mounted(){
           this.username = this.loginCheck() //获取登录用户名
        },
        computed: {
            rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        methods: {
            collapsedSider () {
                this.$refs.side1.toggleCollapse();
            },
            loginCheck(){ //检测用户登录状态
                let _this = this
                _this.username = false
                let url = _this.HOST + "/member/check"
                    _this.$axios.post(url).then(res => {
                    _this.username = res.data.data.name
                }).catch(error => {
                    console.log(error)
                })
                return _this.username
            },
            loginOut(){//退出登录
                let _this = this
                let url = _this.HOST + "/member/logout"
                    _this.$axios.post(url).then(res => {
                    this.$router.push('/login') //跳转用户登录
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }
</script>
