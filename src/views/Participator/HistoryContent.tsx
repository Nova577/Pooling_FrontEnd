import PInput from "@/components/common/PInput2"
import { FC } from "react"
import searchIconSrc from '@/assets/search_icon.svg'
import PCard from "@/components/common/PCard"
import ParticipatorHistoryCard from "@/components/ParticipatorHistoryCard"
import testPortraitImgSrc from '@/assets/portrait-dark-skinned.avif'

const items = [
  { imgSrc: testPortraitImgSrc, title: 'Daily Sugar Consumption', tags: ['Usability', 'High pay', 'Consumer Electronic'], status: 'In Progress' },
  { imgSrc: testPortraitImgSrc, title: 'Daily Sugar Consumption', tags: ['Usability', 'High pay', 'Consumer Electronic'], status: 'Closed' },
  { imgSrc: testPortraitImgSrc, title: 'Daily Sugar Consumption', tags: ['Usability', 'High pay', 'Consumer Electronic'], status: 'In Progress' },
  { imgSrc: testPortraitImgSrc, title: 'Daily Sugar Consumption', tags: ['Usability', 'High pay', 'Consumer Electronic'], status: 'Closed' },
  { imgSrc: testPortraitImgSrc, title: 'Daily Sugar Consumption', tags: ['Usability', 'High pay', 'Consumer Electronic'], status: 'In Progress' },
  { imgSrc: testPortraitImgSrc, title: 'Daily Sugar Consumption', tags: ['Usability', 'High pay', 'Consumer Electronic'], status: 'Closed' },
  { imgSrc: testPortraitImgSrc, title: 'Daily Sugar Consumption', tags: ['Usability', 'High pay', 'Consumer Electronic'], status: 'Closed' },
  { imgSrc: testPortraitImgSrc, title: 'Daily Sugar Consumption', tags: ['Usability', 'High pay', 'Consumer Electronic'], status: 'In Progress' },
  { imgSrc: testPortraitImgSrc, title: 'Daily Sugar Consumption', tags: ['Usability', 'High pay', 'Consumer Electronic'], status: 'In Progress' },
  { imgSrc: testPortraitImgSrc, title: 'Daily Sugar Consumption', tags: ['Usability', 'High pay', 'Consumer Electronic'], status: 'In Progress' },
  { imgSrc: testPortraitImgSrc, title: 'Daily Sugar Consumption', tags: ['Usability', 'High pay', 'Consumer Electronic'], status: 'In Progress' },
  { imgSrc: testPortraitImgSrc, title: 'Daily Sugar Consumption', tags: ['Usability', 'High pay', 'Consumer Electronic'], status: 'In Progress' },
  { imgSrc: testPortraitImgSrc, title: 'Daily Sugar Consumption', tags: ['Usability', 'High pay', 'Consumer Electronic'], status: 'In Progress' },
  { imgSrc: testPortraitImgSrc, title: 'Daily Sugar Consumption', tags: ['Usability', 'High pay', 'Consumer Electronic'], status: 'In Progress' },
  { imgSrc: testPortraitImgSrc, title: 'Daily Sugar Consumption', tags: ['Usability', 'High pay', 'Consumer Electronic'], status: 'In Progress' },
  { imgSrc: testPortraitImgSrc, title: 'Daily Sugar Consumption', tags: ['Usability', 'High pay', 'Consumer Electronic'], status: 'In Progress' },
  { imgSrc: testPortraitImgSrc, title: 'Daily Sugar Consumption', tags: ['Usability', 'High pay', 'Consumer Electronic'], status: 'In Progress' },
]

const HistoryContent: FC = () => {
  return (
    <div>
      <PInput placeholder="Searching Keyword Here..." startContent={<img className="pr-[10px]" src={searchIconSrc} />} />

      <div className="pt-[20px]">
        <PCard className="bg-[#F7F4F1]" bodyClass="pr-2">
          <div className="pr-[20px] max-h-[680px] grid grid-cols-2 gap-[15px] overflow-y-auto">
            {
              items.map((it, index) => {
                return (
                  <ParticipatorHistoryCard key={index} imgSrc={it.imgSrc} title={it.title} tags={it.tags} status={it.status} />
                )
              })
            }
          </div>
        </PCard>
      </div>
    </div>
  )
}

export default HistoryContent
