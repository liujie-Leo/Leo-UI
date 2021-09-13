<template>
  <div
    id="circle-box"
    :class="[
      'h-5',
      'w-9',
      'rounded-full',
      'relative',
      'flex',
      'items-center',
      'px-0.5',
    ]"
  >
    <div
      id="circle"
      :class="[
        'circle',
        'bg-white',
        'h-4',
        'w-4',
        {'duration-300':startAnimate},
        'rounded-full',
        'cursor-pointer',
        'absolute',
        {'left-0.5':value}
      ]"
      @click="onToggle"
    />
  </div>
</template>
<script>
import { bgColor } from 'config'
export default {
  model: { prop: 'value', event: 'ccc' },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: '#10B981'
    },
    inactiveColor: {
      type: String,
      default: '#4E81EE'
    }
  },
  data () {
    return {
      bgColor,
      startAnimate: false
    }
  },
  mounted () {
    this.changeCircle()
    this.setBackgroundColor()
    this.onReadyAnimate()
  },
  methods: {
    onToggle () {
      this.$emit('ccc', !this.value)
      this.$nextTick(() => {
        this.changeCircle()
      })
      this.$emit('change', this.value)
    },
    changeCircle () {
      const circleBox = document.getElementById('circle-box')
      const circle = document.getElementById('circle')
      if (this.value) {
        circle.style.left = `calc(${circleBox.offsetWidth - circle.offsetWidth}px - 0.125rem)`
        this.setBackgroundColor()
      } else {
        circle.style.left = '0.125rem'
        this.setBackgroundColor()
      }
    },
    onReadyAnimate () {
      setTimeout(() => {
        this.startAnimate = true
      }, 200)
    },
    setBackgroundColor () {
      const circleBox = document.getElementById('circle-box')
      if (this.value) {
        circleBox.style.backgroundColor = this.activeColor
      } else {
        circleBox.style.backgroundColor = this.inactiveColor
      }
    }
  }
}
</script>
<style lang="less" scoped>
</style>
