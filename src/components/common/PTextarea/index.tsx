import { TextAreaProps, Textarea } from "@nextui-org/react"
import { FC, forwardRef } from "react"

interface Props extends TextAreaProps {}

const PTextarea: FC<Props> = forwardRef((props, ref) => {
  return (
    <Textarea
      ref={ref}
      classNames={{
        inputWrapper: '!bg-[#F9F6F4] shadow-none'
      }}
      {...props}
    />
  )
})

export default PTextarea
