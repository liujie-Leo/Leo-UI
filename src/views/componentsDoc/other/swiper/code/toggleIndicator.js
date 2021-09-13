const code = `
<template>
  <div>
    <l-button class="mb-2" @click="toggleIndicator">切换</l-button>
    <div class="w-full h-48 bg-gray-300">
      <l-swiper arrow="hover" :indicator="isShowIndicator">
        <l-swiper-item v-for="i in 3" :key="i">
          <div class="bg-gray-500 h-full flex justify-center items-center">
            <div>{{ i }}</div>
          </div>
        </l-swiper-item>
      </l-swiper>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      isShowIndicator:false
    }
  },
  methods: {
    toggleIndicator () {
      this.isShowIndicator = !this.isShowIndicator
    }
  }
};
</script>`
export default code
