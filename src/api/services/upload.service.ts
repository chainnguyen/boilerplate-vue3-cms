// Core
import { ApiService } from '@/api'
// Types
import { AxiosResponse } from 'axios'

type UploadServices = {
  upload(params: { file: File }): Promise<AxiosResponse<any>>
}

export const UploadService: UploadServices = {
  async upload(params) {
    return ApiService.post('/upload', params)
  },
}
