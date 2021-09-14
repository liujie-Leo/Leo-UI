<template>
  <div :class="['l-button','p-12 pt-4']">
    <l-title>Switch开关</l-title>
    <l-parag>表示两种相互对立的状态间的切换，多用于触发「开/关」。</l-parag>
    <l-title>何时使用</l-title>
    <l-parag>需要表示开关状态/两种状态之间的切换时。</l-parag>
    <l-title>组件注册</l-title>
    <l-code language="js" :code="registerCode" />
    <l-title>代码演示</l-title>
    <!-- 基本用法 -->
    <l-component-display title="基本用法" :code="baseCode" language="html" description="最简单的用法。">
      <div slot="component-display">
        <div>
          <l-switch v-model="value" />
        </div>
      </div>
    </l-component-display>
  </div>
</template>
<script>
import Prism from 'prismjs'
import buttonTypeCode from './code/baseUse'
import registerCode from './code/register'
import LSwitch from 'components/form/Switch/switch.vue'
export default {
  components: { LSwitch },
  data () {
    return {
      code: buttonTypeCode,
      baseCode: buttonTypeCode,
      registerCode,
      value: false
    }
  },
  mounted () {
    // 高亮渲染
    Prism.highlightAll()
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
