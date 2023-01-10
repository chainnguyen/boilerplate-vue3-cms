// Store
import store from '@/shared/store'
// Types
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export const PermissionGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  // Check permission of page
  const { role } = to.meta
  if (!role.includes(store.state.auth.userProfile.role)) {
    return next({ name: 'not_authenticated' })
  }

  next()
}
