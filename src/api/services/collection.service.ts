// Core
import { ApiService } from '@/api'
// Types
type CollectionServices = {
  getList(params?: {}): Promise<any>
  show(id: string | number, params?: {}): Promise<any>
  create(params: {}): Promise<any>
  edit(params: { id: string | number }): Promise<any>
  remove(id: string | number, params?: {}): Promise<any>
}

const BaseUrl = 'collections'

export const CollectionService: CollectionServices = {
  async getList(params = {}) {
    return ApiService.get(`${BaseUrl}`, params).then((resp) => resp.data)
  },

  async show(id, params = {}) {
    return ApiService.get(`${BaseUrl}/${id}`, params).then((resp) => resp.data)
  },

  async create(params = {}) {
    return ApiService.post(`${BaseUrl}`, params).then((resp) => resp.data)
  },

  async edit(params) {
    return ApiService.put(`${BaseUrl}/${params.id}`, params).then(
      (resp) => resp
    )
  },

  async remove(id, params = {}) {
    return ApiService.delete(`${BaseUrl}/${id}`, params).then((resp) => resp)
  },
}
