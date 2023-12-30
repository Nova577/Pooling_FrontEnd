import { FC } from "react"
import PModal from "../common/PModal"
import PCard from "../common/PCard"
import PButton from "../common/PButton"
import CalendarIcon from "../common/Icons/Calendar"
import PTag from "../common/PTag"
import locationIconSrc from '@/assets/location_icon.svg'

interface Props {
  isOpen?: boolean

  onWillCauseClose?: () => void
}

const NewQuestionnaireCardNewMeetingModal: FC<Props> = (props) => {
  const {
    isOpen,
    onWillCauseClose
  } = props

  return (
    <PModal
      classNames={{
        header: 'pt-unit-7 px-unit-7',
        body: 'px-unit-7',
        footer: 'px-unit-7'
      }}
      header={
        <div className="flex gap-unit-4">
          <i className="fi fi-rr-calendar-check text-[30px]" />

          <p className="font-playfair text-[35px] font-normal">
            New Meeting Name
          </p>
        </div>
      }
      footer={
        <PButton className="!bg-[#F3EEEA]" size="sm" squareRound onClick={onWillCauseClose}>Save</PButton>
      }
      isOpen={isOpen}
      onWillCauseClose={onWillCauseClose}
    >
      <div className="flex gap-unit-5">
        <PTag color="rosewater" size="sm">Dec 25th</PTag>

        <PTag color="rosewater" size="sm">14:00 - __:__</PTag>
      </div>

      <PCard className="mt-unit-5 bg-[#F3EEEA]" bodyClass="py-unit-2 px-unit-10">
        <p className="text-black text-[15px] font-bold font-playfair leading-tight">Meeting Information</p>

        <p className="w-[370px] text-neutral-500 text-[15px] font-normal font-playfair leading-tight">{ 'asdf' }</p>

        <div className="absolute left-[20px] top-[10px]">
          <img className="h-5 aspect-square" src={locationIconSrc} />
        </div>
      </PCard>

        <PCard className="mt-unit-2 bg-[#F3EEEA]" bodyClass="py-unit-2 px-unit-10">
        <p className="text-black text-[15px] font-bold font-playfair leading-tight">Meeting Information</p>

        <p className="w-[370px] text-neutral-500 text-[15px] font-normal font-playfair leading-tight">{ 'dd' }</p>

        <div className="absolute left-[20px] top-[10px]">
          <CalendarIcon />
        </div>
      </PCard>
    </PModal>
  )
}

export default NewQuestionnaireCardNewMeetingModal
