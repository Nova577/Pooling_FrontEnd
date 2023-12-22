import { FC, useState, useRef } from "react"
import PInput from "@/components/common/PInput2"
import PSelect, { OnSelectionChangeKeys } from "@/components/common/PSelect"
import PAdderSubtractor from '@/components/common/PAdderSubtractor'

interface Props {
  id: string
  title?: string
  type?: string
  
  onChange?: (params: { id: string; type?: string, title?: string }) => void
}

const QuestionnaireCreateItem: FC<Props> = (props) => {
  const { 
    id,
    title='', 
    type='text',
    onChange
  } = props

  const latestType = useRef(type)
  const latestTitle = useRef(type)

  const [titleValue, setTitleValue] = useState<string>('')
  const [typeValue, setTypeValue] = useState<string>('text')

  if (latestType.current !== type) {
    latestType.current = type
    setTypeValue(type)
  }

  if (latestTitle.current !== title) {
    latestTitle.current = title
    setTitleValue(title)
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value || ''
    setTitleValue(value)
    onChange?.({ id, title: value })
  }

  const handleTypeChange = (keys: OnSelectionChangeKeys) => {
    const value = Array.from(keys).join(",")

    setTypeValue(value)
    onChange?.({ id, type: value })
  }

  return (
    <div className="pb-[10px]">
      <div className="flex">
        <div className="w-[600px] mr-[50px]">
          <PInput 
            className='!h-[50px]'
            onChange={handleTitleChange}
            value={titleValue}
          />
        </div>
        <div className="relative">
          <PSelect 
            classNames={{
              base: 'w-[250px]',
              trigger: 'h-[50px]'
            }}
            value={typeValue}
            placeholder="" 
            onSelectionChange={handleTypeChange}
            options={[{ key: 'text', label: 'Text', value: 'text' }, { key: 'choice', label: 'Choice', value: 'choice' }]} 
          />
          <span className="absolute right-0 bottom-[-28px]  flex items-center select-none cursor-pointer">
            <span className="w-[15.68px] h-[15.68px] border-[1px] border-[#CBB6AB]"></span>
            <span className="text-[15px] color-[#141414] font-playfair ml-[7px]">Require</span>
          </span>
        </div>
      </div>

      <div className="min-h-[40px]">
        {
          type === 'choice' ? <>
            <div className="flex justify-center w-[400px] h-[40px] bg-[#F9F5F3] mt-[10px] rounded-3xl">
              <PAdderSubtractor label="Option" className="mr-[30px]" defaultValue={3} />
              <PAdderSubtractor label="Select" defaultValue={1} />
            </div>
            <div className="w-[400px] h-[40px] bg-[#F9F5F3] mt-[10px] rounded-3xl">

            </div>
          </> : <></>
        }
        </div> 
    </div>
  )
}

export default QuestionnaireCreateItem
