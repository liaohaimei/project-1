<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 8px;
    left: 0;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
</style>
<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"><img :src="logoimg"/></div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            用户
                        </MenuItem>
            
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#495060'}">
                    <Menu active-name="4-1" theme="light" width="201px" :open-names="['4']">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                预警
                            </template>
                            <MenuItem name="1-1">电话预警</MenuItem>
                            <MenuItem name="1-2">通缉令/银行预警</MenuItem>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                查询
                            </template>
                            <MenuItem name="2-1">话单查询</MenuItem>
                            <MenuItem name="2-2">APK查询</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                窝点
                            </template>
                            <MenuItem name="3-1">窝点分布</MenuItem>
                            <MenuItem name="3-2">窝点话单查询</MenuItem>
                        </Submenu>
                        <Submenu name="4">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                案件协查
                            </template>
                            <router-link tag="li" class="ivu-menu-item" active-class="ivu-menu-item-active ivu-menu-item-selected" name="4-1" to="/Investigation">案件协查</router-link>
                            <router-link tag="li" class="ivu-menu-item" active-class="ivu-menu-item-active ivu-menu-item-selected" name="4-2" to="/TestMusic">Music</router-link>
                            <router-link tag="li" class="ivu-menu-item" active-class="ivu-menu-item-active ivu-menu-item-selected" name="4-2" to="/TestMovie">Movie</router-link>
                        </Submenu>
                        <Submenu name="5">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                管理
                            </template>
                            <MenuItem name="5-1">用户管理</MenuItem>
                            <MenuItem name="5-2">通缉令预警管理</MenuItem>
                            <MenuItem name="5-3">短信管理</MenuItem>
                            <MenuItem name="5-4">用户配置</MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        <router-view/>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
import logoimg from 'common/image/logo.png'
    export default {
        data(){
            return{
                //logoimg:require('../common/image/logo.png')
                logoimg:logoimg
            }
        }
    }
</script>
