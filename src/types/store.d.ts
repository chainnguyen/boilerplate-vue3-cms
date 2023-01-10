import { IPagination } from '@/types/global'
import { AuthState } from '@/shared/store/modules/auth'
import { LoaderState } from '@/shared/store/modules/loader'
import { LanguageState } from '@/shared/store/modules/language'
import { UploadState } from '@/shared/store/modules/upload'
import { IEventState } from '@/shared/store/modules/event'
import { IFrameState } from '@/shared/store/modules/frame'
import { ICollectionState } from '@/shared/store/modules/collection'

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

export interface IModulesStates {
  auth: AuthState
  loader: LoaderState
  language: LanguageState
  upload: UploadState
  event: IEventState
  frame: IFrameState
  collection: ICollectionState
}
