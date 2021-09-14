<template>
  <div :class="['l-button','p-12 pt-4']">
    <l-title>InputNumber 计数器</l-title>
    <l-parag>仅允许输入标准的数字值，可定义范围</l-parag>
    <l-title>何时使用</l-title>
    <l-parag>需要用户输入具有范围或标准的数字值类型时使用。</l-parag>
    <l-title>组件注册</l-title>
    <l-code language="js" :code="registerCode" />
    <l-title>代码演示</l-title>
    <!-- 基本用法 -->
    <l-component-display title="基本用法" :code="baseUseCode" language="html" description="最简单的用法。">
      <div slot="component-display">
        <div>
          <l-input-number v-model="baseUseValue" />
        </div>
      </div>
    </l-component-display>
    <!-- 禁用状态 -->
    <l-component-display title="禁用状态" :code="disabledCode" language="html" description="最简单的用法。">
      <div slot="component-display">
        <div>
          <l-input-number v-model="disabledValue" disabled />
        </div>
      </div>
    </l-component-display>
    <!-- 步数 -->
    <l-component-display title="步数" :code="stepCode" language="html" description="最简单的用法。">
      <div slot="component-display">
        <div>
          <l-input-number v-model="stepValue" :step="2" />
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
import stepCode from './code/step'
import LInputNumber from 'components/form/InputNumber/InputNumber.vue'
export default {
  components: { LInputNumber },
  data () {
    return {
      registerCode,
      baseUseCode,
      disabledCode,
      stepCode,
      baseUseValue: 0,
      disabledValue: 0,
      stepValue: 0
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
