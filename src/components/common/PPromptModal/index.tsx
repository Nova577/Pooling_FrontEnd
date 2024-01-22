import { useRef, useImperativeHandle, useState, useEffect } from "react"
import PModal from "../PModal"
import { SlotsToClasses, cn } from '@nextui-org/react'


interface Props {
  footer?: React.ReactNode
  classNames?: SlotsToClasses<"wrapper" | "base" | "backdrop" | "header"  | "body"  | "footer"  | "closeButton"> | undefined
  contentClassName?: string
  onWillCauseClose?: () => void
  content?: string
}
export const prompt: { current: IPPromptRef | null } = { current: null }

interface IPPromptRef {
  show: (params: Props) => void
  close: () => void
}

const PPromptModal = () => {
  const PPromptRef = useRef<IPPromptRef>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [promptInfo, setPromptInfo] = useState<Props>({
    content: '',
  })
  const { footer, classNames, contentClassName, onWillCauseClose, content } = promptInfo

  useEffect(() => {
    prompt.current = PPromptRef.current
  }, [])

  useImperativeHandle(PPromptRef, () => {
    return {
      show: (info: Props) => {
        setPromptInfo(info)
        setIsOpen(true)
      },
      close: () => {
        setIsOpen(false)
      }
    }
  })

  return (
    <PModal
      classNames={classNames}
      isOpen={isOpen} 
      footer={(
        <div className="w-[440px] mx-auto">
          {footer}
        </div>
      )}
      onWillCauseClose={onWillCauseClose}
    >
      <div className={cn(
        'w-[440px] mx-auto',
        !footer && 'pb-[10px]'
      )}>
        <i className="fi fi-rs-cowbell text-[30px] text-[#7A7371] h-[40px]"></i>
        <div className={cn(
          'w-[440px] min-h-[175px] bg-[#F4EEEA] rounded-3xl px-[50px] py-[36px] text-[25px] font-playfair leading-[28px]',
          contentClassName
        )}>
          {content}
        </div>
      </div>
    </PModal>
  )
}

export default PPromptModal
