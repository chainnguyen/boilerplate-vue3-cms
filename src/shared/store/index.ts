// Core
import { createStore, ModuleTree, GetterTree, MutationTree } from 'vuex'
// Modules
import auth from '@/shared/store/modules/auth'
import loader from '@/shared/store/modules/loader'
import language from '@/shared/store/modules/language'
import upload from '@/shared/store/modules/upload'
import event from '@/shared/store/modules/event'
import frame from '@/shared/store/modules/frame'
import collection from '@/shared/store/modules/collection'
// Types
import { IModulesStates } from '@/types/store'

type StateStore = RootState & IModulesStates

const modules: ModuleTree<IModulesStates> = {
  auth,
  loader,
  language,
  upload,
  event,
  frame,
  collection,
}

// Declare type and value of state
export type RootState = {
  layout: string | null
}
const state: StateStore = {
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

const isDebug: boolean = import.meta.env.NODE_ENV !== 'production'
const store = createStore<StateStore>({
  state,
  getters,
  mutations,
  modules,
  strict: isDebug,
})

export default store
