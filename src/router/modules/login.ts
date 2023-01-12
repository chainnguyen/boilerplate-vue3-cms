// Core
import { LoginGuard, ResolveGuard } from '@/router/guards'
import { page } from '@/router/modules'
// Types
import { AppRouteModule } from '@/types/route'

const login: AppRouteModule[] = [
  {
    path: '/login',
    name: 'auth.login',
    meta: { layout: 'auth' },
    component: page('auth/Login.vue'),
    beforeEnter: ResolveGuard([LoginGuard]),
  },
]

export default login
