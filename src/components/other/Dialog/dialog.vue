<!--
  组件名称：对话框
  作者：Leo
-->
<template>
  <div
    v-if="visible"
    :class="['mask-entrance','mask','w-screen','h-screen','flex','justify-center','items-center']"
  >
    <div id="l-dialog" :style="{width}" :class="['dialog-entrance','l-dialog','border','rounded-sm','p-3','relative',[bgColor['default']]]">
      <div :class="['l-dialog-title','text-gray-700']">{{ title }}</div>
      <slot />
      <div :class=" ['footer','py-2','flex','justify-end']">
        <slot name="footer" />
      </div>
      <div class="close-icon iconfont icon-cuowu absolute top-4 right-4 cursor-pointer text-gray-500 hover:text-blue-500" @click="closeDialog" />
    </div>
  </div>
</template>
<script>
import { borderColor, bgColor } from 'config'
export default {
  props: {
    title: {
      type: String | Number,
      default: '标题'
    },
    visible: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '500px'
    }
  },
  data () {
    return {
      borderColor,
      bgColor
    }
  },
  methods: {
    closeDialog () {
      this.$emit('beforeClose')
      this.$emit('close')
    }
  }
}
</script>
<style lang="less" scoped>
.mask{
  background-color:  rgba(0,0,0,.3);
  position: fixed;
  top: 0;
  left: 0;
}
</style>
