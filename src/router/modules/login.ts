import { LoginGuard, ResolveGuard } from '@/router/guards'
import { page } from '@/router/routes'

export default [
  {
    path: '/login',
    name: 'auth.login',
    meta: { layout: 'auth' },
    component: page('auth/Login.vue'),
    // beforeEnter: ResolveGuard([LoginGuard]),
  },
]
