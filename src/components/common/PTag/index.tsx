import { FC, PropsWithChildren } from "react"
import clsx from 'clsx'

interface Props extends PropsWithChildren {
  className?: string

  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

const PTag: FC<Props> = (props) => {
  const { children, className, onClick } = props

  return (
    <div
      className={clsx(
        "h-9 px-2 min-w-[2.25rem] inline-flex justify-center items-center rounded-full bg-white text-neutral-900 font-playfair text-sm leading-tight",
        className
      )}
      onClick={onClick}
    >
      { children }
    </div>
  )
}

export default PTag
