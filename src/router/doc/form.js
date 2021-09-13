const route = [
  {
    path: '/doc/radio',
    name: 'radioDoc',
    component: () => import('@/views/componentsDoc/form/radio/radio.vue'),
    meta: {
      title: 'Radio 单选框'
    }
  },
  {
    path: '/doc/input',
    name: 'inputDoc',
    component: () => import('@/views/componentsDoc/form/input/input.vue'),
    meta: {
      title: 'Input 输入框'
    }
  },
  {
    path: '/doc/select',
    name: 'selectDoc',
    component: () => import('@/views/componentsDoc/form/select/select.vue'),
    meta: {
      title: 'Select 选择器'
    }
  },
  {
    path: '/doc/switch',
    name: 'switchDoc',
    component: () => import('@/views/componentsDoc/form/switch/switch.vue'),
    meta: {
      title: 'Switch 开关'
    }
  }
]

export default route
