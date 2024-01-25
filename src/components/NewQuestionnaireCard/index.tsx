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

interface SubProject {

}

interface NewQuestionnaireFormValue {
  researchName: string
  headCountStr: string
  rewardForEach: string
  subProjects: SubProject[]
  relatedDocuments: string[]
  addCooperators: string[]
  intervieweesPreference: string[]
  researchDescription: string
}

const initNewQuestionnaireFormValue: NewQuestionnaireFormValue = {
  researchName: '',
  headCountStr: '',
  rewardForEach: '',
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
  const [newQuestionnaireFormValue, setNewQuestionnaireFormValue] = useState(initNewQuestionnaireFormValue)

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

  const handleSaveButtonClick = () => {
    setIsNewMeetingModalOpenTrue()
  }

  const handleResearchNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewQuestionnaireFormValue(prev => ({ ...prev, researchName: e.target.value }))
  }

  const handleHeadCountInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewQuestionnaireFormValue(prev => ({ ...prev, headCountStr: e.target.value }))
  }

  return (
    <>
      <PCard className="bg-[#E9DDD5]" bodyClass="px-unit-10 pt-unit-8 pb-[18px]">
        <div className="w-[768px]">
          <form className="h-full w-full">
            <div className="w-full grid grid-cols-3 gap-unit-4">
              <div className="h-[188px] col-span-2 flex flex-col gap-unit-4">
                <PInput className="h-unit-10 col-span-2" placeholder="Add Research Name" value={newQuestionnaireFormValue.researchName} onChange={handleResearchNameInputChange} />

                <div className="flex gap-4">
                  <PInput className="h-unit-10" startContent={<i className="fi fi-rr-users-alt text-2xl text-[#848280] translate-y-[2px]" />} placeholder="Head Count" value={newQuestionnaireFormValue.headCountStr} onChange={handleHeadCountInputChange} />
                  <PInput className="h-unit-10" startContent={<i className="fi fi-br-badge text-2xl text-[#848280] translate-y-[2px]" />} placeholder="Reward for Each" />
                </div>
              </div>

              <PImageUpload />
            </div>

            <FormRow label="Subproject">
              <div className="mt-3 grid grid-cols-3 gap-unit-8">
                <PInput className="h-unit-10" placeholder="Questionnaire 1" />

                <PInput className="h-unit-10" placeholder="Questionnaire 1" />
              </div>
            </FormRow>

            <FormRow label="Related Document">
              <div className="mt-3 grid grid-cols-3 gap-unit-8">
                <PInput className="h-unit-10" placeholder="Document 1" />

                <PInput className="h-unit-10" placeholder="Document 2" />
              </div>
            </FormRow>

            <FormRow label="Add Cooperators">
              <div className="w-full mt-3">
                <TagsInput />
              </div>
            </FormRow>

            <FormRow label="Interviewees Preference">
              <div className="w-full mt-3">
                <TagsInput />
              </div>
            </FormRow>

            <FormRow label="Research Description">
              <div className="w-full mt-3">
                <PTextarea minRows={8} />
              </div>
            </FormRow>

            <div className="mt-unit-3 flex justify-end gap-unit-2">
              <PButton size="sm" htmlType="button" squareRound onClick={handleSaveButtonClick}>Save</PButton>

              <PButton size="sm" htmlType="button" squareRound>Submit</PButton>
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