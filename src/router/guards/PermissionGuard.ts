// Store
import { useStore } from 'vuex'
// Types
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export const PermissionGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const store = useStore()
  const { role } = to.meta
  // @ts-ignore
  if (!role.includes(store.state.auth.userProfile?.role)) {
    return next({ name: 'not_authenticated' })
  }

  next()
}
