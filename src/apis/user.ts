import axios from 'axios'

interface LoginUserReq {
  username: string
  password: string
}

export const loginUser = async (reqParams: LoginUserReq) => {
  return await axios.post<{ token: string }, unknown, LoginUserReq>(
    '/api/v1/login',
    reqParams
  )
}
