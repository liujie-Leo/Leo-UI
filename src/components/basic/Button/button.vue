<!--
  组件名称：按钮
  作者：Leo
-->
<template>
  <div class="button-wrapper relative inline-block mr-2">
    <button
      :class="[
        'l-button',
        'text-sm', // 默认字体大小
        'border',
        [type],
        {'border-gray-400 border-solid  hover:text-blue-500 hover:border-blue-500' :type=='default'}, // 默认按钮样式
        {'disabled cursor-not-allowed':disabled},
        {'hover':!disabled},
        {[backgroundColor[type]]:true}, // 背景颜色
        {[borderColor[type]]:type!='default'},
        textColor, // 字体颜色
        roundObj[round], // 圆角
        ...sizeObj[size], //尺寸
      ]"
      :disabled="disabled"
      @click="onClick"
    >
      <div v-if="loading" class="iconfont icon-jiazaizhong inline-block mr-1 animate-spin" />
      <slot />
    </button>
  </div>
</template>
<script>
import { bgColor, size, round, borderColor } from 'config'
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'default'
    },
    round: {
      type: String,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      backgroundColor: { ...bgColor },
      sizeObj: { ...size },
      roundObj: { ...round },
      borderColor
    }
  },
  computed: {
    textColor () {
      return this.type == 'default' ? 'text-black' : 'text-white'
    }
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>
<style lang="less" scoped>
.hover::before{
  position: absolute;
    left: 0;
    top: 0;
    content: '';
    height: 100%;
    width: 100%;
    background-color: rgba(255,255,255,.15);
    opacity: 0;
    transition: .3s;
}
.button-wrapper:hover{
  .hover::before{
    opacity: 1;
  }
}
.primary.disabled{
  background-color: #93C5FD;
  border-color: #BFDBFE;
}
.default.disabled{
  border-color: #9CA3AF;
  color: #9CA3AF;
}
.success.disabled{
  border-color: #6EE7B7;
  background-color: #6EE7B7;
}
.info.disabled{
  border-color: #D1D5DB;
  background-color: #D1D5DB;
}
.warn.disabled{
  border-color: #FCD34D;
  background-color: #FCD34D;
}
.danger.disabled{
  border-color: #FCA5A5;
  background-color: #FCA5A5;
}
</style>
