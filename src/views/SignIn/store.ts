import { create } from 'zustand'

export enum USER_TYPE {
  PARTICIPATOR = '0',
  RESEARCHER = '1'
}

interface IUserInfo {
  id?: string
  type?: USER_TYPE
}

interface IUserStore {
  userInfo: IUserInfo | null
  setUserInfo: (userInfo: IUserInfo) => void
  removeUserInfo: () => void
}

const useSignInStore = create<IUserStore>((set) => ({
  userInfo: null,
  setUserInfo: (userInfo: IUserInfo) => set(() => ({ userInfo })),
  removeUserInfo: () => set(() => ({ userInfo: null }))
}))

export default useSignInStore
