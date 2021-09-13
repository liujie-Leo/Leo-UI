<template>
  <div id="button-doc" :class="['l-button','p-12 pt-4']">
    <l-title>Message消息</l-title>
    <l-parag>全局展示操作反馈信息。</l-parag>
    <l-title>何时使用</l-title>
    <l-parag>以轻量级的方式提供成功、警告和错误等反馈信息。</l-parag>
    <l-title>组件注册</l-title>
    <l-code language="js" :code="registerCode" />
    <l-title>代码演示</l-title>
    <!-- 基本用法 -->
    <l-component-display title="基本用法" :code="baseUseCode" language="html" description="使用type、round属性来定义 Button 的样式。">
      <div slot="component-display">
        <l-button type="success" @click="onClick('success')">成功信息</l-button>
        <l-button type="info" @click="onClick('info')">普通信息</l-button>
        <l-button type="warn" @click="onClick('warn')">警告信息</l-button>
        <l-button type="danger" @click="onClick('error')">错误信息</l-button>
      </div>
    </l-component-display>
    <!-- 自定义显示持续时间 -->
    <l-component-display title="自定义持续时间" :code="customDurationCode" language="html" description="通过 duration 参数设置 Message 持续时间。">
      <div slot="component-display">
        <l-button type="success" @click="onClickCustomDuration('success')">成功信息</l-button>
      </div>
    </l-component-display>
  </div>
</template>
<script>
import Prism from 'prismjs'
import baseUseCode from './code/baseUse'
import registerCode from './code/register'
import customDurationCode from './code/customDuration'
export default {
  data () {
    return {
      baseUseCode: baseUseCode,
      registerCode,
      customDurationCode
    }
  },
  mounted () {
    // 高亮渲染
    Prism.highlightAll()
  },
  methods: {
    onClick (type) {
      switch (type) {
        case 'success':
          this.$message.success('成功信息')
          break
        case 'info':
          this.$message.info('普通信息')
          break
        case 'warn':
          this.$message.warn('警告信息')
          break
        case 'error':
          this.$message.error('错误信息')
          break
      }
    },
    onClickCustomDuration () {
      this.$message({
        type: 'success',
        duration: 5000,
        message: '成功信息'
      })
    }
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
