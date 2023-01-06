// Core
import { ApiService } from '@/api'
// Types
import { AxiosResponse } from 'axios'
import { StoreLoginParam, StoreResetPasswordParam } from '@/types/store'

type AuthServices = {
  login(data: StoreLoginParam): Promise<AxiosResponse<any>>
  logout(): Promise<AxiosResponse<any>>
  me(): Promise<AxiosResponse<any>>
  resetPassword(data: StoreResetPasswordParam): Promise<AxiosResponse<any>>
}

export const AuthService: AuthServices = {
  async login(data) {
    return ApiService.post('/user/login', data)
  },

  async logout() {
    return ApiService.post('/user/logout')
  },

  async me() {
    return ApiService.get('/user/my_page')
  },

  async resetPassword(data) {
    return ApiService.post('/user/reset-password', data)
  },
}
