export type ResponseData = {
  status: null
  success: boolean
  message?: string
}

export type ResponseSuccess = {}

export type ResponseError = {
  response: {
    data: ResponseData
  }
}

export interface IPagination {
  total: number
  current_page: number
}

export type RecordType = 'background' | 'effect_movie'

export interface IFreeObject {
  [key: string]: any
}

export type StandardObject = {
  id: string | number
  name: string
  value: string
}
