const code = `
<template>
  <div>
    <l-input v-model="value" type="password" @change="onChange"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value:''
    };
  },
  methods: {
    onChange(value) {
      console.log(value)
    },
  },
};
</script> `
export default code
