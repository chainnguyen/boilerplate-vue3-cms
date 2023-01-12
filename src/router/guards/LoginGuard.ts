// Store
import { useStore } from 'vuex'
// Types
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export const LoginGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const store = useStore()
  if (store.state.auth.bearerToken) {
    return next({ name: 'home' })
  }
  next()
}
