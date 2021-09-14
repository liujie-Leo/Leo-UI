<template>
  <div :class="['l-select', 'w-40', 'relative', 'selectFlag','inline-block','mr-2']" :style="{width}">
    <input
      :disabled="disabled"
      :class="['border','w-full','selectFlag','text-gray-500','rounded-sm','focus:border-blue-500','py-1','pl-2','pr-5','cursor-pointer',{'cursor-not-allowed':disabled}]"
      type="text"
      readonly
      :placeholder="placeholder"
      :value="inputVal"
      @click="onClick"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
    >
    <div
      :class="['arrow-icon','icon','selectFlag','text-gray-300','iconfont',{'icon-youfan':showArrowIcon},{'icon-cuowu':!showArrowIcon},'absolute','right-3','top-1.5','transform','duration-300',{'-rotate-90':showSelectItemsBoard&&showArrowIcon},{'rotate-90':!showSelectItemsBoard&&showArrowIcon},{'cursor-pointer':!disabled},{'cursor-not-allowed':disabled}
      ]"
      @click="onClickIcon"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
    />
    <Picker v-model="showSelectItemsBoard">
      <slot />
    </Picker>
  </div>
</template>
<script>
import Picker from 'components/form/Picker/picker'
import Bus from 'utils/eventBus'
export default {
  components: { Picker },
  model: { prop: 'value', event: 'cc' },
  props: {
    placeholder: {
      type: String | Number,
      default: '请选择'
    },
    value: {
      type: String | Number,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      showSelectItemsBoard: false,
      slotList: [],
      showArrowIcon: true
    }
  },
  computed: {
    inputVal () {
      let obj = ''
      if (this.value) {
        obj = this.slotList.find(item => { return item.value == this.value })
      }
      return obj && obj.label
    }
  },
  mounted () {
    this.initEvent()
    this.initSlot()
  },
  methods: {
    initSlot () {
      const list = []
      this.$slots.default.forEach(item => {
        list.push(item.componentOptions.propsData)
      })
      this.slotList = list
    },
    initEvent () {
      // 监听点击select组件外部的事件
      document.addEventListener('click', (e) => {
        const classArr = e.target.className.split(' ')
        if (!classArr.includes('selectFlag')) {
          this.showSelectItemsBoard = false
        }
      })
      // eventBus增加监听事件
      Bus.$on('resetPicker', () => {
        this.showSelectItemsBoard = false
      })
    },
    onClick () {
      if (this.disabled) return
      this.togglePicker()
    },
    onClickIcon () {
      if (this.disabled) return
      if (this.clearable) {
        this.$emit('cc', '')
      }
      if (this.showArrowIcon) {
        this.togglePicker()
      }
    },
    togglePicker () {
      Bus.$emit('resetPicker')
      this.showSelectItemsBoard = !this.showSelectItemsBoard
    },
    onMouseEnter () {
      if (this.clearable && this.inputVal) {
        this.showArrowIcon = false
      }
    },
    onMouseLeave () {
      this.showArrowIcon = true
    }
  }
}
</script>
<style lang="less" scoped>
input[type=text]:focus{ outline: none}
input{
  font-size: 12px;
}
.icon{
  font-size: 10px;
}
</style>
