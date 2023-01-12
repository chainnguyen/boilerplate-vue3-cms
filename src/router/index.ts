// Core
import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  NavigationGuardNext,
  RouteLocationNormalized,
  RouteRecordNormalized,
} from 'vue-router'
import { routes } from '@/router/modules'
// Others
import store from '@/shared/store'
import head from 'lodash-es/head'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_ROUTER_BASE as string),
  routes: routes as unknown as RouteRecordRaw[],
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
  console.log(to.matched)
  const currentRoute: RouteRecordNormalized | undefined = head(to.matched)
  store.commit('SET_LAYOUT', {
    layout: (currentRoute && currentRoute.meta.layout) || 'default',
  })
  next()
}

/**
 * Global After Hooks
 *
 * @returns {Promise<void>}
 */
const afterEach = async () => {}

router.beforeEach(beforeEach)
router.afterEach(afterEach)

export default router
