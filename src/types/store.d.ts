import { IPagination } from '@/types/global'

export type StoreToken = {
  token: string
  expires: number | Date | undefined
}

export type StoreLoginParam = {
  username: string | null
  password: string | null
}

export type StoreResetPasswordParam = {
  username: string | null
  old_password: string | null
  new_password: string | null
}

export type StoreUserProfile =
  | {
      id: string
      role: string
      name: string
      avatar: string
      created_at: string
    }
  | {}

export interface ICommonModuleState {
  list: {}[] | null
  detail: {} | null
  pagination: IPagination | null
}
