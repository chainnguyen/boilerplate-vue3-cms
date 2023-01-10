// Core
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios'
// Others
import store from '@/shared/store'
import router from '@/router'
import i18n from '@/plugins/locale'
import Cookie from 'js-cookie'
import { COOKIES_KEY } from '@/enums/cookie.enum'

// @ts-ignore
const { t } = i18n.global

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_AXIOS_BASE_URL as string,
  headers: {
    Accept: 'application/json',
    ContentType: 'application/json;charset=UTF-8',
  },
  timeout: 30000, // request timeout
})

// Request interceptor
instance.interceptors.request.use(
  (config: AxiosRequestConfig | any): AxiosRequestConfig => {
    const token: string | undefined = Cookie.get(COOKIES_KEY.token)
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    store.dispatch('loader/pending')
    return config
  },
  (error): Promise<AxiosError> => {
    store.dispatch('loader/done')
    return Promise.reject(error)
  }
)

// Response interceptor
instance.interceptors.response.use(
  (response): AxiosResponse => {
    store.dispatch('loader/done')
    return response
  },
  (error): Promise<AxiosError> => {
    // Catch err CORS with case type script inside (input, textarea)
    if (error.toString().includes('Network Error')) {
      alert(t('type_tag_script_err_mess'))
    }
    // Do something with response error
    let { status } = error.response
    // let isLoginPage = router.currentRoute.name === 'auth.login'

    // if (status === 401 && !isLoginPage) {
    if (status === 401) {
      store.commit('auth/SET_LOGOUT')
      router.push({ name: 'auth.login' }).catch(() => {})
    }
    if (status === 404) router.push({ name: 'not_found' })
    if (status === 500) router.push({ name: 'server_error' })

    store.dispatch('loader/done')
    return Promise.reject(error)
  }
)

export default instance
