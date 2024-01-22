import PCard from "@/components/common/PCard"
import PAvatar from "@/components/common/PAvatar"
import maleAvatarSrc from '@/assets/male_avatar.png'
import { FC, useState } from "react"
import FormRow from "@/views/SignUp/FormRow"
import PInput from "@/components/common/PInput2"
import PSelect from "@/components/common/PSelect"
import PTagsInput from '@/components/common/PTagsInput'
import PTextarea from "../common/PTextarea"
import { useForm, Controller } from 'react-hook-form'
import { useRequest } from "ahooks"
import { getDictionaryApi } from '@/apis/dictionary'
import { formatDirectoryOption } from '@/utils/util'
import { ISelectOptionItem } from '@/types/global'
import PButton from "../common/PButton2"
import { updateParticipantApi, getParticipantUserApi } from '@/apis/user'
import useSignInStore from '@/views/SignIn/store'
import { toast } from "../common/PToast"

interface IParticipatorProfile {
  avatar?: string,
  firstName?: string
  lastName?: string
  section?: string
  occupation?: string
  pets?: string[]
  medicalHistory?: string[]
  other?: string[]
  description?: string
}

const initProfileFormValue: IParticipatorProfile = {
  firstName: '',
  lastName: '',
  section: '',
  occupation: '',
  medicalHistory: [],
  other: [],
  pets: [],
  description: '',
}

const rules = {
  firstName: {
    required: 'Please enter your first name', 
  },
  lastName: {
    required: 'Please enter your last name', 
  },
  section: {
    required: 'Please select section'
  },
  occupation: {
    required: 'Please select occupation'
  },
}


const ParticipatorProfileEditCard: FC = () => {
  const [sectionOptions, setSectionOptions] = useState<ISelectOptionItem[]>([])
  const [occupationOptions, setOccupationOptions] = useState<ISelectOptionItem[]>([])
  const userInfo = useSignInStore(state=> state.userInfo)

  const { register, formState: { errors }, control, setValue, handleSubmit } = useForm<IParticipatorProfile>({
    mode: 'onBlur',
    defaultValues: initProfileFormValue,
  })

  useRequest(() => getParticipantUserApi(userInfo!.id!), {
    onSuccess: (data: IParticipatorProfile) => {
      console.log('updateParticipantApi', data);
      // if(data && Object.keys(initProfileFormValue).length > 0) {
      // for(const key in initProfileFormValue){
      //   console.log('key', key, data[key]);
        
      //   // setValue(key, data[key]);
      // }
      // }
      // setValue([data])
    },
    ready: !!userInfo?.id,
  })

  useRequest(() => getDictionaryApi('Section'), {
    onSuccess(data) {
      if (data?.section) {
        setSectionOptions(formatDirectoryOption(data.section))
      }
    }
  })

  useRequest(() => getDictionaryApi('Occupation'), {
    onSuccess(data) {
      if (data?.occupation) {
        setOccupationOptions(formatDirectoryOption(data.occupation))
      }
    }
  })

  const { loading: saveLoading, run: saveRun } = useRequest(updateParticipantApi, {
    onSuccess: data => {
      console.log('updateParticipantApi', data);
      toast?.current?.info('Modify successfully')
    }
  })
 
  const onSubmit = (values: IParticipatorProfile) => {
    saveRun({ id: userInfo?.id, ...values })
  }

  return (
    <PCard className="h-[800px] w-[800px] px-[90px] py-[36px] bg-[#EFE8E4]" bodyClass="p-0">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex">
          <PAvatar imgSrc={maleAvatarSrc} className="w-[160px] h-[160px] shrink-0" />

          <div className="ml-[40px] flex-1">
            <div className="text-[#565352] text-lg font-bold font-playfair leading-normal">E-mail : researcher@pooling.tools</div>
            <div className="pt-[15px] text-[#565352] text-lg font-bold font-playfair leading-normal">Account Number : 865198251</div>

            <FormRow className="pt-[40px]">
              <PInput 
                className="w-[200px]"
                label="First name" 
                isRequired
                errorMessage={errors.firstName && errors.firstName.message}
                {...register("firstName", rules.firstName)}
              />
              <PInput 
                className="w-[200px]"
                label="Last name" 
                isRequired
                errorMessage={errors.lastName && errors.lastName.message}
                {...register("lastName", rules.lastName)}
              />
            </FormRow>
          </div>
        </div>


        <FormRow className="pt-[40px]">
          <Controller
            control={control}
            name="section"
            defaultValue={''}
            rules={rules.section}
            
            render={({ field }) => (
              <PSelect 
                label="Section" 
                placeholder="" 
                options={sectionOptions}
                selectedKeys={new Set([field.value])}
                classNames={{
                  mainWrapper: 'relative',
                  helperWrapper: 'absolute bottom-[-24px]'
                }}
                errorMessage={errors.section && errors.section?.message}
                onChange={(e) => {
                  const value = e.target.value
                  if (!value) return
                  setValue('section', value)
                }}
              />
            )}
          />
          <Controller
            control={control}
            name="occupation"
            defaultValue={''}
            rules={rules.occupation}
            render={({ field }) => (
              <PSelect 
                label="Occupation" 
                placeholder="" 
                options={occupationOptions}
                selectedKeys={new Set([field.value])}
                classNames={{
                  mainWrapper: 'relative',
                  helperWrapper: 'absolute bottom-[-24px]'
                }}
                errorMessage={errors.occupation && errors.occupation?.message}
                onChange={(e) => {
                  const value = e.target.value
                  if (!value) return
                  setValue('occupation', value)
                }}
              />
            )}
          />
        </FormRow>
        
        <FormRow className="pt-[32px]" label="Pets">
          <div className="flex-1">
            <Controller
              control={control}
              name="pets"
              render={({ field }) => (
                <PTagsInput 
                  value={field.value} 
                  onChange={(value) => {
                    setValue('pets', value)
                  }} 
                />
              )}
            />
          </div>
        </FormRow>

        <FormRow className="pt-[32px]" label="Medical history">
          <Controller
            control={control}
            name="medicalHistory"
            render={({ field }) => (
              <PTagsInput 
                value={field.value} 
                onChange={(value) => {
                  setValue('medicalHistory', value)
                }} 
              />
            )}
          />
        </FormRow>

        <FormRow className="pt-[32px]" label="Other related tags">
          <Controller
            control={control}
            name="other"
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

        <FormRow className="pt-[32px]" label="Describe Yourself">
          <PTextarea
            minRows={5}
            {...register("description")}
          />
        </FormRow>

        <div className="flex justify-end">
          <PButton className="mt-[10px] w-[100px] h-[40px] text-[25px]" size="md" radius="full" type="submit" isLoading={saveLoading}>Save</PButton>
        </div>
      </form>
    </PCard>
  )
}

export default ParticipatorProfileEditCard
