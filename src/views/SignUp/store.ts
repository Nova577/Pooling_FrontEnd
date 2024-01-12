import { create } from 'zustand'
import dayjs from 'dayjs'
interface SignUpStoreStore {
  currentStep: number
  liveInLeftDays: number

  switchToPrevStep: () => void
  switchToNextStep: () => void
}
const now = dayjs().format('YYYY MM DD')
const liveInLeftDays = dayjs('2024-1-10').diff(now, 'days')

const useSignUpStore = create<SignUpStoreStore>((set) => ({
  currentStep: 1,
  liveInLeftDays,
  switchToPrevStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),
  switchToNextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
}))

export default useSignUpStore
