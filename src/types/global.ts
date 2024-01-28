export interface ISelectOptionItem {
  key: string
  value: string
  label: string
}

export enum HISTORY_STATUS_MAP {
  'Draft',
  'In Progress',
  'Close'
}

export enum SchedulePositionType {
  DASHBOARD = 'dashboard',
  SCHEDULE = 'schedule'
}

export enum ResearchCardPosition {
  DISCOVERY = 'discovery',
  HISTORY = 'history',
  DASHBOARD = 'dashboard',
  NEW_PUSH = 'new push'
}

export interface IDocumentItem {
  name: string
  id: string
}

export interface IResearchItem {
  id: string
  name: string
  picture_id: string
  headCount: number
  reward: number
  documents: IDocumentItem[]
  questionnaire_id: string
  appointment_id: string
  cooperators: string[]
  preference: string[]
  description: string
  status: string
}

export interface IResearchRes {
  researchList: IResearchItem[]
}

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

export interface IAppointmentRes {
  id: string
  name: string
  timeInfo: {
    data: string
    StartTime: string
    EndTime: string
  }
  meetingInfo: string
  description: string
}