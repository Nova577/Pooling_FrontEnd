import { FC } from "react"
import PCard from "../../components/common/PCard"
import PTitle from "../../components/common/PTitle"
import PInput from "../../components/common/PInput"
import FormRow from "./FormRow"
import PSelect from "../../components/common/PSelect"
import PRadioGroup from "@/components/common/PRadioGroup"

const customTypeRadioOptions = [
  { label: 'Researcher', value: 'researcher' },
  { label: 'Participator', value: 'participator' }
]
const StepOneCard: FC = () => {
  return (
    <PCard className="h-[550px] w-[1120px] p-[50px] pr-[70px]" bodyClass="p-0">
      <form>
        <PTitle>You are</PTitle>

        <FormRow className="mr-[700px]">
          <PRadioGroup items={['RResearcher', 'Participator']} />
        </FormRow>

        <FormRow className="mr-[380px]">
            <PSelect label="Institute" placeholder=" " options={[{ key: 'k0', label: 'ins', value: 'v0' }]} />
            <PSelect label="Title" placeholder=" " options={[{ key: 'k0', label: 'ins', value: 'v0' }]} />
        </FormRow>

        <FormRow>
          <PInput  />
        </FormRow>

        <FormRow>
          <PInput />
        </FormRow>

        <FormRow>
          <PInput />
        </FormRow>
      </form>
    </PCard>
  )
}

export default StepOneCard
