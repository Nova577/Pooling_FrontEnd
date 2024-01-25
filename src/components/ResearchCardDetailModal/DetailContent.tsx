import { FC } from "react"
import PCard from "../common/PCard"
import DocumentIcon from '@/components/common/Icons/Document'
import PageCheck from '@/components/common/Icons/PageCheck'
import AppointmentIcon from '@/components/common/Icons/Appointment'
import { IDocumentItem } from '@/types/global'
import PScrollContainer from '@/components/common/PScrollContainer'

interface Props {
  documents?: IDocumentItem[]
  questionnaireData?: {
    name: string
    description: string
  }
  appointmentData?: {
    name: string
    description: string
  }
}

const DetailContent: FC<Props> = (props) => {
  const { documents, questionnaireData, appointmentData } = props

  return (
    <div className="flex flex-col gap-[10px]">
      <PCard className="bg-[#F3EEEA]" bodyClass="py-[10px] pl-[20px] pr-[15px]">
        <div className="flex items-center gap-[10px]">
          <PageCheck />

          <div className="text-black text-[15px] font-bold font-playfair leading-tight">
            {questionnaireData?.name}
          </div>
        </div>
        <PScrollContainer className="max-h-[64px]" size="sm">
          <div className="min-h-[64px] text-neutral-500 text-[10px] font-normal font-playfair leading-[14px]">
            {questionnaireData?.description}
          </div>
        </PScrollContainer>
      </PCard>

      <PCard className="bg-[#F3EEEA]" bodyClass="py-[10px] pl-[20px] pr-[15px]">
        <div className="flex items-center gap-[10px]">
          <AppointmentIcon color="#DBC6B9" />

          <div className="text-black text-[15px] font-bold font-playfair leading-tight">
            {appointmentData?.name}
          </div>
        </div>

        <PScrollContainer className="max-h-[64px]" size="sm">
          <div className="min-h-[64px] text-neutral-500 text-[10px] font-normal font-playfair leading-[14px]">
            {appointmentData?.description}
          </div>
        </PScrollContainer> 
      </PCard>
      
      <PCard className="bg-[#F3EEEA]" bodyClass="pt-[20px] pb-[17px] px-[25px]">
        <div className="grid grid-cols-4">
          {
            documents?.map((it, index) => {
              return (
                <div key={index} className="cursor-pointer">
                  <div className="flex flex-col items-center">
                    <DocumentIcon />

                    <p className="max-w-[80px] text-black text-[15px] font-bold font-playfair leading-tight truncate">
                      { it.name }
                    </p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </PCard>
    </div>
  )
}

export default DetailContent
