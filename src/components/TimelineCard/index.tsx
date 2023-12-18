import { FC } from "react"
import PCard from "../common/PCard"
import PTag from "../common/PTag"
import CalendarIcon from "../common/Icons/Calendar"
import QuestionnaireIcon from '@/components/common/Icons/Questionnaire'
import AppointmentIcon from '@/components/common/Icons/Appointment'
import ParticipatorScheduleDetailModal from "../ParticipatorScheduleDetailModal"
import { useBoolean, useToggle } from "ahooks"

export enum TimelineCardType {
  QUESTIONNAIRE = 'Questionnaire',
  APPOINTMENT = 'Appointment'
}

interface Props {
  title?: string
  dateString?: string
  type?: TimelineCardType
}

const TimelineCard: FC<Props> = (props) => {
  const { title = '', dateString, type } = props

  const [detailModalIsOpen, { setFalse: setDetailModalIsOpenFalse, setTrue: setDetailModalIsOpenTrue }] = useBoolean(false)


  const handleClick = () => {
    setDetailModalIsOpenTrue()
  }

  const handleDetailModalWillCauseClose = () => {
    setDetailModalIsOpenFalse()
  }

  return (
    <>
      <PCard
        className="bg-[#EAECDC] border-2 border-transparent active:border-[#C1BFBD]"
        bodyClass="w-full py-[18px] px-[30px] gap-0"
        onClick={handleClick}
      >
        <p className="text-neutral-900 text-[25px] font-bold font-playfair leading-8">{ title }</p>

        <div className="mt-[20px] flex gap-[20px]">
          <PTag className="py-4 flex gap-[10px]" size="sm">
            <CalendarIcon />

            {
              dateString && <span>{ dateString }</span>
            }
          </PTag>

          {
            type === TimelineCardType.APPOINTMENT && (
              <PTag className="py-4 flex gap-[10px]" size="sm">
                <AppointmentIcon />

                <span>
                  Appointment
                </span>
              </PTag>
            )
          }

          {
            type === TimelineCardType.QUESTIONNAIRE && (
              <PTag className="py-4 flex gap-[10px]" size="sm">
                <QuestionnaireIcon />

                <span>
                  Questionnaire
                </span>
              </PTag>
            )
          }
        </div>
      </PCard>

      <ParticipatorScheduleDetailModal onWillCauseClose={handleDetailModalWillCauseClose} isOpen={detailModalIsOpen} />
    </>
  )
}

export default TimelineCard
