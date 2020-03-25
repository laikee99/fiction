<template>
  <div id="ranking" class="wrapper">
    <nav-bar class="nav-bar"><div slot="center">排行榜</div></nav-bar>
    <scroll class="content" ref="scroll">
      <ranking-list :ranking="this.ranking"/>
    </scroll>
  </div>
  
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import {getDetail} from  "network/ranking"
import RankingList from './RankingList'
export default {
  name: "Surcease",
  components: {
    Scroll,
    NavBar,
    RankingList
  },
  props:{

  },
  data() {
    return {
      ranking: []
    }
  },
  created() {
    this.getDetail()
  },
  methods: {
    getDetail() {
      getDetail().then(res => {
      this.ranking = res.female;
    })
    }
    
  }
}
</script>

<style scoped>
#ranking {
  height: 100vh;
  
}
.nav-bar {
  color: #fff;
  background-color: #ff9999;
}
.content {
  height: calc(100vh - 93px);
  overflow: hidden;
}
</style>