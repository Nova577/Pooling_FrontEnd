import { PropsWithChildren, forwardRef, useRef } from "react"

interface Props extends PropsWithChildren {
  value?: File | null
  accept?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const UploadCore = forwardRef<HTMLInputElement, Props>(function UploadCore(props, ref) {
  const { 
    children,
    accept,
    onChange 
  } = props

  const innerRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    innerRef.current?.click()
  }

  return (
    <div onClick={handleClick}>
      { children }

      <input
        ref={r => {
          if (ref) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (ref as any).current = r
          }
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (innerRef as any).current = r
        }}
        className="hidden"
        type="file"
        accept={accept}
        onChange={onChange}
      />
    </div>
  )
})

export default UploadCore
