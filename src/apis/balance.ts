import request from '@/utils/request'

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
