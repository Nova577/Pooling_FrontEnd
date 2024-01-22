export enum USER_TYPE {
  PARTICIPATOR = '0',
  RESEARCHER = '1'
}

export enum ChARACTER_ENUM {
  RESEARCHER = 'researcher',
  PARTICIPATOR = 'participator'
}

export interface IRefreshTokenReq {
  freshToken: string 
}

export interface LoginUserReq {
  username: string
  password: string
}

export interface ILoginUserRes {
  id: string
  type: USER_TYPE
  token: string
  refreshToken: string
}


export interface IParticipantUserProps {
  id?: string
  avatar?: string
  email?: string
  firstName?: string
  lastName?: string
  sex?: string
  birth?: string
  country?: string
  state?: string
  section?: string
  occupation?: string
  tags?: {
    pets?: string[]
    medicalHistory?: string[]
    other?: string[]
  },
  password?: string
  description?: string
}

export interface IResearcherUserProps {
  id?: string
  email?: string
  avatar?: string
  firstName?: string
  lastName?: string
  sex?: string
  birth?: string
  country?: string
  state?: string
  institute?: string
  title?: string
  tags?: {
    researchFields?: string[]
    other?: string[]
  },
  password?: string
  relatedLinks?: string[]
}

export interface IUserInfo {
  id?: string
  avatar?: string
  type?: USER_TYPE
  email?: string
  firstName?: string
  lastName?: string
  sex?: string
  birth?: string
  country?: string
  state?: string
  institute?: string
  title?: string
  tags?: {
    researchFields?: string[]
    other?: string[]
    pets?: string[]
    medicalHistory?: string[]
  },
  relatedLinks?: string[]
  section?: string
  occupation?: string
  description?: string
}


export interface balanceBasic {
  balance: number
}
