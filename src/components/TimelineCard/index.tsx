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
  title?: string
  dateString?: string
  type?: TimelineCardType
  className?: string
}

const TimelineCard: FC<Props> = (props) => {
  const navigate = useNavigate()

  const { id, title = '', dateString, type, className } = props

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
        className={clsx("bg-[#EDE2DB] border-2 border-transparent active:border-[#C1BFBD] cursor-pointer",  className)}
        bodyClass="w-full py-[18px] px-[30px] gap-0"
        onClick={handleClick}
      >
        <h3 
          className="text-neutral-900 text-[25px] font-bold font-playfair leading-[33px] truncate"
        >
          { title }
        </h3>

        <div className="mt-[20px] flex gap-[20px] ">
          <PTag className="py-4 flex gap-[10px] bg-[#F6F1ED]" size="sm">
            <CalendarIcon />

            {
              dateString && <span>{ dateString }</span>
            }
          </PTag>

          {
            type === TimelineCardType.APPOINTMENT && (
              <PTag className="py-4 flex gap-[10px] bg-[#F6F1ED]" size="sm">
                <AppointmentIcon />

                <span>
                  Appointment
                </span>
              </PTag>
            )
          }

          {
            type === TimelineCardType.QUESTIONNAIRE && (
              <PTag className="py-4 flex gap-[10px] bg-[#F6F1ED]" size="sm">
                <QuestionnaireIcon />

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
      />
    </>
  )
}

export default TimelineCard
