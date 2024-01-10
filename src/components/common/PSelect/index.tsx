import { ComponentProps, ChangeEventHandler, forwardRef } from "react"
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
  classNames?: SlotsToClasses<"description" | "errorMessage" | "label" | "base" | "value" | "mainWrapper" | "trigger" | "innerWrapper" | "selectorIcon" | "spinner" | "listboxWrapper" | "listbox" | "popoverContent" | "helperWrapper"> | undefined
  onSelectionChange?: (keys: OnSelectionChangeKeys) => void
  onChange?: ChangeEventHandler<HTMLSelectElement> | undefined
  selectedKeys?: "all" | Iterable<string> 
  defaultSelectedKeys?: "all" | Iterable<string> 
  selectionMode?: 'single' | 'multiple'
}


const PSelect= forwardRef<HTMLSelectElement, Props>((props, ref) => {
  const {
    label,
    placeholder,
    options,
    classNames,
    selectedKeys,
    onChange,
    onSelectionChange,
    defaultSelectedKeys,
    selectionMode
  } = props

  return (
    <Select
      ref={ref}
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
      selectedKeys={selectedKeys}
      onSelectionChange={onSelectionChange}
      onChange={onChange}
      defaultSelectedKeys={defaultSelectedKeys}
      selectionMode={selectionMode}
      listboxProps={{
        itemClasses: {
          base: [
            "dark:data-[hover=true]:bg-[#F6F2EF]",
            "data-[selectable=true]:focus:bg-[#F6F2EF]",
          ]
        }
      }}
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
})

export default PSelect
