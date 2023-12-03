import { FC } from "react"
import clsx from 'clsx'
import ArrowLeft from "../Icons/ArrowLeft"
import ArrowRight from "../Icons/ArrowRight"

interface Props {
  length?: number
  current?: number

  onPrevButtonClick?: () => void
  onNextButtonClick?: () => void
}

const  PSteps: FC<Props> = (props) => {
  const {
    length = 3,
    current,
    onPrevButtonClick,
    onNextButtonClick
  } = props

  const isPrevButtonShow = length > 1 && typeof current === 'number' && current > 0
  const isNextButtonShow = length > 1 && typeof current === 'number' && current < length - 1

  return (
    <div className="flex items-center gap-5">
      <div className="flex items-center h-[50px] w-[50px]">
        {
          isPrevButtonShow
          && (
            <button className="btn h-full w-full p-0 rounded-full bg-[#302929]" onClick={onPrevButtonClick}><ArrowLeft /></button>
          )
        }
      </div>
     

      <ul className="flex gap-[15px]">
        {
          new Array(length).fill(0).map((_, index) => {
            return (
              <li
                key={index}
                className={clsx(
                  "btn-circle h-3 w-3 bg-[#302929] flex items-center justify-center opacity-60 cursor-pointer",
                  {
                    '!opacity-100': current === index
                  }
                )}
              />
            )
          })
        }
      </ul>

      <div className="flex items-center h-[50px] w-[50px]">
        {
          isNextButtonShow
          && (
            <button className="btn h-full w-full p-0 rounded-full bg-[#302929]" onClick={onNextButtonClick}><ArrowRight /></button>
          )
        }
      </div>

      
    </div>
  )
}

export default PSteps
