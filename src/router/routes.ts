// Types
import { RouteRecordRaw } from 'vue-router'
/* Route module */
import LoginRoute from './modules/login'
import ErrorsRoutes from './modules/errors'
import ManagementEventRoute from './modules/management_event'
import ManagementFrameRoute from './modules/management_frame'
import ManagementCollectionRoute from './modules/management_collection'

export function page(path: string) {
  return () => import(/* webpackChunkName: "[request]" */ `@/views/${path}`)
}

export const routes: RouteRecordRaw[] = [
  ...LoginRoute,
  ...ErrorsRoutes,
  ...ManagementEventRoute,
  ...ManagementFrameRoute,
  ...ManagementCollectionRoute,
]
