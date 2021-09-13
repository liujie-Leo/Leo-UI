<template>
  <div :class="['l-button','p-12 pt-4']">
    <l-title>Radio单选框</l-title>
    <l-parag>单选框</l-parag>
    <l-title>何时使用</l-title>
    <l-parag>用于在多个备选项中选中单个状态。</l-parag>
    <l-title>组件注册</l-title>
    <l-code language="js" :code="registerCode" />
    <l-title>代码演示</l-title>
    <!-- 基本用法 -->
    <l-component-display title="基本用法" :code="baseUseCode" language="html" description="最简单的用法。">
      <div slot="component-display">
        <div>
          <l-radio-group v-model="value" @change="onChange">
            <l-radio label="辣椒炒肉" value="ljcr" />
            <l-radio label="虾滑蒸蛋" value="xhzd" />
            <l-radio label="红烧排骨" value="hspg" />
          </l-radio-group>
        </div>
      </div>
    </l-component-display>
    <!-- 禁用 -->
    <l-component-display title="禁用状态" :code="disabledCode" language="html" description="你可以在 l-radio-group 组件中添加 disabled 属性来设置禁用状态。">
      <div slot="component-display">
        <div>
          <l-radio-group v-model="value" disabled @change="onChange">
            <l-radio label="辣椒炒肉" value="ljcr" />
            <l-radio label="虾滑蒸蛋" value="xhzd" />
            <l-radio label="红烧排骨" value="hspg" />
          </l-radio-group>
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
import LRadio from 'components/Radio/radio.vue'
import LRadioGroup from 'components/Radio/radioGroup.vue'
export default {
  components: { LRadio, LRadioGroup },
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
