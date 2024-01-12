import { FC, forwardRef } from "react"
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
  onChange?: (event: IEvent) => void
  errorMessage?: string
  config?: IConfigItem[]
  value?: string[]
  type?: InputType
  onBlur?: () => void
}

const PMultiPlainInput = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    className,
    onChange,
    onBlur,
    value = [],
    errorMessage,
    type = 'string',
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
    // const value = getValues('birthData')
    
    // const birthStr = value.join('-')
    // const birthReg = /^(19|20)\d{2}-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01])$/
    // setError('birthData', {
    //   type: 'manual',
    //   message: 'Please enter a valid birth time'
    // })
    
    // setBirthError(birthReg.test(birthStr) ? '' : 'Please enter a valid birth time')
  }

  return (
    <>
    <div ref={ref} className="w-[270px] h-full flex items-center justify-center pt-[10px] font-playfair text-[20px] text-[#151515]">
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
                index < value.length - 1 && <span className="mx-[10px] mt-[8px]">/</span>
              }
            </div>
          )
        })
      }
      {/* <PPlainInput 
        value={field.value[1]} 
        maxLength={2} 
        onValueChange={(value: string) => handleInputChange(value, 1, field.value)}
        onBlur={onBirthBlur}
      />
      <span className="mx-[10px] mt-[8px]">/</span>
      <PPlainInput 
        value={field.value[2]} 
        maxLength={2} 
        onValueChange={(value: string) => handleInputChange(value, 2, field.value)}
        onBlur={onBirthBlur}
      />
      <span className="mx-[10px] mt-[8px]">/</span>
      <PPlainInput 
        className="w-[50px]"  
        value={field.value[0]}
        maxLength={4}
        onValueChange={(value: string) => handleInputChange(value, 0, field.value)}
        onBlur={onBirthBlur}
      /> */}
    </div>

      {/* </div> */}
      {/* <span className="absolute text-tiny text-danger p-[4px]">{errors.birthData?.message}</span> */}
    </>
  )
})

export default PMultiPlainInput
