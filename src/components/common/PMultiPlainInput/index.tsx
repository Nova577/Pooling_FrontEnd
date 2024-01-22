import { forwardRef } from "react"
import PPlainInput from "../PPlainInput"
import { judgeInputNumber } from '@/utils/util'
import clsx from "clsx"


interface IEvent {
  target: {
    value: string[]
  }
}

type InputType = 'number' | 'string'

interface IConfigItem {
  value?: string
  minLength?: number
  maxLength?: number
  type?: InputType
  inputClass?: string
  className?: string
}

interface Props {
  className?: string
  boxClassName?: string
  onChange?: (event: IEvent) => void
  // errorMessage?: string
  config?: IConfigItem[]
  value?: string[]
  type?: InputType
  join?: string
  joinClassName?: string
  onBlur?: () => void
}

const PMultiPlainInput = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    className,
    boxClassName,
    joinClassName,
    onChange,
    onBlur,
    value = [],
    type = 'string',
    join = '/',
    config = [],
  } = props


  const handleInputChange = (val: string, index: number) => {
    
    if (type === 'number' || config?.[index]?.type === 'number') {
      val = judgeInputNumber(val)
    }

    const newValues = value.slice()
    newValues.splice(index, 1, val)

    onChange?.({
      target: { value: newValues }
    })
  }

  const onBirthBlur = async () => {
    onBlur?.()
  }

  return (
    <>
    <div ref={ref} className={clsx(
      "w-[270px] h-full flex items-center justify-center pt-[10px] font-playfair text-[20px] text-[#151515]",
      boxClassName
    )}>
      {
        value?.map((item, index) => {
          
          return (
            <div key={index} className="flex items-center">
              <PPlainInput 
                classNames={{
                  input: clsx('text-center', config[index]?.inputClass)
                }}
                className={className}
                value={item} 
                onValueChange={(value: string) => handleInputChange(value, index)}
                onBlur={onBirthBlur}
                {...(config[index] || {})}
              />
              {
                index < value.length - 1 && <span className={clsx(
                  'mx-[10px] mt-[8px]',
                  joinClassName
                )}>{join}</span>
              }
            </div>
          )
        })
      }
    </div>

      {/* </div> */}
      {/* <span className="absolute text-tiny text-danger p-[4px]">{errors.birthData?.message}</span> */}
    </>
  )
})

export default PMultiPlainInput
