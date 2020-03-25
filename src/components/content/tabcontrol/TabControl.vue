<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" :item="item" :key="index" 
         class="tab-control-item" 
         :class="{active: index === currentIndex}" 
         @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      // 记录当前谁被选中
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;

    /* 吸顶 */
    /* position: sticky; */
    top: 44px;
    background-color: #fff;
  }

  .tab-control-item {
    flex: 1;
    height: 44px;
    line-height: 44px;
    
  }

  .tab-control-item span {
    padding: 5px;
  }

  .active {
    color: #ff9999;
  }

  .active span {
    border-bottom: 3px solid #ff9999;
  }
</style>