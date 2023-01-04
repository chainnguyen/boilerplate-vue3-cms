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

export interface IFreeObject {
  [key: string]: any
}
