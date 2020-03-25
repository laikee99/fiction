<template>
  <div class="recommend">
    <div class="recommend-item">
      <img src="~assets/img/home/recommend/recommend1.jpg" alt="">
      <div><p>双娇</p></div>
    </div>
    <div class="recommend-item">
    <img src="~assets/img/home/recommend/recommend2.jpg" alt="">
    <div><p>你爱天真我爱闹</p></div>
    </div>
    <div class="recommend-item">
    <img src="~assets/img/home/recommend/recommend3.jpg" alt="">
    <div><p>漂亮朋友</p></div>
    </div>
    <div class="recommend-item">
    <img src="~assets/img/home/recommend/recommend4.jpg" alt="">
    <div><p>你的黑料比本人可爱</p></div>
    </div>
    <div class="recommend-item">
    <img src="~assets/img/home/recommend/recommend5.jpg" alt="">
    <div><p>热搜预定</p></div>
    </div>
    <div class="recommend-item">
    <img src="~assets/img/home/recommend/recommend6.jpg" alt="">
    <div><p>蜜桃</p></div>
    </div>
    <div class="recommend-item">
    <img src="~assets/img/home/recommend/recommend7.jpg" alt="">
    <div><p>水无乡</p></div>
    </div>
    <div class="recommend-item">
    <img src="~assets/img/home/recommend/recommend8.jpg" alt="">
    <div><p>你接着忽悠</p></div>
    </div>
    <div class="recommend-item">
    <img src="~assets/img/home/recommend/recommend9.jpg" alt="">
    <div><p>藏娇</p></div>
    </div>
    <div class="recommend-item">
    <img src="~assets/img/home/recommend/recommend10.jpg" alt="">
    <div><p>桃花如梦</p></div>
    </div>
    <div class="recommend-item">
    <img src="~assets/img/home/recommend/recommend11.jpg" alt="">
    <div><p>千金修炼手册</p></div>
    </div>
    <div class="recommend-item">
    <img src="~assets/img/home/recommend/recommend12.jpg" alt="">
    <div><p>反派难为</p></div>
    </div>
    <div class="recommend-item">
    <img src="~assets/img/home/recommend/recommend13.jpg" alt="">
    <div><p>无关爱情</p></div>
    </div>
    <div class="recommend-item">
    <img src="~assets/img/home/recommend/recommend14.jpg" alt="">
    <div><p>看见你了</p></div>
    </div>
    <div class="recommend-item">
    <img src="~assets/img/home/recommend/recommend15.jpg" alt="">
    <div><p>走火</p></div>
    </div>
    <div class="recommend-item">
    <img src="~assets/img/home/recommend/recommend16.jpg" alt="">
    <div><p>软刺猬</p></div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Recommend"
}
</script>

<style scoped>
  .recommend{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 49px;
  }
  /* .recommend-item {
    position: absolute;
  } */
  .recommend p {
    width: 140px;
    height: 30px;
    font-size: 14px;
    padding: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:  nowrap; 
    text-align: center;
    
  }
  
  .recommend img {
    width: 100%;
    height: 180px;
  }
</style>