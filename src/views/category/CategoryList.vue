<template>
  <div class="category-list">
    <div v-for="item in female" :key="item.item"  
         class="category-item"> 
      <div class="category-item-content">{{item.major}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryList",
  props: {
    female: {
      type: Array,
      dafault() {
        return[]
      }
    }
  }
}
</script>

<style scoped>
  .category-list {
    display: flex;
    /* 默认不包裹，所有内容会显示在一行 */
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
  .category-item {
    justify-content: space-around;

    width: 45%;
    height: 90px;
    
    border: 1px solid #eee;
    background-color: pink;
  }
  .category-item-content {
    /* 均等分空白地方 */
    margin-top: 38px;
  }
  
</style>