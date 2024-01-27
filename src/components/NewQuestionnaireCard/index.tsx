import { FC, useState } from "react"
import PCard from "../common/PCard"
import FormRow from "@/views/SignUp/FormRow"
import PButton from "../common/PButton"
import PInput from "../common/PInput2"
import PImageUpload from "../common/PImageUpload"
import TagsInput from "../common/PTagsInput"
import PTextarea from "../common/PTextarea"
import NewQuestionnaireCardNewMeetingModal from "../NewQuestionnaireCardNewMeetingModal"
import { useBoolean } from "ahooks"
import { Controller, useForm } from "react-hook-form"
import UploadCore from "../common/UploadCore"

interface SubProject {

}

interface NewQuestionnaireFormValue {
  researchName: string
  relevantPicture: string
  headCount: number
  rewardForEach: string
  subProjects: SubProject[]
  relatedDocuments: string[]
  addCooperators: string[]
  intervieweesPreference: string[]
  researchDescription: string
}

const initNewQuestionnaireFormValue: NewQuestionnaireFormValue = {
  researchName: '',
  headCount: 0,
  rewardForEach: '',
  relevantPicture: '',
  subProjects: [],
  relatedDocuments: [],
  addCooperators: [],
  intervieweesPreference: [],
  researchDescription: ''
}

interface Props {
  onSave?: () => void
  onSubmit?: () => void
} 

const NewQuestionnaireCard: FC<Props> = () => {
  const [
    isNewMeetingModalOpen,
    {
      setFalse: setIsNewMeetingModalOpenFalse,
      setTrue: setIsNewMeetingModalOpenTrue
    }
  ] = useBoolean()

  const handleNewMeetingModalWillCauseClose = () => {
    setIsNewMeetingModalOpenFalse()
  }

  const {
    register,
    control,
    handleSubmit
  } = useForm<NewQuestionnaireFormValue>({ defaultValues: initNewQuestionnaireFormValue })

  const handleSaveButtonClick = () => {
    setIsNewMeetingModalOpenTrue()
  }

  const onSubmit = (formValue: NewQuestionnaireFormValue) => {
    console.log(formValue)
  }

  return (
    <>
      <PCard className="bg-[#E9DDD5]" bodyClass="px-unit-10 pt-unit-8 pb-[18px]">
        <div className="w-[768px]">
          <form className="h-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full grid grid-cols-3 gap-unit-8">
              <div className="h-[188px] col-span-2 flex flex-col gap-unit-4">
                <PInput
                  className="h-unit-10 col-span-2"
                  placeholder="Add Research Name"
                  {...register('researchName')}
                />

                <div className="flex gap-unit-10">
                  <PInput
                    className="h-unit-10"
                    startContent={<i className="fi fi-rr-users-alt text-2xl text-[#848280] translate-y-[2px]" />}
                    placeholder="Head Count"
                    type="number"
                    {...register('headCount', { valueAsNumber: true })}
                  />
                  <PInput
                    className="h-unit-10"
                    startContent={<i className="fi fi-br-badge text-2xl text-[#848280] translate-y-[2px]" />}
                    placeholder="Reward for Each"
                    {...register('rewardForEach')}
                  />
                </div>
              </div>

              <Controller
                name="relevantPicture"
                control={control}
                render={({ field }) => {
                  return (
                    <PImageUpload
                      {...field}
                    />
                  )
                }}
              />
            </div>

            <FormRow label="Subproject">
              <div className="mt-3 grid grid-cols-3 gap-unit-10">
                <div className="cursor-pointer">
                  {/* TODO: model */}
                  <PInput
                    className="h-unit-10 pointer-events-none"
                    placeholder="Create Questionnaire"
                    startContent={<i className="fi fi-rr-add-folder text-2xl text-[#848280] translate-y-[2px]" />}
                  />
                </div>

                <div className="cursor-pointer">
                  {/* TODO: model */}
                  <PInput
                    className="h-unit-10 pointer-events-none"
                    placeholder="Create Appointment"
                    startContent={<i className="fi fi-rs-cowbell-circle-plus text-2xl text-[#848280] translate-y-[2px]" />}
                  />
                </div>
              </div>
            </FormRow>

            <FormRow label="Related Document">
              <div className="mt-3 grid grid-cols-3 gap-unit-10">
                <UploadCore>
                  <div className="cursor-pointer">
                    <PInput
                      className="h-unit-10 pointer-events-none"
                      placeholder="File Upload"
                      startContent={<i className="fi fi-rr-folder-upload text-2xl text-[#848280] translate-y-[2px]" />}
                    />
                  </div>
                </UploadCore>
              </div>
            </FormRow>

            <FormRow label="Add Cooperators">
              <div className="w-full mt-3">
                <Controller
                  name="addCooperators"
                  control={control}
                  render={({ field }) => {
                    return (
                      <TagsInput { ...field }  />
                    )
                  }}
                />
              </div>
            </FormRow>

            <FormRow label="Interviewees Preference">
              <div className="w-full mt-3">
                <Controller
                  name="intervieweesPreference"
                  control={control}
                  render={({ field }) => {
                    return (
                      <TagsInput { ...field }  />
                    )
                  }}
                />
              </div>
            </FormRow>

            <FormRow label="Research Description">
              <div className="w-full mt-3">
                <PTextarea minRows={8} />
              </div>
            </FormRow>

            <div className="mt-unit-3 flex justify-end gap-unit-2">
              <PButton size="sm" htmlType="button" squareRound onClick={handleSaveButtonClick}>Save</PButton>

              <PButton size="sm" htmlType="submit" squareRound>Submit</PButton>
            </div>
          </form>
        </div>
      </PCard>

      <NewQuestionnaireCardNewMeetingModal
        isOpen={isNewMeetingModalOpen}
        onWillCauseClose={handleNewMeetingModalWillCauseClose}
      />
    </>
  )
}

export default NewQuestionnaireCard