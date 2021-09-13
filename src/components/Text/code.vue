<template>
  <div class="l-code">
    <pre>
      <code :class="['language-'+language]" v-text="code" />
    </pre>
  </div>
</template>
<script>
import Prism from 'prismjs'
export default {
  props: {
    code: {
      type: String,
      default: ''
    },
    language: {
      type: String,
      default: 'html'
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
  padding-top: 0;
  // box-shadow: 0px 0px 4px rgba(0, 0, 0, .1);
  padding-bottom:0;
  border: 1px solid rgba(0, 0, 0, .1);
}
pre[class*="language-"]::selection,
pre[class*="language-"] ::selection,
code[class*="language-"]::selection,
code[class*="language-"] ::selection {
    background: #4E81EE;
    color:#fff;
}
</style>
