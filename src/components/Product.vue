<template class="content">
  <div>
  <product_banner></product_banner>
  <product_nav></product_nav>
  </div>
</template>
<script>
  import Vue from 'vue'
  import  product_banner  from '@/components/product/product_banner'
  import  product_nav  from '@/components/product/product_nav'
  export default {
    data() {
      return {
      };
    },
    components: {
      product_banner,
      product_nav
    }
  }
</script>
