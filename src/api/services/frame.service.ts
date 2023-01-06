// Core
import { ApiService } from '@/api'
// Types
import { AxiosResponse } from 'axios'
import { FrameList, IFrameDetail } from '@/types/views/frame'

type FrameServices = {
  getList(params?: {}): Promise<AxiosResponse<FrameList>>
  show(id: string | number, params?: {}): Promise<AxiosResponse<IFrameDetail>>
  create(params: {}): Promise<AxiosResponse<any>>
  edit(params: { id: string | number }): Promise<AxiosResponse<any>>
  remove(id: string | number, params?: {}): Promise<AxiosResponse<any>>
}

const BaseUrl = 'frame'

export const FrameService: FrameServices = {
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
