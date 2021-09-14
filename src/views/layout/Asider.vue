<template>
  <div :class="['w-48','shadow','overflow-y-auto','pt-4','pb-24','asider','relative']">
    <div v-for="item in menus" :key="item.title" class="level-1">
      <div class="text-gray-400 text-xs mt-10 pl-8">{{ item.title }}</div>
      <div
        v-for="subItem in item.children"
        :key="subItem.title"
        :class="['level-2','text-gray-600','text-sm','mt-4','cursor-pointer','hover:text-blue-500','tracking-wide','pl-8',{'text-blue-500':subItem.path==active}]"
        @click="onClick(subItem)"
      >
        {{ subItem.title }}
      </div>
    </div>
  </div>
</template>
<script>
import menus from 'config/menu/index.js'
export default {
  data () {
    return {
      menus,
      active: ''
    }
  },
  mounted () {
    this.active = this.$route.fullPath
  },
  methods: {
    onClick (item) {
      this.active = item.path
      this.$router.push({
        path: item.path
      })
    }
  }
}
</script>
<style lang="less" scoped>
.asider{
  height: calc(100vh - 3rem);
}
::-webkit-scrollbar{
  display: none;
}
</style>
