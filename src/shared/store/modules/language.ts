import i18n from '@/plugins/locale'
// Others
import { LOCALE, LOCAL_STORAGE } from '@/enums/locale.enum'
// Types
import { ActionContext, ActionTree, GetterTree, MutationTree } from 'vuex'
import { IModulesStates } from '@/types/store'

// Declare type and value of state
export interface LanguageState {
  locale: string | null
}
const localLanguage: string | null = localStorage.getItem(
  LOCAL_STORAGE.language
)
const state: LanguageState = {
  locale: Object.values(LOCALE).includes(localLanguage) ? localLanguage : null,
}
// END - Declare type and value of state

// Declare type and value of getters
export type LanguageGetters = {}
const getters: GetterTree<LanguageState, IModulesStates> & LanguageGetters = {}
// END - Declare type and value of getters

// Declare type and value of mutations
export type LanguageMutations<S = LanguageState> = {
  SET_LANGUAGE(state: S, payload: string): void
}
const mutations: MutationTree<LanguageState> & LanguageMutations = {
  SET_LANGUAGE(state, payload) {
    state.locale = payload
  },
}
// END - Declare type and value of mutations

// Declare type and value of actions
type AugmentedActionContext = {
  commit<K extends keyof LanguageMutations>(
    key: K,
    payload?: Parameters<LanguageMutations[K]>[1]
  ): ReturnType<LanguageMutations[K]>
  getters<K extends keyof LanguageGetters>(
    key: K,
    payload: Parameters<LanguageGetters[K]>[1]
  ): ReturnType<LanguageGetters[K]>
} & Omit<ActionContext<LanguageState, IModulesStates>, 'commit'>

export type LanguageActions = {
  setLanguage({ commit }: AugmentedActionContext, lang: string): void
}

const actions: ActionTree<LanguageState, IModulesStates> & LanguageActions = {
  setLanguage({ commit }, lang) {
    i18n.global.locale = lang
    localStorage.setItem(LOCAL_STORAGE.language, lang)
    commit('SET_LANGUAGE', lang)
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
