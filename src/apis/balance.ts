import request from '@/utils/request'
import { balanceBasic } from '@/types/user'

export interface ICheckItem {
  message: string 
  number: string
  amount: number
}

interface IBalanceCheckRes {
  check: ICheckItem[]
  total: number
}

export const getBalanceApi = async (date: string): Promise<IBalanceCheckRes> => {
  return request.get( `/api/V1/balance/check/${date}`)
}

export const getBalanceBasicApi = async (): Promise<balanceBasic> => {
  return request.get('/api/V1/balance/info')
}

