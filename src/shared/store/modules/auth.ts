// API
// import { AuthService } from '@/api/services/auth.service'
// Others
import Cookie from 'js-cookie'
import { COOKIES_KEY } from '@/enums/cookie.enum'
import { ACCOUNT } from '@/enums/account.enum'
// Types
import { ActionContext, ActionTree, GetterTree, MutationTree } from 'vuex'
import {
  IModulesStates,
  StoreLoginParam,
  StoreToken,
  StoreUserProfile,
} from '@/types/store'

// Declare type and value of state
export type AuthState = {
  bearerToken: string | null | undefined
  userProfile: StoreUserProfile
}
const initialState: AuthState = {
  bearerToken: null,
  userProfile: {
    role: 'admin',
  },
}
const state: AuthState = {
  ...initialState,
  bearerToken: Cookie.get(COOKIES_KEY.token),
}
// END - Declare type and value of state

// Declare type and value of getters
export type AuthGetters = {}
const getters: GetterTree<AuthState, IModulesStates> & AuthGetters = {}
// END - Declare type and value of getters

// Declare type and value of mutations
export type AuthMutations<S = AuthState> = {
  SET_TOKEN(state: S, payload: StoreToken): void
  SET_LOGOUT(state: S): void
  SET_USER(state: S, payload: StoreUserProfile): void
}
const mutations: MutationTree<AuthState> & AuthMutations = {
  SET_TOKEN(state, payload) {
    const { token, expires } = payload
    state.bearerToken = token
    Cookie.set(COOKIES_KEY.token, token, {
      expires,
      // requires a secure protocol (https) when transmitting cookies
      secure: import.meta.env.NODE_ENV === 'production',
      // allowing to control whether the browser is sending a cookie along with cross-site requests
      sameSite: 'lax',
    })
  },
  SET_LOGOUT(state) {
    state.bearerToken = initialState.bearerToken
    state.userProfile = initialState.userProfile
    Cookie.remove(COOKIES_KEY.token)
  },
  SET_USER(state, payload) {
    state.userProfile = payload
  },
}
// END - Declare type and value of mutations

// Declare type and value of actions
type AugmentedActionContext = {
  commit<K extends keyof AuthMutations>(
    key: K,
    payload?: Parameters<AuthMutations[K]>[1]
  ): ReturnType<AuthMutations[K]>
  getters<K extends keyof AuthGetters>(
    key: K,
    payload: Parameters<AuthGetters[K]>[1]
  ): ReturnType<AuthGetters[K]>
} & Omit<ActionContext<AuthState, IModulesStates>, 'commit'>

export type AuthActions = {
  userLogin(
    { commit }: AugmentedActionContext,
    params: StoreLoginParam
  ): boolean
  userLogout({ commit }: AugmentedActionContext): boolean
  userProfile({ state, commit }: AugmentedActionContext): boolean
}
const actions: ActionTree<AuthState, IModulesStates> & AuthActions = {
  userLogin({ commit }, params) {
    // LOGIN DUMMY
    const accountExist: boolean =
      ACCOUNT.username === params.username &&
      ACCOUNT.password === params.password

    if (!accountExist) return false
    commit('SET_TOKEN', {
      token: ACCOUNT.bearer_token,
      expires: ACCOUNT.expires_at
        ? new Date(ACCOUNT.expires_at)
        : COOKIES_KEY.expires,
    })
    return true

    // return AuthService.login(params).then((res) => {
    //   commit('SET_TOKEN', res.data.bearer_token)
    //
    //   return true
    // }).catch(_ => {
    //   return false
    // })
  },

  userLogout({ commit }) {
    commit('SET_LOGOUT')
    return true
    // return AuthService.logout().then((res) => {
    //   commit('SET_LOGOUT')
    //
    //   return true
    // }).catch(_ => {
    //   return false
    // })
  },

  userProfile({ state, commit }) {
    if (!state.bearerToken) return false

    // PROFILE DUMMY
    commit('SET_USER', {
      id: '86dc5a6b-9530-4562-a3c5-68a57a604a27',
      role: 'admin',
      name: 'Admin nè',
      avatar:
        'https://img.freepik.com/premium-vector/cute-white-cat-cartoon-vector-illustration_42750-808.jpg?w=2000',
      created_at: '2022-06-30 19:19:03',
    })
    return true
    // return AuthService.profile().then((res) => {
    //   commit('SET_USER', res.data)
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
