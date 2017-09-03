<template>
  <div>
  <home_banner></home_banner>
    <home_solution></home_solution>
    <home_product></home_product>
    <home_news></home_news>
  </div>
</template>
<script>
  import Vue from 'vue'
  import  home_banner  from '@/components/home_banner'
  import  home_solution  from '@/components/home_solution'
  import  home_product  from '@/components/home_product'
  import  home_news  from '@/components/home_news'
  export default {
    data() {
      return {
      };
    },
    components: {
      home_banner,
      home_solution,
      home_product,
      home_news
    }
  }
</script>
<style>
  @import "../assets/css/homepage.css";
</style>
