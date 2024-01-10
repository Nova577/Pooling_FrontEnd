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
  desc?: string // TODO
  timeInfo: {
    dueDate: string
    dueTime: string
    timeLimit: number
  }
  eassayQuestions: IQuestionsItem[]
  choiceQuestions: IQuestionsItem[]
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
