import request from '@/utils/request'

interface IHistoryParams {
  offset: number
  limit: number
}

export interface IResearchItem {
  id: string
  name: string
  picture_id: string
  headCount: number
  reward: number
  documents: Array<{ name: string; id: string }>
  questionnaire_id: string
  appointment_id: string
  cooperators: string[]
  description: string
  status: string
}

interface IHistoryRes {
  researchList: IResearchItem[]
}

export const getHistoryApi = async (params: IHistoryParams): Promise<IHistoryRes> => {
  return request.get('/api/V1/history', { params: {
    limit: String(params.limit),
    offset: String(params.offset)
  } })
}
