<template>
   <div id="app">
     <div class="full-ad"></div>
    <router-view></router-view>
  </div>
</template>

<script>
  import Vue from 'vue'
export default {
  name: 'app'
  }
</script>

<style >
  @import 'assets/css/public.css';
  .full-ad{
    position: absolute;
    width: 100%;
    height:0;
    animation:myfirst 4s;
    animation-timing-function:linear;
    transition:height 2s;
    background: red;
    z-index: 100;
  }
  @keyframes myfirst
  {
    0%   {background:red; height:0;}
    40%  {background:red; height:100%;}
    80%  {background:red; height:100%;}
    100% {background:red; display:none;}
  }
  .hide{
    display: none;
  }
</style>
