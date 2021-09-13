const code = `
<template>
  <div>
    <l-calendar @change="onChange" />
  </div>
</template>
<script>
export default {
  methods: {
    onChange(checked) {
      console.log(checked)
    },
  },
};
</script> `
export default code
