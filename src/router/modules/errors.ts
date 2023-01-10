import { page } from '@/router/routes'

export default [
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
    path: '/not-found',
    name: 'not_found',
    meta: {},
    component: page('error/NotFound.vue'),
  },
]
