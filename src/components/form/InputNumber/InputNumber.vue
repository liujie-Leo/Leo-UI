<template>
  <div :class="['inline-block  border rounded-sm hover:border-gray-300 transition',{'disabled':disabled}]">
    <div :class="['px-4 py-2 bg-gray-50 inline-block border-r cursor-pointer text-gray-500',{'btn-disabled':btnDisabled}]" @click="onReduce">-</div>
    <input :disabled="disabled" :value="value" :class="['w-24 px-3 text-gray-500 text-sm text-center']" type="text" @input="input">
    <div :class="['px-4 py-2 bg-gray-50 border-l inline-block cursor-pointer text-gray-500']" @click="onAdd">+</div>
  </div>
</template>
<script>
export default {
  model: { prop: 'value', event: 'cc' },
  props: {
    value: {
      type: Number | String,
      default: 0
    },
    step: {
      type: Number | String,
      default: 1
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    btnDisabled () {
      return this.value <= 0
    }
  },
  methods: {
    onReduce () {
      if (this.disabled || this.btnDisabled) return
      this.$emit('cc', this.value - this.step)
    },
    onAdd () {
      if (this.disabled) return
      this.$emit('cc', this.value + this.step)
    },
    input (e) {
      this.$emit('cc', Number(e.target.value))
    }
  }
}
</script>
<style lang="less" scoped>
input:focus{
  outline: none;
}
div::selection{
  display: none;
}
input::selection{
  display: none;
}
.disabled {
  background-color: #F6F7FA!important;
  cursor: not-allowed;
  div,input{
    background-color: #F6F7FA!important;
    color: #ccc;
    cursor: not-allowed;
  }
}
.btn-disabled{
  color: #ccc;
  cursor: not-allowed;
}
</style>
