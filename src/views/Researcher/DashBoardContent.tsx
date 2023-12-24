import { FC } from 'react'
import PCard from '@/components/common/PCard'
import PScrollContainer from '@/components/common/PScrollContainer'
import MatterIcon from '@/components/common/Icons/Matter'
import PButton from '@/components/common/PButton'
import testPortraitImgSrc from '@/assets/portrait-dark-skinned.avif'
import ResearchCard from './ResearcherCard'

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
  const items = [
    { imgSrc: testPortraitImgSrc, title: 'Daily Sugar Consumption', tags: ['Usability', 'High pay', 'Consumer Electronic'], status: 'In Progress' },
    { imgSrc: testPortraitImgSrc, title: 'Daily Sugar Consumption', tags: ['Usability', 'High pay', 'Consumer Electronic'], status: 'Closed' },
    { imgSrc: testPortraitImgSrc, title: 'Daily Sugar Consumption', tags: ['Usability', 'High pay', 'Consumer Electronic'], status: 'Closed' },
    { imgSrc: testPortraitImgSrc, title: 'Daily Sugar Consumption', tags: ['Usability', 'High pay', 'Consumer Electronic'], status: 'Closed' },
    { imgSrc: testPortraitImgSrc, title: 'Daily Sugar Consumption', tags: ['Usability', 'High pay', 'Consumer Electronic'], status: 'Closed' },
    { imgSrc: testPortraitImgSrc, title: 'Daily Sugar Consumption', tags: ['Usability', 'High pay', 'Consumer Electronic'], status: 'Closed' },
  ]
  

  return (
    <div className='w-[1050px]'>
      <div className='flex justify-between'>
        <PCard className='w-[500px] h-[400px] bg-[#F1E8E3] box-border' bodyClass='pt-[25px] pb-[15px] box-border pl-[30px] pr-[15px]'>
          <i className="fi fi-rs-cowbell text-[30px] text-[#7A7371] h-[40px]"></i>
          <PScrollContainer className='h-[315px]' size='sm'>
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

        <PCard className='w-[500px] h-[400px] bg-[#F1E8E3] box-border' bodyClass='pt-[25px] pb-[15px] box-border pl-[30px] pr-[15px]'>
          <i className="fi fi-rr-calendar-check text-[30px] text-[#7A7371] h-[40px]"></i>
        </PCard>
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

        <PScrollContainer className='h-[285px] mt-[15px]' size='sm'>
            <div className='grid grid-cols-2 gap-[12.69px]'>
              {
                items.map((it, index) => {
                  return (
                    <ResearchCard 
                      key={index} 
                      imgSrc={it.imgSrc} 
                      title={it.title} 
                      tags={it.tags} 
                      status={it.status}
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