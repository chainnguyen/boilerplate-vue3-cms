// Types
import { ActionContext, ActionTree, GetterTree, MutationTree } from 'vuex'

// Declare type and value of state
export interface ILoaderState {
  loading: boolean
  requestsPending: number
}
const initialState: ILoaderState = {
  loading: false,
  requestsPending: 0,
}
export const state: ILoaderState = { ...initialState }
// END - Declare type and value of state

// Declare type and value of getters
export type LoaderGetters = {}
const getters: GetterTree<ILoaderState, ILoaderState> & LoaderGetters = {}
// END - Declare type and value of getters

// Declare type and value of mutations
export type LoaderMutations<S = ILoaderState> = {
  show(state: S): void
  hide(state: S): void
  pending(state: S): void
  done(state: S): void
}
const mutations: MutationTree<ILoaderState> & LoaderMutations = {
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
} & Omit<ActionContext<ILoaderState, ILoaderState>, 'commit'>

export type LoaderActions = {
  show({ commit }: AugmentedActionContext): void
  hide({ commit }: AugmentedActionContext): void
  pending({ commit }: AugmentedActionContext): void
  done({ commit }: AugmentedActionContext): void
}

const actions: ActionTree<ILoaderState, ILoaderState> & LoaderActions = {
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
