import Vue from 'vue'
import VueRouter from 'vue-router'

// doc router
import docRoutes from './doc'

import { scrollTop, computeTop } from 'utils/common'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(e => e)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: 'L-Component'
    }
  },
  {
    path: '/doc',
    name: 'Document',
    component: () => import('../views/doc.vue'),
    children: [...docRoutes],
    meta: {
      title: 'L-Component'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

router.afterEach((to, from) => {
  const isDocRoute = to.fullPath.split('/').includes('doc')
  if (isDocRoute) {
    // 滚动条移动至顶部
    scrollTop()
    // 计算菜单信息
    setTimeout(() => {
      const menus = computeTop()
      router.app.$options.store.commit('UPDATE_MENUS', menus)
    }, 0)
  }
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = '默认title'
  }
  next()
})

export default router
