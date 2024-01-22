import { FC, useState, forwardRef, useEffect } from "react"
import PInput from "@/components/common/PInput2"
import PSelect from "@/components/common/PSelect"
import PAdderSubtractor from '@/components/common/PAdderSubtractor'
import PButton from "@/components/common/PButton"
import { useFormContext, Controller, useFieldArray } from 'react-hook-form'

export interface dataItemProps {
  number?: number
  question?: string
  type?: string
  id?: string
  optionNum?: number
  selectNum?: number
  options?: string[]
  required?: boolean
}

interface Props extends dataItemProps {
  onDelete?: () => void
  onAddItem?: () => void
  showAdd?: boolean
  index: number
}

interface IRequiredCheckboxProps {
  onChange: (event: { target: { value: boolean } }) => void
  value?: boolean
}

const RequiredCheckbox = forwardRef<HTMLElement, IRequiredCheckboxProps>(({ onChange, value }, ref) => {
  return (
    <span ref={ref} className="absolute right-0 bottom-[-28px]  flex items-center select-none cursor-pointer">
      <span 
        className="w-[15.68px] h-[15.68px] border-[1px] border-[#CBB6AB] flex justify-center items-center rounded-sm"
        onClick={() => onChange?.({ target: { value: !value } })}
      >
        {
          value && <span className="w-[10px] h-[10px] rounded-sm bg-[#CBB6AB]"></span>
        }
        
      </span>
      <span className="text-[15px] color-[#141414] font-playfair ml-[7px]">Require</span>
    </span>
  )
})


const QuestionnaireCreateItem: FC<Props> = (props) => {
  const { 
    id,
    index,
    question,
    optionNum = 0,
    onDelete,
    onAddItem,
    showAdd,
  } = props


  const [deleteStep, setDeleteStep] = useState(0)
  const {register, control, setValue, watch, formState: { errors }, getValues } = useFormContext()
  const { fields: optionFields } = useFieldArray({
    control,
    name: `questionItems.${index}.options`
  })
  
  watch(`questionItems.${index}.type`)

  useEffect(() => {
    setOptions(optionNum)
  }, [])

  const setOptions = (num: number) => {
    
    if (getValues(`questionItems.${index}.type`) === 'text') {
      setValue(`questionItems.${index}.options`, [])
      return
    }
    const oldOptions = getValues(`questionItems.${index}.options`) || []

    const newOptions = [...oldOptions]
    const oldLen = oldOptions.length
    const diff = num - oldLen

    if (diff === 0) return
    
    if (diff > 0) {
      for (let i = 1; i < diff + 1; i++) {
        newOptions.push(`option${oldLen + i}`)
      }
    } else if (diff < 0) {
      newOptions.pop()
    }
    setValue(`questionItems.${index}.options`, newOptions)
  }
  
  return (
    <div className="pb-[25px]">
      <div className="flex relative">
        <div className="w-[600px] mr-[50px]">
          <PInput 
            className='!h-[50px]'
            defaultValue={question}
            aria-labelledby="questionnaire-question"
            placeholder="Please enter question..."
            { ...register(`questionItems.${index}.question`, { required: 'The question cannot be empty' })}
            errorMessage={errors.questionItems?.[index]?.question && errors.questionItems[index].question.message}
          />
        </div>

        <div className="relative">
           <Controller
            control={control}
            name={`questionItems.${index}.type`}
            defaultValue={''}
            render={({ field }) => (
              <PSelect 
                {...field}
                classNames={{
                  base: 'w-[200px]',
                  trigger: 'h-[50px]'
                }}
                placeholder="" 
                selectedKeys={new Set([field.value])}
                options={[{ key: 'text', label: 'Text', value: 'text' }, { key: 'choice', label: 'Choice', value: 'choice' }]}
                onChange={(e) => {
                  const value = e.target.value
                  setValue(`questionItems.${index}.type`, value)
                  const optionNum = getValues(`questionItems.${index}.optionNum`)
                  
                  setOptions(optionNum)
                }} 
              />
            )}
          />

          <Controller
            control={control}
            name={`questionItems.${index}.required`}
            defaultValue={false}
            render={({ field }) => (
              <RequiredCheckbox
                {...field}
              />
            )}
          />
          
        </div>

        <div className="mt-[20px] ml-[30px] flex absolute right-0 w-[80px]">
          {
            showAdd ? <button 
              className="!w-[30px] !h-[30px] box-border bg-[#F9F5F3] rounded-full flex justify-center items-center"
              // className="w-[30px] h-[30px] bg-[#F9F5F3] rounded-full flex justify-center items-center"
              onClick={() => onAddItem?.()}
            >
              <i className="fi fi-br-plus text-[15px] h-[18px] text-[#414040]"></i>
            </button>
            : deleteStep ? <PButton 
              size="sm" round className="!w-[80px] !h-[30px] !bg-[#F9F5F3]"
              onClick={() => onDelete?.()}
            >
                Delete
              </PButton> 
            : <button 
              className="w-[30px] h-[30px] bg-[#F9F5F3] rounded-full flex justify-center items-center"
              onClick={() => setDeleteStep(1)}
            >
              <i className="fi fi-br-minus text-[15px] h-[18px] text-[#414040]"></i>
            </button>
          }
          
        </div>
      </div>

      <div className="min-h-[40px]">
        {
          getValues(`questionItems.${index}.type`) === 'choice' ? <>
            <div className="flex justify-center w-[400px] h-[40px] bg-[#F9F5F3] mt-[25px] rounded-3xl">
              <Controller
                control={control}
                name={`questionItems.${index}.optionNum`}
                defaultValue={1}
                render={({ field }) => (
                  <PAdderSubtractor 
                    {...field}
                    label="Option" 
                    className="mr-[30px]" 
                    onChange={(e) => {
                      const value = e.target.value
                      setValue(`questionItems.${index}.optionNum`, value)
                      setOptions(value)
                      // setOptions(value)
                    }}
                  />
                )}
              />
              <Controller
                control={control}
                name={`questionItems.${index}.selectNum`}
                defaultValue={1}
                render={({ field }) => (
                  <PAdderSubtractor 
                    value={field.value}
                    label="Select" 
                    onChange={(e) => {
                      const value = e.target.value
                      if (value > getValues(`questionItems.${index}.optionNum`)) {
                        return
                      }
                      setValue(`questionItems.${index}.selectNum`, value)
                    }}
                  />
                )}
              />
            </div>
            <div className="w-[600px] mt-[10px] grid grid-cols-2 gap-[12.69px]">
              {
                optionFields && optionFields.map((option, optionIndex) => (
                  <Controller
                    key={optionIndex}
                    control={control}
                    name={`questionItems.${index}.options[${optionIndex}]`}
                    defaultValue={option}
                    rules={{
                      required: 'The option can not be empty'
                    }}
                    render={({ field }) => (
                      <PInput 
                        className='!h-[50px]'
                        classNames={{
                          inputWrapper: 'h-full py-1 px-[20px] rounded-[1.25rem] border border-transparent !bg-white'
                        }}
                        aria-labelledby="questionnaire-option"
                        key={`${id}-${index}`}
                        {...field}
                        errorMessage={errors.questionItems?.[index]?.options?.[optionIndex] && errors.questionItems?.[index]?.options?.[optionIndex].message}
                      />
                    )}
                  />
                ))
              }
            </div>
          </> : <></>
        }
        </div> 
    </div>
  )
}

export default QuestionnaireCreateItem
