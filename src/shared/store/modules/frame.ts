// API
import { FrameService } from '@/api/services/frame.service'
// Others
import { FRAME_DATA } from '@/enums/dummy-data.enum'
// Types
import { ActionContext, ActionTree, GetterTree, MutationTree } from 'vuex'
import { IPagination, ResponseError, ResponseSuccess } from '@/types/global'
import { ICommonModuleState } from '@/types/store'
import { FrameList, IFrameDetail } from '@/types/views/frame'

// Declare type and value of state
export interface IFrameState extends ICommonModuleState {}
const initialState: IFrameState = {
  list: null,
  detail: null,
  pagination: null,
}
export const state: IFrameState = { ...initialState }
// END - Declare type and value of state

// Declare type and value of getters
export type FrameGetters = {}
const getters: GetterTree<IFrameState, IFrameState> & FrameGetters = {}
// END - Declare type and value of getters

// Declare type and value of mutations
export type FrameMutations<S = IFrameState> = {
  SET_DETAIL(state: S, payload: IFrameDetail): void
  SET_LIST(state: S, payload: FrameList): void
  SET_PAGINATION(state: S, payload: IPagination): void
}
const mutations: MutationTree<IFrameState> & FrameMutations = {
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
  commit<K extends keyof FrameMutations>(
    key: K,
    payload?: Parameters<FrameMutations[K]>[1]
  ): ReturnType<FrameMutations[K]>
  getters<K extends keyof FrameGetters>(
    key: K,
    payload: Parameters<FrameGetters[K]>[1]
  ): ReturnType<FrameGetters[K]>
} & Omit<ActionContext<IFrameState, IFrameState>, 'commit'>

export type FrameActions = {
  getFrameList({ commit }: AugmentedActionContext, params?: {}): FrameList
  createFrame({ commit }: AugmentedActionContext, params: {}): Promise<any>
  updateFrame(
    { commit }: AugmentedActionContext,
    params: { id: string | number }
  ): Promise<any>
  removeFrame(
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

const actions: ActionTree<IFrameState, IFrameState> & FrameActions = {
  getFrameList({ commit }, params = {}) {
    commit('SET_LIST', FRAME_DATA)
    commit('SET_PAGINATION', {
      total: FRAME_DATA.length,
      current_page: 1,
    })

    return FRAME_DATA
    // return FrameService.getList(params).then(res => {
    //   commit('SET_LIST', res.data)
    //   commit('SET_PAGINATION', res.pagination)
    //   return res
    // }).catch(err => {
    //   return err.response.data
    // })
  },

  createFrame({ commit }, params = {}) {
    return FrameService.create(params)
      .then((res: ResponseSuccess) => {
        return res
      })
      .catch((err: ResponseError) => {
        return err.response.data
      })
  },

  updateFrame({ commit }, params) {
    return FrameService.edit(params)
      .then((res: ResponseSuccess) => {
        return res
      })
      .catch((err: ResponseError) => {
        return err.response.data
      })
  },

  removeFrame({ commit }, id) {
    return FrameService.remove(id)
      .then(() => {
        return true
      })
      .catch(() => {
        return false
      })
  },

  getDetail({ commit }, payload) {
    const { id, params } = payload

    const result: IFrameDetail | undefined = FRAME_DATA.find(
      (i: IFrameDetail) => i.id === id
    )
    commit('SET_DETAIL', result)
    return true
    // return FrameService.show(id, params).then((res) => {
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
