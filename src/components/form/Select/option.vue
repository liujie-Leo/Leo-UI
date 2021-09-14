<template>
  <div
    :class="[
      'option',
      'selectFlag',
      'select-item',
      'cursor-pointer',
      'hover:bg-gray-100',
      'px-2', 'py-1.5',
      'text-sm',
      'text-gray-500',
      {'text-blue-500':parentValue==value},
      {'cursor-not-allowed disabled':disabled}
    ]"
    @click="onClick"
  >
    <slot />
    {{ label }}
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String | Number,
      default: ''
    },
    value: {
      type: String | Number,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      parentValue: ''
    }
  },
  mounted () {
    this.$grandParent = this.$parent.$parent
    this.parentValue = this.$grandParent.$props.value
  },
  methods: {
    onClick () {
      if (this.disabled) return
      this.$grandParent.$data.showSelectItemsBoard = false
      this.$grandParent.$emit('cc', this.value)
      this.$grandParent.$emit('change')
    }
  }
}
</script>
<style lang="less" scoped>
.disabled{
  color: #ccc;
}
.option{
  font-size: 12px;
}
</style>
