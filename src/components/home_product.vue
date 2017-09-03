<template>
  <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide class="banner" v-for="slide in home_banners" :key="slide.id"><img :src="slide.src"></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>
<script>
  import Vue from 'vue'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import a from '../assets/img/home-product-banner1.jpg'
  import b from '../assets/img/home-product-banner2.jpg'
  export default {
    data() {
      name:"home_product"
      return {
        components: {
          swiper,
          swiperSlide
        },
        notNextTick: true,
        swiperOption: {
          autoplay: 3000,
          loop : true,
          autoplayDisableOnInteraction : false,
          centeredSlides: true,
          setWrapperSize :true,
          pagination : '.swiper-pagination',
          paginationType : 'bullets',
          paginationElement : 'div',
          paginationClickable :true,
          paginationBulletRender: function (swiper,index,className) {
            var _html = '';

              if (index == 1) {
                _html += '<div class="' + className + ' home-product-pagination"></div>';
              }else{
                _html += '<div class="' + className + ' home-product-pagination"></div>';
              }
            //给每个页码绑定跳转的事件
            return _html;
          },
          observeParents:true
        },
        home_banners:[{id:0,src:a},{id:1,src:b}],

        computed: {
          swiper() {
            return this.$refs.mySwiper.swiper
          }
        }
      };
    }
  }
</script>
<style>
  @import "../assets/css/homepage.css";
  @import "../assets/css/public.css";
</style>
