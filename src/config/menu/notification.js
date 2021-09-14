export default [
  {
    title: 'Message 消息',
    name: 'messageDoc',
    path: '/doc/message',
    component: () =>
      import('@/views/componentsDoc/notification/message/message.vue'),
    meta: {
      title: 'Message 消息'
    }
  }
]
