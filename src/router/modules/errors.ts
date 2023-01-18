// Core
import { page } from '@/router/modules'
// Types
import { AppRouteModule } from '@/types/route'

const errors: AppRouteModule[] = [
  // Server Error
  {
    path: '/server-error',
    name: 'server_error',
    meta: {},
    component: page('error/ServerError.vue'),
  },
  // Not authenticated
  {
    path: '/not-authenticated',
    name: 'not_authenticated',
    meta: {},
    component: page('error/NotAuthenticated.vue'),
  },
  // Not found
  {
    path: '/:pathMatch(.*)*',
    name: 'not_found',
    meta: {},
    component: page('error/NotFound.vue'),
  },
]

export default errors
