import { FC } from "react"
import clsx from "clsx"

interface Props {
  className?: string

  items?: {
    key: string
    label: React.ReactNode
  }[]
  activeItemKey?: string
}

const PMenu: FC<Props> = (props) => {
  const { className, items, activeItemKey } = props

  return (
    <ul className={clsx('menu gap-2', className)}>
      {
        items?.map((it) => {
          return (
            <li key={it.key} className="h-14">
              <div
                className={clsx(
                  "flex h-full rounded-[20px] text-[22px] text-[#54514E] font-bold font-playfair leading-7",
                  activeItemKey === it.key && ['!text-neutral-900 !bg-[#F7F2EF]']
                )}
              >
                <span>
                  { it.label }
                </span>
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}

export default PMenu
