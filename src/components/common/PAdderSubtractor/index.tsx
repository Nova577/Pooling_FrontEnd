import { FC } from "react"
import clsx from 'clsx'
import PlusIcon from '@/components/common/Icons/Plus'
import MinusIcon from '@/components/common/Icons/Minus'

interface Props {
  minValue?: number;
  maxValue?: number;
  value?: number
  className?: string;
  onValueChange?: (value: number) => void;
  label?: string
}

const PAdderSubtractor: FC<Props> = (props) => {
  const { className, minValue = 1, maxValue, onValueChange, label, value=0 } = props

  const handleMinus = () => {
    if (value <= minValue) return
    const newValue = value - 1
    onValueChange?.(newValue)
  }

  const handlePlus = () => {
    if (maxValue && value >= maxValue) return
    const newValue = value + 1
    onValueChange?.(newValue)
  }

  return (
    <div 
      className={
        clsx(
          'flex items-center select-none',
          className
        )
      }
    >
      {
        label ? <span className="font-playfair text-[#141414] text-[21px] mr-[10px]">
          {label}
        </span> : ''
      }
      <span 
        className="flex justify-center items-center bg-[#fff] w-[20px] h-[20px] rounded-full cursor-pointer"
        onClick={handleMinus}
      >
        <MinusIcon />
      </span>
      <span className="px-[10px] w-[50px] flex justify-center box-border font-playfair text-[#141414] text-[21px] pb-[6px]">
        {value}
      </span>
      <span 
        className="flex justify-center items-center bg-[#fff] w-[20px] h-[20px] rounded-full cursor-pointer"
        onClick={() => handlePlus()}
      >
        <PlusIcon />
        
      </span>
    </div>
  )
}

export default PAdderSubtractor
