import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios'

const request = axios.create({
  timeout: 5000,
})

request.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // TODO token获取
    const token = ''
    config.headers.Authorization = `Bearer ${token}`;
    
    return config
  },
  (error) => {
    return Promise.reject(error);
  }
)

request.interceptors.response.use(
  (res: AxiosResponse) => {
    const { data, status } = res
    if (status === 200 && data?.data?.code === '0') {
      return Promise.resolve(data.data.data)
    } else {
      // TODO 登录过期处理
      return Promise.reject(data)
    }
  },
  (error) => {
    return Promise.reject(error);
  }
)

export default request
