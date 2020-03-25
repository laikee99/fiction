<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">书架</div>
      <input type="file" multiple id="file" name="导入本地书籍">
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: "Bookshelf",
  components: {
    NavBar
  }
  
}
</script>

<style scoped>
  .nav-bar {
    color: #fff;
    background-color: #ff9999;
  }

  #id {
    width: 300px;
    height: 150px;
  }
</style>