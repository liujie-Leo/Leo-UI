<template>
  <div id="doc-content" class="content overflow-y-auto flex-1 flex">
    <div class="flex-1 h-full">
      <router-view />
    </div>
    <div class="w-40 xl:w-64 mt-16 pl-4 h-full">
      <nav-menu />
    </div>
  </div>
</template>
<script>
import navMenu from '../components/navMenu.vue'
export default {
  components: {
    navMenu
  }
}
</script>
<style lang="less" scoped>
.content{
  height: calc(100vh - 3rem);
}
</style>
