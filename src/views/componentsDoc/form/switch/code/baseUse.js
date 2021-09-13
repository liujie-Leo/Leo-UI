const code = `
<template>
  <div>
    <l-switch v-model="value" @change="onChange" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      value:false
    };
  },
  methods: {
    onChange(checked) {
      
    },
  },
};
</script> `
export default code
