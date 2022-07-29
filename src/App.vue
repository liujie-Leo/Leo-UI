<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  mounted () {
    const query = document.location.href.split('?')[1]?.split('&') || []
    const queryObj = {}
    query.forEach(item => {
      const i = item.split('=')
      queryObj[i[0]] = i[1]
    })
    if (queryObj.code && queryObj.state) {
      window.location.replace(`${queryObj.state}?code=${queryObj.code}`)
    }
  }
}
</script>
<style>
</style>
