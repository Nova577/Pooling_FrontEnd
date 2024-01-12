import { FC, useState } from "react"
import PCard from "../../components/common/PCard"
import PTitle from "../../components/common/PTitle"
import FormRow from "./FormRow"
import PSelect from "../../components/common/PSelect"
import PRadioGroup from "@/components/common/PRadioGroup"
import PTagsInput from '@/components/common/PTagsInput'
import { useFormContext, Controller } from 'react-hook-form'
import clsx from "clsx"
import { ChARACTER_ENUM } from '@/types/user'
import { formatDirectoryOption } from '@/utils/util'
import { useRequest } from "ahooks"
import { getDictionaryApi } from '@/apis/dictionary'
import { ISelectOptionItem } from '@/types/global'

const customTypeRadioOptions = [
  { label: 'Researcher', value: 'researcher' },
  { label: 'Participator', value: 'participator' }
]

export interface IResearcherProps {
  institute: string
  title: string
  researchFields: string[]
  relatedLinks: string[]
  other: string[]
}

interface IStepOneCardProps {
  currentCharacter: string; 
  setCurrentCharacter: (value: string) => void
  className?: string
}

const rules = {
  institute: {
    required: 'Please select institute'
  },
  title: {
    required: 'Please select title'
  },
  section: {
    required: 'Please select section'
  },
  occupation: {
    required: 'Please select occupation'
  },
}

const ResearcherFormFragment = () => {
  const {control, setValue, formState: { errors } } = useFormContext<IResearcherProps>()
  const [instituteOptions, setInstituteOptions] = useState<ISelectOptionItem[]>([])
  const [titleOptions, setTitleOptions] = useState<ISelectOptionItem[]>([])

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

  return (
    <>
      <FormRow className="mr-[380px]">
        <Controller
          control={control}
          name="institute"
          defaultValue={''}
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
          defaultValue={''}
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

      <FormRow label="Research Fields" className="pt-[32px] mt-[12px]">
        <Controller
          control={control}
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

      <FormRow label="Related Links" className="pt-[32px]">
        <Controller
          control={control}
          name="relatedLinks"
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

      <FormRow label="Other related tags" className="pt-[32px]">
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
    </>
  )
}

export interface IParticipatorProps {
  section: string
  occupation: string
  pets: string[]
  medicalHistory: string[]
  other: string[]
}


const ParticipatorFormFragment = () => {
  const {control, setValue, formState: { errors } } = useFormContext<IParticipatorProps>()
  const [sectionOptions, setSectionOptions] = useState<ISelectOptionItem[]>([])
  const [occupationOptions, setOccupationOptions] = useState<ISelectOptionItem[]>([])

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

  return (
    <>
      <FormRow className="mr-[380px]">
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

      <FormRow label="Pets" className="pt-[32px] mt-[12px]">
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
      </FormRow>

      <FormRow label="Medical history" className="pt-[32px]">
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
        <PTagsInput />
      </FormRow>

      <FormRow label="Other related tags" className="pt-[32px]">
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
    </>
  )
}


const StepOneCard: FC<IStepOneCardProps> = ({ currentCharacter, setCurrentCharacter, className }) => {
  const handleCharacterRadioGroupChange = (e: React.FormEvent<HTMLDivElement>) => {
    setCurrentCharacter((e.target as HTMLInputElement).value)
  }

  return (
    <PCard 
      className={clsx("h-[550px] w-[1120px] py-[43px] px-[50px] pr-[70px] !bg-[#EADED7]", className)} 
      bodyClass="p-0 gap-0"
    >
      <PTitle>You are</PTitle>

      <FormRow className="mr-[700px] !pt-[20px]">
        <PRadioGroup options={customTypeRadioOptions} value={currentCharacter} onChange={handleCharacterRadioGroupChange} />
      </FormRow>

      {
        currentCharacter === ChARACTER_ENUM.RESEARCHER
        && (
          <ResearcherFormFragment />
        )
      }

      {
        currentCharacter === ChARACTER_ENUM.PARTICIPATOR
        && (
          <ParticipatorFormFragment />
        )
      }
    </PCard>
  )
}

export default StepOneCard
