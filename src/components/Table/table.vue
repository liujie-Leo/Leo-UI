<template>
  <div>
    <div class="hidden">
      <slot />
    </div>
    <div class="l-table-header-wrapper flex">
      <table class="w-full">
        <thead>
          <tr>
            <td
              v-for="(item,index) in columnProps"
              :key="index"
              :class="['table-head-td px-2 py-4 text-gray-600 font-bold  border-t text-sm',{'border-l border-r':border},{'border-b':!border},textAlign()]"
            >
              {{ item.label }}
            </td>
          </tr>
        </thead>
      </table>
      <div v-if="height!='auto'" class="w-3.5 border" />
    </div>
    <div :class="['l-table-body-wrapper',{'overflow-y-auto':height!='auto'}]" :style="{height:tableBodyHeight}">
      <table class="w-full">
        <tbody class="h-24 overflow-y-auto  w-full">
          <tr v-for="(rowItem,index) in data" :key="index" :class="['border-b hover:bg-gray-100 w-full',{'bg-gray-50':index%2&&stripe}]">
            <td
              v-for="(columnItem,subIndex) in columnProps"
              :key="subIndex"
              :style="{width:columnWidth[index]+'px'}"
              :class="['py-3 px-2 text-sm text-gray-500',{'border':border},textAlign(columnItem)]"
            >
              {{ rowItem[columnItem.prop] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => { return [] }
    },
    border: {
      type: Boolean,
      default: false
    },
    stripe: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      default: 'left'
    },
    height: {
      type: Number | String,
      default: 'auto'
    }
  },
  data () {
    return {
      columnProps: [],
      columnWidth: []
    }
  },
  computed: {
    tableBodyHeight () {
      return this.height == 'auto' ? 'auto' : this.height + 'px'
    }
  },
  mounted () {
    this.getColumnProps()
    this.getTableHeaderEachWidth()
  },
  methods: {
    getColumnProps () {
      const slotList = this.$slots.default
      let id = 0
      if (slotList.length > 0) {
        slotList.forEach(item => {
          this.columnProps.push({ ...item.data.attrs, id: id++ })
        })
      }
    },
    /** 文本对齐方式 */
    textAlign (props) {
      const obj = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right'
      }
      if (this.align) {
        return obj[this.align]
      } else if (props.align) {
        return obj[props.align]
      } else {
        return ''
      }
    },
    getTableHeaderEachWidth () {
      setTimeout(() => {
        const dom = this.$el.getElementsByClassName('table-head-td')
        const domArr = [...dom]
        domArr.forEach(item => { this.columnWidth.push(item.clientWidth) })
      }, 0)
    }
  }
}
</script>
<style lang="less" scoped>

</style>
