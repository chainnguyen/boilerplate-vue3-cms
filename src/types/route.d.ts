import { defineComponent } from 'vue'
import { RouteRecordRaw, RouteMeta } from 'vue-router'

type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>)

export interface IAppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  name?: string
  meta?: RouteMeta
  component?: Component | string
  components?: Component
  children?: AppRouteRecordRaw[]
  props?: any
  fullPath?: string
}

export type AppRouteModule = IAppRouteRecordRaw
