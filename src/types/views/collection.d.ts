export type CollectionStatus = 'applying' | 'not_apply'

export type CollectionFilter = {
  keyword: string | null
  status: CollectionStatus | undefined
}

export interface ICollectionDetail {
  id: string | number
  status: CollectionStatus
  name: string
  display_order: number
  frame_image: string
  updated_at: string
}

export type CollectionList = ICollectionDetail[]
