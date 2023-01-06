type Status = 'applying' | 'not_apply'

export interface ICollectionDetail {
  id: string | number
  status: Status
  name: string
  display_order: number
  frame_image: string
  updated_at: string
}

export type CollectionList = ICollectionDetail[]
