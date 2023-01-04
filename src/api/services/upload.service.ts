// Core
import { ApiService } from '@/api'
// Types
type UploadServices = {
  upload(form: File): Promise<any>
}

export const UploadService: UploadServices = {
  async upload(form) {
    return ApiService.post('/upload', form)
  },
}
