import { FC, PropsWithChildren } from "react"
import { Modal, ModalBody, ModalContent, ModalFooter } from '@nextui-org/react'

interface Props extends PropsWithChildren {
  footer?: React.ReactNode
  isOpen?: boolean

  onWillCauseClose?: () => void
}

const PModal: FC<Props> = (props) => {
  const { children, footer, isOpen, onWillCauseClose } = props

  return (
    <Modal
      classNames={{
        base: '!mt-40 max-w-[520px] p-0 rounded-[30px] shadow-none',
        body: 'pt-7 gap-0',
        backdrop: 'bg-transparent'
      }}
      isOpen={isOpen}
      hideCloseButton
      onClose={onWillCauseClose}
    >
      <ModalContent>
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
