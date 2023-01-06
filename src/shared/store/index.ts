// Core
import { createStore, ModuleTree, GetterTree, MutationTree } from 'vuex'
// Modules
import auth from '@/shared/store/modules/auth'
import loader from '@/shared/store/modules/loader'

const modules: ModuleTree<any> = {
  auth,
  loader,
}

// Declare type and value of state
export type RootState = {
  layout: string | null
}
const state: RootState = {
  layout: null,
}
// END - Declare type and value of state

// Declare type and value of getters
export type RootGetters = {
  layout(state: RootState): string | null
  isMobile(): boolean
}
const getters: GetterTree<RootState, RootState> & RootGetters = {
  layout: (state) => state.layout,
  isMobile: () => window.innerWidth <= 767,
}
// END - Declare type and value of getters

// Declare type and value of mutations
export type RootMutations<S = RootState> = {
  SET_LAYOUT(state: S, { layout }: { layout: string }): void
}
const mutations: MutationTree<RootState> & RootMutations = {
  SET_LAYOUT(state: RootState, { layout }) {
    state.layout = layout
  },
}
// END - Declare type and value of mutations

const isDebug: boolean = process.env.NODE_ENV !== 'production'
const store = createStore<RootState>({
  state,
  getters,
  mutations,
  modules,
  strict: isDebug,
})

export default store
