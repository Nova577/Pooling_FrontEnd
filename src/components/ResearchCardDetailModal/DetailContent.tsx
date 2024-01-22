import { FC } from "react"
import PCard from "../common/PCard"
import DocumentIcon from '@/components/common/Icons/Document'
import PageCheck from '@/components/common/Icons/PageCheck'
import AppointmentIcon from '@/components/common/Icons/Appointment'
interface Props {
  documents?: {
    link?: string
    fileName: string
  }[]
}

const DetailContent: FC<Props> = (props) => {
  const { documents } = props

  return (
    <div className="flex flex-col gap-[10px]">
      {/* TODO content show */}
      <PCard className="bg-[#F3EEEA]" bodyClass="py-[10px] px-[20px]">
        <div className="flex items-center gap-[10px]">
          <PageCheck />

          <div className="text-black text-[15px] font-bold font-playfair leading-tight">Usability research Questionnaire</div>
        </div>

        <p className="text-neutral-500 text-[10px] font-normal font-playfair leading-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta in libero convallis fringilla. Aenean pretium nunc in dolor porttitor consectetur. Nam nisl quam, tempor ut mollis tristique, sollicitudin quis leo. Suspendisse sed interdum justo. Vivamus a augue id </p>
      </PCard>

      {/* TODO content show */}
      <PCard className="bg-[#F3EEEA]" bodyClass="py-[10px] px-[20px]">
        <div className="flex items-center gap-[10px]">
          <AppointmentIcon color="#DBC6B9" />

          <div className="text-black text-[15px] font-bold font-playfair leading-tight">
            Usability research Appointment
          </div>
        </div>

        <p className="text-neutral-500 text-[10px] font-normal font-playfair leading-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta in libero convallis fringilla. Aenean pretium nunc in dolor porttitor consectetur. Nam nisl quam, tempor ut mollis tristique, sollicitudin quis leo. Suspendisse sed interdum justo. Vivamus a augue id </p>
      </PCard>
      
      {/* TODO content show */}
      <PCard className="bg-[#F3EEEA]">
        <div className="grid grid-cols-4">
          {
            documents?.map((it, index) => {
              return (
                <div key={index} className="cursor-pointer">
                  <div className="flex flex-col items-center">
                    <DocumentIcon />

                    <span className="text-black text-[15px] font-bold font-playfair leading-tight">{ it.fileName }</span>
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
