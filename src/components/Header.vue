<template>
  <div class="header-warp">
      <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">新闻中心</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-submenu   index="3">
          <template slot="title">产品中心</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu >
        <el-submenu index="4">
          <template slot="title">解决方案</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">典型案例</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">人力资源</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-submenu index="7">
          <template slot="title">关于我们</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-submenu index="8">
          <template slot="title">联系我们</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
      </el-menu>
      <div class="line"></div>
    <template>
      <div class="block">
        <el-carousel trigger="click" height="350px">
          <el-carousel-item v-for="item in imgList" :key="item.id">
            <img  v-bind:src="item.src"></img>
          </el-carousel-item>
        </el-carousel>
      </div>
    </template>
    <template>
      <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
        <!-- slides -->
        <swiper-slide><img src="../assets/img/1.jpg"></img></swiper-slide>
        <swiper-slide><img src="../assets/img/2.jpg"></img></swiper-slide>
        <swiper-slide><img src="../assets/img/3.jpg"></img></swiper-slide>
        <swiper-slide><img src="../assets/img/4.jpg"></img></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-scrollbar"   slot="scrollbar"></div>
      </swiper>
    </template>
  </div>
</template>
<script>
  import Vue from 'vue'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import a from '../assets/img/1.jpg'
  import b from '../assets/img/2.jpg'
  import c from '../assets/img/3.jpg'
  import d from '../assets/img/4.jpg'

  export default {
    data() {
      name: 'carrousel'
      return {
        activeIndex: '1',
        activeIndex2: '1',
        imgList:[
          {id:1,src:a},
          {id:2,src:b},
          {id:3,src:c},
          {id:4,src:d}
        ],
        components: {
          swiper,
          swiperSlide
        },
        notNextTick: true,
        swiperOption: {
          // swiper optionss 所有的配置同swiper官方api配置
          autoplay: 3000,
          loop : true,
          effect : 'coverflow',
          slidesPerView: 2,
          autoplayDisableOnInteraction : false,
          centeredSlides: true,
          coverflow: {
            rotate: -30,
            stretch: 10,
            depth: 60,
            modifier: 2,
            slideShadows : true
          },
          setWrapperSize :true,
          autoHeight: true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
          scrollbar:'.swiper-scrollbar',
          mousewheelControl : true,
          observeParents:true,
//          // if you need use plugins in the swiper, you can config in here like this
//          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
//          debugger: true,
          // swiper callbacks
          // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
          onTransitionStart(swiper){
            console.log(swiper)
          },
          // more Swiper configs and callbacks...
          // ...
        },
        computed: {
          swiper() {
            return this.$refs.mySwiper.swiper
          }
        },
        mounted() {
          // you can use current swiper instance object to do something(swiper methods)
          // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
          console.log('this is current swiper instance object', this.swiper)
          this.swiper.slideTo(3, 1000, false)
        }
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  @import '../assets/css/header-footer.css';
</style>
