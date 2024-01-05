import { FC } from "react"
import { Input, InputProps, cn } from '@nextui-org/react'

interface Props extends InputProps {
  className?: string
}

const PPlainInput: FC<Props> = (props) => {
  const {
    classNames,
    ...otherProps
  } = props

  return (

    <Input
      classNames={{
        base: cn('w-[30px] h-[28px]', classNames?.base),
        inputWrapper: cn(
            'p-0 bg-transparent h-[28px] leading-[28px] min-h-0 !bg-transparent focus-within:!bg-transparent shadow-none !ring-offset-0  !ring-transparent',
            classNames?.innerWrapper
          ),
        input: cn('text-[21px] font-playfair text-center !outline-offset-0', classNames?.input),
      }}
      {...otherProps}
    />
    // <PInput 
    //   classNames={{
    //     base: 'h-[28px]',
    //     inputWrapper: 'p-0 bg-transparent h-[28px] leading-[28px] min-h-0 !bg-transparent focus-within:!bg-transparent shadow-none !ring-offset-0  !ring-transparent ',
    //     input: 'text-[21px] font-playfair text-center !outline-offset-0'
    //   }}
    //   className={cn('w-[30px] h-[27px] bg-transparent outline-0 text-center', className)}
    //   {...otherProps}
    // />
  )
}

export default PPlainInput
