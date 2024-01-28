import { FC } from "react"
import PModal from "../common/PModal"
import PTag from "../common/PTag"
import PCard from "../common/PCard"
import CalendarIcon from '@/components/common/Icons/Calendar'
import ClockIcon from '@/components/common/Icons/Clock'
import LocationIcon from '@/components/common/Icons/Location'
import PScrollContainer from '@/components/common/PScrollContainer'

interface Props {
  isOpen?: boolean
  name?: string
  dateString?: string
  startTime?: string
  endTime?: string
  meetingInfo?: React.ReactNode
  description?: React.ReactNode

  onWillCauseClose?: () => void
}
const ParticipatorScheduleDetailModal: FC<Props> = (props) => {
  const {
    isOpen,
    name,
    dateString = '',
    description = '',
    meetingInfo = '',
    startTime = '',
    endTime = '',
    onWillCauseClose
  } = props


  const getTimeFormat = (time?: string) => {
    if (!time) return '00:00'
    
    return time.split(':').slice(0, 2).join(':')
  }

  return (
    <PModal isOpen={isOpen} onWillCauseClose={onWillCauseClose}>
      <div className="flex gap-[20px]">
        {/* <CalendarIcon /> */}
        <i className="fi fi-rr-calendar-check text-[30px] text-[#141414] h-[40px]"></i>

        <p className="text-neutral-900 text-[35px] font-normal font-playfair leading-[42px]">
          {name}
        </p>
      </div>

      <div className="pt-11 flex gap-[25px]">
        <PTag className="bg-[#EEE5DF] rounded-xl" color="rosewater">
          <div className="flex gap-[15px] items-center">
            <CalendarIcon />
            <span>
              { dateString }
            </span>
          </div>
        </PTag>
        
        <PTag className="bg-[#EEE5DF] rounded-xl" color="rosewater">
          <div className="flex gap-[15px] items-center">
            <ClockIcon />
            <span>
              { `${getTimeFormat(startTime)} - ${getTimeFormat(endTime)}` }
            </span>
          </div>
        </PTag>
      </div>
      
      <div className="pt-[25px] mb-[70px] flex flex-col gap-[10px]">
        <PCard className="bg-[#F3EEEA]" bodyClass="py-[10px] px-[50px]">
          <p className="text-black text-[15px] font-bold font-playfair leading-tight">Meeting Information</p>

          <p className="w-[370px] text-neutral-500 text-[15px] font-normal font-playfair leading-tight">
            { meetingInfo }
          </p>

          <div className="absolute left-[20px] top-[10px]">
            <LocationIcon />
          </div>
        </PCard>

        <PCard className="bg-[#F3EEEA]" bodyClass="py-[10px] pl-[40px] pr-[20px]">
          <p className="text-black text-[15px] font-bold font-playfair leading-tight">Description</p>
          <PScrollContainer className="max-h-[163px]">
            <p className="w-[370px] text-neutral-500 text-[15px] font-normal font-playfair leading-tight">{ description }</p>
          </PScrollContainer>
        </PCard>
      </div>
    </PModal>
  )
}

export default ParticipatorScheduleDetailModal
