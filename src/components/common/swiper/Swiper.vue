<template>
  <div class="wrapper">
    <swiper :options="swiperOption">

        <div class="swiper-slide">
          <img src="~assets/img/swiper/swiper1.jpg" alt="">
        </div>

        <div class="swiper-slide">
          <img src="~assets/img/swiper/swiper2.jpg" alt="">
        </div>

         <div class="swiper-slide">
          <img src="~assets/img/swiper/swiper3.jpg" alt="">
        </div>
        
        <!-- 这是轮播的小圆点 -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <!-- 如果需要滚动条 -->
        <!-- <div class="swiper-scrollbar"></div> -->
    </swiper>
  </div>
    
</template>
 
<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: "Swiper",
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        // 是否循环轮播
        loop: true,
        pagination: {
          el:'.swiper-pagination'
        },
        // 自动播放
        autoplay:{
          delay:1500,
          disableOnInteraction:false
        },
      }
    }
  }
  
}
</script>
 
<style>
  .swiper-pagination-bullet-active {
    background: #ff9999;
  }
  
  .wrapper img {
    width: 100%;
  }
</style>
