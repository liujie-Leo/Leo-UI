<template>
  <div class="h-screen w-screen flex justify-center items-center home ">
    <div class="content-box ">
      <div class="title text-gray-700 text-3xl font-bold tracking-wide text-center">L - Components</div>
      <div class="mt-3">
        <div class="px-4 py-1 bg-gray-100  rounded inline-block cursor-pointer  text-blue-500 mr-2 transition hover:shadow" @click="getStarted">Document</div>
        <div class="px-4 py-1 bg-blue-500 rounded inline-block cursor-pointer text-white  transition hover:shadow" @click="getStarted">Get started</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    getStarted () {
      this.$router.push({
        name: 'buttonDoc'
      })
    },
    test () {
      console.log('########### ', '子元素触发message')
      window.parent.postMessage({ a: 123, b: 321 }, '*')
    }
  }
}
</script>
<style lang="less" scoped>
.home{
  background-image: url('../assets/image/home-bg.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
