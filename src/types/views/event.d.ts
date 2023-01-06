type Status = 'upcoming' | 'happening' | 'happened'

export interface IEventDetail {
  id: string | number
  status: Status
  name: string
  background_music_name: string
  background_music: string
  is_priority?: 0 | 1 | number
  start_time: string
  created_at: string
  updated_at: string
}

export type EventList = IEventDetail[]
