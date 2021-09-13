const route = [
  {
    path: '/doc/message',
    name: 'messageDoc',
    component: () => import('@/views/componentsDoc/notification/message/message.vue'),
    meta: {
      title: 'Message 消息'
    }
  }
]
export default route
