const code = `
<template>
  <div>
    <l-radio-group v-model="value" @change="onChange">
      <l-radio label="辣椒炒肉" value="ljcr" />
      <l-radio label="虾滑蒸蛋" value="xhzd" />
      <l-radio label="红烧排骨" value="hspg" />
    </l-radio-group>
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
