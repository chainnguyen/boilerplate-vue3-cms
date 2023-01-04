// Core
import { ResolveGuard, AuthGuard, PermissionGuard } from '@/router/guards'
import { page } from '@/router/routes'
// Layout
import Resource from '@/shared/components/Resource.vue'
// Others
import { PERMISSION } from '@/enums/permission.enum'

export default [
  {
    path: '/management-frame',
    component: Resource,
    children: [
      {
        path: '',
        name: 'management_frame',
        component: page('management_frame/Index.vue'),
        meta: {
          breadcrumb: [
            { title: 'home_page' },
            { title: 'management_frame.page_title' },
            { title: 'management_frame.page_list' },
          ],
          role: [PERMISSION.ADMIN],
        },
        beforeEnter: ResolveGuard([PermissionGuard]),
      },
      {
        path: '/create-frame',
        name: 'create_frame',
        component: page('management_frame/Create.vue'),
        meta: {
          breadcrumb: [
            { title: 'home_page', routeName: 'home' },
            {
              title: 'management_frame.page_title',
              routeName: 'management_frame',
            },
            { title: 'management_frame.create_frame' },
          ],
          role: [PERMISSION.ADMIN],
        },
        beforeEnter: ResolveGuard([PermissionGuard]),
      },
      {
        path: '/edit-frame/:id',
        name: 'edit_frame',
        component: page('management_frame/Edit.vue'),
        meta: {
          breadcrumb: [
            { title: 'home_page', routeName: 'home' },
            {
              title: 'management_frame.page_title',
              routeName: 'management_frame',
            },
            { title: 'management_frame.edit_frame' },
          ],
          role: [PERMISSION.ADMIN],
        },
        beforeEnter: ResolveGuard([PermissionGuard]),
      },
    ],
    beforeEnter: ResolveGuard([AuthGuard]),
  },
]
