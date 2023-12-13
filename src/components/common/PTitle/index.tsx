import { FC, PropsWithChildren } from "react"
import clsx from 'clsx'

interface Props extends PropsWithChildren {
  className?: string
}

const PTitle: FC<Props> = (props) => {
  const { children, className } = props

  return (
    <h2 
      className={
        clsx(
          "opacity-50",
          "text-neutral-900",
          "text-[23px]",
          "font-bold",
          "font-playfair",
          "leading-[30.66px]",
          className
        )
      }
    >
      { children }
    </h2>
  )
}

export default PTitle

