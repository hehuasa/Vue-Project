<template>
  <div>
    <div class="fixed full-screen back-white">
  <el-row class="text-center" type="flex" algin="middle">
    <el-col :lg="16" :md="20" :sm="22" :xs="22" class="header-warp inline-block back-white">
        <div class="logo">
          <img src="../assets/img/logo.png">
      </div>
      <div class="nav">
        <ul>
         <router-link  v-for="item in navList" tag="li" :to="item.path" :key="item.id">{{item.name}}</router-link>
        </ul>
      </div>
      <div class="btn-nav">
        <el-dropdown>
          <el-button type="primary">
            <i class="el-icon-menu"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item  v-for="item in navList" :key="item.id">{{item}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-col>
  </el-row>
    </div>
    <router-view></router-view>
    <div class="full-screen text-center " style=" background: #222222;">
        <div class="full-screen footer-warp footer">
          <div> Copyright © 2015 greatech.com.cn All Rights Reserved    成都格理特电子技术有限公司@版权所有      地址: 成都市高新区吉泰五路88号香年广场T3-2501室</div>
          <div class="logo-footer">
            <img src="../assets/img/logo-footer.png">
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
   export default {
    data() {
      name:"header"
      return {
        navList:[
          {id:0,path:"homepage",name:"首页"},
          {id:1,path:"news",name:"新闻中心"},
          {id:2,path:"product",name:"产品中心"},
          {id:3,path:"abouts",name:"关于我们"}]
      };
    }}
</script>

<style>
  @import '../assets/css/header-footer.css';
  @import '../assets/css/public.css';
</style>
