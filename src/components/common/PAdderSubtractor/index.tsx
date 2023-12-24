import { FC, useState, useEffect } from "react"
import clsx from 'clsx'
import PlusIcon from '@/components/common/Icons/Plus'
import MinusIcon from '@/components/common/Icons/Minus'

interface Props {
  defaultValue?: number;
  minValue?: number;
  maxValue?: number;
  className?: string;
  onValueChange?: (value: number) => void;
  label?: string
}

const PAdderSubtractor: FC<Props> = (props) => {
  const { defaultValue, className, minValue = 1, maxValue, onValueChange, label } = props

  let newDefaultValue = minValue
  if (defaultValue && (!minValue || defaultValue >= minValue) &&  (!maxValue || maxValue >= defaultValue)) {
    newDefaultValue = defaultValue
  }

  const [curValue, setValue] = useState<number>(newDefaultValue)


  const handleMinus = () => {
    if (curValue <= minValue) return
    const newValue = curValue - 1
    setValue(newValue)
    onValueChange?.(newValue)
  }

  const handlePlus = () => {
    if (maxValue && curValue >= maxValue) return
    const newValue = curValue + 1
    setValue(newValue)
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
        {curValue}
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
