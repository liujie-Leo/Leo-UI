<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
console.log('####################')
window.addEventListener('message', function (e) {
  console.log('####父级监听到了iframe的事件')
  console.log(e)
})
</script>

<style>
</style>
