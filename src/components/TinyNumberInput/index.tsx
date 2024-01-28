import { FC, useRef } from "react"

interface Props {
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const TinyNumberInput: FC<Props> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    inputRef.current?.focus()
  }

  return (
    <div className="relative flex" onClick={handleClick}>
      <input ref={inputRef} className={'w-4 bg-transparent outline-none'} {...props} />

      <div className="absolute top-0">
        __
      </div>
    </div>
  )
}

export default TinyNumberInput
