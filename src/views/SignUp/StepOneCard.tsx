import { FC, useState } from "react"
import PCard from "../../components/common/PCard"
import PTitle from "../../components/common/PTitle"
import FormRow from "./FormRow"
import PSelect from "../../components/common/PSelect"
import PRadioGroup from "@/components/common/PRadioGroup"
import PTagsInput from '@/components/common/PTagsInput'
import { useFormContext, Controller } from 'react-hook-form'
import clsx from "clsx"
import { ChARACTER_ENUM } from './index'

const customTypeRadioOptions = [
  { label: 'Researcher', value: 'researcher' },
  { label: 'Participator', value: 'participator' }
]

const instituteOptions = [{ key: 'k0', label: 'ins', value: 'k0' }]
const titleOptions = [{ key: 't1', label: 'title', value: 't1' }]

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

// const rules = {
//   institute: {
//     required: 'Please enter institute'
//   },
//   title: {
//     required: 'Please enter institute'
//   },
// }

const ResearcherFormFragment = () => {
  const {control, setValue } = useFormContext<IResearcherProps>()

  return (
    <>
      <FormRow className="mr-[380px]">
        <Controller
          control={control}
          name="institute"
          defaultValue={instituteOptions[0].value}
          render={({ field }) => (
            <PSelect 
              label="Institute" 
              placeholder="" 
              options={instituteOptions}
              selectedKeys={new Set([field.value])}
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
          defaultValue={titleOptions[0].value}
          render={({ field }) => (
            <PSelect 
              selectionMode="single"
              label="Title" 
              placeholder="" 
              options={titleOptions}
              selectedKeys={new Set([field.value])}
              onChange={(e) => {
                const value = e.target.value
                if (!value) return
                setValue('title', value)
                // console.log('onSelectionChange',  e);
              }}
            />
          )}
        />
      </FormRow>

      <FormRow label="Research Fields" className="pt-[32px]">
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
  industry: string
  position: string
  pets: string[]
  medicalHistory: string[]
  other: string[]
}

const industryOptions = [{ key: 'k0', label: 'ins', value: 'k0' }]
const positionOptions = [{ key: 't1', label: 'title', value: 't1' }]

const ParticipatorFormFragment = () => {

  const {control, setValue } = useFormContext<IParticipatorProps>()

  return (
    <>
      <FormRow className="mr-[380px]">
        <Controller
          control={control}
          name="industry"
          defaultValue={industryOptions[0].value}
          render={({ field }) => (
            <PSelect 
              label="Industry" 
              placeholder="" 
              options={industryOptions}
              selectedKeys={new Set([field.value])}
              onChange={(e) => {
                const value = e.target.value
                if (!value) return
                setValue('industry', value)
              }}
            />
          )}
        />
        <Controller
          control={control}
          name="position"
          defaultValue={positionOptions[0].value}
          render={({ field }) => (
            <PSelect 
              label="Position" 
              placeholder="" 
              options={positionOptions}
              selectedKeys={new Set([field.value])}
              onChange={(e) => {
                const value = e.target.value
                if (!value) return
                setValue('position', value)
              }}
            />
          )}
        />
      </FormRow>

      <FormRow label="Pets" className="pt-[32px]">
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
