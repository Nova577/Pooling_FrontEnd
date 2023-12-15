import { FC } from "react"
import PModal from "../common/PModal"
import PButton from "../common/PButton"
import PTag from "../common/PTag"
import PCard from "../common/PCard"
import { Image } from "@nextui-org/react"
import PDescriptions from "../common/PDescriptions"
import walletIconSrc from '@/assets/wallet_icon.svg'
import timeIconSrc from '@/assets/time_icon.svg'
import ArrowLeftSimple from "../common/Icons/ArrowLeftSimple"

interface Props {
  isOpen?: boolean

  title?: string
  tags?: string[]
  school?: string
  status?: string
  time?: string
  fee?: string
  imgSrc?: string

  onWillCauseClose?: () => void
}

const ResearchCardDetailModal: FC<Props> = (props) => {
  const {
    isOpen = false,

    title = '',
    fee = '',
    school = '',
    status = '',
    time = '',
    tags = [],
    imgSrc = "",
    onWillCauseClose
  } = props

  const descriptionsItems = [
    // TODO: icon
    { key: 'school', label: <img className="w-[22px]" src={timeIconSrc}/>, children: <span className="text-[13px]">{ school }</span> },
    // TODO: icon
    { key: 'status', label: <img className="w-[22px]" src={timeIconSrc}/>, children: <span className="text-[13px]">{ status }</span> },
    { key: 'time', label: <img className="w-[22px]" src={timeIconSrc}/>, children: <span className="text-[13px]">{ time }</span> },
    { key: 'fee', label: <img className="w-[22px]" src={walletIconSrc}/>, children: <span className="text-[13px]">{ fee }</span> },
  ]

  return (
    <PModal
      footer={(
        <div className="flex-1 flex justify-between">
          <PButton className="bg-[#DFDDDC]" size="sm" round>
            <ArrowLeftSimple />

            Detail
          </PButton>

          <PButton className="bg-[#EFE8EE]" size="sm" round>I'm In</PButton>
        </div>
      )}
      isOpen={isOpen}
      onWillCauseClose={onWillCauseClose}
    >
      <div className="flex gap-[25px]">
        {
          imgSrc
          ? (
            <Image classNames={{ wrapper: 'w-[180px] h-[180px]', img: 'h-full w-full' }} src={imgSrc} radius="full" />
          )
          : (
            <div className="h-[180px] w-[180px] rounded-full bg-[#E1D5CB]" />
          )
        }

        <div>
          <h4 className="text-neutral-900 text-[27px] font-normal font-['Arial'] leading-[30px]">
            { title }
          </h4>

          <div className="mt-[30px]">
            <PDescriptions
              items={descriptionsItems}
            />
          </div>
        </div>
      </div>

      <div className="mt-[18px] flex gap-[10px]">
        {
          tags.map((it, index) => {
            return (
              <PTag key={index} color="rosewater" size="sm">{ it }</PTag>
            )
          })
        }
      </div>

      <div className="pt-[10px]">
        <PCard bodyClass="pl-[30px] pr-[40px] py-[18px] gap-[10px]">
          <span className="text-neutral-900 text-[23px] font-playfair font-bold leading-[30px]">Description</span>

          <p className="text-neutral-500 text-xl font-normal font-playfair leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta in libero convallis fringilla. Aenean pretium nunc in dolor porttitor consectetur. Nam nisl quam, tempor ut mollis tristique, sollicitudin quis leo. Suspendisse sed interdum justo. Vivamus a augue id lectus egestas interdum id ut dolor. Aenean 
          </p>
        </PCard>
      </div>
    </PModal>
  )
}

export default ResearchCardDetailModal
