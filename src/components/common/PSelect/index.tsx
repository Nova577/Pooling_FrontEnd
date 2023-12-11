import { FC } from "react"
import { Select, SelectItem } from '@nextui-org/select'

interface Props {
  label?: string
  placeholder?: string
  options?: {
    key: string
    label: string
    value: string
  }[]
}
const PSelect: FC<Props> = (props) => {
  const { label, placeholder, options } = props

  return (
    <Select
      classNames={{
        trigger: 'h-[3.75rem] rounded-[1.25rem] border border-transparent bg-[#F6F2EF] shadow-none data-[hover=true]:bg-[#F6F2EF] data-[open=true]:border-[#A6A29F]',
        label: 'opacity-50 !text-neutral-900 text-sm font-bold font-playfair leading-[18px]'
      }}
      label={label}
      placeholder={placeholder}
    >
      {
        options?.map((it) => {
          return (
            <SelectItem key={it.key}>
              { it.label }
            </SelectItem>
          )
        // Just pass TS check
        }) ?? []
      }
    </Select>
  )
}

export default PSelect
