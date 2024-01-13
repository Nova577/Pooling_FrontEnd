import { forwardRef } from "react";
import { Button, ButtonProps } from '@nextui-org/react'
import clsx from "clsx";


const PButton = forwardRef<HTMLButtonElement, ButtonProps>(function PButton(props, ref) {
  return (
    <Button 
      ref={ref} 
      {...props} 
      className={clsx(
        "btn bg-white font-playfair font-bold",
        props.size === 'lg' && ['btn-lg', 'h-[60px] px-[40px] text-[35px]'],
        props.className
      )}
    />
  )
})

export default PButton
