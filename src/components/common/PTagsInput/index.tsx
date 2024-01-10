import { FC, useRef } from "react"
import PInput from "../PInput"
import PTag from "../PTag"
import { useBoolean, useClickAway, useUpdateEffect } from "ahooks"
import clsx from "clsx"
import styles from './index.module.css'

type Value = string[]

interface Props {
  value?: Value
  disabled?: boolean
  onChange?: (newValue: Value) => void
}

const initValue = [] as string[]
const TagsInput: FC<Props> = (props) => {
  const { 
    value = initValue,
    disabled = false,
    onChange
  } = props

  const [isEditing, { setTrue: setIsEditingTrue, setFalse: setIsEditingFalse }]  = useBoolean(false)

  const latestDisabled = useRef(disabled)
  const editingContentRef = useRef<HTMLDivElement>(null)
  const tagInputRef = useRef<HTMLInputElement>(null)

  if (latestDisabled.current !== disabled) {
    latestDisabled.current = disabled

    if (disabled) {
      setIsEditingFalse()
    }
  }

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

    if(disabled) return

    setIsEditingTrue()
  }

  const handleInputKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter' && e.key !== 'NumpadEnter') return

    setIsEditingFalse()

    const inputValue = (e.target as HTMLInputElement).value

    if (!inputValue) return
    
    onChange?.(value.concat(inputValue))
  }

  const handleDelete = (index: number) => {
    const newValue = value.filter((_, i) => i !== index)
    onChange?.(newValue)
  }

  return (
    <div className="flex-1 relative">
      <PInput className="border border-black cursor-default" type="text" tabIndex={-1} onFocus={(e) => { e.target.blur() }} />

      <div className={clsx(
        "h-full w-full absolute top-0 left-0 pointer-events-none flex items-center ml-3 pl-[5px] pr-[25px]",
      )}>
        
        <div className={clsx("flex h-full gap-[10px] items-center pointer-events-auto  overflow-x-auto box-border",  styles.p_tags_input_box)}>
          {
            value.map((it, i) => {
              return (
                <div key={i} className="relative">
                  <PTag>
                    <span className="opacity-50">
                      # { it }
                    </span>
                    
                  </PTag>
                  {
                    <span 
                      className="absolute right-[-2px] top-[-2px] w-[15px] h-[15px] bg-[#EADED6] rounded-full leading-[10px] text-center cursor-pointer"
                      onClick={() => handleDelete(i)}
                    >
                      <i className="fi fi-bs-cross text-[#ffffff] text-[7px] font-bold"></i>
                    </span>
                  }
                </div>
              )
            })
          }

          {
            isEditing
            && (
              <div ref={editingContentRef}>
                <PTag className="cursor-pointer" >
                  <PInput ref={tagInputRef} className="!bg-white" size="xs" disabled={disabled} onKeyUp={handleInputKeyUp} />
                </PTag>
              </div>
            )
          }

          {
            !isEditing
            && (
              <PTag className={clsx(disabled ? 'cursor-not-allowed' : 'cursor-pointer')} onClick={handleAddTagButtonClick}>
                <span className="text-base font-playfair -translate-y-1 opacity-50">
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
