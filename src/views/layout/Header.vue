<template>
  <div :class="['h-12 w-full shadow bg-white flex items-center justify-between','header','bg-blue-500']">
    <div class="text-white  pl-10 cursor-pointer inline-block" @click="onClick">L - Component</div>
    <div class="pr-8">
      <div class="px-4 py-1 rounded-sm text-sm cursor-pointer bg-white" size="small" @click="toggleDark">{{ darkModel?'黑':'白' }}</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      darkModel: false
    }
  },
  mounted () {
    this.darkModel = localStorage.getItem('dark') == 1
    this.htmlModifyClassName()
  },
  methods: {
    onClick () {
      this.$router.push({
        name: 'Home'
      })
    },
    toggleDark () {
      this.darkModel = !this.darkModel
      localStorage.setItem('dark', this.darkModel ? 1 : 0)
      this.htmlModifyClassName()
    },
    htmlModifyClassName () {
      const html = document.getElementsByTagName('html')
      html[0].className = this.darkModel ? 'dark' : ''
    }
  }

}
</script>
<style lang="less" scoped>
.header{
  z-index: 9999999!important;
}
</style>
