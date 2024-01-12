import { create } from 'zustand'
import { IUserInfo } from '@/types/user'
import { ls } from '@/utils/util'
import { getParticipantUserApi, getResearcherUserApi } from '@/apis/user'

interface IUserStore {
  userInfo: IUserInfo | null
  setUserInfo: (userInfo: IUserInfo) => void
  removeUserInfo: () => void
  getInitUserInfo: () => void
}

const useSignInStore = create<IUserStore>((set, get) => ({
  userInfo: null,
  getInitUserInfo: async () => {
    const userInfo = ls.get('userInfo') || {}
    const { id, type } = userInfo
    if (!id || !type) return

    let info: IUserInfo = {}
    if (type === '0') {
      info = await getParticipantUserApi(id)
    } else if (type === 1) {
      info = await getResearcherUserApi(id)
    }
    set(() => ({ userInfo: { id, type, ...info } }))
  },
  setUserInfo: (userInfo: IUserInfo) => {
    const oldInfo = get().userInfo || {}
    const newInfo = { ...oldInfo, ...userInfo }
    ls.set('userInfo', newInfo)

    set(() => ({ userInfo: newInfo }))
  },
  removeUserInfo: () => {
    ls.remove('userInfo')
    set(() => {
      return { userInfo: null }
    })
  }
}))

export default useSignInStore
