<template>
  <div class="user-info">
    <!-- <div class="user-header">
      <p>用户昵称</p>
    </div> -->

      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
    
  </div>
</template>

<script>
export default {
  name: "UserInfo"
}
</script>

<style scoped>
  .user-info {
    height: 54px;
    line-height: 54px;
    font-size: 14px;
    display: flex;
    border-bottom: 1px solid #eee;
    background-color: #fff;
  }
  .left, .right {
    width: 20%;
  }
  .center {
    flex: 1;
  }
</style>