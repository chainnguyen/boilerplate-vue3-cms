// API
import { EventService } from '@/api/services/event.service'
// Others
import { EVENT_DATA } from '@/enums/dummy-data.enum'
// Types
import { ActionContext, ActionTree, GetterTree, MutationTree } from 'vuex'
import { IPagination, ResponseError, ResponseSuccess } from '@/types/global'
import { ICommonModuleState } from '@/types/store'
import { EventList, IEventDetail } from '@/types/views/event'

// Declare type and value of state
export interface IEventState extends ICommonModuleState {}
const initialState: IEventState = {
  list: null,
  detail: null,
  pagination: null,
}
export const state: IEventState = { ...initialState }
// END - Declare type and value of state

// Declare type and value of getters
export type EventGetters = {}
const getters: GetterTree<IEventState, IEventState> & EventGetters = {}
// END - Declare type and value of getters

// Declare type and value of mutations
export type EventMutations<S = IEventState> = {
  SET_DETAIL(state: S, payload: IEventDetail): void
  SET_LIST(state: S, payload: EventList): void
  SET_PAGINATION(state: S, payload: IPagination): void
}
const mutations: MutationTree<IEventState> & EventMutations = {
  SET_DETAIL(state, payload) {
    state.detail = payload
  },
  SET_LIST(state, payload) {
    state.list = payload
  },
  SET_PAGINATION(state, payload) {
    state.pagination = payload
  },
}
// END - Declare type and value of mutations

// Declare type and value of actions
type AugmentedActionContext = {
  commit<K extends keyof EventMutations>(
    key: K,
    payload?: Parameters<EventMutations[K]>[1]
  ): ReturnType<EventMutations[K]>
  getters<K extends keyof EventGetters>(
    key: K,
    payload: Parameters<EventGetters[K]>[1]
  ): ReturnType<EventGetters[K]>
} & Omit<ActionContext<IEventState, IEventState>, 'commit'>

export type EventActions = {
  getEventList({ commit }: AugmentedActionContext, params?: {}): EventList
  createEvent({ commit }: AugmentedActionContext, params: {}): Promise<any>
  updateEvent(
    { commit }: AugmentedActionContext,
    params: { id: string | number }
  ): Promise<any>
  removeEvent(
    { commit }: AugmentedActionContext,
    id: string | number
  ): Promise<boolean>
  getDetail(
    { commit }: AugmentedActionContext,
    payload: {
      id: string | number
      params: {}
    }
  ): boolean
}

const actions: ActionTree<IEventState, IEventState> & EventActions = {
  getEventList({ commit }, params = {}) {
    commit('SET_LIST', EVENT_DATA)
    commit('SET_PAGINATION', {
      total: EVENT_DATA.length,
      current_page: 1,
    })

    return EVENT_DATA
    // return EventService.getList(params).then(res => {
    //   commit('SET_LIST', res.data)
    //   commit('SET_PAGINATION', res.pagination)
    //   return res
    // }).catch(err => {
    //   return err.response.data
    // })
  },

  createEvent({ commit }, params = {}) {
    return EventService.create(params)
      .then((res: ResponseSuccess) => {
        return res
      })
      .catch((err: ResponseError) => {
        return err.response.data
      })
  },

  updateEvent({ commit }, params) {
    return EventService.edit(params)
      .then((res: ResponseSuccess) => {
        return res
      })
      .catch((err: ResponseError) => {
        return err.response.data
      })
  },

  removeEvent({ commit }, id) {
    return EventService.remove(id)
      .then(() => {
        return true
      })
      .catch(() => {
        return false
      })
  },

  getDetail({ commit }, payload) {
    const { id, params } = payload

    const result: IEventDetail | undefined = EVENT_DATA.find(
      (i: IEventDetail) => i.id === id
    )
    commit('SET_DETAIL', result)
    return true

    // return EventService.show(id, params).then((res) => {
    //   commit('SET_DETAIL', res.data)
    //
    //   return true
    // }).catch(_ => {
    //   return false
    // })
  },
}
// END - Declare type and value of actions

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
