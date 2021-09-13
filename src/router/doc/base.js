const route = [
  {
    path: '/doc/button',
    name: 'buttonDoc',
    component: () => import('@/views/componentsDoc/base/button/button.vue'),
    meta: {
      title: 'Button 按钮'
    }
  }
]

export default route
