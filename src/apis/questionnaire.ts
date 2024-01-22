import request from '@/utils/request'

export interface IQuestionsItem {
  number?: number
  question?: string
  options?: string[]
  choice?: number
  required?: boolean
}

export interface IQuestionnaireData {
  id?: string
  name: string
  description: string
  timeInfo: {
    dueDate: string
    dueTime: string
    timeLimit: number
  }
  eassayQuestions: IQuestionsItem[]
  choiceQuestions: IQuestionsItem[]
}

export interface IAnswerItem {
  number?: number
  answer: string | string[]
}

export interface IAnswerQuestionnaireReq {
  eassayQuestions: IAnswerItem[]
  choiceQuestions: IAnswerItem[]
}

interface IResultRespond {
  id: string
  name: string
  eassayQuestions: Array<{
    number: number
    question: string
    answers: string[]
  }>
  choiceQuestions: Array<{
    number: number
    question: string
    answers: Array<{
      option: string
      ratio: number
      count: number
    }>
  }>
}

export const getQuestionnaireApi = async (id: string): Promise<IQuestionnaireData> => {
  return request.get( `/api/V1/questionnaire/${id}`)
}

export const createQuestionnaireApi = async (params: IQuestionnaireData) => {
  return request.post( `/api/V1/questionnaire`, params)
}


export const updateQuestionnaireApi = async (params: IQuestionnaireData) => {
  const { id, ...otherParams } = params
  return request.put( `/api/V1/questionnaire/${id}`, otherParams)
}

export const answerQuestionnaireApi = async (params: { id: string, data: IAnswerQuestionnaireReq }) => {
  const { id, data } = params
  return request.post( `/api/V1/questionnaire/answer/${id}`, data)
}

export const getQuestionnaireResultApi = async (id?: string): Promise<IResultRespond> => {
  return request.get( `/api/V1/questionnaire/result/${id}`)
}
