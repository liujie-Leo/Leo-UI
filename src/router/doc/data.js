const route = [
  {
    path: '/doc/table',
    name: 'tableDoc',
    component: () => import('@/views/componentsDoc/data/table/table.vue'),
    meta: {
      title: 'Table 表格'
    }
  }
]
export default route
