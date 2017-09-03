<template>
  <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper" class="swiper-container">
    <!-- slides -->
    <swiper-slide class="banner" v-for="slide in home_banners" :key="slide.id"><img :src="slide.src"></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-button-prev display-none" slot="button-prev"></div>
    <div class="swiper-button-next display-none" slot="button-next"></div>
  </swiper>
</template>
<script>
  import Vue from 'vue'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import a from '../assets/img/home-banner1.jpg'
  import b from '../assets/img/home-banner1.jpg'
  import c from '../assets/img/home-banner1.jpg'
  import d from '../assets/img/home-banner1.jpg'
  export default {
    data() {
      name:"home_banner"
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
          paginationClickable :true,
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
          observeParents:true
        },
        home_banners:[{id:0,src:a},{id:1,src:b},{id:2,src:c},{id:3,src:d}],
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
