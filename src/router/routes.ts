// Types
import { RouteRecordRaw } from 'vue-router'
/* Route module */
import LoginRoute from './modules/login'
import ErrorsRoutes from './modules/errors'

export function page(path: string) {
  return () => import(/* webpackChunkName: "[request]" */ `@/views/${path}`)
}

export const routes: RouteRecordRaw[] = [...LoginRoute, ...ErrorsRoutes]
