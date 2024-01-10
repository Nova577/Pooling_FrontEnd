import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios'
import { ls } from '@/utils/util'
import { refreshTokenApi } from '@/apis/user'

const request = axios.create({
  timeout: 5000,
})

request.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = ls.get('token') || ''
    config.headers.Authorization = `Bearer ${token}`;
    
    return config
  },
  (error) => {
    return Promise.reject(error);
  }
)

request.interceptors.response.use(
  (res: AxiosResponse) => {
    const { data } = res

    return Promise.resolve(data.data)
  },
  (error) => {
    const { response, config } = error 
    const message = response.data.message 
    if (response.status === 401) {
      if (message === 'short token expired') {
        const refreshToken = ls.get('refreshToken')

        if (refreshToken) {
          return refreshTokenApi({ freshToken: refreshToken }).then(({ token }) => {
            ls.set('token', token)

            // 重新发起请求
            return request(config);
          })
        }
      } else {
        ls.remove('token')
        ls.remove('refreshToken')
        
        location.href = `${location.origin}/sign-in`
        return 
      }
    }

    return Promise.reject(error);
  }
)

export default request
