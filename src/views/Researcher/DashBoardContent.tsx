import { FC, useState, useRef, useMemo, useCallback } from 'react'
import PCard from '@/components/common/PCard'
import PScrollContainer from '@/components/common/PScrollContainer'
import MatterIcon from '@/components/common/Icons/Matter'
import PButton from '@/components/common/PButton'
import ResearchCard from './ResearcherCard'
import ScheduleCard from '@/components/ScheduleCard'
import { getHistoryApi } from '@/apis/project'
import { useRequest, useScroll } from "ahooks"
import { SchedulePositionType, IResearchItem } from '@/types/global'

const DEFAULT_LIMIT = 10

const DashBoardContent: FC = () => {
  const noticeList = [
    { id: 1, title: '“Daily Sugar Consumption” results: 16/50.' },
    { id: 2, title: '“Daily Sugar Consumption” results: 26/50.' },
    { id: 3, title: '“Daily Sugar Consumption” results: 17/50.' },
    { id: 4, title: '“Usability Research” has closed.' },
    { id: 5, title: 'John Appleseed invites you as a cooperator.' },
    { id: 6, title: 'John Appleseed invites you as a cooperator.' },
    { id: 7, title: 'John Appleseed invites you as a cooperator.' },
  ]

  const dishHistoryRef = useRef<HTMLDivElement>(null)
  const offset = useRef<number>(0)
  const [isHistoryBottom, setIsHistoryBottom] = useState(false)
  const [historyList, setHistoryList] = useState<IResearchItem[]>([])
  const [isHistoryAll, setIsHistoryAll] = useState(false)  

  const { run: historyRun } = useRequest(() => getHistoryApi({ offset: offset.current, limit: DEFAULT_LIMIT }), {
    onSuccess(data) {
      const list = data?.researchList || []
      
      setIsHistoryAll(list.length < DEFAULT_LIMIT)
      if (offset.current === 0) {
        dishHistoryRef?.current && dishHistoryRef.current.scrollTo(0, 0)
        setHistoryList(list)
      } else {
        setHistoryList((originList) => [...originList, ...list])
      }
      offset.current = offset.current + DEFAULT_LIMIT
    },
    cacheKey: `history_list_${offset}`,
  })

  const scroll = useScroll(dishHistoryRef, () => {
    return !isHistoryAll
  })

  const scrollMethod = useCallback((top: number) => {
    if (!dishHistoryRef.current) return

    const scrollHeight = dishHistoryRef.current?.scrollHeight
    const clientHeight = dishHistoryRef.current?.clientHeight

    if (top + clientHeight >= scrollHeight - 50) {
      if (isHistoryBottom) return
      setIsHistoryBottom(true)
      historyRun()
    } else {
      setIsHistoryBottom(false)
    }
  }, [isHistoryBottom, historyRun])

  useMemo(() => {
    if (!isHistoryAll && scroll?.top) {
      scrollMethod(scroll.top)
    }
  }, [scroll?.top, scrollMethod, isHistoryAll])


  return (
    <div className='w-[1050px]'>
      <div className='flex justify-between'>
        <PCard className='w-[500px] h-[400px] bg-[#F1E8E3] box-border' bodyClass='pt-[25px] pb-[15px] box-border pl-[30px] pr-[15px]'>
          <i className="fi fi-rs-cowbell text-[30px] text-[#7A7371] h-[40px]"></i>
          <PScrollContainer  className='h-[315px]' size='sm'>
            <ul>
              {
                noticeList.map(it => {
                  return  <li 
                    key={it.id}
                    className='flex w-[440px] min-h-[55px] bg-[#F9F5F3] px-[25px] py-[15px] mb-[10px] rounded-3xl ' 
                  >
                    <span className='w-[5px] h-[5px] bg-[#141414] rounded-full mr-[10px] mt-[9px]'></span>
                    <span className='text-[16px] color-[#141414] font-playfair leading-[21.33px] font-bold'>{it.title}</span>
                  </li>
                })
              }
            </ul>
          </PScrollContainer>
        </PCard>

        {/* <PCard className='w-[500px] h-[400px] bg-[#F1E8E3] box-border' bodyClass='pt-[25px] pb-[15px] box-border pl-[30px] pr-[15px]'>
          <i className="fi fi-rr-calendar-check text-[30px] text-[#7A7371] h-[40px]"></i>
          <ScheduleCard position={SchedulePositionType.DASHBOARD} />
        </PCard> */}
        <div className='w-[500px]'>
          <ScheduleCard position={SchedulePositionType.DASHBOARD} />
        </div>
      </div>

      <PCard className='w-full h-[400px] bg-[#F1E8E3] mt-[30px]'  bodyClass='pt-[25px] pb-[15px] box-border pl-[30px] pr-[15px]'>
        <div className='flex justify-between items-center'>
          <MatterIcon />
          <PButton 
            className="text-[20px] h-[40px]" 
            size="sm" round
          >
            <span className='flex items-center'>
              New Research
              <i className="fi fi-bs-plus text-[10.82px] text-[#141515] font-bold h-[16px] ml-[8.9px]"></i>
            </span>
          </PButton>
        </div>

        <PScrollContainer ref={dishHistoryRef} className='h-[285px] mt-[15px]' size='sm'>
            <div className='grid grid-cols-2 gap-[12.69px]'>
              {
                historyList.map((it, index) => {
                  return (
                    <ResearchCard 
                      key={index} 
                      {...it}
                    />
                  )
                })
              }     
            </div>
          </PScrollContainer>
      </PCard>
    </div>
  )
}

export default DashBoardContent