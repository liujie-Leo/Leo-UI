<template>
  <div v-if="showSelectItemsBoard" class="bg-white py-1 max-h-64 overflow-y-auto board w-30 border rounded-sm select-out">
    <slot />
  </div>
</template>
<script>
export default {
  model: { prop: 'showSelectItemsBoard', event: 'onTogglePicker' },
  props: {
    showSelectItemsBoard: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    this.initEvent()
  },
  methods: {
    initEvent () {

    }
  }
}
</script>
<style lang="less" scoped>
.board{
  width: 100%;
  position: absolute;
  top: 38px;
  left: 0;
}
.board::before{
  content: '';
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 6px solid #fff;
  position: absolute;
  top: -6px;
  left: 24px;
}
.board::after{
  content: '';
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 7px solid #E6E7EB;
  position: absolute;
  top: -8px;
  left: 23px;
  z-index: -1;
}
</style>
