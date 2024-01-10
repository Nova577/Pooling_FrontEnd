import request from '@/utils/request'
import { USER_TYPE } from '@/views/SignIn/store'
interface LoginUserReq {
  username: string
  password: string
}

interface ILoginUserRes {
  id: string
  type: USER_TYPE
  token: string
  refreshToken: string
}

export const loginUser = async (reqParams: LoginUserReq) => {
  return request.post<{ token: string }, ILoginUserRes, LoginUserReq>(
    '/api/v1/login',
    reqParams
  )
}

interface IRefreshTokenReq {
  freshToken: string 
}

export const refreshTokenApi = async (reqParams: IRefreshTokenReq): Promise<{ token: string }> => {
  return request.post(
    '/api/V1/auth/refreshToken',
    reqParams
  )
}

export const signOutApi = async () => {
  return  request.post('/api/V1/auth/signOut')
}