import { Input, InputProps, cn } from '@nextui-org/react'
import { forwardRef } from 'react'

interface Props extends InputProps  {

}

const PInput = forwardRef<HTMLInputElement, Props>(function PInput (props, ref) {
  const { classNames, ...otherProps } = props

  return (
    <Input
      classNames={{
        base: 'h-[60px]',
        inputWrapper: cn(
          'h-full py-1 px-[20px] rounded-[1.25rem] border border-transparent !bg-[#F6F2EF] shrink-0',
          'data-[focus=true]:border-[#A6A29F]',
          classNames?.inputWrapper
        ),
        input: cn('h-[27px] pl-[10px] font-playfair text-xl', classNames?.input),
        innerWrapper: 'pb-0',
        label: 'opacity-50 text-neutral-900 text-sm font-bold font-playfair leading-[18px]'
      }}
      ref={ref}
      {...otherProps}
    />
  )
})

export default PInput
