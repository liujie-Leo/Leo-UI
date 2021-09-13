<template>
  <div class="flex-1 mt-8">
    <div class="border rounded">
      <div class="py-3 text-center text bg-gray-200 text-gray-900 doc-subtitle">{{ title }}</div>
      <div class="py-6 px-5 ">
        <slot name="component-display" />
      </div>
      <div v-if="showCode" class="code px-5">
        <div class="text-gray-700 text-sm pl-1">{{ description }}</div>
        <l-code :language="language" :code="code" />
      </div>
      <div
        :class="['text-gray-500', 'transform','hover:text-blue-500','transition','hover:scale-125' ,'text-center', 'cursor-pointer', 'pt-2',{'rotate-0':showCode},{'rotate-180':!showCode}]"
        @click="onShowCode"
      >
        ^
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '标题'
    },
    code: {
      type: String,
      default: ''
    },
    language: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      showCode: false
    }
  },
  methods: {
    onShowCode () {
      this.showCode = !this.showCode
    }
  }
}
</script>
<style lang="less" scoped>

</style>
