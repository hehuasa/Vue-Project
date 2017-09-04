<template>
  <el-row  type="flex" algin="middle" justify="center" class="" >
    <el-col :lg="6" :md="7" :sm="7" :xs="8" class="product-nav relative">
      <el-menu default-active="2" class="el-menu-vertical-demo protection-sidelist">
        <el-submenu v-if="item1.children.length!=0"  v-for="item1 in content" :index="item1.id" :key="item1.id">
          <template slot="title"><span  class="protection-sidelist-title"  v-on:click="data=handle(item1)">{{item1.title}}</span></template>
          <el-menu-item  v-for="item2 in item1.children" :index="item2.id" :key="item2.id"><span class="protection-sidelist-list"  v-on:click="data=handle(item2)">{{item2.title}}</span></el-menu-item>
        </el-submenu>
        <el-menu-item  class="protection-sidelist-title" v-if="item1.children.length==0" v-for="item1 in content" :index="item1.id" :key="item1.id"><span   v-on:click="data=handle(item1)">{{item1.title}}</span></el-menu-item>
      </el-menu>
    </el-col>
    <el-col :offset=1 :lg="11" :md="13" :sm="13" :xs="15" class="">
      <div class="protection-content-title">
        {{data.title}}
      </div>
      <el-col :lg="8" :md="8" :sm="12" :xs="24" class="" v-for="item in data.children">
        <div>{{item.title}}</div>
      </el-col>
    </el-col>
  </el-row>
</template>
<script src="../../assets/js/data.js"></script>

<style>
  @import '../../assets/css/product.css';
  @import '../../assets/css/public.css';
</style>
