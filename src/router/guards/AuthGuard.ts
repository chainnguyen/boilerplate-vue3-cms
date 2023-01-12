// Store
import { useStore } from 'vuex'
// Types
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export const AuthGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const store = useStore()
  // Check not has token
  if (!store.state.auth.bearerToken) {
    return next({ name: 'auth.login' })
  }

  // Check information user is empty
  if (!Object.keys(store.state.auth.userProfile).length) {
    await store.dispatch('auth/userProfile')
  }

  next()
}
