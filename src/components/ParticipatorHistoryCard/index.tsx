import { FC } from "react"
import PCard from "../common/PCard"
import PTag from "../common/PTag"
import ResearchCardDetailModal from "../ResearchCardDetailModal"
import { useBoolean } from "ahooks"

interface Props {
  imgSrc?: string
  title?: string
  tags?: string[]
  status?: string
}

const defaultTags = [] as string[]
const ParticipatorHistoryCard: FC<Props> = (props) => {
  const {
    imgSrc = '',
    title = '',
    tags = defaultTags,
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
      <PCard className="bg-[#EAECDC] overflow-hidden" bodyClass="p-0" onClick={handleClick}>
        <div className="flex gap-[10px]">
          {
            imgSrc
            ? (
              <img className="h-[155px] w-[165px] rounded-r-full" src={imgSrc} />
            )
            : (
              <div className="h-[155px] w-[165px] rounded-r-full" />
            )
          }

          <div className="pt-6 pr-6">
            <p className="text-neutral-900 text-[25px] font-bold font-playfair leading-8">
              { title }
            </p>

            <div className="pt-[15px] flex gap-[10px]">
              {
                tags.map((it, index) => {
                  return (
                    <PTag key={it + index} size="sm">{ it }</PTag>
                  )
                })
              }
            </div>

            <div className="pt-2 flex justify-end">
              <span className="text-neutral-900 text-xl font-bold font-playfair leading-relaxed">
                { status }
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
