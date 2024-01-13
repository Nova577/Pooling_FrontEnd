import { FC } from "react"
import PCard from "../common/PCard"
import PTag from "../common/PTag"
import ResearchCardDetailModal from "../ResearchCardDetailModal"
import { useBoolean } from "ahooks"
import { HISTORY_STATUS_MAP } from '@/types/global'

interface Props {
  img?: string
  name?: string
  preference?: string[]
  status?: string
}

const defaultPreferences = [] as string[]
const ParticipatorHistoryCard: FC<Props> = (props) => {
  const {
    img = '',
    name = '',
    preference = defaultPreferences,
    status = '',
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

          <div className="pt-6 pr-6 flex-1">
            <p className="text-neutral-900 text-[25px] font-bold font-playfair leading-8">
              { name }
            </p>

            <div className="pt-[15px] flex gap-[10px]">
              {
                preference.map((it, index) => {
                  return (
                    <PTag key={it + index} size="sm" className="bg-[#E3D3C9]">{ it }</PTag>
                  )
                })
              }
            </div>

            <div className="pt-2 flex justify-end">
              <span className="text-neutral-900 text-xl font-bold font-playfair leading-relaxed">
                { HISTORY_STATUS_MAP[+status as number] }
              </span>
            </div>
          </div>
        </div>
      </PCard>

      <ResearchCardDetailModal isOpen={detailModalIsOpen} type="closed" onWillCauseClose={handleDetailModalWillCauseClose} />
    </>
  )
}

export default ParticipatorHistoryCard
