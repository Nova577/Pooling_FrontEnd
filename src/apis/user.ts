import request from '@/utils/request'
import { 
  ILoginUserRes, 
  IRefreshTokenReq, 
  LoginUserReq, 
  IParticipantUserProps, 
  IResearcherUserProps 
} from '@/types/user'


export const loginUser = async (reqParams: LoginUserReq) => {
  return request.post<{ token: string }, ILoginUserRes, LoginUserReq>(
    '/api/v1/login',
    reqParams
  )
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

export const sendSignUpCodeApi = async (params: { email: string }) => {
  return request.post(
    '/api/V1/signUp/sendCode',
    params
  )
}

export const checkSignUpCodeApi = async (params: { email: string; code: string }) => {
  return request.post(
    '/api/V1/signUp/checkCode',
    params
  )
}

export const sendResetPsdCodeApi = async (params: { email: string }) => {
  return request.post(
    '/api/V1/resetPassword/sendCode',
    params
  )
}

export const checkResetPsdCodeApi = async (params: { email: string; code: string }) => {
  return request.post(
    '/api/V1/resetPassword/checkCode',
    params
  )
}

export const resetPsdApi = async (params: { username: string; password: string }) => {
  return request.post(
    '/api/V1/resetPassword',
    params
  )
}

export const participantSignUpApi = async (params: IParticipantUserProps) => {
  return request.post(
    '/api/V1/signUp/participant',
    params
  )
}

export const researcherSignUpApi = async (params: IResearcherUserProps) => {
  return request.post(
    '/api/V1/signUp/researcher',
    params
  )
}

export const getParticipantUserApi = async (id: string): Promise<IParticipantUserProps> => {
  return request.get(
    `/api/V1/participant/${id}`,
  )
}


export const updateParticipantApi = async (params: IParticipantUserProps) => {
  const { id, ...otherParams } = params
  return request.put( `/api/V1/participant/${id}`, otherParams)
}


export const getResearcherUserApi = async (id: string): Promise<IResearcherUserProps> => {
  return request.get(
    `/api/V1/researcher/${id}`,
  )
}

export const updateResearcherApi = async (params: IResearcherUserProps) => {
  const { id, ...otherParams } = params
  return request.put( `/api/V1/researcher/${id}`, otherParams)
}
