import { FC } from "react"
import PCard from "../common/PCard"
import PTag from "../common/PTag"
import ResearchCardDetailModal from "../ResearchCardDetailModal"
import { useBoolean } from "ahooks"
import { HISTORY_STATUS_MAP } from '@/types/global'
import UserIcon from '@/components/common/Icons/User'
import BadgeIcon from '@/components/common/Icons/Badge'
import { ResearchCardPosition } from '@/types/global'

interface Props {
  img?: string
  name?: string
  preference?: string[]
  status?: string
  showStatus?: boolean
  headCount?: number
  reward?: number
  questionnaire_id: string
  appointment_id: string
  showBaseInfo?: boolean
  position?: ResearchCardPosition
}

const defaultPreferences = [] as string[]
const ParticipatorHistoryCard: FC<Props> = (props) => {  
  const {
    img = '',
    name = '',
    preference = defaultPreferences,
    status = '',
    showStatus,
    headCount = 0,
    reward = 0,
    showBaseInfo,
  } = props

  const [
    detailModalIsOpen,
    {
      setFalse: setDetailModalIsOpenFalse,
      setTrue: setDetailModalIsOpenTrue
    }
  ] = useBoolean(false)

  const handleClick = () => {
    setDetailModalIsOpenTrue()
  }

  const handleDetailModalWillCauseClose = () => {
    setDetailModalIsOpenFalse()
  }
  
  return (
    <>
      <PCard className="bg-[#F1E8E3] overflow-hidden" bodyClass="p-0" onClick={handleClick}>
        <div className="flex gap-[10px]">
          {
            img
            ? (
              <img className="h-[155px] w-[165px] rounded-r-full" src={img} />
            )
            : (
              <div className="h-[155px] w-[165px] rounded-r-full" />
            )
          }

          <div className="pt-[14px] pr-6 flex-1 relative">
            <p className="text-neutral-900 text-[25px] font-bold font-playfair leading-[26px]">
              { name }
            </p>

            <div className="pt-[12px] flex gap-[10px]">
              {
                preference.slice(0, 3).map((it, index) => {
                  return (
                    <PTag key={it + index} size="sm" className="!bg-[#E3D3C9] !h-[15px] !text-[10px]">
                      <span>{ it }</span>
                    </PTag>
                  )
                })
              }
            </div>

           {
            showBaseInfo && <div>
              <div className="flex items-center mt-[10px]">
                <UserIcon />
                <span className="text-[10px] text-[#141414] ml-[10px] font-playfair">{ headCount }</span>
              </div>
              <div className="flex items-center mt-[10px]">
                <BadgeIcon />
                <span className="text-[10px] text-[#141414] ml-[10px] font-playfair">{ reward } $</span>
              </div>
              {/* <div className="flex items-center mt-[10px]">
                <ClockIcon color="#E3D3C9" w="12" h="12" />
                <span className="text-[10px] text-[#141414] ml-[10px] font-playfair">20 min</span>
              </div> */}
            </div>
           }

            {
              showStatus && <div className="absolute w-full flex justify-end top-[112px] right-[30px]">
                <span className="text-neutral-900 text-xl font-bold font-playfair leading-relaxed">
                  { HISTORY_STATUS_MAP[+status as number] }
                </span>
              </div>
            }
          </div>
        </div>
      </PCard>

      <ResearchCardDetailModal 
        isOpen={detailModalIsOpen} 
        {...props}
        onWillCauseClose={handleDetailModalWillCauseClose} 

      />
    </>
  )
}

export default ParticipatorHistoryCard
