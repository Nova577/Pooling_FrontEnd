import { FC } from "react"
import PCard from "../common/PCard"
import PTag from "../common/PTag"
import CalendarIcon from "../common/Icons/Calendar"
import QuestionnaireIcon from '@/components/common/Icons/Questionnaire'
import AppointmentIcon from '@/components/common/Icons/Appointment'
import ParticipatorScheduleDetailModal from "../ParticipatorScheduleDetailModal"
import { useBoolean, useToggle } from "ahooks"
import clsx from "clsx"
import { toast } from '@/components/common/PToast'
import { useNavigate } from "react-router-dom"

export enum TimelineCardType {
  QUESTIONNAIRE = 'Questionnaire',
  APPOINTMENT = 'Appointment'
}

interface Props {
  id?: string
  isSchedule: boolean
  name?: string
  dateString?: string
  type?: TimelineCardType
  className?: string
  timeInfo?: {
    date?: string
    StartTime?: string
    EndTime?: string
    dueDate?: string
    dueTime?: string
    timeLimit?: number
  }
  meetingInfo?: React.ReactNode
  description?: React.ReactNode
}

const TimelineCard: FC<Props> = (props) => {
  const navigate = useNavigate()

  const { id, name = '', dateString, timeInfo, meetingInfo, description, type, className, isSchedule } = props

  const [detailModalIsOpen, { setFalse: setDetailModalIsOpenFalse, setTrue: setDetailModalIsOpenTrue }] = useBoolean(false)

  const handleClick = () => {
    if (!id) return

    if (type === TimelineCardType.APPOINTMENT) {
      setDetailModalIsOpenTrue()
      return
    }
    if (type === TimelineCardType.QUESTIONNAIRE) {
      const isFill = false
      const expired = false
      if (isFill) return  toast.current?.info('You have submitted this questionnaire')
      if (expired) return toast.current?.info('Questionnaire expired')

      navigate(`/fill-questionnaire/${id}`)
      return
    }
  }

  const handleDetailModalWillCauseClose = () => {
    setDetailModalIsOpenFalse()
  }

  return (
    <>
      <PCard
        className={clsx(
          "bg-[#EDE2DB] border-2 border-transparent active:border-[#C1BFBD] cursor-pointer", 
          !isSchedule && 'rounded-xl',
          className,
        )}
        bodyClass={clsx(
          "w-full gap-0 ",
          isSchedule ? 'py-[18px] px-[30px]' : 'px-[13px] py-[10px]'
        )}
        onClick={handleClick}
      >
        <h3 
          className={clsx(
            "text-neutral-900 font-bold font-playfair  truncate",
            isSchedule ? 'text-[25px] leading-[33px]' : 'text-[11px] leading-[15px]'
          )}
        >
          { name }
        </h3>

        <div className={clsx("flex", isSchedule ? 'mt-[20px] gap-[20px]' : 'mt-[10px] gap-[10px]')}>
          <PTag className={clsx("flex gap-[10px] !bg-[#F6F1ED]", isSchedule ? 'py-4' : '!min-w-[52px] !h-[17px] !text-[8px]')} size="sm">
            <CalendarIcon w={isSchedule ? 20 : 10} />

            {
              dateString && <span>{ dateString }</span>
            }
          </PTag>

          {
            type === TimelineCardType.APPOINTMENT && (
              <PTag className={clsx("flex gap-[10px] !bg-[#F6F1ED]", isSchedule ? 'py-4' : '!min-w-[52px] !h-[17px] !text-[8px]')} size="sm">
                <AppointmentIcon w={isSchedule ? 20 : 10} />

                <span>
                  Appointment
                </span>
              </PTag>
            )
          }

          {
            type === TimelineCardType.QUESTIONNAIRE && (
              <PTag className={clsx("flex gap-[10px] !bg-[#F6F1ED]", isSchedule ? 'py-4' : '!min-w-[52px] !h-[17px] !text-[8px]')} size="sm">
                <QuestionnaireIcon w={isSchedule ? 20 : 10} />

                <span>
                  Questionnaire
                </span>
              </PTag>
            )
          }
        </div>
      </PCard>

      <ParticipatorScheduleDetailModal 
        onWillCauseClose={handleDetailModalWillCauseClose} 
        isOpen={detailModalIsOpen}
        name={name}
        dateString={dateString}
        startTime={timeInfo?.StartTime}
        endTime={timeInfo?.EndTime}
        meetingInfo={ meetingInfo }
        description={description}
      />
    </>
  )
}

export default TimelineCard
