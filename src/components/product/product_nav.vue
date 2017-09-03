<template>
<div class="safety-warp ">
  <el-row  type="flex" algin="middle" justify="center" class="margin0auto" >
    <el-col :lg="18" :md="22" :sm="23" :xs="24" class="product-nav relative">
      <div class="absolute product-nav-logo white ">
        <div class="product-nav-logo-title">产品中心</div>
        <div class="product-nav-logo-text">PRODUCT</div>
      </div>
      <div class="product-nav-nav float-right">
        <span>您当前的位置： </span>
        <router-link tag="span" class="pointer" to="homepage">首页</router-link>
        <span> >产品中心 > </span>
        <span>工业安全</span>
      </div>
    </el-col>
  </el-row>
  <div class="product-nav-list-warp text-center">
    <router-link v-for="item in navList" tag="li" class="product-nav-list" :to="item.path"  :key="item.id">{{item.name}}</router-link>
  </div>
  <router-view></router-view>


</div>
</template>
<script>
  import Vue from 'vue'
  export default{
    data(){
      name:"product_nav"
      return{
        navList:[
          {id:0,path:"safety",name:"工业安全"},
          {id:1,path:"monitor",name:"工业监控"},
          {id:2,path:"protection",name:"工业消防"},
          {id:3,path:"network",name:"工业网络"},
          {id:4,path:"communicate",name:"工业通讯"},
          {id:5,path:"other",name:"其他产品"}
        ]
      }
    }
  }
</script>
<style>
  @import '../../assets/css/product.css';
</style>
