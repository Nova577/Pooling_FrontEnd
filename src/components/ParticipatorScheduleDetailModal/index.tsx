import { FC } from "react"
import PModal from "../common/PModal"
import PTag from "../common/PTag"
import PCard from "../common/PCard"
import CalendarIcon from '@/components/common/Icons/Calendar'

interface Props {
  isOpen?: boolean

  dateInfo?: string
  timeInfo?: string
  participantInfo?: string
  meetingInfo?: React.ReactNode
  description?: React.ReactNode

  onWillCauseClose?: () => void
}
const ParticipatorScheduleDetailModal: FC<Props> = (props) => {
  const {
    isOpen,

    dateInfo = 'Dec 7th',
    description = 'description',
    meetingInfo = 'meeting info',
    participantInfo = '23 Left',
    timeInfo = '12:00 - 16: 00',
    
    onWillCauseClose
  } = props

  return (
    <PModal isOpen={isOpen} onWillCauseClose={onWillCauseClose}>
      <div className="flex gap-[20px]">
        <CalendarIcon />

        <p className="text-neutral-900 text-[35px] font-normal font-playfair leading-[42px]">Daily sugar consumption <br/>Interview</p>
      </div>

      <div className="pt-11 flex gap-[25px]">
        <PTag className="flex-1" color="rosewater">
          <div className="flex gap-[15px]">
            <CalendarIcon />
            <span>
              { dateInfo }
            </span>
          </div>
        </PTag>
        
        <PTag className="flex-1" color="rosewater">
          <div className="flex gap-[15px]">
            <CalendarIcon />
            <span>
              { timeInfo }
            </span>
          </div>
        </PTag>

        <PTag className="flex-1" color="rosewater">
          <div className="flex gap-[15px]">
            <CalendarIcon />
            <span>
              { participantInfo }
            </span>
          </div>
        </PTag>
      </div>
      
      <div className="pt-[25px] mb-[70px] flex flex-col gap-[10px]">
        <PCard className="bg-[#F3EEEA]" bodyClass="py-[10px] px-[50px]">
          <p className="text-black text-[15px] font-bold font-playfair leading-tight">Meeting Information</p>

          <p className="w-[370px] text-neutral-500 text-[15px] font-normal font-playfair leading-tight">{ meetingInfo }</p>

          <div className="absolute left-[20px] top-[10px]">
            <CalendarIcon />
          </div>
        </PCard>

        <PCard className="bg-[#F3EEEA]" bodyClass="py-[10px] px-[40px]">
          <p className="text-black text-[15px] font-bold font-playfair leading-tight">Description</p>

          <p className="w-[370px] text-neutral-500 text-[15px] font-normal font-playfair leading-tight">{ description }</p>
        </PCard>
      </div>
    </PModal>
  )
}

export default ParticipatorScheduleDetailModal
