import { Divider, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react"
import { FC, useState } from "react"
import PButton from "../PButton2"
import dayjs from 'dayjs'
import clsx from 'clsx'
import { useBoolean } from "ahooks"

interface Props {
  value?: dayjs.Dayjs
  placeholder?: string
  onChange?: (newValue: dayjs.Dayjs) => void
}

const PMonthPicker: FC<Props> = (props) => {
  const {
    value,
    placeholder = 'Pick a month',
    onChange,
  } = props

  const [isOpen, { toggle: toggleIsOpen, setFalse: setIsOpenFalse }] = useBoolean(false)
  const [currentYear, setCurrentYear] = useState(dayjs().year())

  const handleTriggerClick = () => {
    toggleIsOpen()
  }

  const handlePrevYearIconClick = () => {
    setCurrentYear((prev) => prev - 1)
  }

  const handleNextYearIconClick = () => {
    setCurrentYear((prev) => prev + 1)
  }

  const handleItemClick = (newValue: dayjs.Dayjs) => {
    onChange?.(newValue)
    setIsOpenFalse()
  }

  const handleWillCauseClose = () => {
    setIsOpenFalse()
  }

  return (
    <Popover
      classNames={{
        base: 'w-[360px] opacity-95',
        content: 'shadow-none',
        trigger: '!scale-100'
      }}
      placement="bottom-start"
      offset={0}
      isOpen={isOpen}
      onClose={handleWillCauseClose}
    >
      <PopoverTrigger onClick={handleTriggerClick}>
        <PButton
          className="h-[50px] px-[20px] bg-white text-[25px] font-bold font-playfair leading-[33px] opacity-100" radius="full"
          disableRipple
        >
            {value?.format('MMM YYYY') ?? placeholder}
          </PButton>
      </PopoverTrigger>

      <PopoverContent className="h-[250px] py-[10px]">
        <div className="w-full flex justify-start items-center">
          <div>
            <i className="fi fi-rs-angle-small-left text-neutral-900 opacity-50 cursor-pointer" onClick={handlePrevYearIconClick} />

            <span className="inline-block w-[76px] px-[10px] opacity-50 text-neutral-900 text-[25px] font-bold font-playfair leading-[33px] select-none">{ currentYear }</span>

            <i className="fi fi-rs-angle-small-right text-neutral-900 opacity-50 cursor-pointer" onClick={handleNextYearIconClick} />
          </div>
        </div>

        <Divider className="my-[15px]" />

        <div className="w-full grid grid-cols-3 gap-[15px]">
          {
            new Array(12).fill(0).map((_, index) => {
              const thisDayjs = dayjs().year(currentYear).month(index)

              return (
                <div key={index} className="flex justify-center">
                  <div
                    className={clsx(
                      "w-[60px] h-[30px] rounded-2xl opacity-50 flex items-center justify-center cursor-pointer transition-all text-neutral-900 ",
                      "hover:bg-[#DBC6B9]",
                      value?.year() === thisDayjs.year() && value.month() === thisDayjs.month() && 'bg-[#DBC6B9]'
                    )}
                    onClick={handleItemClick.bind(null, thisDayjs)}
                  >
                    <span className="text-xl font-bold font-playfair leading-[27px]">
                      { thisDayjs.format('MMM') }
                    </span>
                  </div>
                </div>
              )
            })
          }
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default PMonthPicker
