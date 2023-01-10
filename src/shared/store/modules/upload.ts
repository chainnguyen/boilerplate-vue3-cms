// API
import { UploadService } from '@/api/services/upload.service'
// Types
import { ActionContext, ActionTree, GetterTree, MutationTree } from 'vuex'
import { ResponseError, ResponseSuccess } from '@/types/global'
import { IModulesStates } from '@/types/store'

// Declare type and value of state
export type UploadState = {}
const state: UploadState = {}
// END - Declare type and value of state

// Declare type and value of getters
export type UploadGetters = {}
const getters: GetterTree<UploadState, IModulesStates> & UploadGetters = {}
// END - Declare type and value of getters

// Declare type and value of mutations
export type UploadMutations<S = UploadState> = {}
const mutations: MutationTree<UploadState> & UploadMutations = {}
// END - Declare type and value of mutations

// Declare type and value of actions
type AugmentedActionContext = {
  commit<K extends keyof UploadMutations>(
    key: K,
    payload?: Parameters<UploadMutations[K]>[1]
  ): ReturnType<UploadMutations[K]>
  getters<K extends keyof UploadGetters>(
    key: K,
    payload: Parameters<UploadGetters[K]>[1]
  ): ReturnType<UploadGetters[K]>
} & Omit<ActionContext<UploadState, IModulesStates>, 'commit'>

export type UploadActions = {
  postFile(
    { commit }: AugmentedActionContext,
    params: { file: File }
  ): Promise<any>
}

const actions: ActionTree<UploadState, IModulesStates> & UploadActions = {
  postFile({ commit }, params) {
    return UploadService.upload(params)
      .then((res: ResponseSuccess) => {
        return res
      })
      .catch((err: ResponseError) => {
        return err.response.data
      })
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
