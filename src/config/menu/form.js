export default [
  {
    title: 'Radio 单选框',
    name: 'radioDoc',
    component: () => import('@/views/componentsDoc/form/radio/radio.vue'),
    path: '/doc/radio',
    meta: {
      title: 'Radio 单选框'
    }
  },
  {
    title: 'Input 输入框',
    name: 'inputDoc',
    component: () => import('@/views/componentsDoc/form/input/input.vue'),
    path: '/doc/input',
    meta: {
      title: 'Input 输入框'
    }
  },
  {
    title: 'InputNumber 计数器',
    name: 'inputNumberDoc',
    component: () => import('@/views/componentsDoc/form/inputNumber/inputNumber.vue'),
    path: '/doc/inputNumber',
    meta: {
      title: 'InputNumber 计数器'
    }
  },
  {
    title: 'Select 选择器',
    name: 'selectDoc',
    path: '/doc/select',
    component: () => import('@/views/componentsDoc/form/select/select.vue'),
    meta: {
      title: 'Select 选择器'
    }
  },
  {
    title: 'Switch 开关',
    name: 'switchDoc',
    path: '/doc/switch',
    component: () => import('@/views/componentsDoc/form/switch/switch.vue'),
    meta: {
      title: 'Switch 开关'
    }
  }
]
