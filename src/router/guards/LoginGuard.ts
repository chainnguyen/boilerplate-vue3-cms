// Store
// import store from '@/shared/store'
// Types
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export const LoginGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  // if (store.state.auth.bearerToken) {
  //   return next({ name: 'home' })
  // }
  next()
}
