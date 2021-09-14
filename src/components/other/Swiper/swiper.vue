<template>
  <div class="l-swiper w-full h-full flex overflow-hidden relative">
    <div class="flex transition w-full duration-300">
      <slot />
    </div>
    <div
      :class="['arrow left-arrow-animation top-1/2 left-6 transform -translate-y-1/2 absolute bg-opacity-30 bg-gray-500 h-8 w-8 rounded-full flex justify-center items-center text-gray-300 cursor-pointer',{'hidden':arrow!='always'},{'arrow-hover':arrow=='hover'}]"
      @click="onLeft"
    >
      <div class="iconfont icon-zuofan" />
    </div>
    <div
      :class="['arrow right-arrow-animation top-1/2 right-6 transform -translate-y-1/2 absolute bg-opacity-30 bg-gray-500 h-8 w-8 rounded-full flex justify-center items-center text-gray-300 cursor-pointer',{'hidden':arrow!='always'},{'arrow-hover':arrow=='hover'}]"
      @click="onRight"
    >
      <div class="iconfont icon-youfan" />
    </div>
    <div v-if="indicator" class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex">
      <div
        v-for="i in swiperItemNums"
        :key="i"
        :class="['h-2','bg-gray-300','w-2','cursor-pointer','rounded-full','hover:bg-white','mx-1',{'inditor':i-1==index}]"
        @click="onClickInditor(i-1)"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 4000
    },
    arrow: {
      type: String,
      default: 'hover'
    },
    indicator: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      swiperHeight: '',
      swiperWidth: '',
      index: 0,
      swiperItemNums: null
    }
  },
  mounted () {
    this.initData()
    this.autoPlay && this.startAutoPaly()
  },
  methods: {
    initData () {
      // 获取swipers容器的高度和宽度
      const DOM = this.$el
      this.swiperHeight = DOM.clientHeight
      this.swiperWidth = DOM.clientWidth
      this.swiperItemNums = DOM.children[0].children.length
    },
    startAutoPaly () {
      setInterval(() => {
        this.onRight()
      }, this.interval)
    },
    onLeft () {
      this.index--
      if (this.index < 0) {
        this.index = this.swiperItemNums - 1
      }
      this.translate()
    },
    onRight () {
      this.index++
      if (this.index > this.swiperItemNums - 1) {
        this.index = 0
      }
      this.translate()
    },
    onClickInditor (i) {
      this.index = i
      this.translate()
    },
    translate () {
      const DOM = this.$el.children[0]
      const width = -this.swiperWidth * this.index
      DOM.style.transform = `translateX(${width}px)`
      this.$emit('change', this.index)
    }
  }
}
</script>
<style lang="less" scoped>
.l-swiper:hover .arrow-hover{
  display: flex;
}
.inditor{
  background-color: white;
}
</style>
