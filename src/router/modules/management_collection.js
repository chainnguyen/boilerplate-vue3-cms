// Core
import { ResolveGuard, AuthGuard, PermissionGuard } from '@/router/guards'
import { page } from '@/router/routes'
// Layout
import Resource from '@/shared/components/Resource.vue'
// Others
import { PERMISSION } from '@/enums/permission.enum'

export default [
  {
    path: '/management-collection',
    component: Resource,
    children: [
      {
        path: '',
        name: 'management_collection',
        component: page('management_collection/Index.vue'),
        meta: {
          breadcrumb: [
            { title: 'home_page' },
            { title: 'management_collection.page_title' },
            { title: 'management_collection.page_list' }
          ],
          role: [PERMISSION.ADMIN]
        },
        beforeEnter: ResolveGuard([PermissionGuard])
      },
      {
        path: '/create-collection',
        name: 'create_collection',
        component: page('management_collection/Create.vue'),
        meta: {
          breadcrumb: [
            { title: 'home_page', routeName: 'home' },
            { title: 'management_collection.page_title', routeName: 'management_collection' },
            { title: 'management_collection.create_collection' }
          ],
          role: [PERMISSION.ADMIN]
        },
        beforeEnter: ResolveGuard([PermissionGuard])
      },
      {
        path: '/edit-collection/:id',
        name: 'edit_collection',
        component: page('management_collection/Edit.vue'),
        meta: {
          breadcrumb: [
            { title: 'home_page', routeName: 'home' },
            { title: 'management_collection.page_title', routeName: 'management_collection' },
            { title: 'management_collection.edit_collection' }
          ],
          role: [PERMISSION.ADMIN]
        },
        beforeEnter: ResolveGuard([PermissionGuard])
      }
    ],
    beforeEnter: ResolveGuard([AuthGuard])
  }
]
