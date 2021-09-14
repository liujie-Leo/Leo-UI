<template>
  <div
    :class="[
      'inline-block',
      'flex',
      'items-center',
      'mr-3',
      {'text-gray-300':disabled||disabledFromRadioGroup},
      {'cursor-not-allowed':!notDisabled},
      {'cursor-pointer':notDisabled}
    ]"
    @click="onClick"
  >
    <div
      :class="[
        'circle',
        'border',
        'w-4',
        'h-4',
        'rounded-full',
        'inline-block',
        'mr-2',
        'flex',
        'justify-center',
        'items-center',
        'duration-300',
        {['hover:'+borderColor['default']]:notDisabled},
        {[borderColor['default']]:selected&&notDisabled}
      ]"
    >
      <div
        v-if="selected"
        :class="[
          'animate-ping',
          'radio-select',
          'circle-full',
          'h-2/3',
          'w-2/3',
          'rounded-full',
          {[bgColor['primary']]:notDisabled},
          {[bgColor['disabled']]:!notDisabled}
        ]"
      />
    </div>
    <span :class="['text-sm','text-gray-600',{'disabled':disabled||disabledFromRadioGroup}]">
      {{ label }}
    </span>
  </div>
</template>
<script>
import { borderColor, bgColor } from 'config'
export default {
  model: { prop: 'checkedValue', event: 'cc' },
  props: {
    label: {
      type: String | Number,
      default: ''
    },
    value: {
      type: String | Number | Boolean,
      default: ''
    },
    checkedValue: {
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
      selected: false,
      borderColor,
      bgColor,
      parentComponent: '',
      disabledFromRadioGroup: false
    }
  },
  computed: {
    notDisabled () {
      return !this.disabled && !this.disabledFromRadioGroup
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      this.parentComponent = this.$parent && this.$parent.name
    },
    onClick () {
      if (this.disabled || this.disabledFromRadioGroup) return
      this.selected = true
      if (this.parentComponent != 'l-radioGroup') {
        this.$emit('cc', this.value)
      } else {
        this.$parent.$emit('valueChange', { value: this.value, label: this.label })
      }
    }
  }
}
</script>
<style lang="less" scoped>
.disabled{
  color:#ccc
}
</style>
