<template>
<div class="product-banner">
  <img :src=a>
</div>
</template>
<script>
  import Vue from 'vue'
  import a from '../../assets/img/product-banner.jpg'
  export default {
    data() {
      name:"product_banner"
      return {
        a:a
      };
    }}
</script>
