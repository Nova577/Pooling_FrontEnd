import { forwardRef } from "react";
import { Button, ButtonProps } from '@nextui-org/react'

const PButton = forwardRef<HTMLButtonElement, ButtonProps>(function PButton(props, ref) {
  return (
    <Button ref={ref} {...props}  />
  )
})

export default PButton
