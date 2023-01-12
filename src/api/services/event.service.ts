// Core
import { ApiService } from '@/api'
// Types
import { AxiosResponse } from 'axios'
import { EventFilter, EventList, IEventDetail } from '@/types/views/event'

type EventServices = {
  getList(params?: EventFilter | {}): Promise<AxiosResponse<EventList>>
  show(id: string | number, params?: {}): Promise<AxiosResponse<IEventDetail>>
  create(params: {}): Promise<AxiosResponse<any>>
  edit(params: { id: string | number }): Promise<AxiosResponse<any>>
  remove(id: string | number, params?: {}): Promise<AxiosResponse<any>>
}

const BaseUrl = 'events'

export const EventService: EventServices = {
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
