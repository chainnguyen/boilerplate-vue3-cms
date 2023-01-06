import { RecordType } from '@/types/global'

type Status = 'applying' | 'not_apply'

export interface IFrameDetail {
  id: string | number
  status: Status
  type: RecordType
  name: string
  display_order: number
  frame_name: string
  frame_image: string
  updated_at: string
}

export type FrameList = IFrameDetail[]
