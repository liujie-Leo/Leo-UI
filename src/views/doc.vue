<template>
  <div>
    <Header />
    <div class="content flex items-start">
      <Asider class="asider" />
      <Content />
    </div>
  </div>
</template>
<script>
import Header from './layout/Header.vue'
import Asider from './layout/Asider.vue'
import Content from './layout/Content.vue'
export default {
  components: { Header, Asider, Content },
  data () {
    return {

    }
  }
}
</script>
<style lang="less" scoped>

</style>
