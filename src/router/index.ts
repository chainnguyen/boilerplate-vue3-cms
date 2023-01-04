import {
  createRouter,
  createWebHistory,
  NavigationGuardNext,
  RouteLocationNormalized,
} from 'vue-router'
import { routes } from '@/router/routes'
// import store from '@/shared/store'
// import head from 'lodash-es/head'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_ROUTER_BASE as string),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

/**
 * Global Before Guards
 *
 * @param to
 * @param from
 * @param next
 * @returns {Promise<void>}
 */
const beforeEach = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  // const currentRoute = head(to.matched)
  // store.commit('SET_LAYOUT', { layout: currentRoute.meta.layout || 'default' })
  next()
}

router.beforeEach(beforeEach)

export default router
