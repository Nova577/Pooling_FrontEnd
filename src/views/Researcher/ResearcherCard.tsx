import { FC } from "react"
import PCard from "@/components/common/PCard"
import PTag from "@/components/common/PTag"
import ResearchCardDetailModal from "@/components/ResearchCardDetailModal"
import clsx from "clsx"
import { useBoolean } from "ahooks"

interface Props {
  imgSrc?: string
  title?: string
  tags?: string[]
  status?: string
  className?: string
}

const defaultTags = [] as string[]
const ResearchCard: FC<Props> = (props) => {
  const {
    imgSrc = '',
    title = '',
    tags = defaultTags,
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
            imgSrc
            ? (
              <img className="h-[135px] w-[155px] rounded-r-full shrink-0 object-cover" src={imgSrc} />
            )
            : (
              <div className="h-[135px] w-[155px] rounded-r-full shrink-0" />
            )
          }

          <div className="pt-6 pr-6">
            <p className="text-neutral-900 text-[20px] font-bold font-playfair leading-8">
              { title }
            </p>

            <div className="pt-[15px] flex gap-[10px]">
              {
                tags.map((it, index) => {
                  return (
                    <PTag key={it + index} size="sm" className="text-[14px]">{ it }</PTag>
                  )
                })
              }
            </div>

            <div className="pt-2 flex justify-end">
              <span className="text-neutral-900 text-xl font-bold font-playfair !text-[15px]">
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

export default ResearchCard
