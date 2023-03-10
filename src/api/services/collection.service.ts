// Core
import { ApiService } from '@/api'
// Types
import { AxiosResponse } from 'axios'
import { CollectionFilter, CollectionList, ICollectionDetail } from '@/types/views/collection'

type CollectionServices = {
  getList(params?: CollectionFilter | {}): Promise<AxiosResponse<CollectionList>>
  show(id: string | number, params?: {}): Promise<AxiosResponse<ICollectionDetail>>
  create(params: {}): Promise<AxiosResponse<any>>
  edit(params: { id: string | number }): Promise<AxiosResponse<any>>
  remove(id: string | number, params?: {}): Promise<AxiosResponse<any>>
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
    return ApiService.put(`${BaseUrl}/${params.id}`, params).then((resp) => resp)
  },

  async remove(id, params = {}) {
    return ApiService.delete(`${BaseUrl}/${id}`, params).then((resp) => resp)
  },
}
