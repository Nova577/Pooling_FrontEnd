import { FC } from "react"
import PCard from "../common/PCard"
import timeIconSrc from '@/assets/time_icon.svg'
import walletIconSrc from '@/assets/wallet_icon.svg'
import locationIconSrc from '@/assets/location_icon.svg'
import PTag from "../common/PTag"
import ResearchCardDetailModal from "../ResearchCardDetailModal"
import modalImgSrc from '@/assets/portrait-dark-skinned.avif'
import { useBoolean } from "ahooks"

interface Props {
  imgSrc?: string
  name?: string
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
    name
  } = props

  const [researchCardDetailModalIsOpen, { setTrue: setResearchCardDetailModalIsOpenTrue, setFalse: setResearchCardDetailModalIsOpenFalse }] = useBoolean(false)

  const handleClick = () => {
    setResearchCardDetailModalIsOpenTrue()
  }

  const handleResearchCardDetailModalWillCauseClose = () => {
    setResearchCardDetailModalIsOpenFalse()
  }

  return (
    <>
      <PCard className="bg-[#F1E8E3] rounded-[30px] overflow-hidden cursor-pointer" bodyClass="p-0" onClick={handleClick}>
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
          
          <div className="flex-1 overflow-hidden">
            <div className="pt-[14px]">
              <span className="opacity-95 text-neutral-900 text-xl font-normal font-playfair leading-relaxed">{ name }</span>
            </div>

            <div className="pt-[10px] flex gap-[10px] overflow-x-scroll">
              { 
                tags?.map((it, index) => {
                  return (
                    <PTag key={index} className="badge" size="xs" color="rosewater">
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
      
      <ResearchCardDetailModal
        title="Usability Research"
        fee="$10"
        school="school"
        status="status"
        time="time"
        imgSrc={modalImgSrc}
        tags={tags}
        isOpen={researchCardDetailModalIsOpen}
        onWillCauseClose={handleResearchCardDetailModalWillCauseClose}
      />
    </>
  )
}

export default ResearchCard
