import { FC } from "react"
import PCard from "../common/PCard"
import timeIconSrc from '@/assets/time_icon.svg'
import walletIconSrc from '@/assets/wallet_icon.svg'
import locationIconSrc from '@/assets/location_icon.svg'
import PTag from "../common/PTag"


interface Props {
  imgSrc?: string
  title?: string
  tags?: string[]
  school?: string
  status?: string
  time?: string
  fee?: string
}

const ResearchCard: FC<Props> = (props) => {
  const {
    fee,
    imgSrc,
    school,
    status,
    tags,
    time,
    title
  } = props

  return (
    <PCard className="bg-[#F1E8E3] rounded-[30px] overflow-hidden" bodyClass="p-0">
      <div className="pr-[10px] flex gap-[20px]">
        
        {
          imgSrc
          ? (
            <img className="h-[155px] w-[165px] rounded-r-full" src={imgSrc} />
          )
          : (
            <div className="h-[155px] w-[165px] rounded-r-full" />
          )
        }
        
        <div>
          <div className="pt-[14px]">
            <span className="opacity-95 text-neutral-900 text-xl font-normal font-playfair leading-relaxed">{ title }</span>
          </div>

          <div className="pt-[10px] flex gap-[10px]">
            { 
              tags?.map(it => {
                return (
                  <PTag className="badge" size="sm" color="rosewater">
                    { it }
                  </PTag>
                )
              })
            }
          </div>
          
          <div className="pt-[10px] flex flex-col gap-2">
            <div className="h-2 flex items-center gap-2">
              <img className="h-3 aspect-square" src={locationIconSrc} />
              <div className="text-neutral-900 text-[7px] font-normal leading-[8px]">{ school }</div>
            </div>
            
            <div className="h-2 flex items-center gap-2">
              <img className="h-3 aspect-square" src={locationIconSrc} />
              <div className="text-neutral-900 text-[7px] font-normal leading-[8px]">{ status }</div>
            </div>

            <div className="h-2 flex items-center gap-2">
              <img className="h-3 aspect-square" src={timeIconSrc} />
              <div className="text-neutral-900 text-[7px] font-normal leading-[8px]">{ time }</div>
            </div>

            <div className="h-2 flex items-center gap-2">
              <img className="h-3 aspect-square" src={walletIconSrc} />
              <div className="text-neutral-900 text-[7px] font-normal leading-[8px]">{ fee }</div>
            </div>
          </div>
        </div>
      </div>
    </PCard>
  )
}

export default ResearchCard
