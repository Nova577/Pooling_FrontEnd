import { FC } from "react"
import {RadioGroup, Radio } from "@nextui-org/react";

interface Props {
  options?: {
    key?: string | number
    label: string
    value: string
  }[]

  value?: string
  onValueChange?: (value: string) => void
}

const PRadioRegularGroup: FC<Props> = (props) => {
  const { options, value, onValueChange } = props;

  return (
    <RadioGroup
      label=""
      value={value}
      orientation="horizontal"
      onValueChange={onValueChange}
    >
      {
        options?.map((it) => {
          return (
            <Radio 
              key={it.key ?? it.value} value={it.value} 
              classNames={{
                base: 'mr-[40px]',
                wrapper: '!border-0 bg-white',
                control: 'bg-[#444444]'
              }}
            >
              <span className="text-[21px] color-[#5F5B58] font-playfair">{ it.label }</span>
            </Radio>
          )
        })
      }
    </RadioGroup>
  )
}

export default PRadioRegularGroup

