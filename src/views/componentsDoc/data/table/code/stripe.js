const code = `
<template>
  <div>
    <l-table :data="data" stripe>
      <l-table-column label="姓名" prop="name" />
      <l-table-column label="年龄" prop="age" />
      <l-table-column label="学校" prop="school" />
    </l-table>
  </div>
</template>
<script>
export default {
  data(){
    return {
      data:[]
    }
  }
  mounted(){
    this.initData()
  },
  methods: {
    initData () {
      const dataObj = {
        name: 'Leo',
        age: 23,
        school: 'Hunan Argricature University'
      }
      for (let i = 0; i < 5; i++) {
        this.data.push(dataObj)
      }
    }
  },
};
</script> `
export default code
