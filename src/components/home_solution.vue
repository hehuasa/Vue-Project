<template>
  <div>
  <el-row  type="flex" align="middle" justify="center" class="home-solution-head text-center">
    <el-col :md="15" :sm="22" :xs="24" class="inline-block">
      <div class="home-solution-head-title">解决方案</div>
      <div class="home-solution-head-link">成功案例</div>
    </el-col>
  </el-row>
  <div class="relative">
    <swiper :options="swiperOption" class="home-solution-banner">
      <!-- slides -->
      <swiper-slide class="" v-for="slide in home_banners" key=""><img :src="slide"></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <div class="home-solution-banner-prv" slot="button-prev">
      <img src="../assets/img/banner-prv.png">
    </div>
    <div class="home-solution-banner-next" slot="button-next">
      <img src="../assets/img/banner-next.png">
    </div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import a from '../assets/img/home-solution-banner1.jpg'
  import b from '../assets/img/home-solution-banner2.jpg'
  import c from '../assets/img/home-solution-banner3.jpg'
  import d from '../assets/img/home-solution-banner4.jpg'
  export default {
    data() {
      name:"home_solution"
      return {
        components: {
          swiper,
          swiperSlide
        },
        notNextTick: true,
        swiperOption: {
          autoplay: 3000,
          loop : true,
          slidesPerView : 3,
          spaceBetween : 20,
          autoplayDisableOnInteraction : false,
          centeredSlides: true,
          setWrapperSize :true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          prevButton:'.home-solution-banner-prv',
          nextButton:'.home-solution-banner-next',
          observeParents:true
        },
        home_banners:[a,b,c,d],
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
</style>
