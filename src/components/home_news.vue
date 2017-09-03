<template>
  <div class="text-center">
    <el-row  type="flex" align="middle" justify="center" class="home-news-head text-center">
      <el-col :md="15" :sm="22" :xs="24" class="inline-block">
        <div class="float-left">最新新闻</div>
        <div class="float-right pointer">more>></div>
      </el-col>
    </el-row>
    <el-row class="home-news-content inline-block">
      <el-col :md="8" :sm="12" :xs="24"  v-for="item in news" :key="item.id">
        <div class="home-news-block">
          <img :src="item.img">

        <div class="home-news-text">
          <div class="home-news-text-title" >{{item.title|homeNewsTitle}}</div>
          <div class="home-news-text-content">{{item.content|homeNewsContent}}</div>
        </div>
        </div>
      </el-col >
    </el-row>
  </div>
</template>
<script>
  import Vue from 'vue'
  import a from '../assets/img/nwes-1.png'
  import b from '../assets/img/nwes-2.png'
  import c from '../assets/img/nwes-3.png'
  export default {
    data() {
      name:"home_news"
      return {
        news: [
          {title: "2017年8月25日，xxx石油公司一行到我公司进行参观",img:a,id:1,
            content:"进入8月，华北油田积极推进油田医院与社会机构合作办院，并加快油田供电向国家电网分离移交进程。通过深化改革、整体优化，华北油田逐步“瘦身健体”，并以提质增效的“组合拳”，实现了更加稳健向好的经营业绩。" +
            "华北油田认识到，人多油少是油田面临的大难题；顺应国家大政方针、推进剥离企业办社会职能，是解决难题的重要办法。保项目投资完成率明显提升。通过细化成本管控，扩大“三集中、网上超市”采购规模，深入推进资产轻量化，大力压缩非生产性支出，确保油气单位完全成本、操作成本控制在年度预算之内。通过优化系统运行，持续开展地面系统调整，优化场站布局，简化工艺流程，进一步降低了生产运行费用。 "
          },
          {title: "2017年8月25日，xxx石油公司一行到我公司进行参观",img:b,id:2,
            content:"进入8月，华北油田积极推进油田医院与社会机构合作办院，并加快油田供电向国家电网分离移交进程。通过深化改革、整体优化，华北油田逐步“瘦身健体”，并以提质增效的“组合拳”，实现了更加稳健向好的经营业绩。" +
            "华北油田认识到，人多油少是油田面临的大难题；顺应国家大政方针、推进剥离企业办社会职能，是解决难题的重要办法。保项目投资完成率明显提升。通过细化成本管控，扩大“三集中、网上超市”采购规模，深入推进资产轻量化，大力压缩非生产性支出，确保油气单位完全成本、操作成本控制在年度预算之内。通过优化系统运行，持续开展地面系统调整，优化场站布局，简化工艺流程，进一步降低了生产运行费用。 "
          },
          {title: "2017年8月25日，xxx石油公司一行到我公司进行参观",img:c,id:3,
            content:"进入8月，华北油田积极推进油田医院与社会机构合作办院，并加快油田供电向国家电网分离移交进程。通过深化改革、整体优化，华北油田逐步“瘦身健体”，并以提质增效的“组合拳”，实现了更加稳健向好的经营业绩。" +
            "华北油田认识到，人多油少是油田面临的大难题；顺应国家大政方针、推进剥离企业办社会职能，是解决难题的重要办法。保项目投资完成率明显提升。通过细化成本管控，扩大“三集中、网上超市”采购规模，深入推进资产轻量化，大力压缩非生产性支出，确保油气单位完全成本、操作成本控制在年度预算之内。通过优化系统运行，持续开展地面系统调整，优化场站布局，简化工艺流程，进一步降低了生产运行费用。 "
          }
        ]
      }
    },
    filters: {
      homeNewsTitle: function (value) {
        if (value.length>15){
          value="     "+value.substring(0,22)+"......"
        }
        return value
      },
      homeNewsContent: function (value) {
        if (value.length>40){
          value="     "+value.substring(0,40)+"......"
        }
        return value
      }
    }
  }


</script>
<style>
  @import "../assets/css/homepage.css";
  @import "../assets/css/public.css";
</style>
