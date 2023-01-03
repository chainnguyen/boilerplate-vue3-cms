// Core
import { ResolveGuard, AuthGuard, PermissionGuard } from '@/router/guards'
import { page } from '@/router/routes'
// Layout
import Resource from '@/shared/components/Resource.vue'
// Others
import { PERMISSION } from '@/enums/permission.enum'

export default [
  {
    path: '/',
    name: 'home',
    redirect: '/management-event',
    component: Resource,
    children: [
      {
        path: '/management-event',
        name: 'management_event',
        component: page('management_event/Index.vue'),
        meta: {
          breadcrumb: [
            { title: 'home_page' },
            { title: 'management_event.page_title' },
            { title: 'management_event.page_list' }
          ],
          role: [PERMISSION.ADMIN]
        },
        beforeEnter: ResolveGuard([PermissionGuard])
      },
      {
        path: '/create-event',
        name: 'create_event',
        component: page('management_event/Create.vue'),
        meta: {
          breadcrumb: [
            { title: 'home_page', routeName: 'home' },
            { title: 'management_event.page_title', routeName: 'management_event' },
            { title: 'management_event.create_event' }
          ],
          role: [PERMISSION.ADMIN]
        },
        beforeEnter: ResolveGuard([PermissionGuard])
      },
      {
        path: '/edit-event/:id',
        name: 'edit_event',
        component: page('management_event/Edit.vue'),
        meta: {
          breadcrumb: [
            { title: 'home_page', routeName: 'home' },
            { title: 'management_event.page_title', routeName: 'management_event' },
            { title: 'management_event.edit_event' }
          ],
          role: [PERMISSION.ADMIN]
        },
        beforeEnter: ResolveGuard([PermissionGuard])
      }
    ],
    beforeEnter: ResolveGuard([AuthGuard])
  }
]
