import { FC, useState } from "react"
import PCard from "../../components/common/PCard"
import PTitle from "../../components/common/PTitle"
import PInput from "../../components/common/PInput"
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

      <FormRow>
        <PInput />
      </FormRow>

      <FormRow>
        <PTagsInput />
      </FormRow>

      <FormRow>
        <PTagsInput />
      </FormRow>
    </>
  )
}

const ParticipatorFormFragment = () => {
  return (
    <>
      <FormRow className="mr-[380px]">
        <PSelect label="Industry" placeholder=" " options={[{ key: 'k0', label: 'ins', value: 'v0' }]} />
        <PSelect label="Position" placeholder=" " options={[{ key: 'k0', label: 'ins', value: 'v0' }]} />
      </FormRow>

      <FormRow>
        <PInput />
      </FormRow>

      <FormRow>
        <PInput />
      </FormRow>

      <FormRow>
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
    <PCard className="h-[550px] w-[1120px] p-[50px] pr-[70px]" bodyClass="p-0">
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
