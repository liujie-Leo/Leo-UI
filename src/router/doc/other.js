const route = [
  {
    path: '/doc/calendar',
    name: 'calendarDoc',
    component: () => import('@/views/componentsDoc/other/calendar/calendar.vue'),
    meta: {
      title: 'Calendar 日历'
    }
  },
  {
    path: '/doc/dialog',
    name: 'dialogDoc',
    component: () => import('@/views/componentsDoc/other/dialog/dialog.vue'),
    meta: {
      title: 'Dialog 对话框'
    }
  },
  {
    path: '/doc/swiper',
    name: 'swiperDoc',
    component: () => import('@/views/componentsDoc/other/swiper/swiper.vue'),
    meta: {
      title: 'Swiper 轮播图'
    }
  }
]
export default route
