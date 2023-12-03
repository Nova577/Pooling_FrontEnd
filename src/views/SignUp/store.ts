import { create } from 'zustand'

interface SignUpStoreStore {
  currentStep: number

  switchToPrevStep: () => void
  switchToNextStep: () => void
}


const useSignUpStore = create<SignUpStoreStore>((set) => ({
  currentStep: 0,
  switchToPrevStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),
  switchToNextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
}))

export default useSignUpStore
