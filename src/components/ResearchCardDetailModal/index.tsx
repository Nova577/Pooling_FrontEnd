import { FC, useMemo, useState } from "react"
import PModal from "../common/PModal"
import PButton from "../common/PButton"
import PTag from "../common/PTag"
import PCard from "../common/PCard"
import { Image } from "@nextui-org/react"
import ArrowLeftSimple from "../common/Icons/ArrowLeftSimple"
import DetailContent from "./DetailContent"
import MultiUser from '@/components/common/Icons/MultiUser'
import BadgeSolid from '@/components/common/Icons/BadgeSolid'
import PScrollContainer from '@/components/common/PScrollContainer'
import { HISTORY_STATUS_MAP } from '@/types/global'
import { ResearchCardPosition, IDocumentItem } from '@/types/global'
import { useRequest } from "ahooks"
import { getQuestionnaireApi } from '@/apis/questionnaire'
import { getAppointmentApi } from '@/apis/project'

enum ModalStatus {
  DESCRIPTION,
  DETAIL
}
interface Props {
  isOpen?: boolean
  name?: string
  preference?: string[]
  status?: string
  img?: string
  headCount?: number
  reward?: number
  questionnaire_id: string
  appointment_id: string
  description?: string
  position?: ResearchCardPosition
  documents?: IDocumentItem[]
  onWillCauseClose?: () => void
}

const ResearchCardDetailModal: FC<Props> = (props) => {
  const {
    isOpen = false,
    name = '',
    status = 0,
    preference = [],
    img = "",
    headCount = 0,
    reward = 0,
    description,
    questionnaire_id,
    appointment_id,
    position,
    documents,
    onWillCauseClose
  } = props

  const [currentStatus, setCurrentStatus] = useState<ModalStatus>(ModalStatus.DESCRIPTION)

  const { run: questionnaireRun, data: questionnaireData } = useRequest(() => getQuestionnaireApi(questionnaire_id), {
    manual: true
  })

  const { run: appointmentRun, data: appointmentData } = useRequest(() => getAppointmentApi(appointment_id), {
    manual: true
  })
  
  useMemo(() => {
    if (isOpen) {
      questionnaireRun()
      appointmentRun()
    } else {
      setCurrentStatus(ModalStatus.DESCRIPTION)
    }
  }, [isOpen, questionnaireRun, appointmentRun])

  const handleDetailButtonClick = () => {
    setCurrentStatus(ModalStatus.DETAIL)
  }

  const handleJoin = () => {
    onWillCauseClose?.()
  }


  const handleAccept = () => {
    onWillCauseClose?.()
  }

  const handleBackButtonClick = () => {
    setCurrentStatus(ModalStatus.DESCRIPTION)
  }

  return (
    <PModal
      classNames={{
        footer: '!pt-[5px] !pb-[27px]'
      }}
      footer={(
        <div className="flex-1 flex justify-between">
          {
            currentStatus === ModalStatus.DESCRIPTION
            && (
              <PButton className="!bg-[#DFDDDC]" size="sm" round onClick={handleDetailButtonClick}>
                <ArrowLeftSimple />

                Detail
              </PButton>
            )
          }
          
          {
            currentStatus === ModalStatus.DETAIL
            && (
              <PButton className="!bg-[#DFDDDC]" size="sm" round onClick={handleBackButtonClick}>
                <ArrowLeftSimple />

                Back
              </PButton>
            )
          }
          {
            position === ResearchCardPosition.DISCOVERY ? (
              <PButton className="!bg-[#F0E8E3]" size="sm" round onClick={handleJoin}>I'm In</PButton>
            ) :  position === ResearchCardPosition.NEW_PUSH ? (
              <PButton className="!bg-[#F0E8E3]" size="sm" round onClick={handleAccept}>Accept</PButton>
            ) : (
              <span className="text-neutral-900 text-xl font-bold font-playfair leading-relaxed">{HISTORY_STATUS_MAP[+status]}</span>
            )
          }
        </div>
      )}
      isOpen={isOpen}
      onWillCauseClose={onWillCauseClose}
    >
      <div className="flex gap-[25px]">
        {
          img
          ? (
            <Image classNames={{ wrapper: 'w-[180px] h-[180px] shrink-0', img: 'h-full w-full' }} src={img} radius="full" />
          )
          : (
            <div className="h-[180px] w-[180px] rounded-full bg-[#E1D5CB] shrink-0" />
          )
        }

        <div>
          <h4 className="text-neutral-900 text-[27px] font-normal font-playfair leading-[36px]">
            { name }
          </h4>

          <div className="mt-[8px] flex font-playfair text-[20px]">
            <div className="flex items-center">
              <MultiUser /> 
              <span className="ml-[11px]">{ headCount }</span>
            </div>
            <div className="ml-[45px] flex items-center">
              <BadgeSolid /> 
              <span className="ml-[11px]">{ reward } $</span>
            </div>
          </div>

          <div className="mt-[18px] flex gap-[10px] flex-wrap">
            {
              preference.slice(0,3).map((it, index) => {
                return (
                  <PTag key={index} color="rosewater" size="sm">{ it }</PTag>
                )
              })
            }
          </div>
        </div>
      </div>

     

      <div className="pt-[20px]">
        {
          currentStatus === ModalStatus.DESCRIPTION
          && (
            <PCard bodyClass="pl-[30px] pr-[0px] py-[18px] gap-[10px] bg-[#F3EEEA] rounded-3xl">
              <span className="text-neutral-900 text-[23px] font-playfair font-bold leading-[30px]">Description</span>
              <PScrollContainer className="max-h-[282px]">
                <p className="text-neutral-500 text-xl font-normal font-playfair leading-relaxed">
                  {description}
                </p>
              </PScrollContainer>
            </PCard>
          )
        }
       
        {
          currentStatus === ModalStatus.DETAIL
          && (
            <DetailContent 
              documents={documents} 
              questionnaireData={questionnaireData}
              appointmentData={appointmentData}
            />
          )
        }
      </div>
    </PModal>
  )
}

export default ResearchCardDetailModal
