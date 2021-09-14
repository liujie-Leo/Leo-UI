<template>
  <div :class="['l-button','p-12 pt-4']">
    <l-title>Dialog对话框</l-title>
    <l-parag>对话框。</l-parag>
    <l-title>何时使用</l-title>
    <l-parag>需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Dialog 在当前页面正中打开一个浮层，承载相应的操作。</l-parag>
    <l-title>组件注册</l-title>
    <l-code language="js" :code="registerCode" />
    <l-title>代码演示</l-title>
    <!-- 基本用法 -->
    <l-component-display title="基本用法" :code="baseCode" language="html" description="最简单的用法。">
      <div slot="component-display">
        <div>
          <l-button type="primary" @click="openDialog">打开对话框</l-button>
          <l-dialog :visible="visible" title="对话框标题" @close="onDialogClose">
            <div class="text-gray-500 py-4 text-sm">content</div>
            <div slot="footer" class="flex justify-end">
              <l-button size="small" @click="onDialogClose">关闭</l-button>
              <l-button size="small" type="primary" @click="onDialogClose">确认</l-button>
            </div>
          </l-dialog>
        </div>
      </div>
    </l-component-display>
  </div>
</template>
<script>
import Prism from 'prismjs'
import baseCode from './code/baseUse'
import registerCode from './code/register'
import LDialog from 'components/other/Dialog/dialog.vue'
export default {
  components: { LDialog },
  data () {
    return {
      baseCode,
      registerCode,
      visible: false
    }
  },
  mounted () {
    // 高亮渲染
    Prism.highlightAll()
  },
  methods: {
    openDialog () {
      this.visible = true
    },
    onDialogClose () {
      this.visible = false
    }
  }
}
</script>
<style lang="less" scoped>
</style>
