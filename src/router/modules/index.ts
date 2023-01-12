import { keys, forEach } from 'lodash-es'
// Types
import { AppRouteModule, IAppRouteRecordRaw } from '@/types/route'

export function page(path: string) {
  return () => import(/* webpackChunkName: "[request]" */ `@/views/${path}`)
}

const modulesPath = import.meta.globEager('./modules/**/*.ts') as any
const moduleList: AppRouteModule[] = []

forEach(keys(modulesPath), (key) => {
  const mod = modulesPath[key]?.default || {}
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  moduleList.push(...modList)
})

const root: IAppRouteRecordRaw = {
  path: '/',
  name: 'home',
  redirect: '/management-event',
}

export const routes = [root, ...moduleList]
