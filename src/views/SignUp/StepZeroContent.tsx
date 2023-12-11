import PCard from "@/components/common/PCard"
import PTitle from "@/components/common/PTitle"
import { FC } from "react"
import FormRow from "./FormRow"
import PButton from "@/components/common/PButton"
import PRadioGroup from "@/components/common/PRadioGroup"
import PInput from "@/components/common/PInput"
import PSelect from "@/components/common/PSelect"

const countryOptions = [
  { key: 'cn', value: 'cn', label: 'China' },
  { key: 'us', value: 'us', label: 'U.S.A' },
]

const stateOptions = [
  { key: 'cn', value: 'cn', label: 'China' },
  { key: 'us', value: 'us', label: 'U.S.A' },
]

const StepZeroContent: FC = () => {
  return (
    <>
      <PCard className="h-[550px] w-[660px] p-[50px]" bodyClass="p-0 gap-0">
        <form>
          <div className="pt-2">
            <PTitle>Create your email account</PTitle>
          </div>

          <FormRow>
            <PInput label="Email" />
            <PButton className="h-[60px] w-[120px] text-neutral-900 bg-white" squareRound>
              <span className="opacity-70 text-[23px]">
                Send
              </span>
            </PButton>
          </FormRow>

          <FormRow>
            <PInput label="Code" />

            <PButton className="h-[60px] w-[120px] mr-[140px] bg-white" squareRound>
              <span className="opacity-70 text-[23px]">Check</span>
            </PButton>
          </FormRow>
        </form>

        <form className="mt-[38px]">
          <PTitle>Password</PTitle>

          <FormRow>
            <PInput type="password" label="Choose a password" placeholder="At least 8 characters" />
          </FormRow>

          <FormRow>
            <PInput type="password" label="Repeat password" />
          </FormRow>
        </form>
      </PCard>

      <PCard className="h-[550px] w-[660px] p-[50px]" bodyClass="p-0 gap-0">
        <form>
          <div className="pt-2">
            <PTitle>Personal details</PTitle>
          </div>

          <FormRow>
            <PRadioGroup
              items={['Ms', 'Mr', 'Other']}
              
            />
            <PRadioGroup
              items={['DD', 'MM', 'YYYY']}
              
            />
          </FormRow>
          
          <FormRow>
            <PInput label="First name" />
            <PInput label="Last name" />
          </FormRow>
        </form>

        <form className="mt-[38px]">
          <div>
            <PTitle>Area</PTitle>
          </div>

          <FormRow>
            <PSelect label="Country/Region" placeholder=" " options={countryOptions} />
            {/* <PInput label="Country/Region" /> */}
          </FormRow>

          <FormRow>
            <PSelect label="State" placeholder=" " options={stateOptions} />
          </FormRow>
        </form>
      </PCard>
    </>
  )
}

export default StepZeroContent