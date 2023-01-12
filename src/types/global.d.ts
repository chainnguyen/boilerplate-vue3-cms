export type optional<Type> = {
  [Property in keyof Type]+?: Type[Property]
}

export type mutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property]
}

export type optionalAndMutable<Type> = {
  -readonly [Property in keyof Type]+?: Type[Property]
}

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

export type DisabledType =
  | 'before_today'
  | 'today'
  | 'after_today'
  | 'before_and_today'
  | 'after_and_today'
