<template>
  <div>
    <tab-control :titles="['分类']" class="tab-control"/>
    <category-list :female="this.female" class="category-list"/>
  </div>
</template>

<script>
import TabControl from 'components/content/tabcontrol/TabControl'
import {getCategoryBooks} from  "network/category"
import {getDetail} from  "network/category"
import CategoryList from "./CategoryList"
export default {
  name: "Category",
  components: {
    TabControl,
    CategoryList
    // Boy
  },
  data () {
    return {
        'female': [],
      
    }
  },
  created() {
    this.getCategoryBooks()
  },
  methods: {
    getCategoryBooks() {
      getCategoryBooks().then(res => {
      this.female = res.female
    })
    }
  }
}
</script>

<style scoped>
  .tab-control {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
  }
  .category-list {
    margin: 44px 0;
  }
</style>