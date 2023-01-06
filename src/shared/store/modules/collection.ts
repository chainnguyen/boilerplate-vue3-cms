// API
import { CollectionService } from '@/api/services/collection.service'
// Others
import { COLLECTION_DATA } from '@/enums/dummy-data.enum'
// Types
import { ActionContext, ActionTree, GetterTree, MutationTree } from 'vuex'
import { IPagination, ResponseError, ResponseSuccess } from '@/types/global'
import { ICommonModuleState } from '@/types/store'
import { CollectionList, ICollectionDetail } from '@/types/views/collection'

// Declare type and value of state
export interface ICollectionState extends ICommonModuleState {}
const initialState: ICollectionState = {
  list: null,
  detail: null,
  pagination: null,
}
export const state: ICollectionState = { ...initialState }
// END - Declare type and value of state

// Declare type and value of getters
export type CollectionGetters = {}
const getters: GetterTree<ICollectionState, ICollectionState> &
  CollectionGetters = {}
// END - Declare type and value of getters

// Declare type and value of mutations
export type CollectionMutations<S = ICollectionState> = {
  SET_DETAIL(state: S, payload: ICollectionDetail): void
  SET_LIST(state: S, payload: CollectionList): void
  SET_PAGINATION(state: S, payload: IPagination): void
}
const mutations: MutationTree<ICollectionState> & CollectionMutations = {
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
  commit<K extends keyof CollectionMutations>(
    key: K,
    payload?: Parameters<CollectionMutations[K]>[1]
  ): ReturnType<CollectionMutations[K]>
  getters<K extends keyof CollectionGetters>(
    key: K,
    payload: Parameters<CollectionGetters[K]>[1]
  ): ReturnType<CollectionGetters[K]>
} & Omit<ActionContext<ICollectionState, ICollectionState>, 'commit'>

export type CollectionActions = {
  getCollectionList(
    { commit }: AugmentedActionContext,
    params?: {}
  ): CollectionList
  createCollection({ commit }: AugmentedActionContext, params: {}): Promise<any>
  updateCollection(
    { commit }: AugmentedActionContext,
    params: { id: string | number }
  ): Promise<any>
  removeCollection(
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

const actions: ActionTree<ICollectionState, ICollectionState> &
  CollectionActions = {
  getCollectionList({ commit }, params = {}) {
    commit('SET_LIST', COLLECTION_DATA)
    commit('SET_PAGINATION', {
      total: COLLECTION_DATA.length,
      current_page: 1,
    })
    return COLLECTION_DATA
    // return CollectionService.getList(params).then(res => {
    //   commit('SET_LIST', res.data)
    //   commit('SET_PAGINATION', res.pagination)
    //   return res
    // }).catch(err => {
    //   return err.response.data
    // })
  },

  createCollection({ commit }, params = {}) {
    return CollectionService.create(params)
      .then((res: ResponseSuccess) => {
        return res
      })
      .catch((err: ResponseError) => {
        return err.response.data
      })
  },

  updateCollection({ commit }, params) {
    return CollectionService.edit(params)
      .then((res: ResponseSuccess) => {
        return res
      })
      .catch((err: ResponseError) => {
        return err.response.data
      })
  },

  removeCollection({ commit }, id) {
    return CollectionService.remove(id)
      .then(() => {
        return true
      })
      .catch(() => {
        return false
      })
  },

  getDetail({ commit }, payload) {
    const { id, params } = payload

    const result: ICollectionDetail | undefined = COLLECTION_DATA.find(
      (i: ICollectionDetail) => i.id === id
    )
    commit('SET_DETAIL', result)
    return true

    // return CollectionService.show(id, params).then((res) => {
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
