import { FC, PropsWithChildren } from "react"
import { Modal, ModalBody, ModalContent, ModalFooter, SlotsToClasses } from '@nextui-org/react'

interface Props extends PropsWithChildren {
  className?: string
  classNames?: ModalProps['classNames']

  header?: React.ReactNode
  footer?: React.ReactNode
  isOpen?: boolean
  classNames?: SlotsToClasses<"wrapper" | "base" | "backdrop" | "header"  | "body"  | "footer"  | "closeButton"> | undefined

  onWillCauseClose?: () => void
}

const PModal: FC<Props> = (props) => {
  const { children, footer, isOpen, classNames, onWillCauseClose } = props

  return (
    <Modal
      className={className}
      classNames={{
        base: 'max-w-[520px] p-0 rounded-[30px] shadow-none',
        body: 'pt-7 gap-0',
        backdrop: '!opacity-70',
        ...classNames
      }}
      isOpen={isOpen}
      hideCloseButton
      onClose={onWillCauseClose}
      shouldBlockScroll
    >
      <ModalContent>
        {
          header
          && (
            <ModalHeader>
             { header }
            </ModalHeader>
          )
        }

        <ModalBody>
          { children }
        </ModalBody>

        {
          footer
          && (
            <ModalFooter>
              { footer }
            </ModalFooter>
          )
        }
      </ModalContent>
    </Modal>
  )
}

export default PModal
