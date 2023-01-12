import { RecordType } from '@/types/global'

export type FrameStatus = 'applying' | 'not_apply'

export type FrameFilter = {
  keyword: string | null
  status: FrameStatus | undefined
}

export interface IFrameDetail {
  id: string | number
  status: FrameStatus
  type: RecordType
  name: string
  display_order: number
  frame_name: string
  frame_image: string
  updated_at: string
}

export type FrameList = IFrameDetail[]
