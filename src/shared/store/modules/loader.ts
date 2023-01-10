// Types
import { ActionContext, ActionTree, GetterTree, MutationTree } from 'vuex'
import { IModulesStates } from '@/types/store'

// Declare type and value of state
export type LoaderState = {
  loading: boolean
  requestsPending: number
}
const initialState: LoaderState = {
  loading: false,
  requestsPending: 0,
}
const state: LoaderState = { ...initialState }
// END - Declare type and value of state

// Declare type and value of getters
export type LoaderGetters = {}
const getters: GetterTree<LoaderState, IModulesStates> & LoaderGetters = {}
// END - Declare type and value of getters

// Declare type and value of mutations
export type LoaderMutations<S = LoaderState> = {
  show(state: S): void
  hide(state: S): void
  pending(state: S): void
  done(state: S): void
}
const mutations: MutationTree<LoaderState> & LoaderMutations = {
  show(state) {
    state.loading = true
  },
  hide(state) {
    state.loading = false
  },
  pending(state) {
    if (state.requestsPending === 0) {
      // this.commit('loader/show')
    }

    state.requestsPending++
  },
  done(state) {
    if (state.requestsPending >= 1) {
      state.requestsPending--
    }

    if (state.requestsPending <= 0) {
      // this.commit('loader/hide')
    }
  },
}
// END - Declare type and value of mutations

// Declare type and value of actions
type AugmentedActionContext = {
  commit<K extends keyof LoaderMutations>(
    key: K,
    payload?: Parameters<LoaderMutations[K]>[1]
  ): ReturnType<LoaderMutations[K]>
  getters<K extends keyof LoaderGetters>(
    key: K,
    payload: Parameters<LoaderGetters[K]>[1]
  ): ReturnType<LoaderGetters[K]>
} & Omit<ActionContext<LoaderState, IModulesStates>, 'commit'>

export type LoaderActions = {
  show({ commit }: AugmentedActionContext): void
  hide({ commit }: AugmentedActionContext): void
  pending({ commit }: AugmentedActionContext): void
  done({ commit }: AugmentedActionContext): void
}

const actions: ActionTree<LoaderState, IModulesStates> & LoaderActions = {
  show({ commit }) {
    commit('show')
  },
  hide({ commit }) {
    commit('hide')
  },
  pending({ commit }) {
    commit('pending')
  },
  done({ commit }) {
    commit('done')
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
