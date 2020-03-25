<template>
  <div class="ranking-list">
    <div v-for="item in ranking" :key="item.item" class="ranking-item">
      <div class="ranking-item-mins">
        <p>{{item.title}}</p>
      </div>
      <img :src="imgURL" alt="">
    
    </div>
  </div>
</template>

<script>
export default {
  name: "RankingList",
  props: {
    ranking: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      imgURL: require('assets/img/common/entrance.png')
    }
  }
}
</script>

<style scoped>

.ranking-item {
  width: 80%;
  height: 80px;
  margin: 0 10%;
  border-bottom: 1px solid #eee;
}
.ranking-item-mins {
  width: 260px;
  padding-top: 32px;
  position: absolute;
}
.ranking-item img {
  width: 40px;
  height: 40px;
  position: relative;
  top: 25%;
  left: 90%;
  right: 0;
  bottom: 0;
}
</style>