import { FC, PropsWithChildren } from "react"
import clsx from 'clsx'

interface Props extends PropsWithChildren {
  className?: string
  size?: 'md' | 'sm' | 'xs'
  color?: 'default' | 'rosewater'

  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

const PTag: FC<Props> = (props) => {
  const { 
    children,
    className,
    size = 'md',
    color = 'default',
    onClick
  } = props

  return (
    <div
      className={clsx(
        "h-9 px-2 min-w-[2.25rem] flex-shrink-0 inline-flex justify-center items-center rounded-full bg-white text-neutral-900 font-playfair text-sm leading-tight truncate",
        size === 'sm' && 'h-[22px]',
        size === 'xs' && 'h-[15px] !px-[5px] text-[10px] font-normal',
        color === 'rosewater' && 'bg-[#E1D5CB]',
        className
      )}
      onClick={onClick}
    >
      { children }
    </div>
  )
}

export default PTag
