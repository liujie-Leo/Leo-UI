<template>
  <div :class="['l-button','p-12 pt-4']">
    <l-title>Input输入框</l-title>
    <l-parag>文本内容的输入。</l-parag>
    <l-title>何时使用</l-title>
    <l-parag>需要用户输入文本时使用。</l-parag>
    <l-title>组件注册</l-title>
    <l-code language="js" :code="registerCode" />
    <l-title>代码演示</l-title>
    <!-- 基本用法 -->
    <l-component-display title="基本用法" :code="baseUseCode" language="html" description="最简单的用法。">
      <div slot="component-display">
        <div>
          <l-input v-model="baseUseValue" />
        </div>
      </div>
    </l-component-display>
    <!-- 禁用 -->
    <l-component-display title="禁用" :code="disabledCode" language="html" description="通过disabled属性控制Input的禁用状态，它接收一个布尔值。">
      <div slot="component-display">
        <div>
          <l-input v-model="disabledValue" disabled />
        </div>
      </div>
    </l-component-display>
    <!-- 可清空 -->
    <l-component-display title="可清空" :code="clearableCode" language="html" description="添加clearable属性即可打开Input的清空功能。">
      <div slot="component-display">
        <div>
          <l-input v-model="clearableValue" clearable />
        </div>
      </div>
    </l-component-display>
    <!-- 密码框 -->
    <l-component-display title="密码框" :code="passwordCode" language="html" description="type属性值设置为password即可将Input类型设为密码框。">
      <div slot="component-display">
        <div>
          <l-input v-model="passwordValue" type="password" />
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
import clearableCode from './code/clearable'
import passwordCode from './code/password'
import LInput from 'components/form/Input/input.vue'
export default {
  components: { LInput },
  data () {
    return {
      registerCode,
      baseUseCode,
      disabledCode,
      clearableCode,
      passwordCode,
      baseUseValue: '',
      disabledValue: '',
      clearableValue: '',
      passwordValue: ''
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
