<template>
  <div id="button-doc" :class="['l-button','p-12 pt-4']">
    <l-title>Button按钮</l-title>
    <l-parag>按钮用于开始一个即时操作。</l-parag>
    <l-title>何时使用</l-title>
    <l-parag>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</l-parag>
    <l-title>组件注册</l-title>
    <l-code language="js" :code="registerCode" />
    <l-title>代码演示</l-title>
    <!-- 基本用法 -->
    <div>
      <l-component-display title="基本用法" :code="baseUseCode" language="html" description="使用type、round属性来定义 Button 的样式。">
        <div slot="component-display">
          <div>
            <l-button>默认按钮</l-button>
            <l-button type="primary">主要按钮</l-button>
            <l-button type="success">成功按钮</l-button>
            <l-button type="info">信息按钮</l-button>
            <l-button type="warn">警告按钮</l-button>
            <l-button type="danger">危险按钮</l-button>
          </div>
          <div class="mt-3">
            <l-button type="primary" round="none">主要按钮</l-button>
            <l-button type="success">成功按钮</l-button>
            <l-button type="info" round="large">信息按钮</l-button>
            <l-button type="warn" round="full">警告按钮</l-button>
          </div>
        </div>
      </l-component-display>

      <!-- 禁用按钮 -->
      <l-component-display title="禁用按钮" :code="prohibitCode" language="html" description="你可以使用disabled属性来定义按钮是否可用，它接受一个Boolean值。">
        <div slot="component-display">
          <div>
            <l-button disabled>默认按钮</l-button>
            <l-button type="primary" disabled>主要按钮</l-button>
            <l-button type="success" disabled>成功按钮</l-button>
            <l-button type="info" disabled>信息按钮</l-button>
            <l-button type="warn" disabled>警告按钮</l-button>
            <l-button type="danger" disabled>危险按钮</l-button>
          </div>
        </div>
      </l-component-display>
      <!-- 加载中 -->
      <l-component-display title="加载中" :code="loadingCode" language="html" description="要设置为 loading 状态，只要设置loading属性为true即可。">
        <div slot="component-display">
          <div>
            <l-button type="primary" :loading="true">加载中</l-button>
          </div>
        </div>
      </l-component-display>
      <!-- 不同尺寸 -->
      <l-component-display title="不同尺寸" :code="sizeCode" language="html" description="额外的尺寸：medium、small、mini，通过设置size属性来配置它们。">
        <div slot="component-display">
          <div>
            <l-button type="primary" size="large">主要按钮</l-button>
            <l-button type="success" size="default">成功按钮</l-button>
            <l-button type="danger" size="small">危险按钮</l-button>
          </div>
        </div>
      </l-component-display>
    </div>
  </div>
</template>
<script>
import Prism from 'prismjs'
import registerCode from './code/register'
import baseUseCode from './code/baseUse'
import prohibitCode from './code/prohibit'
import loadingCode from './code/loading'
import sizeCode from './code/size'
export default {
  data () {
    return {
      baseUseCode,
      registerCode,
      prohibitCode,
      loadingCode,
      sizeCode
    }
  },
  mounted () {
    // 高亮渲染
    Prism.highlightAll()
  },
  methods: {

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
