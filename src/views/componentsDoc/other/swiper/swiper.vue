<template>
  <div :class="['l-button','p-12 pt-4']">
    <l-title>Swiper轮播图</l-title>
    <l-parag>一个让现实内容轮流播放的区域。</l-parag>
    <l-title>何时使用</l-title>
    <l-parag>常用于一组图片或卡片轮播。</l-parag>
    <l-title>组件注册</l-title>
    <l-code language="js" :code="registerCode" />
    <l-title>代码演示</l-title>
    <!-- 基本用法 -->
    <l-component-display title="基本用法" :code="baseCode" language="html" description="最简单的用法。">
      <div slot="component-display">
        <div class="w-full h-48 bg-gray-300">
          <l-swiper arrow="never">
            <l-swiper-item v-for="i in 3" :key="i">
              <div class="bg-gray-500 h-full flex justify-center items-center">
                <div>{{ i }}</div>
              </div>
            </l-swiper-item>
          </l-swiper>
        </div>
      </div>
    </l-component-display>
    <!-- 切换箭头 -->
    <l-component-display title="切换箭头" :code="toggleArrowCode" language="html" description="你可以使用arrow属性控制箭头的显示方式，常用的值有hover、never以及always。">
      <div slot="component-display">
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
      </div>
    </l-component-display>
    <!-- 指示器 -->
    <l-component-display title="指示器" :code="toggleIndicatorCode" language="html" description="指示器也可以切换显示，属性为indicator，它接收一个布尔值。">
      <div slot="component-display">
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
    </l-component-display>
  </div>
</template>
<script>
import Prism from 'prismjs'
import buttonTypeCode from './code/baseUse'
import registerCode from './code/register'
import toggleArrowCode from './code/toggleArrow'
import toggleIndicatorCode from './code/toggleIndicator'
import LSwiper from 'components/Swiper/swiper.vue'
import LSwiperItem from 'components/Swiper/swiperItem.vue'
export default {
  components: { LSwiper, LSwiperItem },
  data () {
    return {
      code: buttonTypeCode,
      baseCode: buttonTypeCode,
      registerCode,
      toggleArrowCode,
      toggleIndicatorCode,
      isShowIndicator: true,
      arrowType: 'hover'
    }
  },
  mounted () {
    // 高亮渲染
    Prism.highlightAll()
  },
  methods: {
    toggleIndicator () {
      this.isShowIndicator = !this.isShowIndicator
    },
    toggleArrow (type) {
      this.arrowType = type
    }
  }
}
</script>
<style lang="less" scoped>
</style>
