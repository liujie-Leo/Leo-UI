const code = `
<template>
  <div class="mb-2">
    <l-button @click="toggleArrow('hover')">hover</l-button>
    <l-button @click="toggleArrow('never')">never</l-button>
    <l-button @click="toggleArrow('always')">always</l-button>
  </div>
  <div class="w-full h-48 bg-gray-300">
    <l-swiper :arrow="arrowType">
      <l-swiper-item v-for="i in 3" :key="i">
        <div class="bg-gray-500 h-full flex justify-center items-center">
          <div>{{ i }}</div>
        </div>
      </l-swiper-item>
    </l-swiper>
  </div>
</template>
<script>
export default {
  methods: {
    toggleArrow (type) {
      this.arrowType = type
    }
  }
};
</script>`
export default code
