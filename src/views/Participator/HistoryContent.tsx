import PInput from "@/components/common/PInput2"
import { FC, useCallback, useMemo, useRef, useState } from "react"
import searchIconSrc from '@/assets/search_icon.svg'
import PCard from "@/components/common/PCard"
import ParticipatorHistoryCard from "@/components/ParticipatorHistoryCard"
import PScrollContainer from '@/components/common/PScrollContainer'
import { useRequest, useScroll } from "ahooks"
import { getHistoryApi } from '@/apis/project'
import { ResearchCardPosition, IResearchItem } from '@/types/global'

const DEFAULT_LIMIT = 10

const HistoryContent: FC = () => {
  const historyRef = useRef<HTMLDivElement>(null)
  const [keyword, setKeyword] = useState<string>('')
  const key = useRef<string>('')
  const offset = useRef<number>(0)
  const [isBottom, setIsBottom] = useState(false)
  const [historyList, setHistoryList] = useState<IResearchItem[]>([])
  const [isAll, setIsAll] = useState(false)  
  
  
  const { run } = useRequest(() => getHistoryApi({ offset: offset.current, key: key.current, limit: DEFAULT_LIMIT }), {
    onSuccess(data) {
      const list = data?.researchList || []
      
      setIsAll(list.length < DEFAULT_LIMIT)
      if (offset.current === 0) {
        historyRef?.current && historyRef.current.scrollTo(0, 0)
        setHistoryList(list)
      } else {
        setHistoryList((originList) => [...originList, ...list])
      }
      offset.current = offset.current + DEFAULT_LIMIT
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

  const handleKeyPress = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      offset.current = 0
      key.current = keyword

      run()
    }
  }

  return (
    <div>
      <PInput 
        placeholder="Searching Keyword Here..." 
        startContent={<img className="pr-[10px]" 
        src={searchIconSrc} />} 
        value={keyword}
        onValueChange={(value) => {
          setKeyword(value)
        }}
        onKeyPress={handleKeyPress}
      />

      <div className="pt-[20px]">
        <PCard className="bg-white" bodyClass="p-0">
          <PScrollContainer 
            ref={historyRef} 
            className="h-[680px] mr-[20px] !pr-[15px]"
          >
            <div className="grid grid-cols-2 gap-[25px]">
              {
                historyList.map((it, index) => {
                  return (
                    <ParticipatorHistoryCard 
                      key={index} 
                      {...it} 
                      showStatus 
                      position={ResearchCardPosition.HISTORY}
                    />
                  )
                })
              }
            </div>
          </PScrollContainer>
        </PCard>
      </div>
    </div>
  )
}

export default HistoryContent
