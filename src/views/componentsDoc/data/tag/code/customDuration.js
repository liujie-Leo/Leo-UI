const code = `
<template>
  <div>
    <l-button type="success" @click="onClickCustomDuration('success')">成功信息</l-button>
  </div>
</template>
<script>
export default {
  methods: {
    onClickCustomDuration () {
      this.$message({
        type: 'success',
        duration: 5000,
        message: '成功信息'
      })
    }
  },
};
</script> `
export default code
