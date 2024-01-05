import { FC, FormEvent } from "react"
import { CheckboxGroup, Checkbox, cn } from "@nextui-org/react";
import styles from './index.module.css'

export type CheckboxChangeProps =  FormEvent<HTMLDivElement> | string[]

interface Props {
  options?: {
    key?: string | number
    label: string
    value: string
  }[]

  value?: string[]
  
  onChange?: (e: CheckboxChangeProps) => void
}


const PCheckboxGroup: FC<Props> = (props) => {
  const { options, value, onChange } = props;

  const Icon = () => {
    return <span 
      className="z-10 opacity-0 group-data-[selected=true]:opacity-100 transition-opacity motion-reduce:transition-none w-[10px] h-[10px] rounded-[3px] bg-[#444444]">
    </span>
  }

  return (
    <CheckboxGroup
      label=""
      value={value}
      orientation="horizontal"
      onChange={onChange}
    >
      {
        options?.map((it) => {
          return (
            <Checkbox 
              key={it.key ?? it.value} value={it.value} 
              icon={Icon}
              color="default"
              classNames={{
                base: cn('mr-[40px]', styles.p_checkbox_group__item),
                wrapper: cn('!border-0 ', styles.p_checkbox_group__item),
              }}
            >
              <span className="text-[21px] color-[#5F5B58] font-playfair">{ it.label }</span>
            </Checkbox>
          )
        })
      }
    </CheckboxGroup>
  )
}

export default PCheckboxGroup

