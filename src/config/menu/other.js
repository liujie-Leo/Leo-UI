export default [
  {
    title: 'Calendar 日历',
    name: 'calendarDoc',
    path: '/doc/calendar',
    component: () =>
      import('@/views/componentsDoc/other/calendar/calendar.vue'),
    meta: {
      title: 'Calendar 日历'
    }
  },
  {
    title: 'Dialog 对话框',
    path: '/doc/dialog',
    name: 'dialogDoc',
    component: () => import('@/views/componentsDoc/other/dialog/dialog.vue'),
    meta: {
      title: 'Dialog 对话框'
    }
  },
  {
    title: 'Swiper 轮播图',
    path: '/doc/swiper',
    name: 'swiperDoc',
    component: () => import('@/views/componentsDoc/other/swiper/swiper.vue'),
    meta: {
      title: 'Swiper 轮播图'
    }
  }
]
