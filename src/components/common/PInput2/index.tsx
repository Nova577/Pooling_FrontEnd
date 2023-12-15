import { Input, InputProps, cn } from '@nextui-org/react'
import { FC } from 'react'

interface Props extends InputProps  {

}

const PInput: FC<Props> = (props) => {
  return (
    <Input
      classNames={{
        base: 'h-[60px]',
        inputWrapper: cn(
          'h-full py-1 px-[20px] rounded-[1.25rem] border border-transparent !bg-[#F6F2EF]',
          'data-[focus=true]:border-[#A6A29F]'
        ),
        input: 'h-[27px] pl-[10px] font-playfair text-xl',
        innerWrapper: 'pb-0',
        label: 'opacity-50 text-neutral-900 text-sm font-bold font-playfair leading-[18px]'
      }}
      {...props}
    />
  )
}

export default PInput
