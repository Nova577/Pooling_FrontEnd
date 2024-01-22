import PCard from "@/components/common/PCard"
import PTitle from "@/components/common/PTitle"
import PAvatar from "@/components/common/PAvatar"
import { FC, useState } from "react"
import FormRow from "@/views/SignUp/FormRow"
import PSelect from "@/components/common/PSelect"
import PTagsInput from '@/components/common/PTagsInput'
import PTextarea from '@/components/common/PTextarea'
import PButton from "@/components/common/PButton2"
import { useForm, Controller } from 'react-hook-form'
import { useRequest } from "ahooks"
import { getDictionaryApi } from '@/apis/dictionary'
import { formatDirectoryOption } from '@/utils/util'
import { ISelectOptionItem } from '@/types/global'
import useSignInStore from '@/views/SignIn/store'
import { toast } from "../common/PToast"
import { updateResearcherApi } from '@/apis/user'

interface IResearchProfile {
  avatar?: string
  email: string
  institute: string
  title: string
  researchFields: string[]
  relatedLinks: string[]
  other: string[]
  description: string
}

// const initResearchFormValue: IResearchProfile = {
//   institute: '',
//   title: '',
//   researchFields: [],
//   other: [],
//   relatedLinks: [],
//   description: '',
// }

const rules = {
  institute: {
    required: 'Please select institute'
  },
  title: {
    required: 'Please select title'
  },
}

const ResearchProfileEdit: FC = () => {
  const { register, formState: { errors }, control, setValue, handleSubmit } = useForm<IResearchProfile>({
    mode: 'onBlur',
  })

  const [instituteOptions, setInstituteOptions] = useState<ISelectOptionItem[]>([])
  const [titleOptions, setTitleOptions] = useState<ISelectOptionItem[]>([])
  const userInfo = useSignInStore(state=> state.userInfo) || {}

  useRequest(() => getDictionaryApi('Institute'), {
    onSuccess(data) {
      if (data?.institute) {
        setInstituteOptions(formatDirectoryOption(data.institute))
      }
    }
  })

  useRequest(() => getDictionaryApi('Title'), {
    onSuccess(data) {
      if (data?.title) {
        setTitleOptions(formatDirectoryOption(data.title))
      }
    }
  })

  const { loading: saveLoading, run: saveRun } = useRequest(updateResearcherApi, {
    manual: true,
    onSuccess: () => {
      toast?.current?.info('Modify successfully')
    }
  })

  const onSubmit = (values: IResearchProfile) => {
    saveRun({ id: userInfo?.id, ...values })
  }


  return (
    <PCard className="h-[800px] w-[800px] px-[90px] py-[36px] bg-[#F1E8E3]" bodyClass="p-0">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex">
          <PAvatar imgSrc={userInfo.avatar} className="w-[160px] h-[160px] shrink-0" />

          <div className="ml-[40px] flex-1 flex flex-col justify-center">
            <PTitle className="opacity-80 text-[18px] leading-6">
              E-mail : {userInfo.email}
            </PTitle>
            <PTitle className="opacity-80 text-[18px] leading-6 mt-[15px]">
              ID : {userInfo.id}
            </PTitle>


            {/* <FormRow className="pt-[0px] mt-[40px]">
              <PInput className="w-[200px]" label="First Name" />
              <PInput className="w-[200px]" label="Last Name" />
            </FormRow> */}
          </div>
        </div>


        <FormRow>
          <Controller
            control={control}
            name="institute"
            defaultValue={userInfo.institute}
            rules={rules.institute}
            render={({ field }) => (
              <PSelect 
                label="Institute" 
                placeholder="" 
                classNames={{
                  mainWrapper: 'relative',
                  helperWrapper: 'absolute bottom-[-24px]'
                }}
                options={instituteOptions}
                selectedKeys={new Set([field.value])}
                errorMessage={errors.institute && errors.institute?.message}
                onChange={(e) => {
                  const value = e.target.value
                  if (!value) return
                  setValue('institute', value)
                }}
              />
            )}
          />
          <Controller
            control={control}
            name="title"
            rules={rules.title}
            defaultValue={userInfo.title}
            render={({ field }) => (
              <PSelect 
                selectionMode="single"
                label="Title" 
                placeholder="" 
                options={titleOptions}
                classNames={{
                  mainWrapper: 'relative',
                  helperWrapper: 'absolute bottom-[-24px]'
                }}
                selectedKeys={new Set([field.value])}
                errorMessage={errors.title && errors.title?.message}
                onChange={(e) => {
                  const value = e.target.value
                  if (!value) return
                  setValue('title', value)
                }}
              />
            )}
          />
        </FormRow>
        
        <FormRow className="pt-[32px]" label="Research Fields">
          <Controller
            control={control}
            defaultValue={userInfo.tags?.researchFields}
            name="researchFields"
            render={({ field }) => (
              <PTagsInput 
                value={field.value} 
                onChange={(value) => {
                  setValue('researchFields', value)
                }} 
              />
            )}
          />
        </FormRow>

        <FormRow  className="pt-[32px]" label="Related Links">
          <Controller
            control={control}
            name="relatedLinks"
            defaultValue={userInfo.relatedLinks}
            render={({ field }) => (
              <PTagsInput 
                value={field.value} 
                onChange={(value) => {
                  setValue('relatedLinks', value)
                }} 
              />
            )}
          />
        </FormRow>

        <FormRow  className="pt-[32px]" label="Other related tags">
          <Controller
            control={control}
            name="other"
            defaultValue={userInfo.tags?.other}
            render={({ field }) => (
              <PTagsInput 
                value={field.value} 
                onChange={(value) => {
                  setValue('other', value)
                }} 
              />
            )}
          />
        </FormRow>

        <FormRow  className="pt-[32px]" label="Describe Yourself">
          <PTextarea
            minRows={5}
            defaultValue={userInfo.description}
            {...register("description")}
          />
        </FormRow>
        
        <div className="flex justify-end mt-[10px]">
          <PButton className="mt-[10px] w-[100px] h-[40px] text-[25px]" size="md" radius="full" type="submit" isLoading={saveLoading}>Save</PButton>
        </div>
      </form>
    </PCard>
  )
}

export default ResearchProfileEdit
