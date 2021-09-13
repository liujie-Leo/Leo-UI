<template>
  <div
    :class="[
      'radio-group',
      'flex'
    ]"
  >
    <slot />
  </div>
</template>
<script>
export default {
  name: 'RadioGroup',
  model: { prop: 'value', event: 'cc' },
  props: {
    value: {
      type: String | Number | Boolean,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      name: 'l-radioGroup',
      slotList: []
    }
  },
  mounted () {
    this.initEvent()
    this.initSlot()
    this.checkValue()
    this.checkDisabled()
  },
  methods: {
    // 监听radio组件的变化
    initEvent () {
      this.$on('valueChange', (options) => {
        this.$emit('cc', options.value)
        this.$emit('change', options.value)
        this.resetAllRadio(options)
      })
    },
    // 初始化slot的property数据
    initSlot () {
      const list = []
      this.$slots.default.forEach(item => {
        list.push(item.componentOptions.propsData)
      })
      this.slotList = list
    },
    // 如果value默认有值，选中默认值
    checkValue () {
      if (this.value) {
        const children = this.$children.find(item => {
          return item._props.value == this.value
        })
        children._data.selected = true
      }
    },
    // 某一个radio被选中时，重置其他radio
    resetAllRadio (options) {
      for (let i = 0, l = this.$children.length; i < l; i++) {
        const item = this.$children[i]
        if (item._props.value == options.value) continue
        item._data.selected = false
      }
    },
    // 检查禁用状态
    checkDisabled () {
      if (this.disabled) {
        this.$children.forEach(item => {
          item._data.disabledFromRadioGroup = true
        })
      }
    }
  }
}
</script>
<style lang="less" scoped>

</style>
