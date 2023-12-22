import { FC, ComponentProps } from "react"
import { Select, SelectItem, SlotsToClasses, cn } from '@nextui-org/react'

export type OnSelectionChangeKeys = Parameters<Exclude<ComponentProps<typeof Select>['onSelectionChange'], undefined>>[0]
interface Props {
  label?: string
  placeholder?: string
  options?: {
    key: string
    label: string
    value: string
  }[]
  value?: string
  classNames?: SlotsToClasses<"description" | "errorMessage" | "label" | "base" | "value" | "mainWrapper" | "trigger" | "innerWrapper" | "selectorIcon" | "spinner" | "listboxWrapper" | "listbox" | "popoverContent" | "helperWrapper"> | undefined
  onSelectionChange?: (keys: OnSelectionChangeKeys) => void
}
const PSelect: FC<Props> = (props) => {
  const {
    label,
    placeholder,
    options,
    value = '',
    classNames,
    onSelectionChange
  } = props

  return (
    <Select
      classNames={{
        ...classNames,
        trigger: cn(
          'h-[3.75rem] rounded-[1.25rem] border border-transparent bg-[#F6F2EF] shadow-none data-[hover=true]:bg-[#F6F2EF] data-[open=true]:border-[#A6A29F]',
          classNames?.trigger
        ),
        label: cn(
          'opacity-50 !text-neutral-900 text-sm font-bold font-playfair leading-[18px]',
          classNames?.label
        )
      }}
      label={label}
      placeholder={placeholder}
      selectedKeys={new Set([value])}
      onSelectionChange={onSelectionChange}
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
