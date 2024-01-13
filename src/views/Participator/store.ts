import { create } from 'zustand'


export enum ParticipatorMenuItemType {
  DISCOVERY = 'discovery',
  SCHEDULE = 'schedule',
  HISTORY = 'history',
  BALANCE = 'balance',
  PROFILE_EDIT = 'profile edit',
}

interface ParticipatorStore {
  currentMenu: ParticipatorMenuItemType

  setCurrentMenu: (newCurrentMenu: ParticipatorMenuItemType) => void
}

const useParticipatorStore = create<ParticipatorStore>((set) => ({
  currentMenu: ParticipatorMenuItemType.HISTORY,
  setCurrentMenu: (newCurrentMenu) => set(() => ({ currentMenu:  newCurrentMenu }))
}))


export default useParticipatorStore
