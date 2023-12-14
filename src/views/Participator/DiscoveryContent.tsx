import PInput from "@/components/common/PInput2"
import { FC } from "react"
import ResearchCard from "@/components/ResearchCard"
import searchIconSrc from '@/assets/search_icon.svg'
import testPortraitImgSrc from '@/assets/portrait-dark-skinned.avif'

const items = [
  { key: 'k0', fee: '30$', school: 'school', status: 'online', tags: ['tag1', 'tag2'], time: 'time', title: 'title', imgSrc: testPortraitImgSrc },
  { key: 'k1', fee: '30$', school: 'school', status: 'online', tags: ['tag1', 'tag2'], time: 'time', title: 'title' },
  { key: 'k2', fee: '30$', school: 'school', status: 'online', tags: ['tag1', 'tag2'], time: 'time', title: 'title' },
  { key: 'k3', fee: '30$', school: 'school', status: 'online', tags: ['tag1', 'tag2', 'tag3'], time: 'time', title: 'title' },
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
    <div className="max-w-5xl">
      <PInput placeholder="Searching Keyword Here..." startContent={<img className="pr-[10px]" src={searchIconSrc} />} />

      <div className="mt-[20px] pr-[20px] grid grid-cols-2 gap-y-5 gap-x-[30px] max-h-[680px] overflow-y-scroll">
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
