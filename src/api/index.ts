// Core
import axiosInstance from '@/plugins/axios'
// Types
type ApiServices = {
  get(url: string, params?: {}): Promise<any>
  post(url: string, body?: {}, params?: {}): Promise<any>
  put(url: string, body: {}, params?: {}): Promise<any>
  delete(url: string, params?: {}): Promise<any>
}

export const ApiService: ApiServices = {
  get(url, params = {}) {
    return axiosInstance.get(`${url}`, { params })
  },

  post(url, body, config = {}) {
    return axiosInstance.post(`${url}`, body, config)
  },

  put(url, body, params = {}) {
    return axiosInstance.put(`${url}`, body, { params })
  },

  delete(url, params: {} = {}) {
    return axiosInstance.delete(url, params)
  },
}
