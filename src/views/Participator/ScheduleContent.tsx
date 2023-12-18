import PInput from "@/components/common/PInput2"
import searchIconSrc from '@/assets/search_icon.svg'
import PCard from "@/components/common/PCard"
import PTimeline from "@/components/common/PTimeline"
import TimelineCard, { TimelineCardType } from "@/components/TimelineCard"

const ScheduleContent = () => {
  return (
    <div className="max-w-5xl min-w-[768px]">
      <PInput placeholder="Searching Keyword Here..." startContent={<img className="pr-[10px]" src={searchIconSrc} />} />

      <div className="pt-[20px]">
        <PCard className="bg-[#F7F4F1]" bodyClass="py-0 px-6 my-9 max-h-[680px] overflow-auto">
          <PTimeline
            items={[
              { key: '0', right: <TimelineCard title="Daily Sugar Consumption" dateString="Dec 5th" type={TimelineCardType.QUESTIONNAIRE} /> },
              { key: '1', left: <TimelineCard title="Daily Sugar Consumption" dateString="Dec 5th" type={TimelineCardType.QUESTIONNAIRE} /> },
              { key: '2', right: <TimelineCard title="Daily Sugar Consumption" dateString="Dec 5th" type={TimelineCardType.QUESTIONNAIRE} /> },
              { key: '3', left: <TimelineCard title="Daily Sugar Consumption" dateString="Dec 5th" type={TimelineCardType.QUESTIONNAIRE} /> },
              { key: '4', right: <TimelineCard title="Daily Sugar Consumption" dateString="Dec 5th" type={TimelineCardType.QUESTIONNAIRE} /> },
              { key: '5', left: <TimelineCard title="Daily Sugar Consumption" dateString="Dec 5th" type={TimelineCardType.QUESTIONNAIRE} /> },
              { key: '6', right: <TimelineCard title="Daily Sugar Consumption" dateString="Dec 5th" type={TimelineCardType.QUESTIONNAIRE} /> },
              { key: '7', left: <TimelineCard title="Daily Sugar Consumption" dateString="Dec 5th" type={TimelineCardType.QUESTIONNAIRE} /> },
            ]}
          />
        </PCard>
      </div>
    </div>
  )
}

export default ScheduleContent
