import { FC, useState } from "react"
import PInput from "@/components/common/PInput2"
import PSelect, { OnSelectionChangeKeys } from "@/components/common/PSelect"
import PAdderSubtractor from '@/components/common/PAdderSubtractor'
import PButton from "@/components/common/PButton"

export interface dataItemProps {
  title?: string
  type?: string
  id: string
  optionNum?: number
  selectNum?: number
  optionList?: string[]
  required?: boolean
}

interface Props extends dataItemProps {
  onChange?: (params: dataItemProps) => void
  onDelete?: (id: string) => void
}

const QuestionnaireCreateItem: FC<Props> = (props) => {
  const { 
    id,
    title = '', 
    type = 'text',
    optionList = [],
    required,
    onDelete,
    onChange
  } = props

  const [deleteStep, setDeleteStep] = useState(0)

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value || ''
    onChange?.({ id, title: value })
  }

  const handleTypeChange = (keys: OnSelectionChangeKeys) => {
    const value = Array.from(keys).join(",")

    onChange?.({ id, type: value })
  }

  const handleOptionInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value || ''
    
    const newOptionList: string[] = optionList.map((item, originIndex) => {
      return originIndex === index ? value : item
    })

    onChange?.({ id, optionList: newOptionList })
  }

  const handleDelete = () => {
    onDelete?.(id)
  }

  return (
    <div className="pb-[10px]">
      <div className="flex relative">
        <div className="w-[600px] mr-[50px]">
          <PInput 
            className='!h-[50px]'
            onChange={handleTitleChange}
            value={title}
          />
        </div>

        <div className="relative">
          <PSelect 
            classNames={{
              base: 'w-[200px]',
              trigger: 'h-[50px]'
            }}
            value={type}
            placeholder="" 
            onSelectionChange={handleTypeChange}
            options={[{ key: 'text', label: 'Text', value: 'text' }, { key: 'choice', label: 'Choice', value: 'choice' }]} 
          />
          <span className="absolute right-0 bottom-[-28px]  flex items-center select-none cursor-pointer">
            <span 
              className="w-[15.68px] h-[15.68px] border-[1px] border-[#CBB6AB] flex justify-center items-center rounded-sm"
              onClick={() => onChange?.({ id, required: !required })}
            >
              {
                required && <span className="w-[10px] h-[10px] rounded-sm bg-[#CBB6AB]"></span>
              }
              
            </span>
            <span className="text-[15px] color-[#141414] font-playfair ml-[7px]">Require</span>
          </span>
        </div>

        <div className="mt-[20px] ml-[30px] flex absolute right-0 w-[80px]">
          {
            deleteStep ? <PButton 
              size="sm" round className="!w-[80px] !h-[30px] !bg-[#F9F5F3]"
              onClick={() => handleDelete()}
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
          type === 'choice' ? <>
            <div className="flex justify-center w-[400px] h-[40px] bg-[#F9F5F3] mt-[10px] rounded-3xl">
              <PAdderSubtractor 
                label="Option" 
                className="mr-[30px]" 
                defaultValue={3}
                onValueChange={(value: number) => onChange?.({ id, optionNum: value })}
              />
              <PAdderSubtractor label="Select" defaultValue={1} onValueChange={(value: number) => onChange?.({ id, selectNum: value })} />
            </div>
            <div className="w-[600px] mt-[10px] grid grid-cols-2 gap-[12.69px]">
              {
                optionList && optionList.map((item, index) => (
                  <PInput 
                    className='!h-[50px]'
                    classNames={{
                      inputWrapper: 'h-full py-1 px-[20px] rounded-[1.25rem] border border-transparent !bg-white'
                    }}
                    key={index}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOptionInputChange(e, index)}
                    value={item}
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
