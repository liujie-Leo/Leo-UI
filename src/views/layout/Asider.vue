<template>
  <div :class="['w-48','shadow','overflow-y-auto','pt-4','pb-24','asider','relative','dark:bg-gray-900']">
    <div v-for="item in menus" :key="item.title" class="level-1">
      <div class="text-gray-400 text-xs mt-10 pl-8">{{ item.title }}</div>
      <div
        v-for="subItem in item.children"
        :key="subItem.title"
        :class="['level-2','text-gray-600','text-sm','mt-4','cursor-pointer','hover:text-blue-500','tracking-wide','pl-8',{'text-blue-500':subItem.path==active}]"
        @click="onClick(subItem)"
      >
        {{ subItem.title }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      menus: [
        {
          title: 'Basic',
          level: 1,
          children: [
            {
              title: 'Button按钮',
              path: '/doc/button',
              level: 2
            }
          ]
        },
        {
          title: 'Form',
          level: 1,
          children: [
            {
              title: 'Radio单选框',
              path: '/doc/radio',
              level: 2
            },
            {
              title: 'Select选择器',
              path: '/doc/select',
              level: 2
            },
            {
              title: 'Switch开关',
              path: '/doc/switch',
              level: 2
            }
          ]
        },
        {
          title: 'Data',
          level: 1,
          children: [
            {
              title: 'Table表格',
              path: '/doc/table',
              level: 2
            }
          ]
        },
        {
          title: 'Notification',
          level: 1,
          children: [
            {
              title: 'Message消息',
              path: '/doc/message',
              level: 2
            }
          ]
        },
        {
          title: 'Other',
          level: 1,
          children: [
            {
              title: 'Calendar日历',
              path: '/doc/calendar',
              level: 2
            },
            {
              title: 'Dialog对话框',
              path: '/doc/dialog',
              level: 2
            },
            {
              title: 'Swiper轮播图',
              path: '/doc/swiper',
              level: 2
            }
          ]
        }
      ],
      active: ''
    }
  },
  mounted () {
    this.active = this.$route.fullPath
  },
  methods: {
    onClick (item) {
      this.active = item.path
      this.$router.push({
        path: item.path
      })
    }
  }
}
</script>
<style lang="less" scoped>
.asider{
  height: calc(100vh - 3rem);
}
::-webkit-scrollbar{
  display: none;
}
</style>
