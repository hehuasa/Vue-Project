<template>
<div class="back-gray safety-warp">
  <el-row  type="flex" algin="middle" justify="center" class="" >
    <el-col :lg="16" :md="20" :sm="22" :xs="22" class="safety-title">
      工业安全
    </el-col>
  </el-row>
  <el-row  type="flex" algin="middle" justify="center" class="" >
    <el-col :lg="16" :md="20" :sm="22" :xs="22" class="">
      <el-row  type="flex" algin="middle" justify="center" class="" >
        <el-col :lg="8" :md="8" :sm="12" :xs="24" class="" v-for="item in safetyProduct" class="safety-block-content" :key="item.id">
          <div class="safety-block">
            <img :src="item.src">
          </div>
          <div class="safety-text text-center">{{item.title}}</div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</div>
</template>

<script>
  import Vue from 'vue'
  import a from '../../assets/img/safety-camera.png'
  export default {
    data() {
      name:"safety"
      return {
        safetyProduct:[
          {id:0,title:"安全管理预警指挥系统",src:a},
          {id:1,title:"远程控制器",src:a}
        ]
    }}}
</script>

<style>
  @import '../../assets/css/product.css';
</style>
