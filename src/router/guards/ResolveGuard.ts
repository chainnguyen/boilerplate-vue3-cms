import isUndefined from 'lodash-es/isUndefined'
import isArray from 'lodash-es/isArray'
// Types
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

const executeGuards = (
  guards: any,
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const guardsLeft = guards.slice(0)
  const nextGuard = guardsLeft.shift()
  if (isUndefined(nextGuard)) {
    next()
    return
  }
  nextGuard(to, from, (nextArg: any) => {
    if (isUndefined(nextArg)) {
      executeGuards(guardsLeft, to, from, next)
      return
    }
    next(nextArg)
  })
}

export const ResolveGuard = (guards: any) => {
  if (!isArray(guards)) {
    throw new Error('Guards must be an array')
  }
  return (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    return executeGuards(guards, to, from, next)
  }
}
