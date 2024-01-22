import PInput from "@/components/common/PInput2"
import { FC, useState, useMemo, useRef, useCallback } from "react"
// import ResearchCard from "@/components/ResearchCard"
import searchIconSrc from '@/assets/search_icon.svg'
import ParticipatorHistoryCard from "@/components/ParticipatorHistoryCard"
import { getFeedApi, IResearchItem } from '@/apis/project'
import { useRequest, useScroll } from "ahooks"

const DEFAULT_LIMIT = 10

const DiscoveryContent: FC = () => {
  const historyRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)
  const [isBottom, setIsBottom] = useState(false)
  const [isAll, setIsAll] = useState(false)  
  const [historyList, setHistoryList] = useState<IResearchItem[]>([])

  // TODO change api
  const { run } = useRequest(() => getFeedApi({ offset, limit: DEFAULT_LIMIT }), {
    onSuccess(data) {
      const list = data?.researchList || []
      
      setIsAll(list.length < DEFAULT_LIMIT)
      if (offset === 0) {
        setHistoryList(list)
      } else {
        setHistoryList((originList) => [...originList, ...list])
      }

      setOffset(offset + DEFAULT_LIMIT)
    },
    cacheKey: `history_list_${offset}`,
  })

  const scroll = useScroll(historyRef, () => {
    return !isAll
  })

  const scrollMethod = useCallback((top: number) => {
    if (!historyRef.current) return

    const scrollHeight = historyRef.current?.scrollHeight
    const clientHeight = historyRef.current?.clientHeight

    if (top + clientHeight >= scrollHeight - 50) {
      if (isBottom) return
      setIsBottom(true)
      run()
    } else {
      setIsBottom(false)
    }
  }, [isBottom, run])

  useMemo(() => {
    if (!isAll && scroll?.top) {
      scrollMethod(scroll.top)
    }
  }, [scroll?.top, scrollMethod, isAll])

  return (
    <div className="max-w-5xl">
      <PInput placeholder="Searching Keyword Here..." startContent={<img className="pr-[10px]" src={searchIconSrc} />} />

      <div className="mt-[20px] pr-[20px] grid grid-cols-1 gap-y-5 gap-x-[30px] max-h-[680px] overflow-y-scroll xl:grid-cols-2">
        {
          historyList.map((it, index) => {
            return (
              <ParticipatorHistoryCard key={index} {...it} showBaseInfo position="discovery" />
            )
          })
        }
      </div>
    </div>
  )
}

export default DiscoveryContent
