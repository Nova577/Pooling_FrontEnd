import PInput from "@/components/common/PInput"
import { FC } from "react"
import ResearchCard from "./ResearchCard"


const items = [
  { key: 'k0', fee: '30$', school: 'school', status: 'online', tags: ['tag1', 'tag2'], time: 'time', title: 'title' },
  { key: 'k1', fee: '30$', school: 'school', status: 'online', tags: ['tag1', 'tag2'], time: 'time', title: 'title' },
  { key: 'k2', fee: '30$', school: 'school', status: 'online', tags: ['tag1', 'tag2'], time: 'time', title: 'title' },
  { key: 'k3', fee: '30$', school: 'school', status: 'online', tags: ['tag1', 'tag2'], time: 'time', title: 'title' },
  { key: 'k4', fee: '30$', school: 'school', status: 'online', tags: ['tag1', 'tag2'], time: 'time', title: 'title' },
  { key: 'k5', fee: '30$', school: 'school', status: 'online', tags: ['tag1', 'tag2'], time: 'time', title: 'title' },
  { key: 'k6', fee: '30$', school: 'school', status: 'online', tags: ['tag1', 'tag2'], time: 'time', title: 'title' },
  { key: 'k7', fee: '30$', school: 'school', status: 'online', tags: ['tag1', 'tag2'], time: 'time', title: 'title' },
  { key: 'k8', fee: '30$', school: 'school', status: 'online', tags: ['tag1', 'tag2'], time: 'time', title: 'title' },
  { key: 'k9', fee: '30$', school: 'school', status: 'online', tags: ['tag1', 'tag2'], time: 'time', title: 'title' },
  { key: 'k10', fee: '30$', school: 'school', status: 'online', tags: ['tag1', 'tag2'], time: 'time', title: 'title' },
  { key: 'k11', fee: '30$', school: 'school', status: 'online', tags: ['tag1', 'tag2'], time: 'time', title: 'title' },
  { key: 'k12', fee: '30$', school: 'school', status: 'online', tags: ['tag1', 'tag2'], time: 'time', title: 'title' },
  { key: 'k13', fee: '30$', school: 'school', status: 'online', tags: ['tag1', 'tag2'], time: 'time', title: 'title' },
  { key: 'k14', fee: '30$', school: 'school', status: 'online', tags: ['tag1', 'tag2'], time: 'time', title: 'title' },
  { key: 'k15', fee: '30$', school: 'school', status: 'online', tags: ['tag1', 'tag2'], time: 'time', title: 'title' },
]

const DiscoveryContent: FC = () => {
  return (
    <div>
      <PInput placeholder="Searching Keyword Here..." />

      <div className="flex gap-4 flex-wrap">
        {
          items.map((it) => {
            return (
              <ResearchCard {...it} />
            )
          })
        }
      </div>
    </div>
  )
}

export default DiscoveryContent
