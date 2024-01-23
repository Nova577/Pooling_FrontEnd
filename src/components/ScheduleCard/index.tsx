import PInput from "@/components/common/PInput2"
import searchIconSrc from '@/assets/search_icon.svg'
import PCard from "@/components/common/PCard"
import TimelineCard from "@/components/TimelineCard"
import { getScheduleApi } from '@/apis/project'
import { useRequest, useScroll } from "ahooks"
import { useState, useRef, useCallback, useMemo, FC } from 'react'
import { IQuestionsItem } from '@/apis/questionnaire'
import PScrollContainer from '@/components/common/PScrollContainer'
import clsx from "clsx"
import dayjs from "dayjs"

export enum TimelineCardType {
  QUESTIONNAIRE = 'Questionnaire',
  APPOINTMENT = 'Appointment'
}

export enum PositionType {
  DASHBOARD = 'dashboard',
  SCHEDULE = 'schedule'
}

interface IScheduleItem {
  id?: string
  name: string
  type: string
  fullTime: number
  timeInfo: {
    date?: string
    StartTime?: string
    EndTime?: string
    dueDate?: string
    dueTime?: string
    timeLimit?: number
  }
  meetingInfo?: string
  description: string
  eassayQuestions?: IQuestionsItem[]
  choiceQuestions?: IQuestionsItem[]
}

interface IProps {
  position: PositionType
}

const DEFAULT_LIMIT = 10

const ScheduleCard: FC<IProps> = (props) => {
  const {
    position
  } = props

  const scheduleRef = useRef<HTMLDivElement>(null)
  const [scheduleList, setScheduleList] = useState<IScheduleItem[]>([])
  const [keyword, setKeyword] = useState<string>('')
  const key = useRef<string>('')
  const offset = useRef<number>(0)
  const [isBottom, setIsBottom] = useState(false)
  const [isAll, setIsAll] = useState(false)  

  const { run } = useRequest(() => getScheduleApi({ limit: DEFAULT_LIMIT, offset: offset.current, key: key.current }), {
    
    onSuccess(data) {
      const { appointments = [], questionnaire = [] } = data || {}
      const newAppointments = appointments.map(it => {
        const { date, StartTime } = it.timeInfo
        return { ...it, type: 'appointment', fullTime: +new Date(`${date} ${StartTime}`)  }
      })
      const newQuestionnaire = questionnaire.map(it => {
        const { dueDate, dueTime } = it.timeInfo
        return { ...it, type: 'questionnaire', fullTime: +new Date(`${dueDate} ${dueTime}`) }
      })

      const combined: IScheduleItem[]  = [...newAppointments, ...newQuestionnaire]

      setIsAll(combined.length < DEFAULT_LIMIT)
      if (offset.current === 0) {
        scheduleRef?.current && scheduleRef.current.scrollTo(0, 0)
        setScheduleList(combined.sort((a, b) => b.fullTime - a.fullTime))
      } else {
        setScheduleList((originList) => [...originList, ...combined].sort((a, b) => b.fullTime - a.fullTime))
      }
      offset.current = offset.current + DEFAULT_LIMIT 
    },
    cacheKey: `schedule_list_${offset}`,
  })

  const scroll = useScroll(scheduleRef, () => {
    return !isAll
  })

  const scrollMethod = useCallback((top: number) => {
    if (!scheduleRef.current) return

    const scrollHeight = scheduleRef.current?.scrollHeight
    const clientHeight = scheduleRef.current?.clientHeight

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
    <div className="max-w-5xl min-w-[768px]">
      {
        position && (
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
        )
      }

      <div className="pt-[20px]">
        <PCard className="bg-[#F7F4F1]" bodyClass="py-0 px-6 my-9 max-h-[880px] overflow-auto" >
          <PScrollContainer className="h-[820px]" ref={scheduleRef}>
            <div className="pt-[20px]">
              {
                scheduleList.map((it, index) => (
                  <div key={index} className="h-[100px] w-full relative">
                    <div className="absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]  w-[30px] h-[30px] bg-[#DBC6B9] rounded-full flex justify-center items-center">
                      <span className="w-[13px] h-[13px] bg-[#fff] rounded-full"></span>
                    </div>
                    <div className={clsx("w-[420px] h-[135px] absolute top-2/4 translate-y-[-50%]", index % 2 === 0 ? 'left-2/4 ml-[35px]' : 'right-2/4 mr-[35px]')}>
                      <TimelineCard 
                        className="h-full"
                        {...it}
                        title={it.name}
                        dateString={`${dayjs(it.fullTime).format('MMM D')} th`}
                        type={it.type === 'appointment' ? TimelineCardType.APPOINTMENT : TimelineCardType.QUESTIONNAIRE }
                      />
                    </div>
                  </div>
                ))
              }
            </div>
          </PScrollContainer>
        </PCard>
      </div>
    </div>
  )
}

export default ScheduleCard
