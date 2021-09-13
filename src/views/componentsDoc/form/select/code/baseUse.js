const code = `
<template>
  <div>
    <l-select v-model="value" @change="onChange">
      <l-option label="辣椒炒肉" value="ljcr" />
      <l-option label="虾滑蒸蛋" value="xhzd" />
      <l-option label="红烧排骨" value="hspg" />
    </l-select>
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
    onChange(checked) {
      
    },
  },
};
</script> `
export default code
