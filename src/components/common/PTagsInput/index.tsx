import { FC, useRef } from "react"
import PInput from "../PInput"
import PTag from "../PTag"
import { useBoolean, useClickAway, useUpdateEffect } from "ahooks"

type Value = string[]
interface Props {
  value?: Value
  onChange?: (newValue: Value) => void
}

const initValue = [] as string[]
const TagsInput: FC<Props> = (props) => {
  const { 
    value = initValue,
    onChange
  } = props

  const [isEditing, { setTrue: setIsEditingTrue, setFalse: setIsEditingFalse }]  = useBoolean(false)

  const editingContentRef = useRef<HTMLDivElement>(null)
  const tagInputRef = useRef<HTMLInputElement>(null)

  // When start editing, focus input
  useUpdateEffect(() => {
    if (!isEditing) return

    tagInputRef.current?.focus()
  }, [isEditing])

  useClickAway(() => {
    if (!editingContentRef.current) return

    setIsEditingFalse()

    const inputValue = tagInputRef.current?.value

    if (!inputValue) return

    onChange?.(value.concat(inputValue))
  }, [editingContentRef])

  const handleAddTagButtonClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()

    setIsEditingTrue()
  }

  const handleInputKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter' && e.key !== 'NumpadEnter') return

    setIsEditingFalse()

    const inputValue = (e.target as HTMLInputElement).value

    if (!inputValue) return
    
    onChange?.(value.concat(inputValue))
  }


  return (
    <div className="flex-1 relative">
      <PInput className="border border-black cursor-default" type="text" tabIndex={-1} onFocus={(e) => { e.target.blur() }} />

      <div className="h-full w-full absolute top-0 left-0 pointer-events-none flex items-center ml-3">
        
        <div className="flex gap-[10px] pointer-events-auto">
          {
            value.map((it, i) => {
              return (
                <PTag key={i}>
                  <span className="opacity-50">
                    { it }
                  </span>
                </PTag>
              )
            })
          }

          {
            isEditing
            && (
              <div ref={editingContentRef}>
                <PTag className="cursor-pointer">
                  <PInput ref={tagInputRef} className="!bg-white" size="xs" onKeyUp={handleInputKeyUp} />
                </PTag>
              </div>
            )
          }

          {
            !isEditing
            && (
              <PTag className="cursor-pointer" onClick={handleAddTagButtonClick}>
                <span className="text-base font-['Arial'] -translate-y-1 opacity-50">
                  +
                </span>
              </PTag>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default TagsInput
