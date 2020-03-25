<template>
  <div id="home" class="wrapper">
    <nav-bar class="nav-bar"><div slot="center">书城</div></nav-bar>
    <scroll class="content" ref="scroll">
      <swiper class="swiper"></swiper>
      <tab-control :titles="['推荐',  '排行榜']"
                    @tabClick="tabClick"/>
      <recommend/>
      
    </scroll>        
  </div>  
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Swiper from 'components/common/swiper/Swiper'
import TabControl from 'components/content/tabcontrol/TabControl'
import Scroll from 'components/common/scroll/Scroll'
import Recommend from './childComps/Recommend'

export default {
  name: "Home",
  components: {
    NavBar,
    Swiper,
    TabControl,
    Scroll,
    Recommend
  }, 
  methods: {
    tabClick(index) {
      // console.log(index);
      switch(index) {
          case 0:
            this.$router.push('/recommend')
            break
          case 1:
            this.$router.push('/ranking')
            break
      }       
    }
  },
  
}
</script>

<style scoped>
  #home {
    height: 100vh;
    position: relative;
  }
  .nav-bar {
    width: 100%;
    position: fixed;
    color: #fff;
    background-color: #ff9999;

    z-index: 9;
  }
  .search button {
    width: 50px;
    height: 36px;
    margin-left: 10px;
    border-radius: 5px;
    background-color: #ff9999;
    border: 0;
  }
  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }


</style>