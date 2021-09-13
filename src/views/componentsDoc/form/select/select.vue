<template>
  <div :class="['l-button','p-12 pt-4']">
    <l-title>Select选择器</l-title>
    <l-parag>下拉选择器。</l-parag>
    <l-title>何时使用</l-title>
    <l-parag>弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。</l-parag>
    <l-title>组件注册</l-title>
    <l-code language="js" :code="registerCode" />
    <l-title>代码演示</l-title>
    <!-- 基本用法 -->
    <l-component-display title="基本用法" :code="baseUseCode" language="html" description="适用广泛的基础单选。">
      <div slot="component-display">
        <div>
          <l-select v-model="value" @change="onChange">
            <l-option label="辣椒炒肉" value="ljcr" />
            <l-option label="虾滑蒸蛋" value="xhzd" />
            <l-option label="红烧排骨" value="hspg" />
          </l-select>
        </div>
      </div>
    </l-component-display>
  </div>
</template>
<script>
import Prism from 'prismjs'
import registerCode from './code/register'
import baseUseCode from './code/baseUse'
import disabledCode from './code/disabled'
import LSelect from 'components/Select/select.vue'
import LOption from 'components/Select/option.vue'
export default {
  components: { LSelect, LOption },
  data () {
    return {
      baseUseCode,
      registerCode,
      disabledCode,
      value: false
    }
  },
  mounted () {
    // 高亮渲染
    Prism.highlightAll()
  },
  methods: {
    onChange () {}
  }
}
</script>
<style lang="less" scoped>
code{
  font-size: 12px;
}
pre{
  background-color: #fff;
  border: 1px solid #ccc;
}
pre[class*="language-"]::selection,
pre[class*="language-"] ::selection,
code[class*="language-"]::selection,
code[class*="language-"] ::selection {
    background: #ccc;
}
</style>
