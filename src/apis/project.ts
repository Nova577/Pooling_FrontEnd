import request from '@/utils/request'
import { IQuestionnaireData } from '@/types/global'
import { IResearchRes, IAppointmentRes } from '@/types/global'

interface ISearchParams {
  offset: number
  limit: number
  key?: string
}

interface IScheduleRes {
  appointments: Array<{
    id: string
    name: string
    timeInfo: {
      date: string
      StartTime: string
      EndTime: string
    }
    meetingInfo: string
    description: string
  }>
  questionnaire: Array<IQuestionnaireData>
}

export const getHistoryApi = async (params: ISearchParams): Promise<IResearchRes> => {
  return request.get('/api/V1/history', { params: {
    ...params,
    limit: String(params.limit),
    offset: String(params.offset)
  } })
}


export const getFeedApi = async (params: ISearchParams): Promise<IResearchRes> => {
  return request.get('/api/V1/feed', { params: {
    ...params,
    limit: String(params.limit),
    offset: String(params.offset)
  } })
}


export const getScheduleApi = async (params: ISearchParams): Promise<IScheduleRes> => {
  return request.get('/api/V1/schedule', { params: {
    ...params,
    limit: String(params.limit),
    offset: String(params.offset),
  }})
}


export const getAppointmentApi = async (id?: string): Promise<IAppointmentRes> => {
  return request.get(`/api/V1/appointment/${id}`)
}



