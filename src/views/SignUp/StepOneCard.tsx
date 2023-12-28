import { FC, useState } from "react"
import PCard from "../../components/common/PCard"
import PTitle from "../../components/common/PTitle"
import PInput from "../../components/common/PInput2"
import FormRow from "./FormRow"
import PSelect from "../../components/common/PSelect"
import PRadioGroup from "@/components/common/PRadioGroup"
import PTagsInput from '@/components/common/PTagsInput'

const customTypeRadioOptions = [
  { label: 'Researcher', value: 'researcher' },
  { label: 'Participator', value: 'participator' }
]

const ResearcherFormFragment = () => {
  return (
    <>
      <FormRow className="mr-[380px]">
        <PSelect label="Institute" placeholder=" " options={[{ key: 'k0', label: 'ins', value: 'v0' }]} />
        <PSelect label="Title" placeholder=" " options={[{ key: 'k0', label: 'ins', value: 'v0' }]} />
      </FormRow>

      <FormRow label="Research Fields" className="pt-[32px]">
        <PTagsInput />
      </FormRow>

      <FormRow label="Related Links" className="pt-[32px]">
        <PTagsInput />
      </FormRow>

      <FormRow label="Other related tags" className="pt-[32px]">
        <PTagsInput />
      </FormRow>
    </>
  )
}

const ParticipatorFormFragment = () => {
  const [petsTags, setPetsTags] = useState(['# Sociology'])

  const handleInputTagDel = (value: string[]) => {
    console.log('handleInputTagDel', value);
    
    setPetsTags(value)
  }

  return (
    <>
      <FormRow className="mr-[380px]">
        <PSelect label="Industry" placeholder=" " options={[{ key: 'k0', label: 'ins', value: 'v0' }]} />
        <PSelect label="Position" placeholder=" " options={[{ key: 'k0', label: 'ins', value: 'v0' }]} />
      </FormRow>

      <FormRow label="Pets" className="pt-[32px]">
        <PTagsInput value={petsTags} onChange={handleInputTagDel} />
      </FormRow>

      <FormRow label="Medical history" className="pt-[32px]">
        <PTagsInput />
      </FormRow>

      <FormRow label="Other related tags" className="pt-[32px]">
        <PTagsInput />
      </FormRow>
    </>
  )
}

const StepOneCard: FC = () => {
  const [currentCharacter, setCurrentCharacter] = useState('participator')

  const handleCharacterRadioGroupChange = (e: React.FormEvent<HTMLDivElement>) => {
    setCurrentCharacter((e.target as HTMLInputElement).value)
  }

  return (
    <PCard className="h-[550px] w-[1120px] p-[50px] pr-[70px] !bg-[#EADED7]" bodyClass="p-0">
      <form>
        <PTitle>You are</PTitle>

        <FormRow className="mr-[700px]">
          <PRadioGroup options={customTypeRadioOptions} value={currentCharacter} onChange={handleCharacterRadioGroupChange} />
        </FormRow>

        {
          currentCharacter === 'researcher'
          && (
            <ResearcherFormFragment />
          )
        }

        {
          currentCharacter === 'participator'
          && (
            <ParticipatorFormFragment />
          )
        }
      </form>
    </PCard>
  )
}

export default StepOneCard
