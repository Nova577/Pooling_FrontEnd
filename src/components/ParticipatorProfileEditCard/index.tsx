import PCard from "@/components/common/PCard"
import PTitle from "@/components/common/PTitle"
import PAvatar from "@/components/common/PAvatar"
import maleAvatarSrc from '@/assets/male_avatar.png'
import { FC, useState } from "react"
import FormRow from "@/views/SignUp/FormRow"
import PInput from "@/components/common/PInput"
import PSelect, { OnSelectionChangeKeys } from "@/components/common/PSelect"
import PTagsInput from '@/components/common/PTagsInput'
import PRadioGroup from "../common/PRadioGroup"
import PTextarea from "../common/PTextarea"

interface ProfileFormValue {
  firstName: string
  lastName: string
  industry: string
  position: string
  pets: string[]
  medicalHistory: string[]
  otherRelatedTags: string[]
  describe: string
}

const initProfileFormValue: ProfileFormValue = {
  describe: '',
  firstName: '',
  industry: '',
  lastName: '',
  position: '',
  medicalHistory: [],
  otherRelatedTags: [],
  pets: [],
}

const ParticipatorProfileEditCard: FC = () => {
  const [formValue, setFormValue] = useState(initProfileFormValue)
  const [petRadioGroupValue, setPetRadioGroupValue] = useState<'yes' | 'no'>('yes')
  const [medicalHistoryGroupValue, setMedicalHistoryGroupValue] = useState<'yes' | 'no'>('yes')

  const handleFirstNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue((prev) => ({ ...prev, firstName: e.target.value }))
  }

  const handleLastNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue((prev) => ({ ...prev, lastName: e.target.value }))
  }

  const handleIndustrySelectSelectionChange = (newValueSet: OnSelectionChangeKeys) => {
    // Should not be here
    if (newValueSet === 'all') return

    setFormValue((prev) => ({ ...prev, industry: Array.from(newValueSet)[0] as string }))
  }

  const handlePositionSelectSelectionChange= (newValueSet: OnSelectionChangeKeys) => {
    // Should not be here
    if (newValueSet === 'all') return

    setFormValue((prev) => ({ ...prev, position: Array.from(newValueSet)[0] as string }))
  }

  const handlePetRadioGroupChange = (e: React.FormEvent<HTMLDivElement>) => {
    setPetRadioGroupValue((e.target as HTMLInputElement).value as 'yes' | 'no')
    setFormValue((prev) => ({ ...prev, pets: [] }))
  }

  const handleMedicalHistoryGroupValueChange = (e: React.FormEvent<HTMLDivElement>) => {
    setMedicalHistoryGroupValue((e.target as HTMLInputElement).value as 'yes' | 'no')
    setFormValue((prev) => ({ ...prev, medicalHistory: [] }))
  }

  const handlePetTagsInputChange = (newValue: string[]) => {
    setFormValue((prev) => ({ ...prev, pets: newValue }))
  }

  const handleMedicalHistoryTagsInputChange = (newValue: string[]) => {
    setFormValue((prev) => ({ ...prev, medicalHistory: newValue }))
  }

  const handleOtherRelatedTagsTagsInputChange = (newValue: string[]) => {
    setFormValue((prev) => ({ ...prev, otherRelatedTags: newValue }))
  }

  return (
    <PCard className="h-[800px] w-[800px] px-[90px] py-[36px] bg-[#EFE8E4]" bodyClass="p-0">
      <form>
        <div className="flex">
          <PAvatar imgSrc={maleAvatarSrc} className="w-[160px] h-[160px] shrink-0" />

          <div className="ml-[40px] flex-1">
            <div className="text-[#565352] text-lg font-bold font-playfair leading-normal">E-mail : researcher@pooling.tools</div>
            <div className="pt-[15px] text-[#565352] text-lg font-bold font-playfair leading-normal">Account Number : 865198251</div>

            <FormRow className="pt-[40px]">
              <PInput className="w-[200px]" label="First Name" value={formValue.firstName} onChange={handleFirstNameInputChange} />
              <PInput className="w-[200px]" label="Last Name" value={formValue.lastName} onChange={handleLastNameInputChange} />
            </FormRow>
          </div>
        </div>


        <FormRow className="pt-[40px]">
          <PSelect
            label="Industry"
            placeholder=" "
            options={[
              { key: 'k0', label: 'label0', value: 'v0' },
              { key: 'k1', label: 'label1', value: 'v1' },
              { key: 'k2', label: 'label2', value: 'v2' },
              { key: 'k3', label: 'label3', value: 'v3' },
            ]}
            value={formValue.industry}
            onSelectionChange={handleIndustrySelectSelectionChange}
          />

          <PSelect
            label="Position"
            placeholder=" "
            options={[
              { key: 'k0', label: 'label0', value: 'v0' },
              { key: 'k1', label: 'label1', value: 'v1' },
              { key: 'k2', label: 'label2', value: 'v2' },
              { key: 'k3', label: 'label3', value: 'v3' },
            ]}
            value={formValue.position}
            onSelectionChange={handlePositionSelectSelectionChange}
          />
        </FormRow>
        
        <FormRow className="pt-[32px]" label="Pets">
          <div className="w-[160px] shrink-0">
            <PRadioGroup
              options={[{ label: 'Yes', value: 'yes' }, { label: 'No', value: 'no' }]}
              value={petRadioGroupValue}
              onChange={handlePetRadioGroupChange}
            />
          </div>

          <div className="flex-1">
            <PTagsInput disabled={petRadioGroupValue === 'no'} value={formValue.pets} onChange={handlePetTagsInputChange} />
          </div>
        </FormRow>

        <FormRow className="pt-[32px]" label="Medical history">
          <div className="w-[160px] shrink-0">
            <PRadioGroup
              options={[{ label: 'Yes', value: 'yes' }, { label: 'No', value: 'no' }]}
              value={medicalHistoryGroupValue}
              onChange={handleMedicalHistoryGroupValueChange}
            />
          </div>

          <div className="flex-1">
            <PTagsInput  disabled={medicalHistoryGroupValue === 'no'} value={formValue.medicalHistory} onChange={handleMedicalHistoryTagsInputChange} />
          </div>
        </FormRow>

        <FormRow className="pt-[32px]" label="Other related tags">
          <PTagsInput value={formValue.otherRelatedTags} onChange={handleOtherRelatedTagsTagsInputChange}  />
        </FormRow>

        <FormRow className="pt-[32px]" label="Describe Yourself">
          <PTextarea minRows={5} />
        </FormRow>
      </form>
    </PCard>
  )
}

export default ParticipatorProfileEditCard
