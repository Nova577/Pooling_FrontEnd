import PCard from "@/components/common/PCard"
import PTitle from "@/components/common/PTitle"
import PAvatar from "@/components/common/PAvatar"
import maleAvatarSrc from '@/assets/male_avatar.png'
import { FC } from "react"
import FormRow from "@/views/SignUp/FormRow"
import PInput from "@/components/common/PInput2"
import PSelect from "@/components/common/PSelect"
import PTagsInput from '@/components/common/PTagsInput'
import PTextarea from '@/components/common/PTextarea'
import PButton from "@/components/common/PButton"

const ResearchProfileEdit: FC = () => {
  return (
    <PCard className="h-[800px] w-[800px] px-[90px] py-[36px] bg-[#F1E8E3]" bodyClass="p-0">
      <form>
        <div className="flex">
          <PAvatar imgSrc={maleAvatarSrc} className="w-[160px] h-[160px] shrink-0" />

          <div className="ml-[40px] flex-1">
            <PTitle className="opacity-80 text-[18px] leading-6">E-mail : researcher@pooling.tools</PTitle>
            <PTitle className="opacity-80 text-[18px] leading-6 mt-[15px]">Account Number : 865198251</PTitle>


            <FormRow className="pt-[0px] mt-[40px]">
              <PInput className="w-[200px]" label="First Name" />
              <PInput className="w-[200px]" label="Last Name" />
            </FormRow>
          </div>
        </div>


        <FormRow>
          <PSelect label="Institute" placeholder=" " options={[{ key: 'k0', label: 'ins', value: 'v0' }]} />
          <PSelect label="Title" placeholder=" " options={[{ key: 'k0', label: 'ins', value: 'v0' }]} />
        </FormRow>
        
        <FormRow className="pt-[32px]" label="Research Fields">
          <PTagsInput />
        </FormRow>

        <FormRow  className="pt-[32px]" label="Related Links">
          <PTagsInput />
        </FormRow>

        <FormRow  className="pt-[32px]" label="Other related tags">
          <PTagsInput />
        </FormRow>

        <FormRow  className="pt-[32px]" label="Describe Yourself">
          <PTextarea minRows={4} />
        </FormRow>
        
        <div className="flex justify-end mt-[10px]">
          <PButton className="w-[100px] h-[40px] text-[15px] bg-white" squareRound size="sm">Save</PButton>
        </div>
      </form>
    </PCard>
  )
}

export default ResearchProfileEdit
