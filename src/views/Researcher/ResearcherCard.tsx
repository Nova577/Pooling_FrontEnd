import { FC } from "react"
import PCard from "@/components/common/PCard"
import PTag from "@/components/common/PTag"
import ResearchCardDetailModal from "@/components/ResearchCardDetailModal"
import clsx from "clsx"
import { useBoolean } from "ahooks"
import { HISTORY_STATUS_MAP, ResearchCardPosition, IResearchItem } from '@/types/global'

interface Props extends IResearchItem {
  img?: string
  className?: string
}

const ResearchCard: FC<Props> = (props) => {
  const {
    img = '',
    name = '',
    preference = [],
    status = '',
    className,
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
      <PCard className={clsx("bg-[#E9DBD3] overflow-hidden w-[490px]", className)} bodyClass="p-0" onClick={handleClick}>
        <div className="flex gap-[10px]">
          {
            img
            ? (
              <img className="h-[135px] w-[155px] rounded-r-full shrink-0 object-cover" src={img} />
            )
            : (
              <div className="h-[135px] w-[155px] rounded-r-full shrink-0" />
            )
          }

          <div className="pt-6 pr-6 flex-1">
            <p className="text-neutral-900 text-[20px] font-bold font-playfair leading-8">
              { name }
            </p>

            <div className="pt-[15px] flex gap-[10px]">
              {
                preference.slice(0, 3).map((it, index) => {
                  return (
                    <PTag key={it + index} size="sm" className="text-[14px]">{ it }</PTag>
                  )
                })
              }
            </div>

            <div className="w-full pt-2 flex justify-end">
              <span className="text-neutral-900 text-xl font-bold font-playfair !text-[15px]">
                { HISTORY_STATUS_MAP[+status as number] }
              </span>
            </div>
          </div>
        </div>
      </PCard>

      <ResearchCardDetailModal 
        isOpen={detailModalIsOpen} 
        {...props}
        position={ResearchCardPosition.DASHBOARD}
        onWillCauseClose={handleDetailModalWillCauseClose} 
      />
    </>
  )
}

export default ResearchCard
