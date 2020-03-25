<template>
  <div class="user-head">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "UserHead"

}
</script>

<style scoped>
  .user-head {
    display: flex;
    height: 70px;
    line-height: 60px;
  }
  .left, .right {
    width: 20%;
  }
  .center {
    flex: 1;
  }
</style>