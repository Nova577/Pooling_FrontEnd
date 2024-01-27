import { FC, PropsWithChildren, useRef } from "react"

interface Props extends PropsWithChildren {
  value?: any
  accept?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const UploadCore: FC<Props> = (props) => {
  const { 
    children,
    accept,
    onChange 
  } = props

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div onClick={handleClick}>
      { children }

      <input ref={fileInputRef} className="hidden" type="file" accept={accept} onChange={onChange} />
    </div>
  )
}

export default UploadCore
