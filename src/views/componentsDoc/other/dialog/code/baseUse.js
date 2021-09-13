const code = `
<template>
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
</template>
<script>
export default {
  data(){
    return {
      visible:false
    }
  },
  methods: {
    openDialog () {
      this.visible = true
    },
    onDialogClose () {
      this.visible = false
    }
  },
};
</script> `
export default code
