const code = `
<template>
  <div>
    <l-swiper arrow="never">
      <l-swiper-item v-for="i in 3" :key="i">
        <div class="bg-gray-500 h-full flex justify-center items-center">
          <div>{{ i }}</div>
        </div>
      </l-swiper-item>
    </l-swiper>
  </div>
</template>`
export default code
