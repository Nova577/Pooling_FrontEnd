import PCard from "@/components/common/PCard"
import PTitle from "@/components/common/PTitle"
import PAvatar from "@/components/common/PAvatar"
import maleAvatarSrc from '@/assets/male_avatar.png'
import { FC } from "react"
import FormRow from "@/views/SignUp/FormRow"
import PInput from "@/components/common/PInput"
import PSelect from "@/components/common/PSelect"
import PTagsInput from '@/components/common/PTagsInput'

const ResetPassword: FC = () => {
  return (
    <div className="py-[300px] flex justify-center">
       <PCard className="h-[800px] w-[800px] px-[90px] py-[36px]" bodyClass="p-0">
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
          
          <FormRow>
            <PTagsInput />
          </FormRow>

          <FormRow>
            <PTagsInput />
          </FormRow>

          <FormRow>
            <PTagsInput />
          </FormRow>

          <FormRow>
            <PInput />
          </FormRow>
         
        </form>
      </PCard>
    </div>
  )
}

export default ResetPassword
