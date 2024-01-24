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

export enum PositionType {
  DASHBOARD = 'dashboard',
  SCHEDULE = 'schedule'
}