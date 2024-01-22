import { FC, useState } from "react"
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
  description?: string
  position?: string

  type?: 'pending' | 'in_progress' | 'closed'

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
    position,
    type: modalStatus = 'pending',
    onWillCauseClose
  } = props

  const [currentStatus, setCurrentStatus] = useState<ModalStatus>(ModalStatus.DESCRIPTION)

  // const descriptionsItems = [
  //   { key: 'headCount', label: <MultiUser />, children: <span className="text-[13px]">{ headCount }</span> },
  //   { key: 'reward', label: <BadgeSolid />, children: <span className="text-[13px]">{ reward }</span> },
  //   // { key: 'time', label: <img className="w-[22px]" src={timeIconSrc}/>, children: <span className="text-[13px]">{ time }</span> },
  //   // { key: 'fee', label: <img className="w-[22px]" src={walletIconSrc}/>, children: <span className="text-[13px]">{ fee }</span> },
  // ]

  const handleDetailButtonClick = () => {
    setCurrentStatus(ModalStatus.DETAIL)
  }

  const handleConfirmButtonClick = () => {
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
            position === 'discovery' && status === '1' ? (
              <PButton className="!bg-[#F0E8E3]" size="sm" round onClick={handleConfirmButtonClick}>I'm In</PButton>
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
              preference.map((it, index) => {
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
              <PScrollContainer>
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
            <DetailContent documents={[{ fileName: 'Document' }]} />
          )
        }
      </div>
    </PModal>
  )
}

export default ResearchCardDetailModal
