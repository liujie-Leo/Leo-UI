const code = `
<template>
  <div>
    <l-button type="success" @click="onClick('success')">成功信息</l-button>
    <l-button type="info" @click="onClick('info')">普通信息</l-button>
    <l-button type="warn" @click="onClick('warn')">警告信息</l-button>
    <l-button type="danger" @click="onClick('error')">错误信息</l-button>
  </div>
</template>
<script>
export default {
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
  },
};
</script> `
export default code
