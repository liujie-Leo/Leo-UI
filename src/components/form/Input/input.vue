<template>
  <div class="l-input relative inline-block">
    <input
      :value="value"
      :disabled="disabled"
      :placeholder="placeholder"
      :class="['border px-3 py-2 text-gray-800 text-sm rounded-sm transition',{'bg-gray-100 cursor-not-allowed':disabled}]"
      :type="type"
      @change="onChange"
      @input="onInput"
      @focus="onFocus"
    >
    <div
      v-if="clearable&&value"
      class="iconfont icon-cuowu absolute top-1/2 transform -translate-y-1/2 right-2 text-gray-300 hover:text-gray-400 text-xs cursor-pointer"
      @click="handleClear"
    />
  </div>
</template>
<script>
export default {
  model: { prop: 'value', event: 'cc' },
  props: {
    value: {
      type: String | Number,
      default: ''
    },
    placeholder: {
      type: String | Number,
      default: '请输入'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text'
    },
    rows: {
      type: String | Number,
      default: 3
    }
  },
  methods: {
    handleClear () {
      this.$emit('cc', '')
    },
    onChange (event) {
      this.$emit('cc', event.target.value)
    },
    onInput (event) {
      this.$emit('cc', event.target.value)
    },
    onFocus () {
      this.$emit('focus')
    }
  }

}
</script>
<style lang="less" scoped>
input:focus{ outline: none; border: 1px solid #4E81EE;}
</style>
