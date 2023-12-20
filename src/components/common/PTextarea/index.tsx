import { TextAreaProps, Textarea } from "@nextui-org/react"
import { FC } from "react"

interface Props extends TextAreaProps {}

const PTextarea: FC<Props> = (props) => {
  return (
    <Textarea
      classNames={{
        inputWrapper: '!bg-[#F9F6F4] shadow-none'
      }}
      {...props}
    />
  )
}

export default PTextarea
