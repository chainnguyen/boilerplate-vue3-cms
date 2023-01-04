// Core
import { ApiService } from '@/api'
// Types
import { StoreLoginParam, StoreResetPasswordParam } from '@/types/store'

type AuthServices = {
  login(data: StoreLoginParam): Promise<any>
  logout(): Promise<any>
  me(): Promise<any>
  resetPassword(data: StoreResetPasswordParam): Promise<any>
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
