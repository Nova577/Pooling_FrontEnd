import { FC } from "react"
import PCard from "../common/PCard"
import PTag from "../common/PTag"
import CalendarIcon from "../common/Icons/Calendar"
import QuestionnaireIcon from '@/components/common/Icons/Questionnaire'
import AppointmentIcon from '@/components/common/Icons/Appointment'

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
  return (
    <PCard bodyClass="w-[420px] py-[18px] px-[30px] gap-0">
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
  )
}

export default TimelineCard
