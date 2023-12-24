import { create } from 'zustand'


export enum ResearcherMenuItemType {
  DASHBOARD = 'dashBoard',
  FEE_PAYMENT = 'free payment',
  PROFILE_EDIT = 'profile edit',
}

interface ResearcherStore {
  currentMenu: ResearcherMenuItemType

  setCurrentMenu: (newCurrentMenu: ResearcherMenuItemType) => void
}

const useResearcherStore = create<ResearcherStore>((set) => ({
  currentMenu: ResearcherMenuItemType.DASHBOARD,
  setCurrentMenu: (newCurrentMenu) => set(() => ({ currentMenu:  newCurrentMenu }))
}))

export default useResearcherStore
