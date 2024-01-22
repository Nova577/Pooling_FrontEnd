import request from '@/utils/request'

interface ISearchParams {
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

interface IResearchRes {
  researchList: IResearchItem[]
}

export const getHistoryApi = async (params: ISearchParams): Promise<IResearchRes> => {
  return request.get('/api/V1/history', { params: {
    limit: String(params.limit),
    offset: String(params.offset)
  } })
}


export const getFeedApi = async (params: ISearchParams): Promise<IResearchRes> => {
  return request.get('/api/V1/feed', { params: {
    limit: String(params.limit),
    offset: String(params.offset)
  } })
}

