export type EventStatus = 'upcoming' | 'happening' | 'happened'

export type EventFilter = {
  event_name: string | null
  start_time: string | null
  background_music: File | null
  effect_movie_frame: string[]
  background_frame: string[]
  collection: string[]
}

export interface IEventDetail {
  id: string | number
  status: EventStatus
  name: string
  background_music_name: string
  background_music: string
  is_priority?: 0 | 1 | number
  start_time: string
  created_at: string
  updated_at: string
}

export type EventList = IEventDetail[]
